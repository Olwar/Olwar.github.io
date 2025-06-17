import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface ContactMethod {
  id: number;
  label: string;
  value: string;
  action?: () => void;
  link?: string;
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
      value: "olli.airola@gmail.com",
      action: () => copyToClipboard("olli.airola@gmail.com"),
    },
    {
      id: 2,
      label: "LinkedIn",
      value: "Connect professionally",
      link: "https://www.linkedin.com/in/olli-airola/",
    },
    {
      id: 3,
      label: "AI Newsletter",
      value: "Subscribe to my AI insights",
      link: "https://tekoalyolli.substack.com/",
    },
    {
      id: 4,
      label: "GitHub",
      value: "View my open source projects",
      link: "https://github.com/Olwar",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-14">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Get in Touch
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
                    <div className="elegant-card p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-medium text-charcoal group-hover:text-navy transition-colors duration-300">
                            {method.label}
                          </h3>
                          <p className="text-sm text-charcoal/60">
                            {method.value}
                          </p>
                        </div>
                        <span className="text-sm text-bronze group-hover:text-navy transition-colors duration-300 tracking-wide">
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
                    <div className="elegant-card p-6 w-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1 text-left">
                          <h3 className="font-medium text-charcoal group-hover:text-navy transition-colors duration-300">
                            {method.label}
                          </h3>
                          <p className="text-sm text-charcoal/60">
                            {method.value}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {copiedEmail ? (
                            <>
                              <Check size={16} className="text-green-600" />
                              <span className="text-sm text-green-600 font-medium tracking-wide">
                                Copied!
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy
                                size={16}
                                className="text-bronze group-hover:text-navy transition-colors duration-300"
                              />
                              <span className="text-sm text-bronze group-hover:text-navy transition-colors duration-300 tracking-wide">
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
          <div className="elegant-card p-8">
            <h3 className="font-serif text-xl font-medium text-charcoal mb-4">
              Let's Collaborate
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              Whether you're interested in AI development, psychology research,
              or exploring the intersection of technology and human behavior,
              I'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
