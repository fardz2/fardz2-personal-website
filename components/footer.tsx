import Link from "next/link";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-black ">
      <div className="flex flex-col md:flex-row justify-between md:items-center relative container mx-auto p-5 md:px-24 text-white gap-2">
        <p>Fardz2</p>
        <p>&copy; 2024 Made With ❤️ By Faridz</p>
        <div className="flex gap-2">
          <Link href={"https://www.linkedin.com/in/muhammad-faridz-1b8a48210/"}>
            <CiLinkedin height={100} width={100} target="_blank" />
          </Link>
          <Link href={"https://github.com/fardz2"} target="_blank">
            <FaGithubSquare height={20} width={20} />
          </Link>
          <Link href={"https://www.instagram.com/fardz2/"} target="_blank">
            <CiInstagram />
          </Link>
        </div>
      </div>
    </section>
  );
}
