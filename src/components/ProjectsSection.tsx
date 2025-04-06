import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/lib/animation";

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
    <section className="py-16">
      <FadeIn delay={450}>
        <h2 className="text-2xl font-light tracking-wider mb-8">PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform duration-300 hover:-translate-y-1"
            >
              <Card 
                className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors duration-300 h-full"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default ProjectsSection; 