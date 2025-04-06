import React from "react";
import { FadeIn } from "@/lib/animation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ContactLink {
  id: number;
  name: string;
  link: string;
  description: string;
}

const contactLinks: ContactLink[] = [
  {
    id: 1,
    name: "Email",
    link: "mailto:olli@olliairola.com",
    description: "Send me an email for business inquiries or collaborations"
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/tekoalyolli",
    description: "Connect with me professionally on LinkedIn"
  },
  {
    id: 3,
    name: "AI Newsletter",
    link: "https://lnkd.in/dvYaSE4N",
    description: "Subscribe to my free AI newsletter to stay updated"
  },
  {
    id: 4,
    name: "Project 5/5",
    link: "https://www.illusian.io/project-5-5",
    description: "Learn about our mental health AI initiative"
  }
];

const ContactSection: React.FC = () => {
  return (
    <div className="py-16 relative">
      <FadeIn delay={500}>
        <h2 className="text-2xl font-light tracking-wider mb-8">CONTACT</h2>
        
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          {contactLinks.map((contact) => (
            <HoverCard key={contact.id}>
              <HoverCardTrigger asChild>
                <a 
                  href={contact.link}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.name}
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="bg-gray-900 border-gray-800 text-white">
                {contact.description}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </FadeIn>
      
      {/* Floating profile image */}
      <div className="absolute right-0 -top-0 md:top-20 lg:right-10 xl:right-60 animate-float">
        <img 
          src="/lovable-uploads/e46df8e3-b16d-46cb-b993-a57a069db2ea.png" 
          alt="Olli Airola" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain transform -scale-x-100"
        />
      </div>
    </div>
  );
};

export default ContactSection;
