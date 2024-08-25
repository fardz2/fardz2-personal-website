"use client";

import React, { useEffect, useState, useRef } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "./animate/Fade";
import Link from "next/link";
import { ToogleDarkMode } from "./dark-mode/toogle-darkmode";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolling(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionsRef.current[entry.target.id] = entry;
        });

        const visibleSections = Object.keys(sectionsRef.current).filter(
          (key) => sectionsRef.current[key].isIntersecting
        );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0]);
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[100] transition",
          scrolling
            ? "bg-white/30 dark:bg-gray-950/30 backdrop-blur-sm shadow-sm"
            : "",
          show ? "shadow-none" : ""
        )}
      >
        <div className="flex items-center p-4 container mx-auto px-5 md:px-24 justify-between z-50 ">
          <div className="dark:text-white">
            {/* <Image
              src={"/assets/image/logo.png"}
              alt={""}
              width={100}
              height={100}
            /> */}
            Fardz2
          </div>
          <div className="hidden md:flex justify-between gap-9 items-center ">
            <Link href={"#main"}>
              <p
                className={cn(
                  "transition-all ",
                  activeSection == "main"
                    ? "text-[#FEBD17]"
                    : "text-black dark:text-slate-300"
                )}
              >
                Home
              </p>
            </Link>

            <Link href={"#about"}>
              <p
                className={cn(
                  "transition-all ",
                  activeSection == "about"
                    ? "text-[#FEBD17]"
                    : "text-black dark:text-slate-300"
                )}
              >
                About
              </p>
            </Link>

            <Link href={"#portfolio"}>
              <p
                className={cn(
                  "transition-all ",
                  activeSection == "portfolio"
                    ? "text-[#FEBD17]"
                    : "text-black dark:text-slate-300"
                )}
              >
                Portfolio
              </p>
            </Link>

            <Link href={"#contact"}>
              <p
                className={cn(
                  " transition-all ",
                  activeSection == "contact"
                    ? "text-[#FEBD17]"
                    : "text-black dark:text-slate-300"
                )}
              >
                Contact
              </p>
            </Link>
            <ToogleDarkMode />
          </div>
          <div className="block md:hidden">
            <Hamburger toggled={show} toggle={setShow} />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-3 z-[90] bg-white dark:bg-gray-950"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Fade initial={10} animate={0} delay={0.2}>
              <Link
                href={"#home"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p
                  className={cn(
                    " transition-all ",
                    activeSection == "main"
                      ? "text-[#FEBD17]"
                      : "text-black dark:text-slate-300"
                  )}
                >
                  Home
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.3}>
              <Link
                href={"#about"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p
                  className={cn(
                    " transition-all ",
                    activeSection == "about"
                      ? "text-[#FEBD17]"
                      : "text-black dark:text-slate-300"
                  )}
                >
                  About
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.4}>
              <Link
                href={"#portfolio"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p
                  className={cn(
                    " transition-all ",
                    activeSection == "portfolio"
                      ? "text-[#FEBD17]"
                      : "text-black dark:text-slate-300"
                  )}
                >
                  Portfolio
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.5}>
              <Link
                href={"#contact"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <p
                  className={cn(
                    " transition-all ",
                    activeSection == "contact"
                      ? "text-[#FEBD17]"
                      : "text-black dark:text-slate-300"
                  )}
                >
                  Contact
                </p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.6}>
              <ToogleDarkMode />
            </Fade>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
