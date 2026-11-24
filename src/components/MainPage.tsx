import React, { useEffect } from "react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { Plate, SectionHeading } from "./print";
import { Snow } from "./Snow";
import { useCopy, type Lang, type SectionId } from "@/copy";

const sectionIds: SectionId[] = ["about", "experience", "projects", "media", "contact"];

const navLink =
  "label inline-flex min-h-[44px] items-center px-1.5 tracking-[0.06em] hover:bg-foreground hover:text-background sm:px-2 sm:tracking-[0.14em]";

/** Saves the language the reader picked, so `/` does not send them back. */
const remember = (lang: Lang) => {
  try {
    localStorage.setItem("lang", lang);
  } catch {
    // Storage is blocked (private mode): the link still works.
  }
};

const MainPage = () => {
  const c = useCopy();

  useEffect(() => {
    const reveal = (el: Element | null) => el?.classList.add("revealed");
    const sections = document.querySelectorAll(".scroll-reveal");

    // threshold 0: a section reveals as soon as any part of it is on screen.
    // A ratio would never be reached by a section taller than the screen.
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && reveal(e.target)),
      { threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));

    // Keyboard focus and #links must never land on an invisible section.
    const onFocus = (e: FocusEvent) =>
      reveal((e.target as Element).closest(".scroll-reveal"));
    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id && document.getElementById(id);
      if (target) reveal(target.closest(".scroll-reveal"));
    };
    onHash();
    document.addEventListener("focusin", onFocus);
    window.addEventListener("hashchange", onHash);

    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", onFocus);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    // `isolate` keeps the snow canvas (fixed, z -10) above this background
    // and under everything else on the page.
    <div id="top" className="relative isolate min-h-screen bg-background">
      <Snow />
      <a
        href="#main"
        className="ink-button sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        {c.skip}
      </a>

      {/* Masthead */}
      <header className="elegant-container">
        <div className="pt-3 sm:pt-4">
          <nav aria-label={c.nav.label}>
            <ul className="-mx-1.5 grid grid-cols-3 sm:-mx-2 sm:flex sm:justify-between">
              {sectionIds.map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className={navLink}>
                    {c.nav.sections[id]}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={c.nav.other.href}
                  hrefLang={c.nav.other.lang}
                  lang={c.nav.other.lang}
                  onClick={() => remember(c.nav.other.lang)}
                  className={navLink}
                >
                  {c.nav.other.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-1 border-t-[3px] border-foreground" />
        <div className="mt-[3px] border-t border-foreground" />
      </header>

      <main id="main" className="elegant-container">
        {/* Hero */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-8 py-12 md:grid-cols-[minmax(0,1fr)_392px] md:gap-y-10 md:py-16 md:[grid-template-areas:'title_title'_'text_plate'] lg:gap-x-16 lg:gap-y-8 lg:py-20 lg:[grid-template-areas:'title_plate'_'text_plate']">
          <div className="md:[grid-area:title] lg:self-end">
            <p className="label">{c.hero.kicker}</p>
            <h1 className="mt-6 text-[clamp(3.5rem,13vw,7.75rem)] leading-[0.92] tracking-[-0.025em]">
              Olli Airola
            </h1>
          </div>
          <div className="md:[grid-area:text] lg:self-start">
            <p className="max-w-[30ch] font-serif text-[1.375rem] leading-snug lg:text-[1.75rem]">
              {c.hero.line}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="ink-button">
                {c.hero.contact}
              </a>
              <a href="#projects" className="ink-button ink-button-outline">
                {c.hero.projects}
              </a>
            </div>
          </div>
          <Plate
            name="ice"
            figure="1"
            priority
            className="md:self-start md:[grid-area:plate] lg:self-center"
          />
        </section>

        {/* About */}
        <section
          aria-labelledby="about"
          className="scroll-reveal py-12 md:py-20"
        >
          <SectionHeading id="about" number="01">
            {c.headings.about}
          </SectionHeading>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[minmax(0,1fr)_348px] md:gap-10 lg:gap-24">
            <div className="content-width space-y-6 text-lg leading-relaxed lg:text-xl">
              {c.about.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="-mx-5 pr-1.5 min-[388px]:mx-0 min-[388px]:pr-0">
            <figure className="relative mx-auto w-fit max-w-full min-[388px]:mx-0">
              <div className="dither-shadow">
                <div className="ink-card p-3">
                  <img
                    src="/art/portrait.png"
                    alt={c.about.portraitAlt}
                    width={314}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="pixelated art-fluid-portrait mx-auto box-content block h-auto w-[314px] max-w-[calc(100%-2px)] border border-foreground"
                  />
                  <figcaption lang="en" className="whitespace-nowrap pb-2 pt-5 text-center font-mono text-[0.8125rem] tracking-[0.12em] sm:text-sm sm:tracking-[0.2em]">
                    BUILD BUILD BUILD BUILD
                  </figcaption>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="dither-tape absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2"
              />
            </figure>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          aria-labelledby="experience"
          className="scroll-reveal py-12 md:py-20"
        >
          <SectionHeading id="experience" number="02">
            {c.headings.experience}
          </SectionHeading>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[392px_minmax(0,1fr)] md:gap-8 lg:gap-20">
            <ol className="md:col-start-2 md:row-start-1 md:border-t md:border-foreground">
              {c.experience.map((item) => (
                <li
                  key={item.period}
                  className="grid gap-2 border-b border-foreground py-6 sm:grid-cols-[12.5rem_minmax(0,1fr)] sm:gap-8 md:grid-cols-1 md:gap-2 md:py-7 lg:grid-cols-[12.5rem_minmax(0,1fr)] lg:gap-8"
                >
                  <p className="label pt-1.5">{item.period}</p>
                  <div>
                    <h3 className="text-2xl md:text-[1.75rem]">{item.role}</h3>
                    {item.company && (
                      <p className="mt-1 text-lg">{item.company}</p>
                    )}
                    {item.note && (
                      <p className="mt-2 font-serif text-base italic">
                        {item.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
            <Plate
              name="patient"
              figure="2"
              className="sticky-when-tall md:col-start-1 md:row-start-1"
            />
          </div>
        </section>

        <ProjectsSection />
        <MediaSection />
        <ContactSection />
      </main>

      <footer className="elegant-container mt-8">
        <div className="border-t border-foreground" />
        <div className="mt-[3px] border-t-[3px] border-foreground" />
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8">
          <p className="label">
            © {new Date().getFullYear()} Olli Airola · Helsinki
          </p>
          <a
            href="#top"
            className="label -mx-1 -my-3 inline-flex min-h-[44px] items-center px-1 hover:bg-foreground hover:text-background"
          >
            {c.backToTop}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
