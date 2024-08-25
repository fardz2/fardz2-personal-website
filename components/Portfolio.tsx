import { Fade } from "./animate/Fade";

import CardPortfolio from "./ui/card-portfolio";

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
    image: "/assets/naima.png",
    title: "TokoNaima",
    description:
      "'Toko Naima' is a Flutter-based POS application I developed to help my parents manage their business. It offers essential features like item management, shopping carts, and barcode scanning to streamline transactions, making sales more efficient and easier to manage.",
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
                <CardPortfolio
                  image={value.image}
                  title={value.title}
                  description={value.description}
                />
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
