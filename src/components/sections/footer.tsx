import Image from "next/image";

export default function Footer() {
  const list: string[] = ["discordlogo", "instagramlogo", "xlogo"];
  return (
    <footer className="flex min-h-80 w-full flex-col items-center justify-center gap-10 py-20">
      <div className="relative aspect-[10.5] w-[70%] object-contain">
        <Image alt="" src={"/footer/bandarsbountiesfooter.png"} fill />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {list.map((e, i) => {
          return (
            <div
              key={i}
              className="relative aspect-square w-8 rounded-md border border-neutral-800/10 bg-white"
            >
              <Image src={`/footer/${e}.svg`} alt=" " className="p-1" fill />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <span>Features</span>
        <span>Stilelist</span>
        <span>Pricing</span>
        <span>Reviews</span>
        <span>FAQs</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-black/25">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
        <span>Refund Policy</span>
      </div>
      <span className="text-xs text-black/25">@ 2024 Bandar's Bounties</span>
    </footer>
  );
}
