import React, { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./print";

const EMAIL = "olli@olliairola.com";

const links = [
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/tekoalyolli/",
  },
  {
    label: "AI Newsletter",
    value: "One of the biggest AI newsletters in Finland",
    href: "https://tekoalyolli.substack.com/",
  },
  {
    label: "GitHub",
    value: "View my open source projects",
    href: "https://github.com/Olwar",
  },
];

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus("copied");
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("failed");
    }
  };

  return (
    <section
      aria-labelledby="contact"
      className="scroll-reveal py-12 md:py-20"
    >
      <SectionHeading id="contact" number="05">
        Get in Touch
      </SectionHeading>

      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="label">Email</p>
          <a
            href={`mailto:${EMAIL}`}
            className="ink-underline mt-3 inline-block py-1.5 font-serif text-[clamp(1.75rem,7.5vw,3.25rem)] leading-tight"
          >
            {EMAIL}
          </a>
          <div className="mt-8">
            <button
              type="button"
              onClick={copyEmail}
              className="ink-button min-w-[12rem]"
            >
              {status === "copied" ? "Copied ✓" : "Copy address"}
            </button>
            <p role="status" className="mt-3 min-h-[1.5rem] text-sm">
              {status === "failed" &&
                "Copying did not work. Select the address above and copy it."}
              <span className="sr-only">
                {status === "copied" ? "Email address copied" : ""}
              </span>
            </p>
          </div>
        </div>

        <ul className="border-t border-foreground">
          {links.map((link) => (
            <li key={link.label} className="border-b border-foreground">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 flex items-center justify-between gap-6 px-3 py-5 transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                <span>
                  <span className="block font-serif text-2xl">
                    {link.label}
                  </span>
                  <span className="mt-1 block text-base">{link.value}</span>
                </span>
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  →
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
