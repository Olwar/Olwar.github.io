import React from "react";
import { Plate, SectionHeading } from "./print";
import { useCopy, useLang, type ProjectKey } from "@/copy";

interface Project {
  /** The key of the title and the description in copy.tsx. */
  key: ProjectKey;
  link: string;
  logo: string;
}

const projects: Project[] = [
  { key: "socialhuman", link: "https://socialhuman.dev/", logo: "socialhuman" },
  { key: "jollido", link: "https://jollido.app/", logo: "jollido" },
  { key: "ilma", link: "https://ilma.io/", logo: "ilma" },
  { key: "newsletter", link: "https://tekoalyolli.substack.com/", logo: "tekoalyn-huipulla" },
  {
    key: "sekasin",
    link: "https://mieli.fi/uutiset/sekasin-chat-hakee-tekoalysta-ratkaisuja-nuorten-mielenterveyskriisiin/",
    logo: "sekasin",
  },
  { key: "parenting", link: "https://mieli.fi/tukea-ja-apua/vanhemmuuden-tekoalyapuri/", logo: "mieli" },
  { key: "coach", link: "https://mieli.fi/paavalmentaja/", logo: "op" },
  { key: "apartments", link: "https://hsl-route-api.vercel.app/", logo: "asuntohaku" },
  { key: "soar", link: "https://paper-vision-bot.vercel.app/", logo: "soar" },
  { key: "polymarket", link: "https://polymarket-prediction.vercel.app/", logo: "polymarket" },
  { key: "behaviourLab", link: "https://ai-psychology-lab.vercel.app/", logo: "ai-behaviour-lab" },
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
}) => {
  const c = useCopy();
  const lang = useLang();
  const text = c.projects.items[project.key];
  return (
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
          lang={text.lang}
          className={`min-w-0 ${large ? "text-[1.75rem] sm:text-3xl md:text-[2.5rem]" : "text-2xl md:text-[1.75rem]"}`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched-link"
          >
            {text.title}
            <span className="sr-only" lang={lang}>
              {" "}
              {c.newTab}
            </span>
          </a>
        </h3>
      </div>
      <p
        className={`mt-5 leading-relaxed ${large ? "font-serif text-xl md:text-2xl md:leading-snug lg:text-[1.375rem]" : "md:text-[1.0625rem]"} ${wide ? "md:col-start-2 md:row-span-2 md:row-start-1 md:mt-0" : ""}`}
      >
        {text.description}
      </p>
      <p
        className={`label mt-auto pt-6 ${wide ? "md:col-start-1 md:row-start-2 md:self-end" : ""}`}
        aria-hidden="true"
      >
        <span className="hl group-hover:bg-foreground group-hover:text-background">
          {c.projects.view}
        </span>
      </p>
    </article>
  </div>
  );
};

const ProjectsSection = () => {
  const c = useCopy();
  const [featured, ...rest] = projects;
  return (
    <section
      aria-labelledby="projects"
      className="scroll-reveal py-12 md:py-20"
    >
      <SectionHeading id="projects" number="03">
        {c.headings.projects}
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
          className="md:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1"
        />
        {rest.map((project, i) => (
          <ProjectCard
            key={project.key}
            project={project}
            wide={rest.length % 2 === 1 && i === rest.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
