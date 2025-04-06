
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
    image: "https://picsum.photos/id/1/400/300",
    title: "Tech Innovation Interview",
    source: "Tech Magazine",
    link: "#"
  },
  {
    id: 2,
    image: "https://picsum.photos/id/20/400/300",
    title: "Future of Development",
    source: "Digital Trends",
    link: "#"
  },
  {
    id: 3,
    image: "https://picsum.photos/id/48/400/300",
    title: "Industry Leaders Panel",
    source: "Tech Conference",
    link: "#"
  },
  {
    id: 4,
    image: "https://picsum.photos/id/96/400/300",
    title: "Innovation Spotlight",
    source: "Developer Weekly",
    link: "#"
  }
];

const MediaSection: React.FC = () => {
  return (
    <div className="py-16">
      <FadeIn delay={300}>
        <h2 className="text-2xl font-light tracking-wider mb-8">MEDIA APPEARANCES</h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {mediaItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <AspectRatio ratio={4/3} className="bg-gray-800 overflow-hidden mb-3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                    <h3 className="text-white text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.source}</p>
                    <a 
                      href={item.link} 
                      className="text-gray-400 hover:text-white text-sm mt-2 inline-block transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
          <CarouselNext className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700" />
        </Carousel>
      </FadeIn>
    </div>
  );
};

export default MediaSection;
