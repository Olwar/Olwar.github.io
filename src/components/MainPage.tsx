import React from "react";
import Model3D from "./Model3D";
import { Separator } from "@/components/ui/separator";
import MediaSection from "./MediaSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="h-full min-h-[300px] md:min-h-[400px] overflow-hidden flex justify-end items-center">
            <Model3D isLanding={false} />
          </div>
          
          <div className="space-y-8 opacity-0 animation-delay-500 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider">
              OLLI AIROLA
            </h1>
            
            <Separator className="bg-gray-800" />
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-2 text-gray-300">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  Combining content creation, AI and psychology to deepen our understanding of how artificial intelligence can 
                  enhance our lives. My approach to AI is based on both technical expertise and an understanding of how it affects 
                  human psychology.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-2 text-gray-300">Experience</h2>
                <ul className="text-gray-400 space-y-3">
                  <li>
                    <span className="block text-white">Full-stack Developer</span>
                    <span className="block text-sm">Illusian Founder Office — Oct 2024-Present</span>
                  </li>
                  <li>
                    <span className="block text-white">AI Software Developer | Psychologist</span>
                    <span className="block text-sm">Self-employed — Oct 2023-Present</span>
                  </li>
                  <li>
                    <span className="block text-white">Data/AI Consultant</span>
                    <span className="block text-sm">Codento Oy — Apr 2023-Oct 2023</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800 my-16" />
        
        <MediaSection />
        
        <Separator className="bg-gray-800 my-4" />
        
        <ServicesSection />
        
        <Separator className="bg-gray-800 my-4" />
        
        <ContactSection />
      </div>
    </div>
  );
};

export default MainPage;
