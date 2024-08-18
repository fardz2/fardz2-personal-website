import Image from "next/image";
export default function CardPortfolio({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden  rounded-2xl transition duration-200 group bg-white dark:bg-gray-900 hover:shadow-xl border border-zinc-100 dark:border-gray-900 pb-12 h-[490px]">
      <div className="w-full h-[200px] bg-gray-100 dark:bg-gray-900 rounded-tr-lg rounded-tl-lg  overflow-hidden  relative">
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover w-full h-full transition duration-200 `}
        />
      </div>
      <div className=" p-4 flex flex-col justify-between ">
        <h2 className="font-bold text-lg text-zinc-700 dark:text-zinc-300">
          {title}
        </h2>
        <h2 className="font-normal  text-sm dark:text-zinc-300 ">
          {description}
        </h2>
      </div>
    </div>
  );
}
