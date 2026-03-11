import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface ContactMethod {
  id: number;
  label: string;
  value: string;
  action?: () => void;
  link?: string;
  color: "magenta" | "violet" | "teal" | "indigo";
}

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      label: "Email",
      value: "olli@olliairola.com",
      action: () => copyToClipboard("olli@olliairola.com"),
      color: "magenta",
    },
    {
      id: 2,
      label: "LinkedIn",
      value: "Connect professionally",
      link: "https://www.linkedin.com/in/olli-airola/",
      color: "violet",
    },
    {
      id: 3,
      label: "AI Newsletter",
      value: "Subscribe to my AI insights",
      link: "https://tekoalyolli.substack.com/",
      color: "teal",
    },
    {
      id: 4,
      label: "GitHub",
      value: "View my open source projects",
      link: "https://github.com/Olwar",
      color: "indigo",
    },
  ];

  const getGlowClass = (color: ContactMethod["color"]) => {
    const glows = {
      magenta: "hover:shadow-neon-magenta hover:border-magenta/50",
      violet: "hover:shadow-neon-violet hover:border-violet/50",
      teal: "hover:shadow-neon-teal hover:border-teal/50",
      indigo: "hover:shadow-neon-violet hover:border-indigo/50",
    };
    return glows[color];
  };

  const getTextColor = (color: ContactMethod["color"]) => {
    const colors = {
      magenta: "text-magenta",
      violet: "text-violet",
      teal: "text-teal",
      indigo: "text-indigo",
    };
    return colors[color];
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-magenta via-pink to-violet bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {contactMethods.map((method) => (
              <div key={method.id} className="group">
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`cyber-card p-6 transition-all duration-500 hover:scale-105 border border-violet/20 ${getGlowClass(method.color)} relative overflow-hidden`}>
                      {/* Neon accent line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-${method.color} to-transparent opacity-60`}></div>
                      
                      <div className="flex items-center justify-between pl-4">
                        <div className="space-y-1">
                          <h3 className={`font-semibold text-text group-hover:${getTextColor(method.color)} transition-colors duration-300`}>
                            {method.label}
                          </h3>
                          <p className="text-sm text-text-2">
                            {method.value}
                          </p>
                        </div>
                        <span className={`text-sm ${getTextColor(method.color)} transition-all duration-300 tracking-wide group-hover:text-glow-magenta`}>
                          Visit →
                        </span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Button
                    variant="ghost"
                    onClick={method.action}
                    className="w-full p-0 h-auto hover:bg-transparent group"
                  >
                    <div className={`cyber-card p-6 w-full transition-all duration-500 hover:scale-105 border border-violet/20 ${getGlowClass(method.color)} relative overflow-hidden`}>
                      {/* Neon accent line */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-${method.color} to-transparent opacity-60`}></div>
                      
                      <div className="flex items-center justify-between pl-4">
                        <div className="space-y-1 text-left">
                          <h3 className={`font-semibold text-text group-hover:${getTextColor(method.color)} transition-colors duration-300`}>
                            {method.label}
                          </h3>
                          <p className="text-sm text-text-2">
                            {method.value}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {copiedEmail ? (
                            <>
                              <Check size={16} className="text-teal" />
                              <span className="text-sm text-teal font-medium tracking-wide text-glow-teal">
                                Copied!
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy
                                size={16}
                                className={`${getTextColor(method.color)} transition-colors duration-300`}
                              />
                              <span className={`text-sm ${getTextColor(method.color)} transition-all duration-300 tracking-wide`}>
                                Copy
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <div className="glass-card p-8 relative">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-magenta via-violet to-teal rounded-xl opacity-20 blur-sm animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="font-sans text-xl font-bold mb-4">
                <span className="bg-gradient-to-r from-violet to-pink bg-clip-text text-transparent">
                  Let's Collaborate
                </span>
              </h3>
              <p className="text-text-2 leading-relaxed">
                Whether you're interested in <span className="text-violet font-semibold">AI development</span>, <span className="text-teal font-semibold">psychology research</span>,
                or exploring the intersection of technology and human behavior,
                I'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;