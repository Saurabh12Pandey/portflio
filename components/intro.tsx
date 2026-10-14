"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsFacebook } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaMobileAlt, FaLaptopCode, FaCheckCircle, FaRocket } from "react-icons/fa";
import { personalData } from "@/lib/data";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-20 max-w-[54rem] text-center sm:mb-24 scroll-mt-[100rem] px-4"
    >
      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium mb-6 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Available for Freelance & Custom Client Projects
      </motion.div>

      {/* Avatar / Portrait */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            className="relative"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 shadow-xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden border-2 border-white dark:border-gray-800">
                {/* Fallback elegant monogram / avatar */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white font-bold text-3xl sm:text-4xl shadow-inner select-none">
                  SP
                </div>
              </div>
            </div>
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-1 text-3xl sm:text-4xl select-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Heading */}
      <motion.h1
        className="mb-6 mt-6 px-2 text-2xl font-bold !leading-[1.3] sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span>Hello, I&apos;m </span>
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {personalData.name}
        </span>
        .
        <br />
        <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 block mt-2">
          Full-Stack Web & Mobile App Developer
        </span>
      </motion.h1>

      {/* Bio Description */}
      <motion.p
        className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I build high-performance <span className="font-semibold text-gray-900 dark:text-white">websites</span> and{" "}
        <span className="font-semibold text-gray-900 dark:text-white">mobile applications</span> tailored to clients&apos; exact requirements.
        Creator of platforms like{" "}
        <a
          href="https://levelupcarrent.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 transition"
        >
          Level Up Car Rental (Dubai)
        </a>
        ,{" "}
        <a
          href="https://placely.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 transition"
        >
          Placely (Canada)
        </a>
        ,{" "}
        <a
          href="https://techniplastindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 transition"
        >
          TechniPlast India
        </a>
        , and{" "}
        <a
          href="https://botana.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 transition"
        >
          Botana Beauty
        </a>
        .
      </motion.p>

      {/* Key Specialization Badges */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs sm:text-sm font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 dark:bg-indigo-950/40 dark:border-indigo-800 dark:text-indigo-300">
          <FaLaptopCode className="text-indigo-500" /> Custom Web Development
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-300">
          <FaMobileAlt className="text-purple-500" /> Mobile App Development (iOS & Android)
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300">
          <FaRocket className="text-blue-500" /> Client Acquisition via LinkedIn & Socials
        </span>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-sm sm:text-base font-medium mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/contact"
          className="group bg-gray-900 text-white px-7 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition shadow-lg shadow-gray-900/20 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 w-full sm:w-auto justify-center"
        >
          Work With Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="/projects"
          className="group bg-white text-gray-800 px-7 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition borderBlack dark:bg-white/10 dark:text-white dark:hover:bg-white/20 w-full sm:w-auto justify-center shadow-sm"
        >
          Explore Projects
        </Link>

        <a
          className="group bg-white px-6 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white dark:hover:bg-white/20 w-full sm:w-auto justify-center shadow-sm"
          href={personalData.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>
      </motion.div>

      {/* Social & Client Outreach Links */}
      <motion.div
        className="flex items-center justify-center gap-3 text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <a
          className="bg-white px-5 py-3 text-blue-700 hover:text-blue-900 flex items-center gap-2.5 rounded-full focus:scale-105 hover:scale-105 active:scale-95 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-blue-400 dark:hover:text-blue-300 shadow-sm text-sm font-semibold"
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Connect on LinkedIn"
        >
          <BsLinkedin className="text-lg" />
          <span>LinkedIn</span>
        </a>

        <a
          className="bg-white px-5 py-3 text-blue-600 hover:text-blue-800 flex items-center gap-2.5 rounded-full focus:scale-105 hover:scale-105 active:scale-95 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-blue-400 dark:hover:text-blue-300 shadow-sm text-sm font-semibold"
          href={personalData.facebook}
          target="_blank"
          rel="noopener noreferrer"
          title="Connect on Facebook"
        >
          <BsFacebook className="text-lg" />
          <span>Facebook</span>
        </a>
      </motion.div>

      {/* Metrics Banner */}
      <motion.div
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            4+
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Live Global Platforms</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            100%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Client Satisfaction</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Web & App
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Full-Stack Solutions</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Worldwide
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Dubai • Canada • India</span>
        </div>
      </motion.div>
    </section>
  );
}
