"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState, useRef } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Fade } from "./animate/Fade";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
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
          scrolling ? "bg-white shadow-sm" : "",
          show ? "shadow-none" : ""
        )}
      >
        <div className="flex items-center p-4 container mx-auto px-5 md:px-24 justify-between z-50 ">
          <div>
            {/* <Image
              src={"/assets/image/logo.png"}
              alt={""}
              width={100}
              height={100}
            /> */}
            Fardz2
          </div>
          <div className="hidden md:flex justify-between gap-9 ">
            <Link href={"#main"}>
              <motion.p
                initial={{ color: "#000" }}
                animate={{
                  color: activeSection === "main" ? "#FEBD17" : "#000",
                }}
                transition={{ duration: 0.3 }}
              >
                Home
              </motion.p>
            </Link>

            <Link href={"#about"}>
              <motion.p
                initial={{ color: "#000" }}
                animate={{
                  color: activeSection === "about" ? "#FEBD17" : "#000",
                }}
                transition={{ duration: 0.3 }}
              >
                About
              </motion.p>
            </Link>

            <Link href={"#portfolio"}>
              <motion.p
                initial={{ color: "#000" }}
                animate={{
                  color: activeSection === "portfolio" ? "#FEBD17" : "#000",
                }}
                transition={{ duration: 0.3 }}
              >
                Portfolio
              </motion.p>
            </Link>

            <Link href={"#contact"}>
              <motion.p
                initial={{ color: "#000" }}
                animate={{
                  color: activeSection === "contact" ? "#FEBD17" : "#000",
                }}
                transition={{ duration: 0.3 }}
              >
                contact
              </motion.p>
            </Link>
          </div>
          <div className="block md:hidden">
            <Hamburger toggled={show} toggle={setShow} />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center flex-col gap-3 z-[90] bg-white"
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
                <motion.p
                  initial={{ color: "#000" }}
                  animate={{
                    color: activeSection === "main" ? "#FEBD17" : "#000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Home
                </motion.p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.3}>
              <Link
                href={"#about"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <motion.p
                  initial={{ color: "#000" }}
                  animate={{
                    color: activeSection === "about" ? "#FEBD17" : "#000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  About
                </motion.p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.4}>
              <Link
                href={"#portfolio"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <motion.p
                  initial={{ color: "#000" }}
                  animate={{
                    color: activeSection === "portfolio" ? "#FEBD17" : "#000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Portfolio
                </motion.p>
              </Link>
            </Fade>
            <Fade initial={10} animate={0} delay={0.5}>
              <Link
                href={"#contact"}
                onClick={() => {
                  setShow(!show);
                }}
              >
                <motion.p
                  initial={{ color: "#000" }}
                  animate={{
                    color: activeSection === "contact" ? "#FEBD17" : "#000",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  contact
                </motion.p>
              </Link>
            </Fade>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
