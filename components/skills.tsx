"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-24 max-w-[53rem] scroll-mt-28 text-center sm:mb-32 px-4"
    >
      <SectionHeading>Technical Skills & Tooling</SectionHeading>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 -mt-6 mb-8 max-w-[36rem] mx-auto">
        Core technologies and frameworks I leverage daily to engineer modern websites, cross-platform mobile apps, and scalable backends.
      </p>

      <ul className="flex flex-wrap justify-center gap-2.5 text-sm sm:text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-4 py-2.5 dark:bg-white/10 dark:text-white/80 shadow-sm hover:scale-105 transition-transform cursor-default"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition group"
        >
          Explore Categorized Skills & Domain Expertise
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
