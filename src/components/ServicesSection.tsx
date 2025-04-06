
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/lib/animation";

interface Service {
  id: number;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Software Development",
    description: "Custom software solutions tailored to meet specific business needs and challenges."
  },
  {
    id: 2,
    title: "Technical Consulting",
    description: "Expert guidance on technology decisions, architecture, and implementation strategies."
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Creating intuitive, user-centered designs that enhance the user experience."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <div className="py-16">
      <FadeIn delay={400}>
        <h2 className="text-2xl font-light tracking-wider mb-8">SERVICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default ServicesSection;
