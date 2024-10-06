import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="flex relative min-h-screen w-full justify-start flex-col items-center">
      <div className="flex-col z-[1] flex w-full p-4 pt-40 justify-center items-center gap-6">
        <h1 className="text-5xl lg:text-8xl max-w-[1200px] text-center font-bold">
          Make $1000/month through price mistakes
        </h1>
        <span className="text-xl text-center ">
          Discover pricing mistakes, glitches & profit opportunities before they
          leak to the public.
        </span>
        <div className="flex justify-center flex-col lg:flex-row items-center mt-4 gap-4">
          <Button size={"xl"}>Join us now</Button>
          <Button
            size={"xl"}
            className="border-0 shadow-lg"
            variant={"secondary"}
          >
            Learn more
          </Button>
        </div>
        <div className="flex justify-center flex-wrap gap-4 items-center">
          <div className="flex justify-center items-center">
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user1.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user2.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user3.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user4.png" />
            </Avatar>
            <Avatar className="-mx-2">
              <AvatarImage src="/users/user5.png" />
            </Avatar>
          </div>
          <span className="text-sm mb-1 ">
            The World's #1 Source for Pricing Errors
          </span>
        </div>
        <div className="flex justify-center  relative w-full h-[360px] items-center">
          <div className=" h-full w-[110vw] bg-gradient-to-t absolute -left-4 -bottom-2 from-white blur  to-transparent" />
        </div>
      </div>
      <div className="absolute w-full h-screen -z-98">
        <div className="relative w-full h-full">
          <Image alt="" fill src={"/hero/grid-desktop.svg"} />
        </div>
      </div>
      <div className="w-full absolute -z-99 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute overflow-hidden w-[100vw] h-[100vh] flex justify-center items-center blur-2xl z-[-100] left-[45%] top-[45%] -translate-x-1/2 -translate-y-1/2">
        <Image className="scale-150" src={"/hero/gradient.svg"} alt="" fill />
      </div>
    </section>
  );
}
