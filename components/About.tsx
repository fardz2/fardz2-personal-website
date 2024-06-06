import Image from "next/image";
import { Fade } from "./animate/Fade";

export default function About() {
  return (
    <>
      <section className="  py-5 " id="about">
        <div className="relative container mx-auto px-5 md:px-24 ">
          <div className="flex  justify-center md:mt-0 mt-20  flex-col lg:flex-row gap-20 items-center  ">
            <div className="flex flex-col gap-4justify-center">
              <Fade initial={-10} animate={0} delay={0.7}>
                {" "}
                <h2 className="md:text-5xl text-4xl font-bold ">About Me</h2>
              </Fade>
              <Fade initial={-10} animate={0} delay={0.9}>
                <p>
                  An experienced full stack developer, I come from South
                  Kalimantan and was born on April 10 2003. Having expertise in
                  front end, back end and mobile application development, I am
                  able to build responsive and innovative technology solutions.
                  My dedication to software development and commitment to
                  following best practices makes me a valuable asset on the
                  development team.
                </p>
              </Fade>
            </div>
            <Fade initial={10} animate={0} delay={0.5}>
              <div className="overflow-hidden">
                <Image
                  src={"/assets/faridz.png"}
                  alt={"faridz"}
                  width={700}
                  height={700}
                  className="object-cover !m-0 !p-0 object-top  w-[200px]  md:w-[1300px] md:h-[500px] rounded-[10px]  relative"
                />
              </div>
            </Fade>
          </div>
          {/* <div className="absolute right-[-300px] top-[-150px]">
            <Image
              src={"/assets/element/element2.png"}
              alt={""}
              width={500}
              height={500}
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
