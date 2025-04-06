import React from "react";
import { FadeIn } from "@/lib/animation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const contactLinks = [
  {
    id: 1,
    name: "Email",
    link: "mailto:olli@olliairola.com",
    description: "Click to copy my email: olli@olliairola.com",
    isEmail: true
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
    link: "https://tekoalyolli.substack.com/",
    description: "Subscribe to my free AI newsletter to stay updated"
  },
  {
    id: 4,
    name: "GitHub",
    link: "https://github.com/Olwar",
    description: "Check out my open source projects and code repositories"
  }
];

function ContactSection() {
  let notificationTimeout = null;
  
  const copyEmail = (e) => {
    if (e.currentTarget.dataset.isEmail === "true") {
      e.preventDefault();
      const email = "olli@olliairola.com";
      navigator.clipboard.writeText(email);
      
      // Create notification element
      const notification = document.createElement('div');
      notification.innerText = 'Email copied!';
      notification.style.position = 'fixed';
      notification.style.left = `${e.clientX}px`;
      notification.style.top = `${e.clientY - 30}px`;
      notification.style.background = '#1f2937';
      notification.style.color = 'white';
      notification.style.padding = '2px 8px';
      notification.style.borderRadius = '4px';
      notification.style.fontSize = '14px';
      notification.style.zIndex = '50';
      notification.style.pointerEvents = 'none';
      notification.style.animation = 'fadeInOut 2s ease-in-out forwards';
      
      // Add the notification to the document
      document.body.appendChild(notification);
      
      // Remove after animation completes
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    }
  };

  return (
    <div className="py-16 relative">
      <FadeIn delay={500}>
        <h2 className="text-2xl font-light tracking-wider mb-8">CONTACT</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {contactLinks.map((contact) => (
            <HoverCard key={contact.id}>
              <HoverCardTrigger asChild>
                <a 
                  href={contact.link}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg relative text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={copyEmail}
                  data-is-email={contact.isEmail}
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
        
        <style jsx global>{`
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(10px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
        `}</style>
      </FadeIn>
      
      {/* Floating profile image - hidden on mobile, positioned at bottom right */}
      <div className="hidden md:block absolute bottom-[-30px] right-[-30px] md:right-0 lg:right-[-50px] xl:right-[-80px] animate-float">
        <img 
          src="/olli_circle.png" 
          alt="Olli Airola" 
          className="md:w-20 md:h-20 object-contain ring-1 ring-black"
        />
      </div>
    </div>
  );
}

export default ContactSection;
