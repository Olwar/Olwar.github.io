import React from "react";
import Model3D from "./Model3D";
import { Separator } from "@/components/ui/separator";

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
                  Tech professional with expertise in creating innovative solutions. 
                  Passionate about minimalist design and cutting-edge technology.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-2 text-gray-300">Experience</h2>
                <ul className="text-gray-400 space-y-3">
                  <li>
                    <span className="block text-white">Senior Developer</span>
                    <span className="block text-sm">Tech Company — 2020-Present</span>
                  </li>
                  <li>
                    <span className="block text-white">Software Engineer</span>
                    <span className="block text-sm">Innovation Lab — 2017-2020</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-medium mb-2 text-gray-300">Contact</h2>
                <div className="flex space-x-4 text-sm">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Email
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
