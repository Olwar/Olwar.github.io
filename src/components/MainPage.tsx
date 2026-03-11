import React, { useEffect } from "react";
import { NeuroNoise } from "@paper-design/shaders-react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MainPage = () => {
  useEffect(() => {
    // Cyberpunk scroll reveal implementation
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
    <main className="min-h-screen bg-void relative overflow-hidden">
      {/* NeuroNoise shader background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <NeuroNoise
          colorFront="#ff2a6d"
          colorMid="#a64dff"
          colorBack="#07070d"
          brightness={0.05}
          contrast={0.3}
          speed={0.3}
          scale={1.5}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      
      {/* Animated digital rain */}
      <div className="fixed inset-0 animate-rain opacity-20 pointer-events-none z-0"></div>
      
      {/* Vignette overlay */}
      <div className="fixed inset-0 bg-vignette pointer-events-none z-10"></div>
      
      <div className="cyber-container relative z-20">
        {/* Hero Section with neon glow */}
        <section className="section-spacing relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-violet/20 to-transparent blur-3xl pointer-events-none"></div>
          
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="font-sans text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight title-width mx-auto relative">
                <span className="bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent">
                  Olli Airola
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent blur-3xl opacity-40">
                  Olli Airola
                </span>
              </h1>
              <div className="space-y-3">
                <p className="text-xl md:text-2xl lg:text-3xl text-pink font-medium tracking-wide">
                  <span className="text-glow-magenta">Software Developer</span>
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-teal font-medium tracking-wide">
                  <span className="text-glow-teal">Psychologist</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with cyberpunk styling */}
        <section className="content-section scroll-reveal relative">
          <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
            <div className="space-y-8">
              <div className="space-y-8">
                <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-violet to-teal bg-clip-text text-transparent">
                    About
                  </span>
                </h2>
                <div className="space-y-6 content-width">
                  <p className="text-lg md:text-xl leading-relaxed text-text">
                    Combining <span className="text-violet font-semibold">artificial intelligence</span> and <span className="text-teal font-semibold">psychology</span> to deepen
                    our understanding of how technology can enhance human
                    potential.
                  </p>
                  <p className="text-lg md:text-xl leading-relaxed text-text">
                    My approach to AI development is grounded in both technical
                    expertise and a deep understanding of human psychology,
                    ensuring technology serves humanity meaningfully.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 scroll-reveal">
              <div className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto relative group">
                {/* Neon frame glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-magenta via-violet to-indigo rounded-xl opacity-40 blur-xl group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <img
                  src="/polaroid_retro_anime.jpeg"
                  alt="Olli Airola"
                  className="relative w-full h-auto rounded-xl border-2 border-violet/30 shadow-neon-violet transition-all duration-500 group-hover:scale-105 group-hover:border-magenta/50"
                  loading="lazy"
                />
                
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-crt-scanlines pointer-events-none opacity-20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Cyberpunk Timeline */}
        <section className="content-section scroll-reveal relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-magenta/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-16">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              <span className="bg-gradient-to-r from-magenta to-violet bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                <div className="text-center scroll-reveal group">
                  <div className="cyber-card p-6 hover:shadow-neon-magenta transition-all duration-300">
                    <div className="space-y-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-magenta to-violet rounded-full mx-auto animate-pulse shadow-neon-magenta"></div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-text">
                        Chief Technology Officer
                      </h3>
                      <p className="text-lg text-violet font-semibold">
                        MentalNext
                      </p>
                      <p className="text-sm text-teal font-mono tracking-wide">
                        Apr 2025 — Present
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="cyber-card p-6 hover:shadow-neon-violet transition-all duration-300">
                    <div className="space-y-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-violet to-indigo rounded-full mx-auto animate-pulse shadow-neon-violet"></div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-text">
                        AI Research Engineer
                      </h3>
                      <p className="text-lg text-violet font-semibold">
                        Illusian Founder Office
                      </p>
                      <p className="text-sm text-teal font-mono tracking-wide">
                        Oct 2024 — Present
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="cyber-card p-6 hover:shadow-neon-teal transition-all duration-300">
                    <div className="space-y-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-teal to-indigo rounded-full mx-auto animate-pulse shadow-neon-teal"></div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-text">
                        AI Software Developer & Psychologist
                      </h3>
                      <p className="text-lg text-violet font-semibold">
                        Self-employed
                      </p>
                      <p className="text-sm text-teal font-mono tracking-wide">
                        Oct 2023 — Present
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="cyber-card p-6 hover:shadow-neon-magenta transition-all duration-300">
                    <div className="space-y-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-magenta to-pink rounded-full mx-auto animate-pulse shadow-neon-magenta"></div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-text">
                        Data & AI Consultant
                      </h3>
                      <p className="text-lg text-violet font-semibold">Codento Oy</p>
                      <p className="text-sm text-teal font-mono tracking-wide">
                        Apr 2023 — Oct 2023
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center scroll-reveal group">
                  <div className="cyber-card p-6 hover:shadow-neon-violet transition-all duration-300">
                    <div className="space-y-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-violet to-teal rounded-full mx-auto animate-pulse shadow-neon-violet"></div>
                      <h3 className="text-xl md:text-2xl font-sans font-bold text-text">
                        Psychologist
                      </h3>
                      <p className="text-lg text-violet font-semibold">
                        Various Organizations
                      </p>
                      <p className="text-sm text-teal font-mono tracking-wide">
                        Jan 2020 — Jun 2023
                      </p>
                      <p className="text-sm text-pink/80 italic">
                        4.48/5 client satisfaction rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content sections with neon glow */}
        <div className="scroll-reveal relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-pink/10 rounded-full blur-3xl pointer-events-none"></div>
          <MediaSection />
        </div>

        <div className="scroll-reveal relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo/10 rounded-full blur-3xl pointer-events-none"></div>
          <ProjectsSection />
        </div>

        <div className="scroll-reveal relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
          <ContactSection />
        </div>

        {/* Cyberpunk Footer */}
        <footer className="py-12 text-center border-t border-violet/20 scroll-reveal relative">
          <div className="space-y-4">
            <p className="text-sm text-text-2 font-mono tracking-wider">
              © 2024 <span className="text-violet">Olli Airola</span>. All rights reserved.
            </p>
            <p className="text-xs text-text-2/60 font-mono animate-flicker">
              Crafted in the digital void with neon dreams.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default MainPage;