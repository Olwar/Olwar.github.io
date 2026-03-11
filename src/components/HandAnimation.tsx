import React from "react";

interface HandAnimationProps {
  isVisible: boolean;
}

const HandAnimation: React.FC<HandAnimationProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Human hand - HUGE and static for testing */}
      <div className="fixed left-10 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <img
          src="/human_hand.png"
          alt="Human hand"
          className="w-96 h-auto"
          style={{
            filter: "drop-shadow(0 0 30px rgba(255,0,0,1))",
          }}
        />
        <p className="text-white text-2xl">HUMAN HAND</p>
      </div>

      {/* Robot hand - HUGE and static for testing */}
      <div className="fixed right-10 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <img
          src="/robot_hand.png"
          alt="Robot hand"
          className="w-96 h-auto"
          style={{
            filter: "drop-shadow(0 0 30px rgba(0,255,255,1))",
          }}
        />
        <p className="text-white text-2xl">ROBOT HAND</p>
      </div>
    </>
  );
};

export default HandAnimation;