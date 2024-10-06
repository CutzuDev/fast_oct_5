"use client";
import { Button } from "@/components/ui/button";
import useWindowDimensions from "@/lib/useWindowDimensions";

import Image from "next/image";

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

  const { width, height } = useWindowDimensions();
  console.log(width);
  return (
    <section className="flex justify-center mt-40 items-center w-full p-4 flex-col">
      <div className="flex justify-center items-start">
        {width > 768 && (
          <div className="flex justify-center items-center gap-8 flex-col">
            {[...list.slice(0, 3), list[6], list[12]].map((e, i) => {
              return (
                <div className="relative h-16 aspect-[21/9] ">
                  <Image src={`/rlogo/${e}.svg`} fill alt="" />
                </div>
              );
            })}
          </div>
        )}
        <div className="flex justify-end h-full items-center flex-col max-w-[900px] gap-9">
          <div className="flex shadow-[0_25px_100px_50px_rgba(255,255,255,1)] z-10 justify-center items-center max-w-[900px] flex-col text-center gap-4">
            <span className="text-5xl lg:text-7xl max-w-[900px] font-bold">
              Relentlessly tracking every movement.
            </span>
            <span className="max-w-[700px] text-sm">
              We monitor over 1,000 + retailers for price drops, ensuring our
              members are instantly alerted to mistakes during product changes
              or listings. Always first, never second.
            </span>
            <Button className="px-8">Get started</Button>
          </div>
          <div className="flex justify-center flex-wrap items-center gap-8">
            {width > 768
              ? [...list.slice(7, 11), ...list.slice(13, 17)].map((e, i) => {
                  return (
                    <div className="relative h-16 w-1/5 aspect-[21/9] ">
                      <Image src={`/rlogo/${e}.svg`} fill alt="" />
                    </div>
                  );
                })
              : list.map((e, i) => {
                  return (
                    <div className="relative h-16 w-full xs:w-1/3 aspect-[21/9] ">
                      <Image src={`/rlogo/${e}.svg`} fill alt="" />
                    </div>
                  );
                })}
          </div>
        </div>
        {width > 768 && (
          <div className="flex justify-center items-center gap-8 flex-col">
            {[...list.slice(3, 6), list[11], list[17]].map((e, i) => {
              return (
                <div className="relative h-16 aspect-[21/9] ">
                  <Image src={`/rlogo/${e}.svg`} fill alt="" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
