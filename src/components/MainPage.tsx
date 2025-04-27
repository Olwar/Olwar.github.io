import React, { useEffect, useState } from "react";
import MediaSection from "./MediaSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

const MainPage = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Use CountAPI to track visitors across all users
    const countKey = "olli-airola-site"; // Unique key for your site
    const countUrl = `https://api.countapi.xyz/hit/olli-airola.com/${countKey}`;
    
    // Only count the visit if we haven't counted this session
    if (!sessionStorage.getItem('counted')) {
      fetch(countUrl)
        .then(response => response.json())
        .then(data => {
          if (data && data.value) {
            setVisitorCount(data.value);
            sessionStorage.setItem('counted', 'true');
          }
        })
        .catch(error => {
          console.error("Error fetching visitor count:", error);
          // Fallback to localStorage if API fails
          const fallbackCount = parseInt(localStorage.getItem('visitorCount') || '0') + 1;
          setVisitorCount(fallbackCount);
          localStorage.setItem('visitorCount', fallbackCount.toString());
        });
    } else {
      // Just get the count without incrementing
      fetch(countUrl.replace('/hit/', '/get/'))
        .then(response => response.json())
        .then(data => {
          if (data && data.value) {
            setVisitorCount(data.value);
          }
        })
        .catch(error => {
          console.error("Error fetching visitor count:", error);
          // Fallback to localStorage if API fails
          const fallbackCount = parseInt(localStorage.getItem('visitorCount') || '0');
          setVisitorCount(fallbackCount);
        });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#a8effb] py-8 md:py-16 px-3 md:px-12 comic-font">
      <div className="max-w-6xl mx-auto">
        {/* Retro header with scrolling text */}
        <div className="text-center mb-6 md:mb-10">
          <div className="overflow-hidden border-2 border-[#ff00ff] bg-white p-1 md:p-2 mb-4 md:mb-6">
            <div className="relative whitespace-nowrap inline-block text-base md:text-2xl font-bold text-[#ff6600] animate-marquee">
              ⭐️ WELCOME TO OLLI AIROLA'S HOME PAGE ⭐️ SERVING UP HOT TECH SINCE 1993 ⭐️ WELCOME TO OLLI AIROLA'S HOME PAGE ⭐️ SERVING UP HOT TECH SINCE 1993 ⭐️ WELCOME TO OLLI AIROLA'S HOME PAGE ⭐️ SERVING UP HOT TECH SINCE 1993 ⭐️ WELCOME TO OLLI AIROLA'S HOME PAGE ⭐️ SERVING UP HOT TECH SINCE 1993 ⭐️
            </div>
          </div>
          
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-[#ff6600] drop-shadow-[2px_2px_0px_#000000] md:drop-shadow-[4px_4px_0px_#000000]">
            OLLI AIROLA
          </h1>
          <div className="mt-2 mb-4 text-base md:text-xl text-[#9c27b0] bg-white inline-block px-3 md:px-6 py-1 border-2 border-[#ff00ff] transform rotate-[-1deg]">
            Software Developer | Psychologist
          </div>
        </div>
        
        {/* Main content in a "menu" style layout - responsive grid for mobile */}
        <section className="bg-white border-4 border-dashed border-[#ff00ff] p-3 md:p-6 mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="md:col-span-1">
              <div className="mb-4">
                <img 
                  src="/polaroid.png"
                  alt="Olli Airola" 
                  className="w-full max-w-[250px] mx-auto md:max-w-none border-4 border-white shadow-lg transform rotate-[-3deg]"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-[#ffff99] p-3 md:p-4 border-2 border-[#ff6600]">
                <h2 className="text-lg md:text-xl font-bold mb-2 text-[#9c27b0] underline underline-offset-4">About</h2>
                <p className="text-black leading-relaxed text-sm md:text-base">
                  Combining AI and psychology to deepen our understanding of how artificial intelligence can 
                  enhance our lives. My approach to AI is based on both technical expertise and an understanding of how it affects 
                  human psychology.
                </p>
              </div>
              
              <div className="mt-4 md:mt-6 bg-[#ccffcc] p-3 md:p-4 border-2 border-[#ff6600]">
                <h2 className="text-lg md:text-xl font-bold mb-2 text-[#9c27b0] underline underline-offset-4">Experience</h2>
                <ul className="text-black space-y-2 md:space-y-3 list-disc pl-5 text-sm md:text-base">
                  <li>
                    <h3 className="block text-[#ff6600] text-sm md:text-base font-bold">CTO</h3>
                    <span className="block text-xs md:text-sm">Ujonrohkaisija — Apr 2025-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-[#ff6600] text-sm md:text-base font-bold">Full-stack Developer</h3>
                    <span className="block text-xs md:text-sm">Illusian Founder Office — Oct 2024-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-[#ff6600] text-sm md:text-base font-bold">AI Software Developer | Psychologist</h3>
                    <span className="block text-xs md:text-sm">Self-employed — Oct 2023-Present</span>
                  </li>
                  <li>
                    <h3 className="block text-[#ff6600] text-sm md:text-base font-bold">Data/AI Consultant</h3>
                    <span className="block text-xs md:text-sm">Codento Oy — Apr 2023-Oct 2023</span>
                  </li>
                  <li>
                    <h3 className="block text-[#ff6600] text-sm md:text-base font-bold">Psychologist</h3>
                    <span className="block text-xs md:text-sm">Various Organizations — Jan 2020-Jun 2023</span>
                    <span className="block text-xs md:text-sm italic">Provided therapy and assessments with 4.48/5 client feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <div className="text-center">
          <div className="text-[#ff00ff] text-2xl md:text-4xl my-4 md:my-6">✧✦✧✦✧✦✧✦✧✦✧✦✧</div>
        </div>
        
        <MediaSection />
        
        <div className="text-center">
          <div className="text-[#ff00ff] text-2xl md:text-4xl my-4 md:my-6">✧✦✧✦✧✦✧✦✧✦✧✦✧</div>
        </div>
        
        <ProjectsSection />
        
        <div className="text-center">
          <div className="text-[#ff00ff] text-2xl md:text-4xl my-4 md:my-6">✧✦✧✦✧✦✧✦✧✦✧✦✧</div>
        </div>
        
        <ContactSection />
        
        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm text-[#ff6600]">
          <p className="mb-2">©1993 Olli Airola's Homepage - All Rights Reserved</p>
          <p>This site is best viewed in 800x600 resolution with Netscape Navigator</p>
          <div className="mt-2 flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <div className="border-2 border-[#ff6600] bg-[#ffff99] px-2 md:px-3 py-1 animate-pulse">
              <span className="font-bold">UNDER CONSTRUCTION</span> 🚧
            </div>
            <div className="border-2 border-[#ff6600] bg-[#ccffff] px-2 md:px-3 py-1">
              <span className="font-bold text-[#9c27b0]">VISITORS:</span> <span className="text-[#ff6600] font-mono">{visitorCount}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
