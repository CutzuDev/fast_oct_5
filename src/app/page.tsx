import Featured from "@/app/sections/featured";
import Hero from "./sections/hero";
import Future from "@/app/sections/future";
import Companies from "./sections/companies";
import Pricing from "./sections/pricing";
import Grid from "./sections/grid";
import FAQ from "./sections/faq";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <Featured />
      <Future />
      <Companies />
      <Pricing />
      <Grid />
      <FAQ />
    </div>
  );
}
