import React from "react";
import { useCopy, type PlateName } from "@/copy";

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

/**
 * A 1-bit illustration as a numbered plate. The art is 360 x 360 and shows
 * at exactly 360 CSS px from a 360 px screen up, so one dot is one CSS pixel,
 * like the dot patterns in the rest of the page. The loop plays; readers who
 * ask for reduced motion get the first frame as a still. The caption and
 * the alt text come from copy.tsx, in the language of the page.
 */
export const Plate = ({
  name,
  figure,
  priority = false,
  className = "",
}: {
  name: PlateName;
  figure: string;
  priority?: boolean;
  className?: string;
}) => {
  const c = useCopy();
  const { caption, alt } = c.plates[name];
  return (
  // The frame fills its column and the art sits in its centre at 1:1, like
  // a print in a paper mount. Below 440 px the plate is a full-width band
  // (rules above and below, no side borders or shadow), so a 360 px screen
  // still shows the art at exactly 360 px.
  <div className={`plate -mx-5 min-[440px]:mx-0 ${className}`}>
    <figure>
      <div className="dither-shadow">
        <div className="ink-card flex justify-center border-x-0 py-3 min-[440px]:border-x min-[440px]:px-3">
          <picture>
            <source
              srcSet={`/art/${name}.png`}
              media="(prefers-reduced-motion: reduce)"
            />
            <img
              src={`/art/${name}.gif`}
              alt={alt}
              width={360}
              height={360}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              {...(priority ? { fetchpriority: "high" } : {})}
              className="pixelated art-fluid block h-auto w-[360px] max-w-full"
            />
          </picture>
        </div>
      </div>
      <figcaption className="mt-4 flex gap-3 px-5 text-sm leading-snug min-[440px]:px-0">
        <span className="label shrink-0 pt-[0.15rem]">
          {c.fig} {figure}
        </span>
        <span className="font-serif italic [text-wrap:balance]">{caption}</span>
      </figcaption>
    </figure>
  </div>
  );
};
