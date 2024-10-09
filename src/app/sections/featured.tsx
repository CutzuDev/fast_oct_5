"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";
import { useEffect, useState } from "react";

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
      link: ["https://www.tiktok.com/@dexerto/video/7297292911199210784"],
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Add event listeners

    // Cleanup event listeners on unmount
  }, [api]);

  return (
    <section className="flex w-full flex-col items-center justify-center gap-2 md:gap-6">
      <span>As featured on</span>
      <Carousel
        setApi={setApi}
        plugins={[
          AutoScroll({
            stopOnMouseEnter: true,
            startDelay: 0,
            playOnInit: true,
          }),
        ]}
        className="w-full max-w-[900px]"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {list.map((e, i) => {
            return (
              <CarouselItem
                key={i}
                onMouseLeave={(e) => {
                  api?.plugins().autoScroll.play(0);
                }}
                onTouchEnd={(e) => {
                  api?.plugins().autoScroll.play(0);
                }}
                onClick={(a) => {
                  e.link.forEach((item) => {
                    window.open(item, "_blank");
                  });
                }}
                className="basis-[40%] pl-10 hover:cursor-pointer md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-video w-full object-contain">
                  <Image className="" alt="" src={`/aso/${e.image}.svg`} fill />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      {/* <div className="flex w-full max-w-[600px] items-center justify-center gap-2 py-2 lg:hidden">
        {new Array(count + 1).fill(0, 1, count + 1).map((e, index) => {
          return (
            <div
              onClick={() => {
                api?.scrollTo(index - 1);
              }}
              key={index}
              className="flex h-6 basis-1/12 items-center justify-center"
            >
              <div
                style={{
                  backgroundColor:
                    current === index ? "#F9B897" : "rgba(0,0,0,0.1)",
                }}
                className="h-1 w-full rounded-md"
              />
            </div>
          );
        })}
      </div> */}
    </section>
  );
}
