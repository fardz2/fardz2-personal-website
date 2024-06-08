import Image from "next/image";

import { TypewriterEffect } from "./ui/typewriter-effect";
import { Fade } from "./animate/Fade";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { AnimatedTooltipPreview } from "./animate/AnimatedTooltip";
import Link from "next/link";

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
    <section
      className="container mx-auto px-5 md:px-24 z-10 pt-32 md:pt-12"
      id="main"
    >
      <div className="flex md:justify-center justify-start  min-h-screen lg:mt-0 items-center flex-col lg:flex-row ">
        <div className="basis-[90%] ">
          <TypewriterEffect words={words} />
          <Fade initial={-10} animate={0} delay={0.8}>
            <p className="mt-5 text-[#21383E] font-semibold">
              I enjoy creating interactive projects with code and sharing my
              insights through talks and writing.
            </p>
          </Fade>
          <Fade initial={-10} animate={0} delay={0.9}>
            <Link href="#about">
              <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 mt-10">
                Explore Now
              </button>
            </Link>
          </Fade>
          <Fade initial={-10} animate={0} delay={1}>
            <p className="mt-12">Tech Stack and tools</p>
          </Fade>
          <Fade initial={-10} animate={0} delay={1.1}>
            <AnimatedTooltipPreview />
          </Fade>
        </div>
        <div className="basis-1/2 "></div>
      </div>
    </section>
  );
}
