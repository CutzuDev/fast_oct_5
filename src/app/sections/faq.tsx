import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const list: { title: string; description: string }[] = [
  {
    title: "What platform is the group hosted on?",
    description:
      "The group is hosted on Discord, providing a secure and interactive platform for our community members.",
  },
  {
    title: "How much does the group access cost?",
    description:
      "Access to Bandar's Bounties costs $99.00 per month. Currently, we are out of stock, but keep an eye on our Twitter for updates on restock availability.",
  },
  {
    title: "How often do you restock?",
    description:
      "You can join the waitlist for the quickest entry or wait for a restock to be announced on our X account (formerly Twitter) which happens 4 to 5 times a year.",
  },
  {
    title: "Can I get a spot in Bandar's for a bounty?",
    description:
      "Yes, you can earn a spot in Bandar's Bounties by submitting bounties. If you have information about a pricing mistake on an online platform or website, you can share it with us. We offer various forms of payment, including monetary compensation, products, or access to our group.",
  },
  {
    title: "What do customers do with the items?",
    description:
      "As a customer, you can resell the items we post, often at a discount of 75% or more, allowing you to profit significantly. Additionally, many users purchase discounted products for personal use, such as home cinema projectors, smart home devices, pet food, furniture, and more. All these items can also be resold if desired.",
  },
  {
    title: "Can I use this service outside the US?",
    description:
      "Currently, we operate exclusively within the United States. However, if you have a contact in the U.S. who can forward items to you internationally, this could be a solution, though it would be more expensive. Our primary target audience is based in the US.",
  },
];

export default function FAQ() {
  return (
    <section className="relative mt-10 flex w-full flex-col items-center justify-center gap-10 p-4">
      <div id="faq" className="absolute -top-[10%] left-0" />
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
          Curious? We've got the answers you need!
        </span>
        <span className="max-w-[700px] text-sm">
          Looking for answers? Our FAQ section has you covered.
          <br />
          Discover clear, concise responses to your most frequent questions and
          start your journey today.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex w-full flex-wrap items-center justify-center gap-10">
          <div className="flex max-w-[400px] flex-col items-start justify-center gap-4 rounded-md border border-neutral-800/10 p-4">
            <div className="relative aspect-square h-10">
              <Image fill alt="" src={`/faq/trophy.png`} />
            </div>
            <span className="text-lg">Submit a bounty for rewards</span>
            <span className="text-sm">
              Have information on a pricing error? Share it with us and earn
              money, products, or exclusive group access.
            </span>
            <Link
              href={
                "https://x.com/messages/compose?recipient_id=930825172365410304"
              }
            >
              <Button>Submit a bounty</Button>
            </Link>
          </div>
          <div className="flex max-w-[400px] flex-col items-start justify-center gap-4 rounded-md border border-neutral-800/10 p-4">
            <div className="relative aspect-square h-10">
              <Image fill alt="" src={`/faq/flag.png`} />
            </div>
            <span className="text-lg">Do you have further questions?</span>
            <span className="text-sm">
              Have additional questions or need help? Our support team is here
              for you.
            </span>
            <Button>Contact Support</Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          {list.map((e, i) => {
            return (
              <Accordion
                key={i}
                type="single"
                className="w-full max-w-[840px] rounded-md border border-neutral-800/10 px-5"
                collapsible
              >
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger>{e.title}</AccordionTrigger>
                  <AccordionContent className="">
                    {e.description}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
