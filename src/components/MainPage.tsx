import React, { useEffect } from "react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const experience = [
  {
    role: "Chief Technology Officer",
    company: "SocialNext",
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
    note: "Psychological assessments, AI consulting, and lectures",
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

const MainPage = () => {
  useEffect(() => {
    // Sophisticated scroll reveal implementation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal");
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-cream relative">
      <div className="elegant-container relative z-10">
        {/* Hero Section */}
        <section className="section-spacing">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-charcoal tracking-tight title-width mx-auto">
                Olli Airola
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 font-light tracking-wide">
                Psychologist &amp; AI Research Engineer
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="content-section scroll-reveal">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-8">
              <div className="space-y-8">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal">
                  About
                </h2>
                <div className="space-y-6 content-width">
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal/80">
                    I'm Olli Airola, a psychologist (M.Psych.) and AI research
                    engineer based in Helsinki, Finland. I created SocialHuman,
                    the human-only social network, and I build AI tools for
                    mental health, such as Sekasin-tekoälyapuri, Vanhemmuuden
                    tekoälyapuri, and OP Päävalmentaja. I also write Tekoälyn
                    Huipulla, one of the biggest AI newsletters in Finland.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal/80">
                    Combining artificial intelligence and psychology to deepen
                    our understanding of how technology can enhance human
                    potential.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-charcoal/80">
                    My approach to AI development is grounded in both technical
                    expertise and a deep understanding of human psychology,
                    ensuring technology serves humanity meaningfully.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 scroll-reveal">
              <div className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                <img
                  src="/polaroid.webp"
                  alt="Olli Airola, psychologist and AI research engineer, in a polaroid photo"
                  width={1080}
                  height={1350}
                  className="w-full h-auto drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Horizontal timeline */}
        <section className="content-section scroll-reveal">
          <div className="space-y-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal text-center">
              Experience
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-6">
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-[3.5px] left-[calc(10%-0.6rem)] right-[calc(10%-0.6rem)] h-px bg-bronze/30"
                ></div>
                {experience.map((item) => (
                  <div key={item.role} className="text-center scroll-reveal group">
                    <div className="space-y-3">
                      <div className="relative w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                      <h3 className="text-xl md:text-2xl lg:text-xl font-serif font-medium text-charcoal">
                        {item.role}
                      </h3>
                      {item.company && (
                        <p className="text-lg lg:text-base text-navy font-medium">
                          {item.company}
                        </p>
                      )}
                      <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                        {item.period}
                      </p>
                      {item.note && (
                        <p className="text-sm text-charcoal/60 italic">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tighter spacing for content flow */}
        <div className="scroll-reveal">
          <MediaSection />
        </div>

        <div className="scroll-reveal">
          <ProjectsSection />
        </div>

        <div className="scroll-reveal">
          <ContactSection />
        </div>

        {/* Sophisticated Footer */}
        <footer className="py-12 text-center border-t border-border/50 scroll-reveal">
          <div className="space-y-4">
            <p className="text-sm text-charcoal/40 font-mono tracking-wider">
              © {new Date().getFullYear()} Olli Airola. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MainPage;
