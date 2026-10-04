import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MentalNext",
    description:
      "As CTO, developing a digital psychology platform for social anxiety. Features assessments, personalized feedback, and interactive exercises built by psychologists.",
    link: "https://www.ujonrohkaisija.fi/",
  },
  {
    id: 2,
    title: "Sekasin-tekoälyapuri",
    description:
      "Mental health AI assistant helping youth access support when human assistance isn't available. Built at Illusian Founder Office.",
    link: "https://mieli.fi/uutiset/sekasin-chat-hakee-tekoalysta-ratkaisuja-nuorten-mielenterveyskriisiin/",
  },
  {
    id: 3,
    title: "Vanhemmuuden tekoälyapuri",
    description:
      "24/7 AI assistant that gives parents research-based support on parenting, child development, and mental health. Made with MIELI ry, SOS-Lapsikylä, and the Finnish Red Cross.",
    link: "https://mieli.fi/tukea-ja-apua/vanhemmuuden-tekoalyapuri/",
  },
  {
    id: 4,
    title: "OP Päävalmentaja",
    description:
      "AI tool that helps youth sports coaches support young athletes' mental well-being and find words for difficult conversations. Made with MIELI ry and OP Pohjola.",
    link: "https://mieli.fi/paavalmentaja/",
  },
  {
    id: 5,
    title: "AI Newsletter",
    description:
      "One of the biggest AI newsletters in Finland. Free and in Finnish, with the goal of making Finland the #1 country in AI knowledge.",
    link: "https://tekoalyolli.substack.com/",
  },
  {
    id: 6,
    title: "Happy Palette",
    description:
      "AI-powered color analysis and scanner tool that helps users discover their perfect color palette through state-of-the-art Large Vision Models.",
    link: "https://www.happypalette.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-14">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Selected Projects
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
              <div className="elegant-card p-8 h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-charcoal group-hover:text-navy transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4">
                    <span className="text-sm font-medium text-bronze group-hover:text-navy transition-colors duration-300 tracking-wide">
                      View project →
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
