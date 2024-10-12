"use client";
import { Card, LayoutGrid } from "@/components/ui/layout-grid";
import { cn } from "@/lib/utils";
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

export default function Grid() {
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
    <section className="relative mt-20 flex w-full flex-col items-center justify-center gap-10 p-4">
      <div id="reviews" className="absolute -top-[10%] left-0" />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
          Hear the buzz from our community.
        </span>
        <span className="max-w-[700px] text-sm">
          Discover why our community loves us! Read firsthand experiences and
          success stories from our members who have transformed their lives with
          our expert guidance and unique opportunities.
        </span>
      </div>
      <div className="hidden w-full max-w-[1200px] grid-cols-1 grid-rows-4 gap-4 md:grid md:grid-cols-3">
        {gridCardList.map((item, i) => {
          return <GridCard key={i} {...item} />;
        })}
      </div>
      <div className="grid w-full max-w-[1200px] grid-cols-1 grid-rows-4 md:hidden md:grid-cols-3">
        <GridCard {...gridCardList[2]} />
        <Carousel
          setApi={setApi}
          plugins={[
            AutoScroll({
              stopOnMouseEnter: true,
              playOnInit: true,
              startDelay: 0,
            }),
          ]}
          className="mt-5 h-full"
          opts={{ loop: true, align: "center" }}
        >
          <CarouselContent>
            {[
              ...gridCardList.slice(0, 2),
              ...gridCardList.slice(4, gridCardList.length),
            ].map((item, i) => {
              return (
                <CarouselItem
                  onMouseLeave={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  onTouchEnd={(e) => {
                    api?.plugins().autoScroll.play(0);
                  }}
                  className="flex h-full basis-[100%] items-center justify-center"
                >
                  <GridCard key={i} {...item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
        <GridCard {...gridCardList[3]} />
      </div>
      {/* <LayoutGrid cards={} /> */}
    </section>
  );
}

// const cards: Card[] = [
//   { id: 1, content: <GridCard />, className: "cdol-span-1", thumbnail:  },
// ];

type gridCardProps = {
  content: JSX.Element | React.ReactNode;
  user: { name: string; date: string };
  imageCustom?: JSX.Element | React.ReactNode;
  image?: string;
  className?: string;
};

const gridCardList: gridCardProps[] = [
  {
    content: (
      <span>
        "Best product/service I've ever purchased. I'm a college student so I
        can't be as involved as I would like to be but I have had crazy deals
        for both personal use and resale use. Worth every penny and more."
      </span>
    ),
    user: { name: "hibbster32", date: "Member since November 2023" },
    image: "/testimonial/profilepicture1.png",
  },
  {
    content: (
      <span>
        "I've always been in and out and between groups, but from all of my own
        personal research and groups that l've been in BB is clearly the best.
        Timestamps don't lie and prove that if you want to be first you need to
        be in BB."
      </span>
    ),
    user: { name: "toone", date: "Member since November 2023" },
    image: "/testimonial/profilepicture2.png",
  },
  {
    content: (
      <>
        <Link
          href={"https://x.com/bandarsbounties/status/1719872099211428150"}
          target="_blank"
          className="flex h-full flex-col items-center justify-between"
        >
          <span className="w-full text-xl font-bold md:text-3xl">
            bandar's bounties
          </span>
          <span className="mb-10 w-full font-semibold md:text-xl">
            "KSI x Logan Paul's Prime Hydration Brand just accidentally gave
            away 250,283 boxes of PRIME Hydration Sticks for FREE. 100% OFF."
          </span>
        </Link>
        <div className="absolute left-0 top-0 -z-[9] h-full w-full rounded-lg bg-gradient-to-tl from-purple-500 to-transparent to-35%" />
        <div className="absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-gradient-to-tr from-amber-500 from-10% via-pink-500 to-cyan-300 to-85%" />
      </>
    ),
    user: { name: "Bandar's Bounties", date: "Member since November 2023" },
    imageCustom: (
      <div className="relative aspect-square w-10 rounded-md bg-white">
        <Image
          alt=""
          className="p-2"
          fill
          src={"/testimonial/bandarbountiesicon.svg"}
        />
      </div>
    ),
    className:
      "relative row-start-4 md:row-start-auto row-span-2 text-white -z-[11]",
  },
  {
    content: (
      <Link
        href={
          "https://www.sportskeeda.com/mma/news-dillon-danistrolls-bone-heads-ksi-logan-paul-prime-hydration-brand-accidentallygives-away-250-000-boxes-products-free"
        }
        target="_blank"
        className="flex w-full flex-col items-start justify-between md:h-full"
      >
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          width="260"
          height="80"
          viewBox="0 0 173.02 30"
        >
          <path
            id="sportskeeda"
            d="M17.891,4.726l-.328,1.347a.4.4,0,0,1-.4.328H9.151q-.8,0-.91.473l-.109.437q-.073.437.655.437h5.207q2.549,0,2.549,1.894A4.393,4.393,0,0,1,16.4,10.7l-.546,2.221a3.969,3.969,0,0,1-1.457,2.221,4.271,4.271,0,0,1-2.695.874H.958a.4.4,0,0,1-.364-.51l.328-1.347a.4.4,0,0,1,.4-.291H9.37a.781.781,0,0,0,.874-.583l.109-.364q.146-.583-.619-.583H4.381q-2.4,0-2.4-1.894a4.115,4.115,0,0,1,.146-1.02L2.67,7.166A3.467,3.467,0,0,1,4.235,5.054,4.986,4.986,0,0,1,7,4.253H17.49a.4.4,0,0,1,.4.473Zm15.8,3.059-1.165,4.734a4.193,4.193,0,0,1-4.479,3.5H23.28a1.088,1.088,0,0,1-1.2-1.165h-.073l-1.311,5.426a.255.255,0,0,1-.255.182H15.05a.255.255,0,0,1-.255-.291L18.728,4.435a.255.255,0,0,1,.218-.182h5.062a.255.255,0,0,1,.255.291.25.25,0,0,0,.4.255,1.851,1.851,0,0,1,1.2-.546h5.1q2.877,0,2.877,2.4A4.953,4.953,0,0,1,33.695,7.785Zm-5.79-.4a1.383,1.383,0,0,0,.036-.328q0-.51-.692-.51H24.882a.963.963,0,0,0-.983.838l-1.384,5.462a1.165,1.165,0,0,0-.036.328q0,.546.619.546h2.367a1.013,1.013,0,0,0,1.056-.874Zm22.322.255-1.2,4.952A5.014,5.014,0,0,1,47.714,15.1a3.977,3.977,0,0,1-2.8.91h-9.5q-2.622,0-2.622-2A5.791,5.791,0,0,1,33,12.592l1.238-4.952a4.812,4.812,0,0,1,1.275-2.513,4.17,4.17,0,0,1,2.8-.874H47.86q2.585,0,2.585,2A5.379,5.379,0,0,1,50.227,7.639ZM44.4,7.421a1.384,1.384,0,0,0,.073-.328q0-.546-.692-.546H41.232a.994.994,0,0,0-1.02.874L38.865,12.81a1.456,1.456,0,0,0-.073.364q0,.546.655.546H42a1.024,1.024,0,0,0,1.056-.91Zm18.681-2.4-.51,2.039a.619.619,0,0,1-.583.473H59.476a4.572,4.572,0,0,0-2.112.364,2,2,0,0,0-.874,1.457l-1.566,6.19a.619.619,0,0,1-.583.473H49.717a.619.619,0,0,1-.619-.765L51.72,4.726a.619.619,0,0,1,.619-.473h4.188a.619.619,0,0,1,.583.765l-.291,1.129h.073a4.086,4.086,0,0,1,1.457-1.493,4.412,4.412,0,0,1,2.039-.4h2.076a.619.619,0,0,1,.619.765Zm13.328,0-.255,1.056a.619.619,0,0,1-.619.473H71.82a.619.619,0,0,0-.619.473l-1.42,5.826a1.457,1.457,0,0,0-.073.328q0,.546.8.546h3.532a.619.619,0,0,1,.619.765l-.255,1.056a.619.619,0,0,1-.619.473H66.249a2.546,2.546,0,0,1-1.821-.619,2.241,2.241,0,0,1-.655-1.711,4.406,4.406,0,0,1,.109-1.02l1.347-5.316a.619.619,0,0,0-.619-.8h-.874a.619.619,0,0,1-.619-.8l.255-1.02a.619.619,0,0,1,.619-.473h1.493a.619.619,0,0,0,.619-.473l.4-1.6a.619.619,0,0,1,.619-.473h4.588a.619.619,0,0,1,.619.765l-.218.983a.619.619,0,0,0,.583.8h3.1a.619.619,0,0,1,.619.765ZM92.249,4.8l-.291,1.238a.473.473,0,0,1-.437.364H83.546q-.8,0-.91.473l-.109.437q-.109.437.655.437h5.207q2.549,0,2.549,1.894a4.392,4.392,0,0,1-.146,1.056l-.546,2.221a3.969,3.969,0,0,1-1.493,2.221,4.216,4.216,0,0,1-2.658.874H75.425a.473.473,0,0,1-.437-.583l.291-1.238a.473.473,0,0,1,.437-.328h8.048a.781.781,0,0,0,.874-.583l.109-.364q.146-.583-.619-.583H78.776q-2.44,0-2.44-1.894a4.115,4.115,0,0,1,.146-1.02l.583-2.258A3.294,3.294,0,0,1,78.63,5.054a5.1,5.1,0,0,1,2.767-.8H91.812a.473.473,0,0,1,.437.546Zm14.311.146-2.84,1.894a.4.4,0,0,0-.182.437l2.731,8.23a.4.4,0,0,1-.364.51H99.9a.4.4,0,0,1-.364-.291l-1.165-4.661a.4.4,0,0,0-.583-.218l-.619.4a.4.4,0,0,0-.146.218l-1.092,4.26a.4.4,0,0,1-.364.291h-5.1a.4.4,0,0,1-.364-.473L93.888.284a.4.4,0,0,1,.4-.291h5.1a.4.4,0,0,1,.364.473L98,7.385a.4.4,0,0,0,.619.4l5.171-3.459a.4.4,0,0,1,.218-.073h2.331A.379.379,0,0,1,106.56,4.945ZM123.747,7.6,122.8,11.39h-9.868l-.291,1.129a1.857,1.857,0,0,0-.036.4q0,.8.947.8h8.412l-.546,2.294H109.145q-2.622,0-2.622-2a6.316,6.316,0,0,1,.218-1.493l1.2-4.916a4.855,4.855,0,0,1,1.347-2.513,4.142,4.142,0,0,1,2.767-.838h9.249q2.658,0,2.658,2A4.987,4.987,0,0,1,123.747,7.6Zm-5.717-.146a2.149,2.149,0,0,0,.036-.4q0-.51-.728-.51h-2.331a1.1,1.1,0,0,0-1.129.91l-.4,1.639h4.151Zm22.5.146-.947,3.787h-9.868l-.291,1.129a1.858,1.858,0,0,0-.036.4q0,.8.983.8h8.412l-.583,2.294H125.932q-2.622,0-2.622-2a6.316,6.316,0,0,1,.218-1.493L124.767,7.6a4.664,4.664,0,0,1,1.311-2.513,4.231,4.231,0,0,1,2.768-.838h9.249q2.658,0,2.658,2A4.987,4.987,0,0,1,140.534,7.6Zm-5.717-.146a2.147,2.147,0,0,0,.036-.4q0-.51-.728-.51h-2.331a1.043,1.043,0,0,0-1.092.91L130.3,9.1h4.115ZM158.705.284l-3.9,15.549a.255.255,0,0,1-.218.182h-5.244a.255.255,0,0,1-.255-.291.255.255,0,0,0-.364-.218,1.693,1.693,0,0,1-1.056.51h-5.134q-2.877,0-2.877-2.4a4.951,4.951,0,0,1,.146-1.165l1.2-4.7a4.193,4.193,0,0,1,4.479-3.5h4.734a1.09,1.09,0,0,1,1.238,1.129h.036L152.806.174a.255.255,0,0,1,.255-.182h5.389a.255.255,0,0,1,.255.291Zm-7.683,7.1a1.166,1.166,0,0,0,.036-.328q0-.51-.655-.51h-2.33a1,1,0,0,0-1.056.838l-1.384,5.462a1.421,1.421,0,0,0-.073.328q0,.546.728.546h2.331a.994.994,0,0,0,1.02-.874Zm22.322,1.056-1.857,7.392a.218.218,0,0,1-.182.182H166.1a.218.218,0,0,1-.219-.255l.255-1.056H166.1a2.486,2.486,0,0,1-2.549,1.311h-4.443q-2.731,0-2.731-2a5.11,5.11,0,0,1,.255-1.457l.255-1.092a4.982,4.982,0,0,1,1.42-2.622A4.057,4.057,0,0,1,161,8.04h6.373a.219.219,0,0,0,.182-.146l.182-.583a.836.836,0,0,0,0-.218q0-.546-.728-.546h-8.084a.219.219,0,0,1-.182-.255l.473-1.894a.219.219,0,0,1,.182-.146H170.5q3.1,0,3.1,2.476A6.956,6.956,0,0,1,173.344,8.441ZM166.9,10.589a.219.219,0,0,0-.219-.255h-2.33a1.636,1.636,0,0,0-1.056.255,1.543,1.543,0,0,0-.437.728l-.4,1.42a1.783,1.783,0,0,0-.036.4q0,.583,1.02.583h1.6a1.226,1.226,0,0,0,.947-.291,3.024,3.024,0,0,0,.473-1.165Z"
            transform="translate(-0.579 0.008)"
            fill="red"
          />
        </svg>
        <span className="mb-16 pr-4 text-lg font-semibold md:text-xl">
          "Dillon Danis trolls "bone heads" KSI and Logan Paul as PRIME
          hydration brand accidentally gives away over 250,000 boxes of products
          for free"
        </span>
      </Link>
    ),
    user: { name: "hibbster32", date: "Member since November 2023" },
    image: "/testimonial/profilepicture5.png",
    className: "row-span-2  row-start-1 md:row-start-auto",
  },
  {
    content: (
      <span>
        "Best product/service I've ever purchased. I'm a college student so I
        can't be as involved as I would like to be but I have had crazy deals
        for both personal use and resale use. Worth every penny and more."
      </span>
    ),
    user: { name: "ajaysmind", date: "Member since November 2023" },
    image: "/testimonial/profilepicture3.png",
  },
  {
    content: (
      <span>
        "Best product/service I've ever purchased. I'm a college student so I
        can't be as involved as I would like to be but I have had crazy deals
        for both personal use and resale use. Worth every penny and more."
      </span>
    ),
    user: { name: "lordjher", date: "Member since November 2023" },
    image: "/testimonial/profilepicture4.png",
  },
  {
    content: (
      <span>
        "Best product/service I've ever purchased. I'm a college student so I
        can't be as involved as I would like to be but I have had crazy deals
        for both personal use and resale use. Worth every penny and more."
      </span>
    ),
    user: { name: "vbroke_", date: "Member since Novmber 2023" },
    image: "/testimonial/profilepicture6.png",
  },
];

function GridCard(props: gridCardProps) {
  return (
    <div
      className={cn(
        "flex aspect-video h-full w-full flex-col items-center justify-between rounded-lg border border-neutral-800/10 bg-white p-4 text-left text-sm",
        props.className,
      )}
    >
      {props.content}
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <span className="w-full">{props.user?.name}</span>
          <span className="w-full">{props.user?.date}</span>
        </div>
        {props.image && (
          <div className="relative aspect-square w-10">
            <Image src={`${props.image}`} fill alt="" />
            {/* {props.image !== "string" && props.image} */}
            {/* {console.log(typeof props.image)} */}
          </div>
        )}
        {props.imageCustom}
      </div>
    </div>
  );
}
