"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Fade extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  initial: number;
  animate: number;
  delay: number;
}
export const Fade = ({ children, initial, animate, delay }: Fade) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initial }}
      whileInView={{ opacity: 1, y: animate }}
      viewport={{ once: true, amount: 0.5 }}
      exit={{ opacity: 0, y: initial }}
      className="z-30"
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};
