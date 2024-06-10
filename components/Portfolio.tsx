import Image from "next/image";
import { Fade } from "./animate/Fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const IMAGE = ["/assets/1.png", "/assets/2.png", "/assets/3.png"];
export default function Portfolio() {
  return (
    <>
      <section className="py-20 " id="portfolio">
        <div className="relative container mx-auto px-5 md:px-24 ">
          <div className="flex justify-center md:mt-0 mt-20  flex-col lg:flex-row-reverse gap-5 items-center  ">
            <div className="flex flex-col gap-4justify-center basis-[50%]">
              <Fade initial={-10} animate={0} delay={0.7}>
                <h2 className="md:text-5xl text-4xl font-bold ">Portfolio</h2>
              </Fade>
              <Fade initial={-10} animate={0} delay={0.8}>
                <p>
                  Here is my design portfolio. You can check it out yourself.
                  Some of my work is live. As you can see, I work with different
                  styles.
                </p>
              </Fade>
            </div>
            <div className="flex justify-center basis-[60%]  ">
              <Fade initial={10} animate={0} delay={0.5}>
                <Carousel className="w-full maxw-lg  ">
                  <CarouselContent>
                    {IMAGE.map((value, index) => (
                      <CarouselItem key={index}>
                        <Image
                          src={value}
                          alt={"faridz"}
                          width={1000}
                          height={1000}
                          className="rounded-md"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex flex-row justify-center gap-2">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
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
