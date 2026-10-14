"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import { FaBriefcase, FaGraduationCap, FaLaptopCode, FaGlobe } from "react-icons/fa";

const expIcons = [FaLaptopCode, FaBriefcase, FaGraduationCap];

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-24 sm:mb-32 max-w-[50rem] px-4 w-full">
      <SectionHeading>Professional Experience</SectionHeading>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 -mt-6 mb-12 max-w-[36rem] mx-auto">
        A track record of engineering scalable digital products and collaborating with global clients across the UAE, Canada, and India.
      </p>

      {/* Modern Vertical Timeline */}
      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10 sm:space-y-12">
        {experiencesData.map((item, index) => {
          const Icon = expIcons[index % expIcons.length];
          return (
            <div key={index} className="relative group">
              {/* Timeline Icon Node */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-gray-900 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
                <Icon />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider w-max">
                    {item.date}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                    <FaGlobe className="text-indigo-500" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  {item.description}
                </p>

                {index === 0 && (
                  <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                    <span className="text-[0.7rem] font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider block mb-2">
                      Key Client Platforms Delivered:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400 text-[0.7rem]" />
                        <span><strong>Level Up Car Rental</strong> (Dubai)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400 text-[0.7rem]" />
                        <span><strong>Placely</strong> (Canada / US)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400 text-[0.7rem]" />
                        <span><strong>TechniPlast India</strong> (Mumbai)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400 text-[0.7rem]" />
                        <span><strong>Botana Beauty</strong> (India)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/50 dark:border-indigo-800 dark:text-indigo-300 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition group"
        >
          View Full Career History & Client Collaboration Model
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
