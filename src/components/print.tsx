import React, { useEffect, useState } from "react";

/** Numbered section heading with a hard rule, like a chapter in a printed book. */
export const SectionHeading = ({
  id,
  number,
  children,
}: {
  id: string;
  number: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10 md:mb-14">
    <div className="flex items-baseline gap-4 md:gap-6">
      <span
        className="shrink-0 font-serif text-2xl italic md:text-3xl lg:text-4xl"
        aria-hidden="true"
      >
        {number}
      </span>
      <h2 id={id} className="text-4xl md:text-5xl lg:text-6xl">
        {children}
      </h2>
    </div>
    <div className="mt-5 border-t border-foreground" />
  </div>
);

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
};

/**
 * A 1-bit illustration as a numbered plate. The art is 360 x 360 and shows
 * at exactly 360 CSS px from a 360 px screen up, so one dot is one CSS pixel,
 * like the dot patterns in the rest of the page. The loop plays unless the reader asks
 * for reduced motion or presses Pause; then the first frame shows.
 */
export const Plate = ({
  name,
  figure,
  caption,
  alt,
  priority = false,
  className = "",
}: {
  name: string;
  figure: string;
  caption: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) => {
  const reduced = useReducedMotion();
  const [choice, setChoice] = useState<"auto" | "play" | "pause">("auto");
  const playing = choice === "auto" ? !reduced : choice === "play";
  const still = `/art/${name}.png`;
  const loop = `/art/${name}.gif`;

  const img = (src: string) => (
    <img
      src={src}
      alt={alt}
      width={360}
      height={360}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchpriority: "high" } : {})}
      className="pixelated art-fluid block h-auto w-[360px] max-w-full"
    />
  );

  return (
    // The frame fills its column and the art sits in its centre at 1:1, like
    // a print in a paper mount. Below 440 px the plate is a full-width band
    // (rules above and below, no side borders or shadow), so a 360 px screen
    // still shows the art at exactly 360 px.
    <div className={`plate -mx-5 min-[440px]:mx-0 ${className}`}>
      <figure>
        <div className="dither-shadow">
          <div className="ink-card flex justify-center border-x-0 py-3 min-[440px]:border-x min-[440px]:px-3">
            {choice === "auto" ? (
              // Before hydration and until the reader chooses, the browser
              // picks the still for reduced motion on its own.
              <picture>
                <source srcSet={still} media="(prefers-reduced-motion: reduce)" />
                {img(loop)}
              </picture>
            ) : (
              img(playing ? loop : still)
            )}
          </div>
        </div>
        <figcaption className="mt-4 flex items-start justify-between gap-4 px-5 text-sm leading-snug min-[440px]:px-0">
          <span className="flex gap-3 pt-3">
            <span className="label shrink-0 pt-[0.15rem]">Fig. {figure}</span>
            <span className="font-serif italic [text-wrap:balance]">{caption}</span>
          </span>
          <button
            type="button"
            onClick={() => setChoice(playing ? "pause" : "play")}
            aria-label={`${playing ? "Pause" : "Play"} the animation: ${caption}`}
            className="label -mr-2 inline-flex min-h-[44px] shrink-0 items-center px-2 hover:bg-foreground hover:text-background"
          >
            {playing ? "Pause" : "Play"}
          </button>
        </figcaption>
      </figure>
    </div>
  );
};
