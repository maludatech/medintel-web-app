"use client";

import { CircleSmall, Quote } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonies {
  testimony: string;
  name: string;
  role: string;
}

export const Testimonies: React.FC = () => {
  const testimonies: Testimonies[] = [
    {
      testimony:
        "This tool gave me peace of mind when I had symptoms and couldn’t see a doctor immediately, It’s easy to use.",
      name: "Ada M.",
      role: "University student",
    },
    {
      testimony:
        "It’s like having a mini doctor in my pocket. The predictions were surprisingly accurate and insightful.",
      name: "Jude M",
      role: "Developer",
    },
    {
      testimony:
        "As someone who tracks their health daily, I love how fast and informative MedIntel is. The platform is smart and intuitive.",
      name: "Samuel O",
      role: "Developer",
    },
    {
      testimony:
        "The speed and accuracy blew me away. Definitely keeping this in my daily health routine.",
      name: "James A",
      role: "Developer",
    },
  ];

  return (
    <section className="w-full pt-16">
      <div className="container mx-auto flex flex-col w-full gap-10 px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="w-fit flex items-center border border-[#B9C6B8] dark:border-[#DDE3DD] rounded-full p-2.5">
            <CircleSmall
              className="text-[#1E471A] fill-[#1E471A] dark:text-[#409938] dark:fill-[#409938] mr-1"
              size={14}
            />
            <h2 className="text-[#1E471A] dark:text-[#DDE3DD] text-xs font-semibold">
              Testimonies
            </h2>
          </div>
          <h1 className="text-3xl font-bold text-[#0B1909] dark:text-[#E9EDE8]">
            What Our Early Users Are Saying
          </h1>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel className="relative">
            <CarouselContent className="-ml-4">
              {testimonies.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/3 lg:basis-1/3"
                >
                  <Card className="rounded-2xl shadow-sm border bg-[#F8F8F8] dark:bg-[#0D200C] h-full flex flex-col justify-between">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <div className="flex items-start">
                        <Quote size={30} className="text-[#55CC4B] font-bold" />
                        <p className="text-lg font-medium text-[#0B1909] dark:text-[#E9EDE8] leading-relaxed">
                          {item.testimony}
                        </p>
                      </div>
                      <div className="flex flex-col mt-4 items-end">
                        <h3 className="text-sm font-semibold text-[#0B1909] dark:text-[#E9EDE8]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#1E471A] dark:text-[#B9C6B8]">
                          {item.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 border-none shadow-none text-[#55CC4B]" />
              <CarouselNext className="static translate-y-0 border-none shadow-none text-[#55CC4B]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
