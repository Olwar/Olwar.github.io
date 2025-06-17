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
    <section className="py-8 md:py-12 lg:py-14">
      <div className="space-y-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            Media Appearances
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
                    <div className="elegant-card p-6 h-full transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
                      <div className="space-y-4">
                        <AspectRatio
                          ratio={4 / 3}
                          className="bg-muted/20 rounded-md overflow-hidden border border-border"
                        >
                          <img
                            src={item.image}
                            alt={`${item.source} logo`}
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
                            Read article →
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
