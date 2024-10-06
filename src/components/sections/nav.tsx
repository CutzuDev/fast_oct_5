import Image from "next/image";
import { Button } from "../ui/button";

export default function Nav() {
  return (
    <nav className="absolute left-0 top-0 flex h-20 w-full items-center justify-center">
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
            <li>Features</li>
            <li>Stilelist</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button>Join Now</Button>
          <Button variant={"secondary"}>Submit deal</Button>
        </div>
      </div>
    </nav>
  );
}
