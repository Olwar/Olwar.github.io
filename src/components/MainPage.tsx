import React, { useEffect } from "react";
import { NeuroNoise } from "@paper-design/shaders-react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

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
      {/* NeuroNoise shader background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <NeuroNoise
          colorFront="#B8860B"
          colorMid="#0A1628"
          colorBack="#FEFCF8"
          brightness={0.15}
          contrast={0.12}
          speed={0.3}
          scale={1.5}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="elegant-container relative z-10">
        {/* Hero Section */}
        <section className="section-spacing">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-charcoal tracking-tight title-width mx-auto">
                Olli Airola
              </h1>
              <div className="space-y-3">
                <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 font-light tracking-wide">
                  Software Developer
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-charcoal/80 font-light tracking-wide">
                  Psychologist
                </p>
              </div>
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
                  src="/polaroid.png"
                  alt="Olli Airola"
                  className="w-full h-auto rounded-lg shadow-elegant transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Centered Design */}
        <section className="content-section scroll-reveal">
          <div className="space-y-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal text-center">
              Experience
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-12 md:space-y-16">
                <div className="text-center scroll-reveal group">
                  <div className="space-y-3">
                    <div className="w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal">
                      Chief Technology Officer
                    </h3>
                    <p className="text-lg text-navy font-medium">
                      MentalNext
                    </p>
                    <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                      Apr 2025 — Present
                    </p>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="space-y-3">
                    <div className="w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal">
                      AI Research Engineer
                    </h3>
                    <p className="text-lg text-navy font-medium">
                      Illusian Founder Office
                    </p>
                    <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                      Oct 2024 — Present
                    </p>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="space-y-3">
                    <div className="w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal">
                      AI Software Developer & Psychologist
                    </h3>
                    <p className="text-lg text-navy font-medium">
                      Self-employed
                    </p>
                    <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                      Oct 2023 — Present
                    </p>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="space-y-3">
                    <div className="w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal">
                      Data & AI Consultant
                    </h3>
                    <p className="text-lg text-navy font-medium">Codento Oy</p>
                    <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                      Apr 2023 — Oct 2023
                    </p>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="space-y-3">
                    <div className="w-2 h-2 bg-bronze rounded-full mx-auto opacity-60"></div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-charcoal">
                      Psychologist
                    </h3>
                    <p className="text-lg text-navy font-medium">
                      Various Organizations
                    </p>
                    <p className="text-sm text-charcoal/60 font-mono tracking-wide">
                      Jan 2020 — Jun 2023
                    </p>
                    <p className="text-sm text-charcoal/60 italic">
                      4.48/5 client satisfaction rating
                    </p>
                  </div>
                </div>
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
              © 2024 Olli Airola. All rights reserved.
            </p>
            <p className="text-xs text-charcoal/30 font-mono">
              Crafted with intention and attention to detail.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MainPage;
