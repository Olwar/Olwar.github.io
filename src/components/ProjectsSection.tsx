import React from "react";
import { Plate, SectionHeading } from "./print";

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  logo: string;
  /** Set for names that are Finnish, for screen readers. */
  lang?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SocialHuman",
    description:
      "A human-only social network. Every post is taken live in the app by a real person, with no uploads and no filters, and checked before anyone sees it. Free on iOS and Android.",
    link: "https://socialhuman.dev/",
    logo: "socialhuman",
  },
  {
    id: 2,
    title: "Jollido",
    description:
      "As CTO, building Jollido, a social anxiety app with an AI coach that helps you practice before real situations like meetings, parties, and dates. Built by psychologists. On Google Play, with iPhone coming soon.",
    link: "https://jollido.app/",
    logo: "jollido",
  },
  {
    id: 3,
    title: "Ilma",
    description:
      "More accurate than Finland's own weather services, FMI and Foreca. Ilma blends six weather models and shows where they disagree, so you know how much to trust each forecast. Every night it checks its temperature, wind, and rain forecasts at 14 Finnish weather stations.",
    link: "https://ilma.io/",
    logo: "ilma",
  },
  {
    id: 4,
    title: "AI Newsletter",
    description:
      "One of the biggest AI newsletters in Finland. Free and in Finnish, with the goal of making Finland the #1 country in AI knowledge.",
    link: "https://tekoalyolli.substack.com/",
    logo: "tekoalyn-huipulla",
  },
  {
    id: 5,
    title: "Sekasin-tekoälyapuri",
    lang: "fi",
    description:
      "Mental health AI assistant helping youth access support when human assistance isn't available. Built at Illusian Founder Office.",
    link: "https://mieli.fi/uutiset/sekasin-chat-hakee-tekoalysta-ratkaisuja-nuorten-mielenterveyskriisiin/",
    logo: "sekasin",
  },
  {
    id: 6,
    title: "Vanhemmuuden tekoälyapuri",
    lang: "fi",
    description:
      "24/7 AI assistant that gives parents research-based support on parenting, child development, and mental health. Made with MIELI ry, SOS-Lapsikylä, and the Finnish Red Cross.",
    link: "https://mieli.fi/tukea-ja-apua/vanhemmuuden-tekoalyapuri/",
    logo: "mieli",
  },
  {
    id: 7,
    title: "OP Päävalmentaja",
    lang: "fi",
    description:
      "AI tool that helps youth sports coaches support young athletes' mental well-being and find words for difficult conversations. Made with MIELI ry and OP Pohjola.",
    link: "https://mieli.fi/paavalmentaja/",
    logo: "op",
  },
  {
    id: 9,
    title: "Asuntohaku – HSL-matka-ajat",
    lang: "fi",
    description:
      "Apartment search tool that compares HSL public transport, bike, and car travel times from Oikotie listings to the places you visit most.",
    link: "https://hsl-route-api.vercel.app/",
    logo: "asuntohaku",
  },
  {
    id: 10,
    title: "SOAR",
    description:
      "An experiment where AI models trade crypto every day with paper money. Each position closes only at its take-profit or stop-loss, and every trade is logged. The dashboard shows returns, win rates against breakeven, and confidence intervals.",
    link: "https://paper-vision-bot.vercel.app/",
    logo: "soar",
  },
  {
    id: 11,
    title: "Polymarket Dashboard",
    description:
      "An experiment where an AI model bets on Polymarket prediction markets with $1,000 of paper money. Every day it researches the markets with web search and financial data, and it bets only when its own probability is at least 20% higher than the market's. The dashboard tracks every bet and its result.",
    link: "https://polymarket-prediction.vercel.app/",
    logo: "polymarket",
  },
  {
    id: 12,
    title: "AI Behaviour Lab",
    description:
      "Experiments on how Claude, an AI model, behaves. Each experiment has one question, one chart, and one answer. The method and the decision rule are fixed and reviewed before the run.",
    link: "https://ai-psychology-lab.vercel.app/",
    logo: "ai-behaviour-lab",
  },
];

const ProjectCard = ({
  project,
  large = false,
  wide = false,
  className = "",
}: {
  project: Project;
  large?: boolean;
  /** Spans both columns; the text keeps a readable line length. */
  wide?: boolean;
  className?: string;
}) => (
  <div
    className={`dither-shadow lift group flex ${wide ? "md:col-span-2" : ""} ${className}`}
  >
    <article
      className={`ink-card relative flex w-full flex-col p-5 sm:p-6 md:p-8 ${large ? "lg:p-10" : ""} ${wide ? "md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-x-12" : ""}`}
    >
      <div
        className={`flex items-center gap-4 ${wide ? "md:col-start-1 md:row-start-1 md:self-start" : ""}`}
      >
        <img
          src={`/art/logos/${project.logo}.png`}
          alt=""
          width={56}
          height={56}
          loading="lazy"
          decoding="async"
          className="pixelated box-content h-14 w-14 shrink-0 border border-foreground"
        />
        <h3
          lang={project.lang}
          className={`min-w-0 ${large ? "text-[1.75rem] sm:text-3xl md:text-[2.5rem]" : "text-2xl md:text-[1.75rem]"}`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched-link"
          >
            {project.title}
            <span className="sr-only" lang="en">
              {" "}
              (opens in a new tab)
            </span>
          </a>
        </h3>
      </div>
      <p
        className={`mt-5 leading-relaxed ${large ? "font-serif text-xl md:text-2xl md:leading-snug lg:text-[1.375rem]" : "md:text-[1.0625rem]"} ${wide ? "md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0" : ""}`}
      >
        {project.description}
      </p>
      <p
        className={`label mt-auto pt-6 ${wide ? "md:col-start-1 md:row-start-2 md:self-end" : ""}`}
        aria-hidden="true"
      >
        <span className="hl group-hover:bg-foreground group-hover:text-background">
          View project →
        </span>
      </p>
    </article>
  </div>
);

const ProjectsSection = () => {
  const [featured, ...rest] = projects;
  return (
    <section
      aria-labelledby="projects"
      className="scroll-reveal py-12 md:py-20"
    >
      <SectionHeading id="projects" number="03">
        Selected Projects
      </SectionHeading>

      {/* One two-column grid for every row, so all cards share edges. */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
        <ProjectCard
          project={featured}
          large
          className="self-start md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:min-h-[386px]"
        />
        <Plate
          name="workshop"
          figure="3"
          caption="The workshop."
          alt="Two hands assemble a clockwork brain from gears under a desk lamp, next to a smoking soldering iron."
          className="md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
        />
        {rest.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            wide={rest.length % 2 === 1 && i === rest.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
