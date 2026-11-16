import React, { useEffect, useRef } from "react";

const INK = "#1A1A1A";
// The art GIFs play at 12 frames a second; the snow moves at the same pace,
// and like the snow in Fig. 1 it falls 2 or 3 whole pixels a frame.
const FPS = 12;
// One flake for this many CSS px² of page.
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
}

/**
 * Ink snow from Fig. 1 that falls down the whole page, behind everything.
 * Each dot is one CSS pixel (whole screen pixels) of the page colour #1A1A1A,
 * like the dots in the art. Flakes are not drawn over lines of text, so they
 * seem to pass behind the words, and cards and plates hide them with their
 * paper.
 *
 * The flakes live in page coordinates and scroll with the page; the canvas is
 * only as big as the screen and draws the flakes that are on it.
 *
 * Readers who ask for reduced motion see no snow (and the art as stills).
 */
export const Snow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const page = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !page || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let flakes: Flake[] = [];
    // Lines of text as [left, top, right, bottom] in page CSS px.
    let text: number[][] = [];
    // Page size and screen size in CSS px, canvas pixels per CSS px, and one
    // dot in canvas pixels.
    let PW = 0;
    let PH = 0;
    let VW = 0;
    let VH = 0;
    let K = 0;
    let dot = 1;
    let t = 0;
    let raf = 0;
    let timer = 0;
    let last = 0;
    let paint = 0;
    let settle = 0;

    const place = (f: Flake, anywhere: boolean) => {
      f.x = Math.random() * PW;
      f.y = anywhere
        ? Math.floor(Math.random() * PH)
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
        },
        true
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = INK;
      // Where the top of the page is on the screen.
      const top = page.getBoundingClientRect().top;
      const near = text.filter(([, tp, , b]) => b + top > 0 && tp + top < VH);
      for (const f of flakes) {
        const y = f.y + top;
        if (y < -f.h || y > VH) continue;
        const x = Math.round(f.x);
        if (
          near.some(
            ([l, tp, r, b]) =>
              x + f.w > l && x < r && f.y + f.h > tp && f.y < b
          )
        )
          continue;
        ctx.fillRect(
          Math.round(x * K),
          Math.round(y * K),
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
        if (f.x > PW) f.x -= PW + 2;
        if (f.x < -2) f.x += PW + 2;
        if (f.y > PH) place(f, false);
      }
    };

    const measure = () => {
      const origin = page.getBoundingClientRect();
      const walker = document.createTreeWalker(page, NodeFilter.SHOW_TEXT);
      const range = document.createRange();
      const m = TEXT_MARGIN;
      text = [];
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (!n.textContent?.trim()) continue;
        range.selectNodeContents(n);
        for (const r of range.getClientRects()) {
          if (r.width < 2) continue;
          const left = r.left - origin.left;
          const top = r.top - origin.top;
          text.push([left - m, top - m, left + r.width + m, top + r.height + m]);
        }
      }
    };

    const moving = () => !reduced.matches;

    // At a whole pixel ratio (1x, 2x, 3x) the canvas has one pixel for each
    // CSS pixel and `pixelated` scales it up exactly. At other ratios (1.25x,
    // 2.625x) a scale could blend ink into paper, so the canvas then has one
    // pixel for each screen pixel and is not scaled at all.
    const layout = () => {
      const vw = document.documentElement.clientWidth;
      const vh = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      const k = Number.isInteger(dpr) ? 1 : dpr;
      if (vw !== VW || vh !== VH || k !== K) {
        VW = vw;
        VH = vh;
        K = k;
        dot = Math.max(1, Math.round(K));
        canvas.width = Math.floor(VW * K);
        canvas.height = Math.floor(VH * K);
        canvas.style.width = `${canvas.width / K}px`;
        canvas.style.height = `${canvas.height / K}px`;
      }

      const box = page.getBoundingClientRect();
      const pw = box.width;
      const ph = Math.round(box.height);
      if (pw !== PW || ph !== PH) {
        const first = PW === 0 || PH === 0;
        const sx = first ? 1 : pw / PW;
        const sy = first ? 1 : ph / PH;
        PW = pw;
        PH = ph;
        const count = Math.round((PW * PH) / AREA_PER_FLAKE);
        if (first) flakes = Array.from({ length: count }, make);
        else {
          // Keep the flakes where they are, so a resize does not scatter them.
          for (const f of flakes) {
            f.x *= sx;
            f.y = Math.round(f.y * sy);
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
      cancelAnimationFrame(paint);
      clearTimeout(timer);
      raf = 0;
      paint = 0;
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

    // The page moves at the screen's frame rate while it scrolls, so the
    // flakes are drawn again at once; they move on only 12 times a second.
    // A sticky figure moves its caption while the page scrolls, so the lines
    // of text are found again when the scrolling stops.
    const onScroll = () => {
      if (!moving()) return;
      if (!paint)
        paint = requestAnimationFrame(() => {
          paint = 0;
          draw();
        });
      clearTimeout(settle);
      settle = window.setTimeout(measure, 150);
    };

    // Sections slide 20 px up when they appear, which moves their text.
    const onReveal = (e: TransitionEvent) => {
      if ((e.target as Element).classList?.contains("scroll-reveal")) measure();
    };

    layout();
    sync();
    // The web fonts move the lines of text when they arrive.
    document.fonts?.ready.then(measure);
    const resize = new ResizeObserver(layout);
    resize.observe(page);
    window.addEventListener("resize", layout);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("transitionend", onReveal);
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
      clearTimeout(settle);
      resize.disconnect();
      window.removeEventListener("resize", layout);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("transitionend", onReveal);
      reduced.removeEventListener("change", sync);
      ratio?.removeEventListener("change", onRatio);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pixelated pointer-events-none fixed left-0 top-0 -z-10 h-0 w-0"
    />
  );
};
