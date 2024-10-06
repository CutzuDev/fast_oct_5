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
export default function Choice() {
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
    <section className="flex relative justify-center mt-40 p-4 items-center w-full flex-col">
      <div className="flex justify-center items-center text-center gap-4 flex-col">
        <span className="text-5xl lg:text-7xl max-w-[900px] font-bold">
          Decide your future today and transform your life.
        </span>
        <span className="max-w-[700px] text-sm">
          Start your journey to financial independence and a better life.
          <br /> Make the choice now and turn your dreams into reality. The
          power is in your hands.
        </span>
        <Tabs defaultValue="correct" className="min-w-[400px]">
          <TabsList>
            <TabsTrigger value="wrong">The wrong choice</TabsTrigger>
            <TabsTrigger value="correct">The correct choice</TabsTrigger>
          </TabsList>
          <TabsContent value="wrong">
            <ChoiceCard {...list[0]} />
          </TabsContent>
          <TabsContent
            className="flex justify-center items-stretch flex-wrap gap-4"
            value="correct"
          >
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
    <div id="uh" className="bg-white w-full md:w-auto border rounded-sm p-4">
      <div className="bg-neutral-100 text-center flex-col rounded-sm p-2 flex justify-center items-center">
        <span className="text-lg ">{name}</span>
        <span className="text-xs mt-4">starts at</span>
        {image && (
          <div className="w-full max-w-32 relative aspect-square">
            <Image alt="" fill src={image} />
          </div>
        )}
        {price && <span className="text-4xl font-semibold mt-2">${price}</span>}
        <span>billed monthly</span>
        <span className="text-sm w-3/5 mt-6">{description}</span>
        <Button className="w-full mt-6">{buttonText}</Button>
      </div>
      <div className=" flex justify-center items-start flex-col gap-4 mt-6">
        {list.map((e, i) => {
          return (
            <div key={i} className="flex justify-center items-center gap-2">
              {price ? (
                <Check className="bg-green-200 rounded-sm p-1" size={22} />
              ) : (
                <X className="bg-green-200 rounded-sm p-1" size={22} />
              )}
              <span>{e}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
