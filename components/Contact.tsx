import Image from "next/image";
import { Fade } from "./animate/Fade";

export default function Contact() {
  return (
    <>
      <section className="py-20 " id="contact">
        <div className="relative container mx-auto px-5 md:px-24 ">
          <div className="flex justify-center md:mt-0 mt-20  flex-col lg:flex-row-reverse gap-5 items-center  ">
            <div className="flex flex-col gap-4j ustify-center basis-[50%]">
              <Fade initial={-10} animate={0} delay={0.7}>
                <h2 className="md:text-5xl text-4xl font-bold ">Contact Me</h2>
              </Fade>
              <p>
                Here is my design portfolio. You can check it out yourself. Some
                of my work is live. As you can see, I work with different
                styles.
              </p>
            </div>
            <div className="flex justify-center basis-[50%] md:p-0 px-10">
              <Fade initial={10} animate={0} delay={0.5}>
                <p></p>
              </Fade>
            </div>
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
