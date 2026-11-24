import React from "react";
import MainPage from "../components/MainPage";
import { LangContext, type Lang } from "@/copy";

const Index = ({ lang }: { lang: Lang }) => (
  <LangContext.Provider value={lang}>
    <MainPage />
  </LangContext.Provider>
);

export default Index;
