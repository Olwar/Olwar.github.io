import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
  color: "magenta" | "violet" | "teal" | "indigo";
}

const projects: Project[] = [
  {
    id: 1,
    title: "MentalNext",
    description:
      "As CTO, developing a digital psychology platform for social anxiety. Features assessments, personalized feedback, and interactive exercises built by psychologists.",
    link: "https://www.ujonrohkaisija.fi/",
    color: "magenta",
  },
  {
    id: 2,
    title: "Sekasin-tekoälyapuri",
    description:
      "Mental health AI assistant helping youth access support when human assistance isn't available. Built at Illusian Founder Office.",
    link: "https://mieli.fi/uutiset/sekasin-chat-hakee-tekoalysta-ratkaisuja-nuorten-mielenterveyskriisiin/",
    color: "violet",
  },
  {
    id: 3,
    title: "AI Newsletter",
    description:
      "Free AI newsletter in Finnish to make Finland the #1 country in AI knowledge, covering the latest developments in artificial intelligence.",
    link: "https://tekoalyolli.substack.com/",
    color: "teal",
  },
  {
    id: 4,
    title: "Happy Palette",
    description:
      "AI-powered color analysis and scanner tool that helps users discover their perfect color palette through state-of-the-art Large Vision Models.",
    link: "https://www.happypalette.app/",
    color: "indigo",
  },
];

const ProjectsSection = () => {
  const getColorClasses = (color: Project["color"]) => {
    const colors = {
      magenta: "from-magenta to-pink hover:shadow-neon-magenta border-magenta/20 hover:border-magenta/50",
      violet: "from-violet to-indigo hover:shadow-neon-violet border-violet/20 hover:border-violet/50",
      teal: "from-teal to-indigo hover:shadow-neon-teal border-teal/20 hover:border-teal/50",
      indigo: "from-indigo to-violet hover:shadow-neon-violet border-indigo/20 hover:border-indigo/50",
    };
    return colors[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-teal via-indigo to-violet bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className={`cyber-card p-8 h-full transition-all duration-500 hover:scale-105 relative overflow-hidden border ${getColorClasses(project.color)}`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Scanline effect on hover */}
                <div className="absolute inset-0 bg-crt-scanlines opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="space-y-4 relative z-10">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-text group-hover:text-pink transition-colors duration-300">
                    <span className="group-hover:text-glow-magenta">{project.title}</span>
                  </h3>
                  <p className="text-text-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-medium text-teal group-hover:text-pink transition-all duration-300 tracking-wide inline-flex items-center">
                      <span className="group-hover:text-glow-magenta">View project →</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;