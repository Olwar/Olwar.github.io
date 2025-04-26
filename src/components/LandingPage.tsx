import React from "react";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-[#a8effb] flex items-center justify-center px-4 md:px-0">
      <div className="text-center comic-font max-w-xs sm:max-w-sm md:max-w-xl mx-auto p-4 md:p-8">
        <div className="text-[#ff00ff] animate-pulse mb-4">* * * * * * * *</div>
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-[#ff6600] drop-shadow-[2px_2px_0px_#000000] md:drop-shadow-[4px_4px_0px_#000000]">OLLI AIROLA</h1>
        
        <div className="relative mx-auto mb-6 cursor-pointer transform transition-transform hover:scale-105 active:scale-95 touch-manipulation" onClick={onEnter}>
          <div className="border-6 md:border-8 border-white shadow-lg max-w-[250px] mx-auto bg-white p-2 rotate-[-3deg]">
            <img 
              src="/polaroid.png"
              alt="Olli Airola polaroid" 
              className="w-full h-auto"
            />
            <div className="text-center pt-2 pb-1 font-bold text-sm md:text-lg text-black">
              ENTER ENTER ENTER
            </div>
          </div>
        </div>
        
        <p className="mt-6 md:mt-8 text-base md:text-lg text-[#ff00ff] italic animate-bounce">Click the photo to enter!</p>
        <div className="mt-4 md:mt-6 text-[#ff6600] animate-pulse">* * * * * * * *</div>
        
        <div className="fixed bottom-2 md:bottom-4 left-0 right-0 text-center text-xs md:text-sm text-[#ff6600]">
          <span className="mr-2">©1993</span>
          <span className="animate-pulse inline-block">⚡</span>
          <span className="ml-2">BEST VIEWED WITH NETSCAPE</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
