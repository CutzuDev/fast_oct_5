"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";

export default function Hero() {
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

  const list: { image: string; link: string }[] = [
    { link: "", image: "1" },
    { link: "", image: "2" },
    { link: "", image: "3" },
    { link: "", image: "4" },
    { link: "", image: "5" },
    { link: "", image: "6" },
  ];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-start">
      <div className="z-[1] flex w-full flex-col items-center justify-center gap-6 p-4 pt-40">
        <h1 className="max-w-[1200px] text-center text-5xl font-bold lg:text-8xl">
          Make $1000/month through price mistakes
        </h1>
        <span className="text-center text-xl">
          Discover pricing mistakes, glitches & profit opportunities before they
          leak to the public.
        </span>
        <div className="mt-4 flex items-center justify-center gap-2 md:gap-4">
          <Link href={"https://whop.com/bandarsbounties/"}>
            <Button size={"xl"}>Join Now</Button>
          </Link>
          <Button
            size={"xl"}
            className="border-0 shadow-lg"
            variant={"secondary"}
          >
            Learn more
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user1.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user2.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user3.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user4.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user5.png" />
            </Avatar>
          </div>
          <span className="mb-1 text-sm">
            The World's #1 Source for Pricing Errors
          </span>
        </div>
        <Carousel
          setApi={setApi}
          plugins={[
            AutoScroll({
              stopOnMouseEnter: true,
              playOnInit: true,
              startDelay: 0,
            }),
          ]}
          className="z-10 h-full w-full"
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent className="flex h-full items-center justify-center">
            {list.map((item, i) => {
              return (
                <CarouselItem
                  onMouseLeave={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  onTouchEnd={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  className="flex h-full basis-[100%] items-center justify-center md:basis-1/4"
                >
                  <img
                    alt=""
                    className="overflow-hidden rounded-md border border-neutral-800/20 shadow-lg"
                    src={`/hero/product-${item.image}.png`}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="-z-98 absolute h-screen w-full">
        <div className="relative h-full w-full">
          <Image alt="" fill src={"/hero/grid-desktop.svg"} />
        </div>
      </div>
      <div className="-z-99 absolute h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute left-[45%] top-[45%] z-[-100] flex h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden opacity-75 blur-2xl">
        <Image className="scale-150" src={"/hero/gradient.svg"} alt="" fill />
      </div>
    </section>
  );
}
