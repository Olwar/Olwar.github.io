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
  hero: { kicker: string; line: string; contact: string; projects: string };
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
          "More accurate than Finland's own weather services, FMI and Foreca. Ilma blends six weather models and shows where they disagree, so you know how much to trust each forecast. Every night it checks its temperature, wind, and rain forecasts at 14 Finnish weather stations.",
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
          "An experiment where AI models trade crypto every day with paper money. Each position closes only at its take-profit or stop-loss, and every trade is logged. The dashboard shows returns, win rates against breakeven, and confidence intervals.",
      },
      polymarket: {
        title: "Polymarket Dashboard",
        description:
          "An experiment where an AI model bets on Polymarket prediction markets with $1,000 of paper money. Every day it researches the markets with web search and financial data, and it bets only when its own probability is at least 20% higher than the market's. The dashboard tracks every bet and its result.",
      },
      behaviourLab: {
        title: "AI Behaviour Lab",
        description:
          "Experiments on how Claude, an AI model, behaves. Each experiment has one question, one chart, and one answer. The method and the decision rule are fixed and reviewed before the run.",
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

// Non-breaking spaces (\u00A0) keep "1 000" and "20 %" on one line. A soft
// hyphen (\u00AD) lets a long compound break inside a narrow card.
const fi: Copy = {
  skip: "Siirry sisältöön",
  nav: {
    label: "Osiot",
    sections: {
      about: "Minusta",
      experience: "Työkokemus",
      projects: "Projektit",
      media: "Media",
      contact: "Yhteys",
    },
    other: { lang: "en", href: "/", label: "English" },
  },
  hero: {
    kicker: "Psykologi ja tekoälykehittäjä",
    line: "Yhdistän tekoälyn ja psykologian, jotta ymmärtäisimme paremmin, miten teknologia voi auttaa ihmistä kasvamaan täyteen mittaansa.",
    contact: "Ota yhteyttä",
    projects: "Katso projektit",
  },
  fig: "Kuva",
  plates: {
    ice: {
      caption: "Helsinki jäätyneeltä mereltä nähtynä.",
      alt: "Yksinäinen hahmo pitkässä takissa seisoo merijäällä lumisateessa ja katsoo Helsingin siluettia ja tuomiokirkon kupolia.",
    },
    patient: {
      caption: "Potilas.",
      alt: "Pieni robotti makaa terapeutin sohvalla, ja lippalakkipäinen mies istuu nojatuolissa ja tekee muistiinpanoja.",
    },
    workshop: {
      caption: "Verstas.",
      alt: "Kaksi kättä kokoaa hammasrattaista mekaanisia aivoja pöytälampun valossa savuavan juotoskolvin vieressä.",
    },
  },
  headings: {
    about: "Minusta",
    experience: "Työkokemus",
    projects: "Valitut projektit",
    media: "Mediassa",
    contact: "Ota yhteyttä",
  },
  about: {
    body: [
      "Olen Olli Airola, psykologi (PsM) ja tekoälykehittäjä Helsingistä. Loin SocialHumanin, vain ihmisille tarkoitetun somepalvelun, ja teen tekoälytyökaluja mielenterveyden tueksi, kuten Sekasin-tekoälyapuria, Vanhemmuuden tekoälyapuria ja OP Päävalmentajaa. Kirjoitan myös Tekoälyn Huipulla -uutiskirjettä, joka on yksi Suomen suurimmista tekoälyuutiskirjeistä.",
      "Kehitän tekoälyä sekä teknisen osaamisen että ihmismielen syvällisen tuntemuksen pohjalta, jotta teknologiasta olisi ihmisille todellista hyötyä.",
    ],
    portraitAlt: "Olli Airola lippalakissa nojaa ulkona puiseen kaiteeseen.",
  },
  experience: [
    { role: "Teknologiajohtaja (CTO)", company: "Jollido", period: "4/2025 alkaen" },
    { role: "Tutkimusinsinööri, tekoäly", company: "Illusian Founder Office", period: "10/2024 alkaen" },
    {
      role: "Yksinyrittäjä",
      period: "10/2023 alkaen",
      note: "Ohjelmistoprojekteja, tekoälykonsultointia, luentoja ja psykologisia arviointeja",
    },
    { role: "Data- ja tekoälykonsultti", company: "Codento Oy", period: "4/2023–10/2023" },
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
          "Somepalvelu vain ihmisille. Oikea ihminen kuvaa jokaisen julkaisun suoraan sovelluksessa ilman valmiita kuvia ja suodattimia, ja julkaisu tarkistetaan ennen kuin kukaan näkee sen. Ilmainen iOS:lle ja Androidille.",
      },
      jollido: {
        title: "Jollido",
        description:
          "Rakennan teknologiajohtajana Jollidoa, sovellusta sosiaaliseen jännittämiseen. Sen tekoälyvalmentajan kanssa voit harjoitella ennen oikeita tilanteita, kuten palavereja, juhlia ja treffejä. Psykologien kehittämä. Saatavilla Google Playssa, iPhonelle tulossa pian.",
      },
      ilma: {
        title: "Ilma",
        description:
          "Tarkempi kuin kotimaiset sääpalvelut Ilmatieteen laitos ja Foreca. Ilma yhdistää kuusi säämallia ja näyttää, missä ne ovat eri mieltä, joten tiedät, kuinka paljon kuhunkin ennusteeseen voi luottaa. Joka yö se vertaa lämpötila-, tuuli- ja sade-ennusteitaan 14 suomalaisen sääaseman mittauksiin.",
      },
      newsletter: {
        title: "Tekoäly\u00ADuutiskirje",
        description:
          "Yksi Suomen suurimmista tekoälyuutiskirjeistä. Ilmainen ja suomenkielinen. Tavoitteena on tehdä Suomesta tekoälyosaamisen ykkösmaa.",
      },
      sekasin: {
        title: "Sekasin-tekoälyapuri",
        description:
          "Tekoälyapuri, joka auttaa nuoria saamaan mielenterveyden tukea silloinkin, kun ihmistä ei ole tavoitettavissa. Kehitetty Illusian Founder Officessa.",
      },
      parenting: {
        title: "Vanhemmuuden tekoälyapuri",
        description:
          "Ympäri vuorokauden toimiva tekoälyapuri, joka antaa vanhemmille tutkittuun tietoon perustuvaa tukea vanhemmuuteen, lapsen kehitykseen ja mielenterveyteen. Tehty yhdessä MIELI ry:n, SOS-Lapsikylän ja Suomen Punaisen Ristin kanssa.",
      },
      coach: {
        title: "OP Päävalmentaja",
        description:
          "Tekoälytyökalu, joka auttaa junioriurheilun valmentajia tukemaan nuorten urheilijoiden mielen hyvinvointia ja löytämään sanat vaikeisiin keskusteluihin. Tehty yhdessä MIELI ry:n ja OP Pohjolan kanssa.",
      },
      apartments: {
        title: "Asuntohaku – HSL-matka-ajat",
        description:
          "Asunnonhakutyökalu, joka vertaa matka-aikoja Oikotien asunnoista paikkoihin, joissa käyt useimmin: HSL:n joukkoliikenteellä, pyörällä ja autolla.",
      },
      soar: {
        title: "SOAR",
        description:
          "Kokeilu, jossa tekoälymallit käyvät joka päivä kryptokauppaa leikkirahalla. Jokainen positio suljetaan vasta voitto- tai tappiorajalla, ja jokainen kauppa kirjataan. Kojelauta näyttää tuotot, voittoprosentit suhteessa kannattavuusrajaan ja luottamusvälit.",
      },
      polymarket: {
        title: "Polymarket-kojelauta",
        description:
          "Kokeilu, jossa tekoälymalli lyö vetoa Polymarketin ennustemarkkinoilla 1\u00A0000 leikkidollarilla. Joka päivä se tutkii markkinoita verkkohaun ja taloustietojen avulla ja lyö vetoa vain, kun sen oma todennäköisyysarvio on vähintään 20\u00A0% markkinoiden arviota korkeampi. Kojelauta seuraa jokaista vetoa ja sen tulosta.",
      },
      behaviourLab: {
        title: "AI Behaviour Lab",
        lang: "en",
        description:
          "Kokeita siitä, miten tekoälymalli Claude käyttäytyy. Jokaisessa kokeessa on yksi kysymys, yksi kaavio ja yksi vastaus. Menetelmä ja päätössääntö lyödään lukkoon ja tarkistetaan ennen kuin koe tehdään.",
      },
    },
  },
  media: { read: "Lue", listen: "Kuuntele", podcast: " -podcast" },
  contact: {
    email: "Sähköposti",
    copy: "Kopioi osoite",
    copied: "Kopioitu ✓",
    copiedSr: "Sähköpostiosoite kopioitu",
    failed: "Kopiointi ei onnistunut. Valitse osoite yltä ja kopioi se.",
    links: {
      linkedin: { label: "LinkedIn", value: "Verkostoidutaan" },
      instagram: { label: "Instagram", value: "Seuraa @tekoalyolli" },
      tiktok: { label: "TikTok", value: "Seuraa @tekoalyolli" },
      newsletter: { label: "Tekoälyuutiskirje", value: "Yksi Suomen suurimmista tekoälyuutiskirjeistä" },
      github: { label: "GitHub", value: "Avoimen lähdekoodin projektini" },
    },
  },
  newTab: "(avautuu uudessa välilehdessä)",
  backToTop: "Takaisin ylös ↑",
};

export const copy: Record<Lang, Copy> = { en, fi };

/**
 * The <head> of the Finnish page. scripts/prerender.mjs writes it over the
 * English values in index.html when it makes dist/fi/index.html.
 */
export const fiHead = {
  title: "Olli Airola – psykologi ja tekoälykehittäjä",
  description:
    "Helsinkiläinen psykologi ja tekoälykehittäjä. SocialHumanin luoja, Jollidon teknologiajohtaja ja Tekoälyn Huipulla -uutiskirjeen kirjoittaja.",
  ogDescription:
    "Psykologi ja tekoälykehittäjä, joka loi vain ihmisille tarkoitetun SocialHuman-somepalvelun ja tekee tekoälytyökaluja mielenterveyden tueksi.",
  imageAlt: "Olli Airola, psykologi ja tekoälykehittäjä",
};
