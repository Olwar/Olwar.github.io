import React, { useEffect, useRef } from "react";

const INK = "#1A1A1A";
// The art GIFs play at 12 frames a second; the snow moves at the same pace,
// and like the snow in Fig. 1 it falls 2 or 3 whole pixels a frame.
const FPS = 12;
// One flake for this many CSS px² of page, before the snow thins out.
const AREA_PER_FLAKE = 3600;
// Wind to the right, the way the scarf blows in Fig. 1 (CSS px a second).
const WIND = 3;
// Clear paper kept around each line of text, so no flake touches a letter.
const TEXT_MARGIN = 4;

interface Flake {
  x: number;
  y: number;
  w: number;
  h: number;
  fall: number;
  sway: number;
  period: number;
  phase: number;
  melt: number;
}

/**
 * Ink snow from Fig. 1 that falls behind the masthead and the hero. Each dot
 * is one CSS pixel (whole screen pixels) of the page colour #1A1A1A, like the
 * dots in the art. The
 * snow thins out towards the end of the hero because each flake melts at its
 * own depth (a fade made of fewer dots, not of lighter ones). Flakes are not
 * drawn over lines of text, so they seem to pass behind the words.
 *
 * Readers who ask for reduced motion see no page snow (and Fig. 1 as a
 * still), the same as for the art.
 */
export const Snow = ({
  until,
}: {
  /** The snow covers the page from the top down to the end of this element. */
  until: React.RefObject<HTMLElement>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const area = until.current;
    const box = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !area || !box || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let onScreen = true;
    let flakes: Flake[] = [];
    // Lines of text as [left, top, right, bottom] in canvas pixels.
    let text: number[][] = [];
    // Size in CSS px, canvas pixels per CSS px, and one dot in canvas pixels.
    let W = 0;
    let H = 0;
    let K = 0;
    let dot = 1;
    let t = 0;
    let raf = 0;
    let timer = 0;
    let last = 0;

    const place = (f: Flake, anywhere: boolean) => {
      f.melt = H * (0.3 + 0.7 * Math.random());
      f.x = Math.random() * W;
      f.y = anywhere
        ? Math.floor(Math.random() * f.melt)
        : -f.h - Math.floor(Math.random() * 24);
      return f;
    };

    const make = () => {
      const r = Math.random();
      const [w, h] = r < 0.75 ? [1, 1] : r < 0.95 ? [1, 2] : [2, 2];
      return place(
        {
          x: 0,
          y: 0,
          w,
          h,
          fall: Math.random() < 0.5 ? 2 : 3,
          sway: 1 + Math.random() * 2,
          period: 1.5 + Math.random() * 2.5,
          phase: Math.random() * Math.PI * 2,
          melt: 0,
        },
        true
      );
    };

    const behindText = (x: number, y: number, w: number, h: number) =>
      text.some(([l, tp, r, b]) => x + w > l && x < r && y + h > tp && y < b);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = INK;
      for (const f of flakes) {
        const x = Math.round(f.x);
        if (behindText(x, f.y, f.w, f.h)) continue;
        ctx.fillRect(
          Math.round(x * K),
          Math.round(f.y * K),
          f.w * dot,
          f.h * dot
        );
      }
    };

    const step = () => {
      t += 1 / FPS;
      for (const f of flakes) {
        f.y += f.fall;
        f.x += (WIND + f.sway * Math.cos(t / f.period + f.phase)) / FPS;
        if (f.x > W) f.x -= W + 2;
        if (f.x < -2) f.x += W + 2;
        if (f.y > f.melt) place(f, false);
      }
    };

    const measure = () => {
      const origin = box.getBoundingClientRect();
      const walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      const m = TEXT_MARGIN;
      text = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent?.trim()) continue;
        range.selectNodeContents(n);
        for (const r of range.getClientRects()) {
          const top = r.top - origin.top;
          if (r.width < 2 || top > H) continue;
          const left = r.left - origin.left;
          text.push([left - m, top - m, left + r.width + m, top + r.height + m]);
        }
      }
    };

    const moving = () => onScreen && !reduced.matches;

    // At a whole pixel ratio (1x, 2x, 3x) the canvas has one pixel for each
    // CSS pixel and `pixelated` scales it up exactly. At other ratios (1.25x,
    // 2.625x) a scale could blend ink into paper, so the canvas then has one
    // pixel for each screen pixel and is not scaled at all.
    const layout = () => {
      const w = box.getBoundingClientRect().width;
      const h = Math.max(
        0,
        Math.round(
          area.getBoundingClientRect().bottom - box.getBoundingClientRect().top
        )
      );
      const dpr = window.devicePixelRatio || 1;
      const k = Number.isInteger(dpr) ? 1 : dpr;
      if (w !== W || h !== H || k !== K) {
        const first = W === 0 || H === 0;
        const sx = first ? 1 : w / W;
        const sy = first ? 1 : h / H;
        W = w;
        H = h;
        K = k;
        dot = Math.max(1, Math.round(K));
        canvas.width = Math.floor(W * K);
        canvas.height = Math.floor(H * K);
        canvas.style.width = `${canvas.width / K}px`;
        canvas.style.height = `${canvas.height / K}px`;
        const count = Math.round((W * H) / AREA_PER_FLAKE);
        if (first) flakes = Array.from({ length: count }, make);
        else {
          // Keep the flakes where they are, so a resize does not scatter them.
          for (const f of flakes) {
            f.x *= sx;
            f.y = Math.round(f.y * sy);
            f.melt *= sy;
          }
          flakes.length = Math.min(flakes.length, count);
          while (flakes.length < count) flakes.push(make());
        }
      }
      measure();
      if (moving()) draw();
    };

    const frame = (now: number) => {
      raf = 0;
      if (now - last < 1000 / FPS - 4) {
        raf = requestAnimationFrame(frame);
        return;
      }
      last = now;
      step();
      draw();
      // Sleep through the screen frames in between instead of waking for
      // each one (5 to 10 of them per snow frame), then wait for the next.
      timer = window.setTimeout(() => {
        timer = 0;
        raf = requestAnimationFrame(frame);
      }, 1000 / FPS - 20);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      raf = 0;
      timer = 0;
    };

    // Still snow reads as specks on the paper, so reduced motion hides it.
    const sync = () => {
      const running = raf !== 0 || timer !== 0;
      if (moving() && !running) {
        draw();
        raf = requestAnimationFrame(frame);
      }
      if (!moving() && running) {
        stop();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    layout();
    sync();
    // The web fonts move the lines of text when they arrive.
    document.fonts?.ready.then(measure);
    const resize = new ResizeObserver(layout);
    resize.observe(box);
    resize.observe(area);
    // No work while the hero is off the screen.
    const visible = new IntersectionObserver((entries) => {
      onScreen = entries[entries.length - 1].isIntersecting;
      sync();
    });
    visible.observe(canvas);
    reduced.addEventListener("change", sync);
    // Moving the window to a screen with another pixel ratio. A query
    // matches one ratio only, so each change starts a query for the new one.
    let ratio: MediaQueryList | null = null;
    const onRatio = () => {
      layout();
      watchRatio();
    };
    const watchRatio = () => {
      ratio?.removeEventListener("change", onRatio);
      ratio = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      ratio.addEventListener("change", onRatio);
    };
    watchRatio();

    return () => {
      stop();
      resize.disconnect();
      visible.disconnect();
      reduced.removeEventListener("change", sync);
      ratio?.removeEventListener("change", onRatio);
    };
  }, [until]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pixelated pointer-events-none absolute left-0 top-0 -z-10 h-0 w-full"
    />
  );
};
