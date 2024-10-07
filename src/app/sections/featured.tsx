"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

export default function Featured() {
  const list: { image: string; link: string[] }[] = [
    {
      image: "bulletintube",
      link: [
        "https://bulletintube.com/speed-reaction-on-messi-rossana-pansion-controversy-prime-hydrate-2-25m-loss/",
      ],
    },
    {
      image: "dexerto",
      link: [
        "https://www.tiktok.com/@dexerto/video/7297292911199210784",
        "https://m.youtube.com/watch?v=dcjuJAT5_5U",
      ],
    },
    {
      image: "firstsportz",
      link: [
        "https://firstsportz.com/esports-news-dillon-danis-trolls-logan-paul-and-ksi-for-accidentally-giving-away-over-2250000-worth-of-boxes-of-prime-hydration-sticks-for-free/",
      ],
    },
    {
      image: "meaw",
      link: [
        "https://meaww.com/internet-calls-dillon-danis-irrelevant-as-he-mocks-logan-paul-and-ks-is-prime-hydration-for-mistake-that-cost-over-2-m",
      ],
    },
    {
      image: "sportskeeda",
      link: [
        "https://www.sportskeeda.com/mma/news-dillon-danis-trolls-bone-heads-ksi-logan-paul-prime-hydration-brand-accidentally-gives-away-250-000-boxes-products-free",
      ],
    },
    {
      image: "thesportsrush",
      link: [
        "https://thesportsrush.com/ufc-news-boxing-after-2000000-mishap-dillon-danis-trolls-logan-paul-ksi-with-three-words/",
      ],
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center gap-6">
      <span>As featured on</span>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1500,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full max-w-[900px] px-10"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {list.map((e, i) => {
            return (
              <CarouselItem
                onClick={(a) => {
                  e.link.forEach((item) => {
                    window.open(item, "_blank");
                  });
                }}
                className="pl-10 hover:cursor-pointer md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-video w-full object-contain">
                  <Image className="" alt="" src={`/aso/${e.image}.svg`} fill />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
