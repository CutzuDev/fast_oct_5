import Featured from "@/app/sections/featured";
import Hero from "./sections/hero";
import Future from "@/app/sections/future";
import Companies from "./sections/companies";
import Tabs from "./sections/choice";

export default function Home() {
  return (
    <div className=" flex justify-center items-center flex-col w-full overflow-x-hidden">
      <Hero />
      <Featured />
      <Future />
      <Companies />
      <Tabs />
    </div>
  );
}
