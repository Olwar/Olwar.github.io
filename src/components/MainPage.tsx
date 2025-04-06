import React from "react";
import Model3D from "./Model3D";
import { Separator } from "@/components/ui/separator";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MainPage = () => {
  return (
    <main className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-center">
          <div className="h-full min-h-[300px] md:min-h-[400px] overflow-hidden flex justify-end items-center">
            <Model3D isLanding={false} />
          </div>
          
          <div className="space-y-8 opacity-0 animation-delay-500 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider">
              OLLI AIROLA
              <span className="block text-lg text-gray-400 font-normal mt-1">Software Developer | Psychologist</span>
            </h1>
            
            <Separator className="bg-gray-800" />
            
            <div className="space-y-6">
              <section aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-xl font-medium mb-2 text-gray-300">About</h2>
                <p className="text-gray-400 leading-relaxed">
                  Combining AI and psychology to deepen our understanding of how artificial intelligence can 
                  enhance our lives. My approach to AI is based on both technical expertise and an understanding of how it affects 
                  human psychology.
                </p>
              </section>
              
              <section aria-labelledby="experience-heading">
                <h2 id="experience-heading" className="text-xl font-medium mb-2 text-gray-300">Experience</h2>
                <ul className="text-gray-400 space-y-3">
                  <li>
                    <h3 className="block text-white text-base font-medium">CTO</h3>
                    <span className="block text-sm">Ujonrohkaisija — Apr 2025-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-white text-base font-medium">Full-stack Developer</h3>
                    <span className="block text-sm">Illusian Founder Office — Oct 2024-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-white text-base font-medium">AI Software Developer | Psychologist</h3>
                    <span className="block text-sm">Self-employed — Oct 2023-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-white text-base font-medium">Data/AI Consultant</h3>
                    <span className="block text-sm">Codento Oy — Apr 2023-Oct 2023</span>
                  </li>
                  <li>
                    <h3 className="block text-white text-base font-medium">Psychologist</h3>
                    <span className="block text-sm">Various Organizations — Jan 2020-Jun 2023</span>
                    <span className="block text-sm italic">Provided therapy and assessments with 4.48/5 client feedback</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
        
        <Separator className="bg-gray-800 my-16" />
        
        <MediaSection />
        
        <Separator className="bg-gray-800 my-4" />
        
        <ProjectsSection />
        
        <Separator className="bg-gray-800 my-4" />
        
        <ContactSection />
      </div>
    </main>
  );
};

export default MainPage;
