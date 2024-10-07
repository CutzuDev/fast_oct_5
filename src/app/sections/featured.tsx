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
    <section className="gap-6a flex w-full flex-col items-center justify-center">
      <span>As featured on</span>
      <div className="flex flex-col items-center justify-center gap-0 lg:flex-row lg:gap-10">
        {list.map((e, i) => {
          return (
            <div onClick={(e)} className="relative aspect-[21/6] h-12">
              {/* <div className="bg-gradient-to-tl from-blue-400 via-pink-500 to-yellow-300 w-full h-1/2 absolute left-0 top-1/2 -translate-y-1/2 mix-blend-" /> */}
              <Image className="" alt="" src={`/aso/${e.image}.svg`} fill />
              {/* <div>
                <img
                  src="/hero/gradient.svg"how to
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
