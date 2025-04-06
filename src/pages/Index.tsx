
import React, { useState } from "react";
import LandingPage from "../components/LandingPage";
import MainPage from "../components/MainPage";

const Index: React.FC = () => {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleEnter = () => {
    setShowMainPage(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {!showMainPage ? (
        <LandingPage onEnter={handleEnter} />
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default Index;
