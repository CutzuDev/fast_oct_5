import Image from "next/image";

export default function Featured() {
  const list: string[] = [
    "bulletintube",
    "dexerto",
    "firstsportz",
    "meaw",
    "sportskeeda",
    "thesportsrush",
  ];
  return (
    <section className="w-full flex justify-center gap-6 flex-col items-center">
      <span>As featured on</span>
      <div className="flex flex-col gap-0 justify-center items-center lg:flex-row lg:gap-10">
        {list.map((e, i) => {
          return (
            <div className="relative h-12 aspect-[21/6]">
              {/* <div className="bg-gradient-to-tl from-blue-400 via-pink-500 to-yellow-300 w-full h-1/2 absolute left-0 top-1/2 -translate-y-1/2 mix-blend-" /> */}
              <Image className="" alt="" src={`/aso/${e}.svg`} fill />
              {/* <div>
                <img
                  src="/hero/gradient.svg"
                  className="scale-x-[2.5] scale-y-[1.5] mix-blend-multiply  -rotate-12 absolute bg-clip-cli -right-10 top-0"
                  alt=""
                />
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
