import Image from "next/image";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { Fade } from "./animate/Fade";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { AnimatedTooltipPreview } from "./animate/AnimatedTooltip";

export default function Main() {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "I'm",
    },
    {
      text: "Muhammad ",
      className: "text-[#FEBD17]",
    },
    {
      text: "Faridz",
      className: "text-[#FEBD17]",
    },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer",
    },
  ];
  return (
    <section className="container mx-auto px-5 md:px-24 z-10 pt-20 " id="main">
      <div className="flex md:justify-center justify-start  h-screen lg:mt-0 items-center flex-col lg:flex-row ">
        <div className="basis-[90%] ">
          <TypewriterEffect words={words} />
          <Fade initial={-10} animate={0} delay={0.8}>
            <p className="mt-5 text-[#21383E] font-semibold">
              I like to build interactive things with code. I also talk and
              write about those things.
            </p>
          </Fade>
          <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-10">
            Explore Now
          </button>
          <p className="mt-12">Tech Stack and tools</p>

          <AnimatedTooltipPreview />
        </div>
        <div className="basis-1/2 z-50"></div>
      </div>

      {/* <div className="absolute bottom-0 left-[-30px] z-20">
        <Image src={"/assets/faridz.png"} alt={""} width={100} height={100} />
      </div> */}
    </section>
  );
}
