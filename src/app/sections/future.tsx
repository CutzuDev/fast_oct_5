"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function Future() {
  const list: { image: string; title: string; description: string }[] = [
    {
      image: "crown",
      title: "First time Pricing Errors",
      description:
        "Unmatched access to pricing errors before others. Be the first to capitalize with our exclusive technology and insider econnections.",
    },
    {
      image: "lightningbolt",
      title: "Instant Major Glitch Alerts",
      description:
        "Get real-time notifications on significant company glitches. Act quickly with our exclusive alerts, ahead of the crowd.",
    },
    {
      image: "gift",
      title: "Claim Free Products",
      description:
        "Access items mistakenly priced at $0.00. Receive alerts to get gadgets, apparel, and more without spending a penny.",
    },
    {
      image: "tea",
      title: "Enjoy Free Meals",
      description:
        "Track promotions and errors from top restaurants. Get codes for free meals and alerts on $0.00 food items, ensuring delicious deals.",
    },
    {
      image: "chatbubble",
      title: "Expert Mentoring Support",
      description:
        "Personalized advice when needed. Our experts provide tailored guidance through one-on-one mentoring, ensuring your success.",
    },
    {
      image: "heartnotification",
      title: "Helpful Member Network",
      description:
        "Engage with a supportive community. Get answers, share tips, and connect with like-minded members ready to assist.",
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
  }, [api]);
  return (
    <section className="relative mt-20 flex w-full flex-col items-center justify-center gap-10 p-4 md:mt-40">
      <div id="features" className="absolute -top-[10%] left-0" />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
          Decide your future today and transform your life.
        </span>
        <span className="max-w-[700px] text-sm">
          Your future is in your hands. Choose financial independence and
          fulfillment.
          <br /> Make the right decision today and start building your dream
          life. Take control and embrace your potential.
        </span>
      </div>
      <div className="mt-10 hidden max-w-[1300px] flex-wrap items-stretch justify-center gap-4 lg:flex">
        {list.map((e, i) => {
          return (
            <div
              key={i}
              className="flex max-w-[400px] flex-col items-start justify-center gap-2 rounded-md border border-neutral-800/10 p-4"
            >
              <div className="relative aspect-square h-10">
                <Image fill alt="" src={`/features/${e.image}.png`} />
              </div>
              <span className="text-lg">{e.title}</span>
              <span className="text-sm">{e.description}</span>
            </div>
          );
        })}
      </div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        className="flex w-full lg:hidden"
        opts={{ loop: true, align: "center" }}
      >
        <CarouselContent>
          {list.map((e, i) => {
            return (
              <CarouselItem className="basis-[100%]">
                <div
                  key={i}
                  className="flex w-full flex-col items-start justify-center gap-2 rounded-md border border-neutral-800/10 p-4"
                >
                  <div className="relative aspect-square h-10">
                    <Image fill alt="" src={`/features/${e.image}.png`} />
                  </div>
                  <span className="text-lg">{e.title}</span>
                  <span className="text-sm">{e.description}</span>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex w-full max-w-[600px] items-center justify-center gap-2 py-2 lg:hidden">
        {/* Slide {current} of {count} */}
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
      </div>
    </section>
  );
}
