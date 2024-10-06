import { Button } from "@/components/ui/button";

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

  return (
    <section className="mt-40 flex w-full flex-col items-center justify-center p-4">
      <div className="flex items-start justify-center">
        <div className="hidden flex-col items-center justify-center gap-8 lg:flex">
          {[...list.slice(0, 3), list[6], list[12]].map((e, i) => {
            return (
              <div className="relative aspect-[21/9] h-16">
                <Image src={`/rlogo/${e}.svg`} fill alt="" />
              </div>
            );
          })}
        </div>

        <div className="flex h-full max-w-[900px] flex-col items-center justify-end gap-9">
          <div className="z-10 flex max-w-[900px] flex-col items-center justify-center gap-4 text-center shadow-[0_25px_100px_50px_rgba(255,255,255,1)]">
            <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
              Relentlessly tracking every movement.
            </span>
            <span className="max-w-[700px] text-sm">
              We monitor over 1,000 + retailers for price drops, ensuring our
              members are instantly alerted to mistakes during product changes
              or listings. Always first, never second.
            </span>
            <Button className="px-8">Get started</Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
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
            {list.map((e, i) => {
              return (
                <div
                  key={i}
                  className="relative block aspect-[21/9] h-16 w-1/3 md:hidden"
                >
                  <Image src={`/rlogo/${e}.svg`} fill alt="" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center gap-8 lg:flex">
          {[...list.slice(3, 6), list[11], list[17]].map((e, i) => {
            return (
              <div className="relative aspect-[21/9] h-16">
                <Image src={`/rlogo/${e}.svg`} fill alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
