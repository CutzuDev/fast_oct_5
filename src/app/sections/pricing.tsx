import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckboxIcon } from "@radix-ui/react-icons";
import { Check, CheckCheckIcon, X } from "lucide-react";
import Image from "next/image";

type cardProps = {
  name: string;
  price?: string;
  image?: string;
  description: string;
  list: string[];
  buttonText: string;
};
export default function Pricing() {
  const list: cardProps[] = [
    {
      name: "The Wrong Choice",
      image: "/pcard/dedemote.png",
      description: "For people who don't want to improve their lives.",
      list: [
        "Pay other groups who just copy our alerts",
        "Miss deals because they're already sold out",
        "Get slow alerts that make you miss good buys",
        "Deal with wrong or partial info about discounts",
        "Get fewer deals because you're too late",
        "Orders get cancelled because you were late",
      ],
      buttonText: "Stay where you are",
    },
    {
      name: "Monthly Pass",
      price: "99",
      description: "For people who thrive and want a better future.",
      list: [
        "Get alerts straight from us - the first to know",
        "The most complete and quick updates",
        "Join experienced users with new methods",
        "Get special deals for 'members only'",
        "Extensive record and proven experience",
        "The fastest alerts in the entire world",
      ],
      buttonText: "Join waitlist",
    },
    {
      name: "Quarterly Pass",
      price: "267",
      description: "Instant acces to the group with a 10% discount.",
      list: [
        "Exact same features as Monthly Pass",
        "Instant access to the Discord server",
        "10% cheaper than Monthly Pass",
      ],
      buttonText: "Get started now",
    },
  ];
  return (
    <section className="relative mt-20 flex w-full flex-col items-center justify-center p-4 md:mt-40">
      <div id="pricing" className="absolute -top-[10%] left-0" />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="max-w-[900px] text-5xl font-bold lg:text-7xl">
          Decide your future today and transform your life.
        </span>
        <span className="max-w-[700px] text-sm">
          Start your journey to financial independence and a better life.
          <br /> Make the choice now and turn your dreams into reality. The
          power is in your hands.
        </span>
        <Tabs defaultValue="correct" className="">
          <TabsList>
            <TabsTrigger value="wrong">The wrong choice</TabsTrigger>
            <TabsTrigger value="correct">The correct choice</TabsTrigger>
          </TabsList>
          <TabsContent value="wrong">
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-black via-neutral-400/25 to-black opacity-75 blur-3xl" />
            <ChoiceCard {...list[0]} />
          </TabsContent>
          <TabsContent
            className="flex flex-wrap items-stretch justify-center gap-4"
            value="correct"
          >
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-r from-yellow-300 via-pink-400/75 to-blue-400 opacity-75 blur-3xl" />
            <ChoiceCard {...list[1]} />
            <ChoiceCard {...list[2]} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ChoiceCard({
  name,
  description,
  price,
  image,
  list,
  buttonText,
}: cardProps) {
  return (
    <div
      id="pricing"
      className="w-full rounded-lg border border-neutral-600/50 bg-white p-4 md:w-auto"
    >
      <div className="flex flex-col items-center justify-center rounded-sm bg-neutral-100 p-2 text-center">
        <span className="text-lg">{name}</span>
        <span className="mt-4 text-xs">starts at</span>
        {image && (
          <div className="relative aspect-square w-full max-w-32">
            <Image alt="" fill src={image} />
          </div>
        )}
        {price && <span className="mt-2 text-4xl font-semibold">${price}</span>}
        <span>billed monthly</span>
        <span className="mt-6 w-3/5 text-sm">{description}</span>
        <Button className="mt-6 w-full">{buttonText}</Button>
      </div>
      <div className="mt-6 flex flex-col items-start justify-center gap-4">
        {list.map((e, i) => {
          return (
            <div key={i} className="flex items-center justify-center gap-2">
              {price ? (
                <Check className="rounded-sm bg-green-200 p-1" size={22} />
              ) : (
                <X className="rounded-sm bg-green-200 p-1" size={22} />
              )}
              <span>{e}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
