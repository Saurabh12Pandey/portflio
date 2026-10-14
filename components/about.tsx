"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import { personalData, clientChannels } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-24 max-w-[48rem] text-center leading-8 sm:mb-32 scroll-mt-28 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        I am a dedicated{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          Full-Stack Web & Mobile App Developer
        </span>{" "}
        with over 4 years of hands-on experience building tailored digital products for ambitious brands and business leaders.
        I provide comprehensive end-to-end development services ranging from responsive corporate websites to full-featured cross-platform mobile apps.
      </p>

      <p className="mb-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        Over the past years, I have architected and delivered mission-critical web platforms for international clients, including{" "}
        <span className="font-semibold text-gray-900 dark:text-white">Level Up Car Rental (Dubai)</span>,{" "}
        <span className="font-semibold text-gray-900 dark:text-white">Placely (Canada)</span>,{" "}
        <span className="font-semibold text-gray-900 dark:text-white">TechniPlast India</span>, and{" "}
        <span className="font-semibold text-gray-900 dark:text-white">Botana Beauty</span>.
        I take pride in translating complex business requirements into fluid, high-converting digital realities.
      </p>

      {/* Client Acquisition & Network Highlight */}
      <div className="my-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70 dark:from-gray-800/60 dark:via-gray-900/60 dark:to-gray-800/60 border border-indigo-100 dark:border-white/10 text-left shadow-sm">
        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400" />
          Client Partnerships & Acquisition
        </h4>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          I primarily connect with international founders, agency partners, and businesses through{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">LinkedIn</span> and{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Facebook</span>.
          Whether you need a full-scale web application, a responsive mobile app, or performance optimization, I work closely with you from initial discovery to deployment and continuous growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[32rem] mx-auto">
          {clientChannels.map((channel) => (
            <div
              key={channel.platform}
              className="p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/60 text-xs"
            >
              <span className="font-semibold text-gray-900 dark:text-white block mb-0.5">
                {channel.platform}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {channel.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition group"
        >
          Read My Full Background & Philosophy
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.section>
  );
}
