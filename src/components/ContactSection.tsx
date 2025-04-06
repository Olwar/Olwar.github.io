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
    link: "mailto:contact@example.com",
    description: "Send me an email for business inquiries"
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/example",
    description: "Connect with me professionally"
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/example",
    description: "Follow for latest updates"
  },
  {
    id: 4,
    name: "GitHub",
    link: "https://github.com/example",
    description: "Check out my code repositories"
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
      <div className="absolute right-0 -top-20 md:top-0 lg:right-20 xl:right-40 animate-float">
        <img 
          src="/lovable-uploads/e46df8e3-b16d-46cb-b993-a57a069db2ea.png" 
          alt="Olli Airola" 
          className="w-24 h-24 md:w-36 md:h-36 object-contain"
        />
      </div>
    </div>
  );
};

export default ContactSection;
