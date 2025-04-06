
import React from "react";

interface AnimateProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const FadeIn: React.FC<AnimateProps> = ({ 
  children, 
  delay = 0,
  className = ""
}) => {
  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={`opacity-0 animate-fade-in ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};
