import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";

import { Button } from "./ui/button";

export default function Footer() {
  return (
    <section className="bg-white dark:bg-gray-950 border-t-1 border-t-white ">
      <div className="flex flex-col md:flex-row justify-between md:items-center relative container mx-auto p-5 md:px-24 text-black dark:text-slate-300 gap-2">
        <p>Fardz2</p>
        <p>&copy; 2024 Made With ❤️ By Faridz</p>
        <div className="flex gap-2">
          <Link href={"https://www.linkedin.com/in/muhammad-faridz-1b8a48210/"}>
            <Button variant="outline" size="icon">
              <LinkedInLogoIcon className="text-black h-4 w-4 dark:text-slate-300 " />
            </Button>
          </Link>
          <Link href={"https://github.com/fardz2"} target="_blank">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="text-black h-4 w-4 dark:text-slate-300" />
            </Button>
          </Link>
          <Link href={"https://www.instagram.com/fardz2/"} target="_blank">
            <Button variant="outline" size="icon">
              <InstagramLogoIcon className="text-black h-4 w-4 dark:text-slate-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
