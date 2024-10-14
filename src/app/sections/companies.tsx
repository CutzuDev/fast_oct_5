"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Companies() {
  const list: string[] = [
    "amazon", //1
    "bestbuy", //2
    "walmart", //3
    "woot", //4
    "hewlettpackard", //5
    "ulta", //6
    "target", //7
    "samsclub", //8
    "lowes", //9
    "homedepot", //10
    "logitech", //11
    "chewy", //12
    "costco", //13
    "newegg", //14
    "qvc", //15
    "gnc", //16
    "guitarcenter", //17
    "petco", //18
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
    <section className="relative mt-20 flex w-full flex-col items-center justify-center p-4">
      <div id="sitelist" className="absolute -top-[10%] left-0" />

      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start">
        <div className="hidden flex-col items-center justify-center gap-8 lg:flex">
          {[...list.slice(0, 3), list[6], list[12]].map((e, i) => {
            return (
              <div key={i} className="relative aspect-[21/9] h-16">
                <Image src={`/rlogo/${e}.svg`} fill alt="" />
              </div>
            );
          })}
        </div>

        <div className="flex h-full max-w-[900px] flex-col items-center justify-end gap-9">
          <div className="z-10 flex max-w-[900px] flex-col items-center justify-center gap-4 text-center lg:shadow-[0_25px_100px_50px_rgba(255,255,255,1)]">
            <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
              Relentlessly tracking every movement.
            </span>
            <span className="max-w-[700px] text-sm">
              We monitor over 1,000 + retailers for price drops, ensuring our
              members are instantly alerted to mistakes during product changes
              or listings. Always first, never second.
            </span>
            <Link href={"https://whop.com/bandarsbounties/"}>
              <Button className="px-8">Get started</Button>
            </Link>
          </div>
          <div className="hidden flex-wrap items-center justify-center gap-8 lg:flex">
            {[...list.slice(7, 11), ...list.slice(13, 17)].map((e, i) => {
              return (
                <div
                  key={i}
                  className="relative hidden aspect-[21/9] h-16 w-1/5 md:block"
                >
                  <Image src={`/rlogo/${e}.svg`} fill alt="" />
                </div>
              );
            })}
          </div>

          {/* {list.map((e, i) => {
            return (
              <div
                key={i}
                className="relative block aspect-[21/9] h-16 w-1/3 md:hidden"
              >
                <Image src={`/rlogo/${e}.svg`} fill alt="" />
              </div>
            );
          })} */}
        </div>
        <Carousel
          setApi={setApi}
          plugins={[
            AutoScroll({
              stopOnMouseEnter: true,
              playOnInit: true,
              startDelay: 0,
              speed: 0.9,
            }),
          ]}
          className="mt-10 flex w-full max-w-[600px] lg:hidden"
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent>
            {list.slice(0, 9).map((e, i) => {
              return (
                <CarouselItem
                  key={i}
                  onMouseLeave={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  onTouchEnd={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  className="flex basis-1/3 items-center justify-center"
                >
                  <div className="relative aspect-[21/9] h-16">
                    <Image src={`/rlogo/${e}.svg`} fill alt="" />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <Carousel
          setApi={setApi}
          plugins={[
            AutoScroll({
              stopOnMouseEnter: true,
              playOnInit: true,
              speed: 0.9,
              startDelay: 500,
              direction: "backward",
            }),
          ]}
          className="mt-10 flex w-full max-w-[600px] lg:hidden"
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent>
            {list.slice(9, list.length).map((e, i) => {
              return (
                <CarouselItem
                  key={i}
                  onMouseLeave={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  onTouchEnd={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  className="flex basis-1/3 items-center justify-center"
                >
                  <div className="relative aspect-[21/9] h-16">
                    <Image src={`/rlogo/${e}.svg`} fill alt="" />
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
        <div className="hidden flex-col items-center justify-center gap-8 lg:flex">
          {[...list.slice(3, 6), list[11], list[17]].map((e, i) => {
            return (
              <div key={i} className="relative aspect-[21/9] h-16">
                <Image src={`/rlogo/${e}.svg`} fill alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
