import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/lib/animation";

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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ylen_logo.svg/600px-Ylen_logo.svg.png",
    title: "Tekoäly neuvoi toimittajaa laittamaan kynähameen töihin",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20083714"
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ylen_logo.svg/600px-Ylen_logo.svg.png",
    title: "Toimittaja kokeili terapiaa, jossa terapeutti ei ole ihminen",
    source: "Yle Kulttuuricocktail",
    link: "https://yle.fi/a/74-20077840"
  },
  {
    id: 3,
    image: "https://www.psyli.fi/wp-content/uploads/2020/04/psyli-round.svg",
    title: "Tekoäly ja psykologia: Vallankumouksellinen liitto",
    source: "Psykologilehti",
    link: "https://psykologilehti.fi/tekoaly-ja-psykologia-vallankumouksellinen-liitto/"
  }
];

const MediaSection = () => {
  return (
    <section className="py-16">
      <FadeIn delay={300}>
        <h2 className="text-2xl font-light tracking-wider mb-8">MEDIA APPEARANCES</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mediaItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transition-transform duration-300 hover:-translate-y-1"
                >
                  <Card className="bg-gray-900 border-gray-800 h-full">
                    <CardContent className="p-4">
                      <AspectRatio ratio={4/3} className="bg-gray-800 overflow-hidden mb-3">
                        <img 
                          src={item.image} 
                          alt={`${item.source} logo - ${item.title}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </AspectRatio>
                      <h3 className="text-white text-lg font-medium">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.source}</p>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 left-1 md:left-4 h-8 w-8 md:h-10 md:w-10" />
          <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 right-1 md:right-4 h-8 w-8 md:h-10 md:w-10" />
        </Carousel>
      </FadeIn>
    </section>
  );
};

export default MediaSection;
