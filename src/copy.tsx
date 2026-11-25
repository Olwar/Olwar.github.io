import { createContext, useContext, type ReactNode } from "react";

/**
 * All the text on the page, in English and Finnish. Both objects have the
 * type `Copy`, so TypeScript stops the build when one language misses a
 * string. The English page is `/`, the Finnish page is `/fi/`.
 */
export type Lang = "en" | "fi";

export const LangContext = createContext<Lang>("en");
export const useLang = () => useContext(LangContext);
export const useCopy = () => copy[useLang()];

/** The other language, for the language link in the masthead. */
interface OtherLang {
  lang: Lang;
  href: string;
  label: string;
}

interface Job {
  role: string;
  /** The language of the title, when it is not the language of the page. */
  lang?: Lang;
  company?: string;
  period: string;
  note?: string;
}

interface ProjectText {
  title: string;
  description: string;
  /** The language of the title, when it is not the language of the page. */
  lang?: Lang;
}

export type SectionId = "about" | "experience" | "projects" | "media" | "contact";
export type PlateName = "ice" | "patient" | "workshop";
export type ProjectKey =
  | "socialhuman"
  | "jollido"
  | "ilma"
  | "newsletter"
  | "sekasin"
  | "parenting"
  | "coach"
  | "apartments"
  | "soar"
  | "polymarket"
  | "behaviourLab";
export type ContactKey = "linkedin" | "instagram" | "tiktok" | "newsletter" | "github";

export interface Copy {
  skip: string;
  nav: { label: string; sections: Record<SectionId, string>; other: OtherLang };
  hero: { kicker: ReactNode; line: string; contact: string; projects: string };
  fig: string;
  plates: Record<PlateName, { caption: string; alt: string }>;
  headings: Record<SectionId, string>;
  about: { body: ReactNode[]; portraitAlt: string };
  experience: Job[];
  projects: { view: string; items: Record<ProjectKey, ProjectText> };
  media: { read: string; listen: string; podcast: string };
  contact: {
    email: string;
    copy: string;
    copied: string;
    copiedSr: string;
    failed: string;
    links: Record<ContactKey, { label: string; value: string }>;
  };
  newTab: string;
  backToTop: string;
}

const en: Copy = {
  skip: "Skip to content",
  nav: {
    label: "Sections",
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      media: "Media",
      contact: "Contact",
    },
    other: { lang: "fi", href: "/fi/", label: "Suomeksi" },
  },
  hero: {
    kicker: "Psychologist & AI Research Engineer",
    line: "Combining artificial intelligence and psychology to deepen our understanding of how technology can enhance human potential.",
    contact: "Get in touch",
    projects: "See projects",
  },
  fig: "Fig.",
  plates: {
    ice: {
      caption: "Helsinki, seen from the frozen sea.",
      alt: "A lone figure in a long coat stands on the sea ice, looking at the Helsinki skyline and its domed cathedral while snow falls.",
    },
    patient: {
      caption: "The patient.",
      alt: "A small robot lies on a therapist's couch while a man in a cap sits in an armchair and takes notes.",
    },
    workshop: {
      caption: "The workshop.",
      alt: "Two hands assemble a clockwork brain from gears under a desk lamp, next to a smoking soldering iron.",
    },
  },
  headings: {
    about: "About",
    experience: "Experience",
    projects: "Selected Projects",
    media: "Media Appearances",
    contact: "Get in Touch",
  },
  about: {
    body: [
      <>
        I'm Olli Airola, a psychologist (M.Psych.) and AI research engineer
        based in Helsinki, Finland. I created SocialHuman, the human-only
        social network, and I build AI tools for mental health, such as{" "}
        <span lang="fi">Sekasin-tekoälyapuri</span>,{" "}
        <span lang="fi">Vanhemmuuden tekoälyapuri</span>, and{" "}
        <span lang="fi">OP Päävalmentaja</span>. I also write{" "}
        <span lang="fi">Tekoälyn Huipulla</span>, one of the biggest AI
        newsletters in Finland.
      </>,
      "My approach to AI development is grounded in both technical expertise and a deep understanding of human psychology, ensuring technology serves humanity meaningfully.",
    ],
    portraitAlt: "Olli Airola in a cap, leaning on a wooden railing outdoors.",
  },
  experience: [
    { role: "Chief Technology Officer", company: "Jollido", period: "Apr 2025 — Present" },
    { role: "AI Research Engineer", company: "Illusian Founder Office", period: "Oct 2024 — Present" },
    {
      role: "Solopreneur",
      period: "Oct 2023 — Present",
      note: "Software projects, AI consulting, lectures, and psychological assessments",
    },
    { role: "Data & AI Consultant", company: "Codento Oy", period: "Apr 2023 — Oct 2023" },
    {
      role: "Psychologist",
      company: "Various Organizations",
      period: "Jan 2020 — Jun 2023",
      note: "4.48/5 client satisfaction rating",
    },
  ],
  projects: {
    view: "View project →",
    items: {
      socialhuman: {
        title: "SocialHuman",
        description:
          "A human-only social network. Every post is taken live in the app by a real person, with no uploads and no filters, and checked before anyone sees it. Free on iOS and Android.",
      },
      jollido: {
        title: "Jollido",
        description:
          "As CTO, building Jollido, a social anxiety app with an AI coach that helps you practice before real situations like meetings, parties, and dates. Built by psychologists. On Google Play, with iPhone coming soon.",
      },
      ilma: {
        title: "Ilma",
        description:
          "More accurate than Finland's own weather services, FMI and Foreca. Ilma blends six weather models and shows where they disagree, so you know how much to trust each forecast.",
      },
      newsletter: {
        title: "AI Newsletter",
        description:
          "One of the biggest AI newsletters in Finland. Free and in Finnish, with the goal of making Finland the #1 country in AI knowledge.",
      },
      sekasin: {
        title: "Sekasin-tekoälyapuri",
        lang: "fi",
        description:
          "Mental health AI assistant helping youth access support when human assistance isn't available. Built at Illusian Founder Office.",
      },
      parenting: {
        title: "Vanhemmuuden tekoälyapuri",
        lang: "fi",
        description:
          "24/7 AI assistant that gives parents research-based support on parenting, child development, and mental health. Made with MIELI ry, SOS-Lapsikylä, and the Finnish Red Cross.",
      },
      coach: {
        title: "OP Päävalmentaja",
        lang: "fi",
        description:
          "AI tool that helps youth sports coaches support young athletes' mental well-being and find words for difficult conversations. Made with MIELI ry and OP Pohjola.",
      },
      apartments: {
        title: "Asuntohaku – HSL-matka-ajat",
        lang: "fi",
        description:
          "Apartment search tool that compares HSL public transport, bike, and car travel times from Oikotie listings to the places you visit most.",
      },
      soar: {
        title: "SOAR",
        description:
          "An experiment where AI models trade crypto every day with paper money. The dashboard shows their returns and win rates.",
      },
      polymarket: {
        title: "Polymarket Dashboard",
        description:
          "An experiment where an AI model bets on Polymarket prediction markets with $1,000 of paper money. Every day it researches the markets with web search and financial data. The dashboard tracks every bet and its result.",
      },
      behaviourLab: {
        title: "AI Behaviour Lab",
        description:
          "Experiments on how Claude, an AI model, behaves. Each experiment has one question, one chart, and one answer.",
      },
    },
  },
  media: { read: "Read", listen: "Listen", podcast: " podcast" },
  contact: {
    email: "Email",
    copy: "Copy address",
    copied: "Copied ✓",
    copiedSr: "Email address copied",
    failed: "Copying did not work. Select the address above and copy it.",
    links: {
      linkedin: { label: "LinkedIn", value: "Connect professionally" },
      instagram: { label: "Instagram", value: "Follow @tekoalyolli" },
      tiktok: { label: "TikTok", value: "Follow @tekoalyolli" },
      newsletter: { label: "AI Newsletter", value: "One of the biggest AI newsletters in Finland" },
      github: { label: "GitHub", value: "View my open source projects" },
    },
  },
  newTab: "(opens in a new tab)",
  backToTop: "Back to top ↑",
};

// Write the Finnish as a Finn writes it first, not as a translation. Job
// titles and other English terms stay in English, with lang="en".
// Non-breaking spaces (\u00A0) keep "1 000" on one line.
const fi: Copy = {
  skip: "Siirry sisältöön",
  nav: {
    label: "Osiot",
    sections: {
      about: "Minusta",
      experience: "Työkokemus",
      projects: "Projektit",
      media: "Mediassa",
      contact: "Yhteystiedot",
    },
    other: { lang: "en", href: "/", label: "English" },
  },
  hero: {
    kicker: (
      <>
        Psykologi &amp; <span lang="en">AI Research Engineer</span>
      </>
    ),
    line: "Yhdistän tekoälyä ja psykologiaa. Haluan ymmärtää, miten teknologia voi tuoda esiin ihmisten parhaat puolet.",
    contact: "Ota yhteyttä",
    projects: "Katso projektit",
  },
  fig: "Kuva",
  plates: {
    ice: {
      caption: "Helsinki merijäältä nähtynä.",
      alt: "Pitkätakkinen hahmo seisoo yksin merijäällä lumisateessa ja katsoo kohti Helsingin rantaa ja tuomiokirkon kupolia.",
    },
    patient: {
      caption: "Potilas.",
      alt: "Pieni robotti makaa terapeutin divaanilla. Lippalakkipäinen mies istuu nojatuolissa ja tekee muistiinpanoja.",
    },
    workshop: {
      caption: "Verstas.",
      alt: "Kädet kokoavat pöytälampun valossa mekaanisia aivoja hammasrattaista. Vieressä savuaa juotoskolvi.",
    },
  },
  headings: {
    about: "Minusta",
    experience: "Työkokemus",
    projects: "Projektit",
    media: "Mediassa",
    contact: "Ota yhteyttä",
  },
  about: {
    body: [
      <>
        Olen Olli Airola, helsinkiläinen psykologi (PsM) ja{" "}
        <span lang="en">AI research engineer</span>. Kehitin
        SocialHuman-somepalvelun, jossa kaikki sisältö on oikeiden ihmisten
        tekemää. Olen
        myös ollut mukana kehittämässä mielenterveyttä tukevia
        tekoälytyökaluja, kuten
        Sekasin-tekoälyapuria, Vanhemmuuden tekoälyapuria ja OP
        Päävalmentajaa. Lisäksi kirjoitan Tekoälyn Huipulla -uutiskirjettä, joka
        on Suomen suurimpia tekoälyuutiskirjeitä.
      </>,
      "Tekoälyä kehittäessäni nojaan sekä tekniseen osaamiseen että ihmismielen tuntemukseen. Tavoitteeni on, että teknologiasta on ihmisille aidosti hyötyä.",
    ],
    portraitAlt: "Lippalakkipäinen Olli Airola nojaa ulkona puiseen kaiteeseen.",
  },
  experience: [
    { role: "Chief Technology Officer", lang: "en", company: "Jollido", period: "4/2025 alkaen" },
    { role: "AI Research Engineer", lang: "en", company: "Illusian Founder Office", period: "10/2024 alkaen" },
    {
      role: "Yksinyrittäjä",
      period: "10/2023 alkaen",
      note: "Ohjelmistoprojekteja, tekoälykonsultointia, luentoja ja psykologisia arviointeja",
    },
    { role: "Data & AI Consultant", lang: "en", company: "Codento Oy", period: "4/2023–10/2023" },
    {
      role: "Psykologi",
      company: "Useita työnantajia",
      period: "1/2020–6/2023",
      note: "Asiakastyytyväisyys 4,48/5",
    },
  ],
  projects: {
    view: "Katso projekti →",
    items: {
      socialhuman: {
        title: "SocialHuman",
        description:
          "Somepalvelu vain ihmisille. Julkaisut kuvataan suoraan sovelluksessa, eikä valmiita kuvia tai suodattimia voi käyttää. Jokainen julkaisu tarkistetaan, ennen kuin se näkyy muille. Ilmainen iOS:lle ja Androidille.",
      },
      jollido: {
        title: "Jollido",
        description:
          "Olen Jollidon CTO. Jollido on psykologien kehittämä sovellus, josta saat apua sosiaaliseen jännittämiseen: tekoälyvalmentajan kanssa voit harjoitella etukäteen jännittäviä tilanteita, kuten palavereja, juhlia ja treffejä. Ladattavissa Google Playsta, iPhonelle tulossa pian.",
      },
      ilma: {
        title: "Ilma",
        description:
          "Ilma ennustaa tarkemmin kuin Ilmatieteen laitos ja Foreca. Se yhdistää kuusi säämallia ja näyttää, kuinka paljon niiden ennusteet eroavat toisistaan. Erosta näet, miten luotettava ennuste on.",
      },
      newsletter: {
        title: "Tekoälyn Huipulla",
        description:
          "Yksi Suomen suurimmista tekoälyuutiskirjeistä. Ilmainen ja suomenkielinen. Tavoitteena on tehdä Suomesta tekoälyosaamisen ykkösmaa.",
      },
      sekasin: {
        title: "Sekasin-tekoälyapuri",
        description:
          "Tekoälyapuri, joka tukee nuoria silloin, kun Sekasin-chatissa ei ole ihmistä vastaamassa. Kehitetty Illusian Founder Officessa.",
      },
      parenting: {
        title: "Vanhemmuuden tekoälyapuri",
        description:
          "Tekoälyapuri, joka tukee vanhempia ympäri vuorokauden. Se antaa tutkittua tietoa vanhemmuudesta, lapsen kehityksestä ja mielenterveydestä. Kehitetty yhteistyössä MIELI ry:n, SOS-Lapsikylän ja Suomen Punaisen Ristin kanssa.",
      },
      coach: {
        title: "OP Päävalmentaja",
        description:
          "Tekoälytyökalu junioriurheilun valmentajille. Sen avulla valmentaja voi tukea urheilijoiden mielen hyvinvointia ja ottaa vaikeat asiat puheeksi. Kehitetty yhteistyössä MIELI ry:n ja OP Pohjolan kanssa.",
      },
      apartments: {
        title: "Asuntohaku – HSL-matka-ajat",
        description:
          "Asunnonhakutyökalu, joka näyttää Oikotien asunnoista matka-ajat paikkoihin, joissa käyt useimmin: HSL:n joukkoliikenteellä, pyörällä ja autolla.",
      },
      soar: {
        title: "SOAR",
        description:
          "Kokeilu, jossa tekoälymallit käyvät joka päivä leikkirahalla kauppaa kryptovaluutoilla. Dashboardista näkee mallien tuotot ja voittoprosentit.",
      },
      polymarket: {
        title: "Polymarket Dashboard",
        lang: "en",
        description:
          "Kokeilu, jossa tekoälymalli lyö vetoa Polymarketin ennustemarkkinoilla 1\u00A0000 leikkidollarilla. Malli käy vetokohteet läpi joka päivä verkkohaun ja taloustietojen avulla. Dashboardista näkee jokaisen vedon ja sen tuloksen.",
      },
      behaviourLab: {
        title: "AI Behaviour Lab",
        lang: "en",
        description:
          "Kokeita, joissa selvitetään, miten tekoälymalli Claude käyttäytyy. Jokaisessa kokeessa on yksi kysymys, yksi kaavio ja yksi vastaus.",
      },
    },
  },
  media: { read: "Lue", listen: "Kuuntele", podcast: " -podcast" },
  contact: {
    email: "Sähköposti",
    copy: "Kopioi osoite",
    copied: "Kopioitu ✓",
    copiedSr: "Sähköpostiosoite kopioitu",
    failed: "Kopiointi ei onnistunut. Valitse osoite ja kopioi se itse.",
    links: {
      linkedin: { label: "LinkedIn", value: "Löydät minut LinkedInistä" },
      instagram: { label: "Instagram", value: "Seuraa @tekoalyolli" },
      tiktok: { label: "TikTok", value: "Seuraa @tekoalyolli" },
      newsletter: { label: "Tekoälyn Huipulla", value: "Yksi Suomen suurimmista tekoälyuutiskirjeistä" },
      github: { label: "GitHub", value: "Avoimen lähdekoodin projektini" },
    },
  },
  newTab: "(avautuu uuteen välilehteen)",
  backToTop: "Sivun alkuun ↑",
};

export const copy: Record<Lang, Copy> = { en, fi };

/**
 * The <head> of the Finnish page. scripts/prerender.mjs writes it over the
 * English values in index.html when it makes dist/fi/index.html.
 */
export const fiHead = {
  title: "Olli Airola – psykologi & AI Research Engineer",
  description:
    "Helsinkiläinen psykologi ja AI Research Engineer. SocialHumanin tekijä, Jollidon CTO ja Tekoälyn Huipulla -uutiskirjeen kirjoittaja.",
  ogDescription:
    "Psykologi ja AI Research Engineer. SocialHumanin tekijä, joka on myös ollut mukana kehittämässä mielenterveyttä tukevia tekoälytyökaluja.",
  imageAlt: "Olli Airola, psykologi ja AI Research Engineer",
};
