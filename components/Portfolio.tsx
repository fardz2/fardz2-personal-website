import Image from "next/image";
import { Fade } from "./animate/Fade";
import { Button } from "./ui/button";

interface Portfolio {
  image: string;
  title: string;
  description: string;
}
const portfolios: Portfolio[] = [
  {
    image: "/assets/3.png",
    title: "Bandung Sewa Motor",
    description:
      "'Bandung Sewa Motor' is an innovative mobile app I developed as the culmination of my independent study at LearningX. This final project is strategically designed to focus on client acquisition and custom application development.",
  },
  {
    image: "/assets/1.png",
    title: "Graphic Tailor",
    description:
      "'Graphic Tailor' is a Bandung-based local business specializing in clothing tailoring. I developed a website landing page to boost its online presence and attract potential customers.",
  },
  {
    image: "/assets/4.png",
    title: "BeritaCepat",
    description:
      "'BeritaCepat' is a web-based news portal application that provides various news categories such as politics, economics, sports, technology and entertainment, equipped with a search feature to make it easier for users to find the news they want.",
  },
  {
    image: "/assets/2.png",
    title: "Smart Library",
    description:
      "'Smart Library' is an online platform I designed to streamline book borrowing and returning. This project gave me invaluable experience in developing websites with separate frontend and backend components.",
  },
];
export default function Portfolio() {
  let delay = 0.8;
  return (
    <>
      <section className="py-20 mt-10 " id="portfolio">
        <div className="relative container mx-auto px-5 md:px-24 ">
          <Fade initial={-10} animate={0} delay={0.7}>
            <h2 className="md:text-5xl text-4xl font-bold mb-10">Portfolio</h2>
          </Fade>

          <div className="grid grid-rows-1  md:grid-cols-2  lg:grid-cols-4 gap-3  ">
            {portfolios.map((value, index) => (
              <Fade
                initial={-10}
                animate={0}
                delay={(delay += 0.1)}
                key={index}
              >
                <div className="relative overflow-hidden  rounded-2xl transition duration-200 group bg-white dark:bg-gray-900 hover:shadow-xl border border-zinc-100 dark:border-gray-900 pb-12 h-[490px]">
                  <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-900 rounded-tr-lg rounded-tl-lg  overflow-hidden  relative">
                    <Image
                      src={value.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover w-full h-full transition duration-200 `}
                    />
                  </div>
                  <div className=" p-4 flex flex-col justify-between ">
                    <h2 className="font-bold text-lg text-zinc-700 dark:text-zinc-300">
                      {value.title}
                    </h2>
                    <h2 className="font-normal  text-sm dark:text-zinc-300 ">
                      {value.description}
                    </h2>
                  </div>
                </div>
              </Fade>
            ))}
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
