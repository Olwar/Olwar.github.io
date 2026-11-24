import React, { useEffect, useRef, useState } from "react";
import { SectionHeading } from "./print";
import { useCopy, type ContactKey } from "@/copy";

const EMAIL = "olli@olliairola.com";

const links: { key: ContactKey; href: string }[] = [
  { key: "linkedin", href: "https://www.linkedin.com/in/tekoalyolli/" },
  { key: "instagram", href: "https://www.instagram.com/tekoalyolli/" },
  { key: "tiktok", href: "https://www.tiktok.com/@tekoalyolli" },
  { key: "newsletter", href: "https://tekoalyolli.substack.com/" },
  { key: "github", href: "https://github.com/Olwar" },
];

const ContactSection = () => {
  const c = useCopy();
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
        {c.headings.contact}
      </SectionHeading>

      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="label">{c.contact.email}</p>
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
              {status === "copied" ? c.contact.copied : c.contact.copy}
            </button>
            <p role="status" className="mt-3 min-h-[1.5rem] text-sm">
              {status === "failed" && c.contact.failed}
              <span className="sr-only">
                {status === "copied" ? c.contact.copiedSr : ""}
              </span>
            </p>
          </div>
        </div>

        <ul className="border-t border-foreground">
          {links.map((link) => (
            <li key={link.key} className="border-b border-foreground">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 flex items-center justify-between gap-6 px-3 py-5 transition-colors duration-150 hover:bg-foreground hover:text-background"
              >
                <span>
                  <span className="block font-serif text-2xl">
                    {c.contact.links[link.key].label}
                  </span>
                  <span className="mt-1 block text-base">
                    {c.contact.links[link.key].value}
                  </span>
                </span>
                <span className="shrink-0 text-2xl" aria-hidden="true">
                  →
                </span>
                <span className="sr-only"> {c.newTab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
