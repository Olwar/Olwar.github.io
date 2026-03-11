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
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ylen_logo.svg/600px-Ylen_logo.svg.png",
    title: "Tekoäly neuvoi toimittajaa laittamaan kynähameen töihin",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20083714",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ylen_logo.svg/600px-Ylen_logo.svg.png",
    title: "Toimittaja kokeili terapiaa, jossa terapeutti ei ole ihminen",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20077840",
  },
  {
    id: 3,
    image: "https://www.psyli.fi/wp-content/uploads/2020/04/psyli-round.svg",
    title: "Tekoäly ja psykologia: Vallankumouksellinen liitto",
    source: "Psykologilehti",
    link: "https://psykologilehti.fi/tekoaly-ja-psykologia-vallankumouksellinen-liitto/",
  },
];

const MediaSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-r from-pink via-magenta to-violet bg-clip-text text-transparent">
              Media Appearances
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, align: "center" }}>
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
                    <div className="cyber-card p-6 h-full transition-all duration-500 hover:scale-105 hover:border-pink/50 relative overflow-hidden">
                      {/* Neon glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-magenta/0 via-violet/10 to-magenta/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="space-y-4 relative z-10">
                        <AspectRatio
                          ratio={4 / 3}
                          className="bg-surface/50 rounded-lg overflow-hidden border border-violet/20 group-hover:border-magenta/40 transition-all duration-300"
                        >
                          <img
                            src={item.image}
                            alt={`${item.source} logo`}
                            className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                          />
                        </AspectRatio>

                        <div className="space-y-2">
                          <h3 className="font-sans text-lg font-bold text-text group-hover:text-pink transition-colors duration-300 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-violet font-semibold">
                            {item.source}
                          </p>
                        </div>

                        <div className="pt-2">
                          <span className="text-sm font-medium text-teal group-hover:text-pink transition-all duration-300 tracking-wide inline-flex items-center">
                            <span className="group-hover:text-glow-magenta">Read article →</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static bg-surface/60 backdrop-blur-sm hover:bg-surface border-violet/30 hover:border-magenta/50 text-text hover:text-pink h-10 w-10 transition-all duration-300 hover:shadow-neon-magenta" />
              <CarouselNext className="static bg-surface/60 backdrop-blur-sm hover:bg-surface border-violet/30 hover:border-magenta/50 text-text hover:text-pink h-10 w-10 transition-all duration-300 hover:shadow-neon-magenta" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;