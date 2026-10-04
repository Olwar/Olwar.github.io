import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MediaItem {
  id: number;
  image: string;
  title: string;
  source: string;
  link: string;
  cta?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    image: "/apu-logo.png",
    title: "Moni hakee mielenterveysapua tekoälyltä, mutta siinä on riskinsä",
    source: "Apu",
    link: "https://www.apu.fi/artikkelit/moni-hakee-mielenterveysapua-tekoalylta-mutta-siina-on-riskinsa",
  },
  {
    id: 2,
    image: "/yle-logo.svg",
    title: "Tekoäly neuvoi toimittajaa laittamaan kynähameen töihin",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20083714",
  },
  {
    id: 3,
    image: "/yle-logo.svg",
    title: "Toimittaja kokeili terapiaa, jossa terapeutti ei ole ihminen",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20077840",
  },
  {
    id: 4,
    image: "https://www.psyli.fi/wp-content/uploads/2020/04/psyli-round.svg",
    title: "Tekoäly ja psykologia: Vallankumouksellinen liitto",
    source: "Psykologilehti",
    link: "https://psykologilehti.fi/tekoaly-ja-psykologia-vallankumouksellinen-liitto/",
  },
  {
    id: 5,
    image: "/niinku-asia-on.jpg",
    title: "ChatGPT terapeuttina",
    source: "Niinku asia on podcast",
    link: "https://podcasts.apple.com/fi/podcast/chatgpt-terapeuttina-olli-airola-pjk-111/id1464577586?i=1000714318245",
    cta: "Listen to episode",
  },
  {
    id: 6,
    image: "/aika-hyva-maailma.jpg",
    title: "Tekoälyn huipulla: vieraana Olli Airola",
    source: "AIka Hyvä Maailma podcast",
    link: "https://podcasts.apple.com/fi/podcast/016-teko%C3%A4lyn-huipulla-vieraana-olli-airola-teko%C3%A4lyolli/id1715699694?i=1000668616668",
    cta: "Listen to episode",
  },
];

const MediaSection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-14">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Media Appearances
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent className="-ml-6">
              {mediaItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-6"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="elegant-card p-6 h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                      <div className="space-y-4">
                        <AspectRatio
                          ratio={4 / 3}
                          className="bg-muted/20 rounded-md overflow-hidden border border-border"
                        >
                          <img
                            src={item.image}
                            alt={item.source}
                            className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                          />
                        </AspectRatio>

                        <div className="space-y-2">
                          <h3 className="font-serif text-lg font-medium text-charcoal group-hover:text-navy transition-colors duration-300 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-charcoal/60 font-medium">
                            {item.source}
                          </p>
                        </div>

                        <div className="pt-2">
                          <span className="text-sm font-medium text-bronze group-hover:text-navy transition-colors duration-300 tracking-wide">
                            {item.cta ?? "Read article"} →
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static bg-card hover:bg-muted border-border text-charcoal hover:text-navy h-10 w-10" />
              <CarouselNext className="static bg-card hover:bg-muted border-border text-charcoal hover:text-navy h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
