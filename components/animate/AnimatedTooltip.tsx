"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "React js",
    designation: "",
    image: "/assets/react.svg",
  },
  {
    id: 2,
    name: "Next js",
    designation: "",
    image: "/assets/next.svg",
  },
  {
    id: 3,
    name: "Laravel",
    designation: "",
    image: "/assets/laravel.svg",
  },
  {
    id: 4,
    name: "Flutter",
    designation: "",
    image: "/assets/flutter.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center mb-10 w-full gap-5">
      <AnimatedTooltip items={people} />
    </div>
  );
}
