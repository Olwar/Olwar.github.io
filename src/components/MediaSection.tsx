import React from "react";
import { SectionHeading } from "./print";

interface MediaItem {
  id: number;
  title: string;
  source: string;
  link: string;
  kind: "Article" | "Podcast";
  /** A 48 x 48 1-bit mark in /art/media/, shown at 1:1. */
  logo: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Moni hakee mielenterveysapua tekoälyltä, mutta siinä on riskinsä",
    source: "Apu",
    link: "https://www.apu.fi/artikkelit/moni-hakee-mielenterveysapua-tekoalylta-mutta-siina-on-riskinsa",
    kind: "Article",
    logo: "apu",
  },
  {
    id: 2,
    title: "Tekoäly neuvoi toimittajaa laittamaan kynähameen töihin",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20083714",
    kind: "Article",
    logo: "yle",
  },
  {
    id: 3,
    title: "Toimittaja kokeili terapiaa, jossa terapeutti ei ole ihminen",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20077840",
    kind: "Article",
    logo: "yle",
  },
  {
    id: 4,
    title: "Tekoäly ja psykologia: Vallankumouksellinen liitto",
    source: "Psykologilehti",
    link: "https://psykologilehti.fi/tekoaly-ja-psykologia-vallankumouksellinen-liitto/",
    kind: "Article",
    logo: "psykologilehti",
  },
  {
    id: 5,
    title: "ChatGPT terapeuttina",
    source: "Niinku asia on podcast",
    link: "https://podcasts.apple.com/fi/podcast/chatgpt-terapeuttina-olli-airola-pjk-111/id1464577586?i=1000714318245",
    kind: "Podcast",
    logo: "niinku-asia-on",
  },
  {
    id: 6,
    title: "Tekoälyn huipulla: vieraana Olli Airola",
    source: "AIka Hyvä Maailma podcast",
    link: "https://podcasts.apple.com/fi/podcast/016-teko%C3%A4lyn-huipulla-vieraana-olli-airola-teko%C3%A4lyolli/id1715699694?i=1000668616668",
    kind: "Podcast",
    logo: "aika-hyva-maailma",
  },
];

const MediaSection = () => {
  return (
    <section aria-labelledby="media" className="scroll-reveal py-12 md:py-20">
      <SectionHeading id="media" number="04">
        Media Appearances
      </SectionHeading>

      <ul>
        {mediaItems.map((item) => (
          <li key={item.id} className="border-b border-foreground">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 grid gap-2 px-3 py-6 transition-colors duration-150 hover:bg-foreground hover:text-background md:grid-cols-[15rem_minmax(0,1fr)_7rem] md:items-center md:gap-8"
            >
              <span className="flex items-center gap-4">
                <img
                  src={`/art/media/${item.logo}.png`}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="pixelated box-content h-12 w-12 shrink-0 border border-foreground"
                />
                <span className="label" lang="fi">
                  {item.source}
                </span>
              </span>
              <span
                lang="fi"
                className="font-serif text-xl leading-snug md:text-2xl"
              >
                {item.title}
              </span>
              <span className="label md:text-right">
                {item.kind === "Podcast" ? "Listen" : "Read"} →
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MediaSection;
