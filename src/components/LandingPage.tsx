import React from "react";
import { NeuroNoise } from "@paper-design/shaders-react";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center px-6">
      {/* NeuroNoise shader background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <NeuroNoise
          colorFront="#ff2a6d"
          colorMid="#a64dff"
          colorBack="#07070d"
          brightness={0.05}
          contrast={0.3}
          speed={0.4}
          scale={1.2}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="elegant-container text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Sophisticated portrait presentation */}
          <div className="mb-8">
            <div
              className="relative inline-block cursor-pointer group transition-all duration-500 hover:scale-105"
              onClick={onEnter}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-lg shadow-elegant bg-white">
                <img
                  src="/polaroid.png"
                  alt="Olli Airola"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-all duration-500 rounded-lg"></div>
            </div>
          </div>

          {/* Elegant typography */}
          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl font-medium text-charcoal tracking-tight">
              Olli Airola
            </h1>

            <div className="space-y-2">
              <p className="text-lg md:text-xl text-charcoal/80 font-light">
                Software Developer
              </p>
              <p className="text-lg md:text-xl text-charcoal/80 font-light">
                Psychologist
              </p>
            </div>

            <div className="pt-6">
              <p className="text-sm md:text-base text-charcoal/60 font-light tracking-wide uppercase">
                Click to enter
              </p>
            </div>
          </div>
        </div>

        {/* Minimal footer */}
        <div className="fixed bottom-6 left-0 right-0 text-center">
          <p className="text-xs text-charcoal/40 font-mono tracking-wider">
            Portfolio 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
