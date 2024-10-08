import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex min-h-20 w-full items-center justify-center bg-gradient-to-b from-white via-white/[95%] via-75% to-transparent pb-10 pt-5 md:pb-0 md:pt-0">
      <div className="flex w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center justify-center gap-8">
          <div className="mb-1 flex items-center justify-center gap-2">
            <div className="relative aspect-square w-6 brightness-0 grayscale">
              <Image alt="" fill src={"/testimonial/bandarbountiesicon.svg"} />
            </div>
            <span className="mt-1 hidden font-bold lg:block">
              bandar's bounties
            </span>
          </div>
          <ul className="hidden items-center justify-center gap-10 text-sm lg:flex">
            <Link href={"/#features"}>Features</Link>
            <Link href={"/#sitelist"}>Sitelist</Link>
            <Link href={"/#pricing"}>Pricing</Link>
            <Link href={"/#reviews"}>Reviews</Link>
            <Link href={"/#faq"}>FAQs</Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href={"https://whop.com/bandarsbounties/"}>
            <Button>Join Now</Button>
          </Link>
          <Link
            href={
              "https://x.com/messages/compose?recipient_id=930825172365410304"
            }
          >
            <Button variant={"secondary"}>Submit deal</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
