import React from "react";
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

const ContactSection = () => {
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
      notification.style.background = '#ff00ff';
      notification.style.color = 'white';
      notification.style.padding = '2px 8px';
      notification.style.borderRadius = '4px';
      notification.style.fontSize = '14px';
      notification.style.zIndex = '50';
      notification.style.pointerEvents = 'none';
      
      // Add Tailwind classes - we're adding it manually since this is a dynamic element
      notification.classList.add('animate-fadeInOut');
      
      // Add the notification to the document
      document.body.appendChild(notification);
      
      // Remove after animation completes
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 2000);
    }
  };

  return (
    <section className="py-6 md:py-12 relative">
      <div className="bg-white border-4 border-double border-[#ff00ff] p-3 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-[#ff6600] underline decoration-wavy decoration-[#9c27b0] underline-offset-4 md:underline-offset-8">
          <span className="inline-block animate-pulse">☎</span> CONTACT ME <span className="inline-block animate-pulse">☎</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {contactLinks.map((contact) => (
            <HoverCard key={contact.id}>
              <HoverCardTrigger asChild>
                <a 
                  href={contact.link}
                  className="border-2 border-[#ff6600] bg-[#ffff99] p-1 md:p-2 text-[#9c27b0] hover:bg-[#ffff00] transition-colors text-base md:text-lg font-bold block text-center relative active:scale-95 touch-manipulation"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={copyEmail}
                  data-is-email={contact.isEmail}
                >
                  <div className="border-2 border-dashed border-[#9c27b0] p-2 md:p-4">
                    {contact.name}
                  </div>
                </a>
              </HoverCardTrigger>
              <HoverCardContent align="center" className="w-[200px] md:w-auto bg-[#a8effb] border-[#ff00ff] text-[#9c27b0] font-bold text-sm md:text-base">
                {contact.description}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        <div className="mt-6 md:mt-10 flex justify-center items-center">
          <div className="border-2 border-[#ff6600] bg-[#ffccff] p-3 md:p-4 shadow-[3px_3px_0px_#000000] md:shadow-[4px_4px_0px_#000000] max-w-md text-center">
            <h3 className="text-base md:text-lg text-[#9c27b0] font-bold mb-2">SIGN MY GUESTBOOK:</h3>
            <div className="inline-block animate-bounce mt-1 md:mt-2 text-[#ff6600]">
              ⬇️ Coming Soon! ⬇️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
