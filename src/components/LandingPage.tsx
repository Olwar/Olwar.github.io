import React from "react";
import { NeuroNoise } from "@paper-design/shaders-react";
import HandAnimation from "./HandAnimation";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-void flex items-center justify-center px-6 overflow-hidden">
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
      
      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-vignette pointer-events-none"></div>
      
      {/* Digital rain effect */}
      <div className="absolute inset-0 animate-rain opacity-30 pointer-events-none"></div>
      
      {/* Pink rim light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-pink/10 to-transparent pointer-events-none blur-3xl"></div>
      
      {/* Teal edge glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="cyber-container text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Cyberpunk portrait with neon glow */}
          <div className="mb-12">
            <div
              className="relative inline-block cursor-pointer group transition-all duration-500 hover:scale-105"
              onClick={onEnter}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto overflow-hidden rounded-xl relative">
                {/* Neon border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-magenta via-violet to-indigo rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-violet/30 group-hover:border-magenta/50 transition-all duration-500">
                  <img
                    src="/polaroid_retro_anime.jpeg"
                    alt="Olli Airola"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:contrast-110"
                  />
                  
                  {/* Soft bloom filter on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-magenta/20 via-transparent to-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-soft-light"></div>
                </div>
              </div>
              
              {/* Scanline overlay */}
              <div className="absolute inset-0 bg-crt-scanlines pointer-events-none opacity-30 rounded-xl"></div>
            </div>
          </div>

          {/* Neon typography with glitch */}
          <div className="space-y-8">
            <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-tight relative">
              <span className="bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent">
                Olli Airola
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-magenta via-violet to-indigo bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse">
                Olli Airola
              </span>
            </h1>

            <div className="space-y-3">
              <p className="text-lg md:text-xl text-pink font-medium tracking-wide">
                <span className="text-glow-magenta">Software Developer</span>
              </p>
              <p className="text-lg md:text-xl text-teal font-medium tracking-wide">
                <span className="text-glow-teal">Psychologist</span>
              </p>
            </div>

            <div className="pt-8">
              <p className="text-sm md:text-base text-text-2 font-mono tracking-widest uppercase animate-pulse">
                <span className="inline-block px-6 py-2 border border-violet/30 rounded-full hover:border-magenta/60 hover:text-pink transition-all duration-300 hover:shadow-neon-magenta">
                  [ Click to enter ]
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Cyberpunk footer */}
        <div className="fixed bottom-6 left-0 right-0 text-center">
          <p className="text-xs text-text-2/60 font-mono tracking-ultra-wide">
            <span className="animate-flicker">PORTFOLIO.2024</span>
          </p>
        </div>
      </div>
      
      {/* Hand animations */}
      <HandAnimation isVisible={true} />
      
      {/* DEBUG: Direct image test */}
      <div className="fixed top-10 left-10 z-[9999] bg-white p-4">
        <p className="text-black">DEBUG: Testing hand images</p>
        <img src="/human_hand.png" alt="test human" className="w-32 h-32 object-contain bg-gray-200" />
        <img src="/robot_hand.png" alt="test robot" className="w-32 h-32 object-contain bg-gray-200" />
      </div>
    </div>
  );
};

export default LandingPage;
