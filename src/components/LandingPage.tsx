
import React from "react";
import Model3D from "./Model3D";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-2xl font-light mb-8 tracking-wider">OLLI AIROLA</h1>
        <div className="h-[400px] w-[400px] mx-auto animate-float">
          <Model3D isLanding={true} onClick={onEnter} />
        </div>
        <p className="mt-8 text-sm text-gray-400">Click me to enter</p>
      </div>
    </div>
  );
};

export default LandingPage;
