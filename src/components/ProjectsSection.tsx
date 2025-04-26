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
    title: "Ujonrohkaisija",
    description: "As CTO, developing a digital psychology platform for social anxiety. Features assessments, personalized feedback, and interactive exercises built by psychologists.",
    link: "https://www.ujonrohkaisija.fi/"
  },
  {
    id: 2,
    title: "Sekasin-tekoälyapuri",
    description: "Mental health AI assistant helping youth access support when human assistance isn't available. Built at Illusian Founder Office.",
    link: "https://mieli.fi/uutiset/sekasin-chat-hakee-tekoalysta-ratkaisuja-nuorten-mielenterveyskriisiin/"
  },
  {
    id: 3,
    title: "AI Newsletter",
    description: "Free AI newsletter in Finnish to make Finland the #1 country in AI knowledge, covering the latest developments in artificial intelligence.",
    link: "https://tekoalyolli.substack.com/"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-6 md:py-12">
      <div className="bg-white border-4 border-double border-[#ff00ff] p-3 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-[#ff6600] underline decoration-wavy decoration-[#9c27b0] underline-offset-4 md:underline-offset-8">
          <span className="inline-block animate-pulse">★</span> MY PROJECTS <span className="inline-block animate-pulse">★</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto relative">
          <div className="absolute -inset-4 bg-[url('https://web.archive.org/web/20091026165631/http://www.geocities.com/Heartland/Fields/2407/star.gif')] opacity-10 z-0"></div>
          
          {projects.map((project, index) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:-translate-y-1 active:scale-95 touch-manipulation z-10"
            >
              <div 
                className={`border-2 border-[#ff6600] p-3 md:p-4 h-full shadow-[2px_2px_0px_#000000] md:shadow-[4px_4px_0px_#000000] transform ${index % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1deg]'}`}
                style={{ backgroundColor: index === 0 ? '#ffff99' : index === 1 ? '#ccffcc' : '#ffccff' }}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#9c27b0] mb-2 md:mb-3 underline">
                  {project.title}
                </h3>
                <p className="text-black text-sm md:text-base">{project.description}</p>
                <div className="mt-3 text-center">
                  <span className="inline-block px-3 py-1 bg-[#ff00ff] text-white font-bold text-xs rounded-full animate-pulse">
                    CLICK HERE!
                  </span>
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