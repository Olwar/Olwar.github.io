import React, { useEffect, useRef } from "react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import { Plate, SectionHeading } from "./print";
import { Snow } from "./Snow";

const experience = [
  {
    role: "Chief Technology Officer",
    company: "Jollido",
    period: "Apr 2025 — Present",
  },
  {
    role: "AI Research Engineer",
    company: "Illusian Founder Office",
    period: "Oct 2024 — Present",
  },
  {
    role: "Solopreneur",
    period: "Oct 2023 — Present",
    note: "Software projects, AI consulting, lectures, and psychological assessments",
  },
  {
    role: "Data & AI Consultant",
    company: "Codento Oy",
    period: "Apr 2023 — Oct 2023",
  },
  {
    role: "Psychologist",
    company: "Various Organizations",
    period: "Jan 2020 — Jun 2023",
    note: "4.48/5 client satisfaction rating",
  },
];

const sections = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#media", label: "Media" },
  { href: "#contact", label: "Contact" },
];

const MainPage = () => {
  const hero = useRef<HTMLElement>(null);

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
    // `isolate` keeps the snow canvas (z -10) above this background and
    // under everything else on the page.
    <div id="top" className="relative isolate min-h-screen bg-background">
      <Snow until={hero} />
      <a
        href="#main"
        className="ink-button sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      {/* Masthead */}
      <header className="elegant-container">
        <div className="pt-3 sm:pt-4">
          <nav aria-label="Sections">
            <ul className="-mx-1.5 grid grid-cols-3 min-[360px]:flex min-[360px]:justify-between sm:-mx-2">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="label inline-flex min-h-[44px] items-center px-1.5 tracking-[0.06em] hover:bg-foreground hover:text-background sm:px-2 sm:tracking-[0.14em]"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-1 border-t-[3px] border-foreground" />
        <div className="mt-[3px] border-t border-foreground" />
      </header>

      <main id="main" className="elegant-container">
        {/* Hero */}
        <section
          ref={hero}
          className="grid grid-cols-1 gap-x-8 gap-y-8 py-12 md:grid-cols-[minmax(0,1fr)_392px] md:gap-y-10 md:py-16 md:[grid-template-areas:'title_title'_'text_plate'] lg:gap-x-16 lg:gap-y-8 lg:py-20 lg:[grid-template-areas:'title_plate'_'text_plate']">
          <div className="md:[grid-area:title] lg:self-end">
            <p className="label">Psychologist &amp; AI Research Engineer</p>
            <h1 className="mt-6 text-[clamp(3.5rem,13vw,7.75rem)] leading-[0.92] tracking-[-0.025em]">
              Olli Airola
            </h1>
          </div>
          <div className="md:[grid-area:text] lg:self-start">
            <p className="max-w-[30ch] font-serif text-[1.375rem] leading-snug lg:text-[1.75rem]">
              Combining artificial intelligence and psychology to deepen our
              understanding of how technology can enhance human potential.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="ink-button">
                Get in touch
              </a>
              <a href="#projects" className="ink-button ink-button-outline">
                See projects
              </a>
            </div>
          </div>
          <Plate
            name="ice"
            figure="1"
            caption="Helsinki, seen from the frozen sea."
            alt="A lone figure in a long coat stands on the sea ice, looking at the Helsinki skyline and its domed cathedral while snow falls."
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
            About
          </SectionHeading>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[minmax(0,1fr)_348px] md:gap-10 lg:gap-24">
            <div className="content-width space-y-6 text-lg leading-relaxed lg:text-xl">
              <p>
                I'm Olli Airola, a psychologist (M.Psych.) and AI research
                engineer based in Helsinki, Finland. I created SocialHuman, the
                human-only social network, and I build AI tools for mental
                health, such as <span lang="fi">Sekasin-tekoälyapuri</span>,{" "}
                <span lang="fi">Vanhemmuuden tekoälyapuri</span>, and{" "}
                <span lang="fi">OP Päävalmentaja</span>. I also write{" "}
                <span lang="fi">Tekoälyn Huipulla</span>, one of the biggest AI
                newsletters in Finland.
              </p>
              <p>
                My approach to AI development is grounded in both technical
                expertise and a deep understanding of human psychology,
                ensuring technology serves humanity meaningfully.
              </p>
            </div>

            <div className="-mx-5 pr-1.5 min-[388px]:mx-0 min-[388px]:pr-0">
            <figure className="relative mx-auto w-fit max-w-full min-[388px]:mx-0">
              <div className="dither-shadow">
                <div className="ink-card p-3">
                  <img
                    src="/art/portrait.png"
                    alt="Olli Airola in a cap, leaning on a wooden railing outdoors."
                    width={314}
                    height={350}
                    loading="lazy"
                    decoding="async"
                    className="pixelated art-fluid-portrait mx-auto box-content block h-auto w-[314px] max-w-[calc(100%-2px)] border border-foreground"
                  />
                  <figcaption className="whitespace-nowrap pb-2 pt-5 text-center font-mono text-[0.8125rem] tracking-[0.12em] sm:text-sm sm:tracking-[0.2em]">
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
            Experience
          </SectionHeading>
          <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-[392px_minmax(0,1fr)] md:gap-8 lg:gap-20">
            <ol className="md:col-start-2 md:row-start-1 md:border-t md:border-foreground">
              {experience.map((item) => (
                <li
                  key={item.role}
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
              caption="The patient."
              alt="A small robot lies on a therapist's couch while a man in a cap sits in an armchair and takes notes."
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
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
