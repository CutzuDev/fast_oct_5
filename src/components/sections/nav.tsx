import Image from "next/image";
import { Button } from "../ui/button";

export default function Nav() {
  return (
    <nav className="w-full h-20 absolute left-0 top-0 flex justify-center items-center">
      <div className="max-w-[1200px] px-4 w-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center gap-2 items-center mb-1">
            <div className="w-6 relative aspect-square grayscale brightness-0">
              <Image alt="" fill src={"/testimonial/bandarbountiesicon.svg"} />
            </div>
            <span className="lg:block hidden font-bold mt-1">
              bandar's bounties
            </span>
          </div>
          <ul className="lg:flex hidden justify-center items-center gap-10 text-sm">
            <li>Features</li>
            <li>Stilelist</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button>Join Now</Button>
          <Button variant={"secondary"}>Submit deal</Button>
        </div>
      </div>
    </nav>
  );
}
