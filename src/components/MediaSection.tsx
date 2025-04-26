import React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
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
    <section className="py-6 md:py-12">
      <div className="bg-white border-4 border-double border-[#ff00ff] p-3 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-[#ff6600] underline decoration-wavy decoration-[#9c27b0] underline-offset-4 md:underline-offset-8">
          <span className="inline-block animate-pulse">♦</span> MEDIA APPEARANCES <span className="inline-block animate-pulse">♦</span>
        </h2>
        
        <div className="py-4 md:py-6 px-2 md:px-4 -mx-2 overflow-visible">
          <Carousel className="w-full max-w-4xl mx-auto overflow-visible" opts={{ loop: true, align: "center" }}>
            <CarouselContent className="ml-0 overflow-visible">
              {mediaItems.map((item) => (
                <CarouselItem key={item.id} className="basis-full sm:basis-1/2 lg:basis-1/3 p-4 md:p-6 overflow-visible">
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block transition-transform duration-300 hover:-translate-y-1 active:scale-95 touch-manipulation"
                  >
                    <div className="bg-[#ccffff] border-2 border-[#ff6600] p-2 h-full transform rotate-[1deg] shadow-[3px_3px_0px_#000000] md:shadow-[4px_4px_0px_#000000]">
                      <AspectRatio ratio={4/3} className="bg-white border-2 border-[#9c27b0] overflow-hidden mb-2 md:mb-3">
                        <img 
                          src={item.image} 
                          alt={`${item.source} logo - ${item.title}`} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </AspectRatio>
                      <h3 className="text-[#9c27b0] text-base md:text-lg font-bold line-clamp-2">{item.title}</h3>
                      <p className="text-[#ff6600] text-xs md:text-sm">{item.source}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static mr-2 md:mr-4 bg-[#ffff99] border-[#ff6600] text-[#ff6600] hover:bg-[#ffff00] h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="static ml-2 md:ml-4 bg-[#ffff99] border-[#ff6600] text-[#ff6600] hover:bg-[#ffff00] h-8 w-8 md:h-10 md:w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
