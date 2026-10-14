"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      duration: 0.4,
    },
  }),
};

export default function Services() {
  const { ref } = useSectionInView("Services", 0.3);

  return (
    <section
      id="services"
      ref={ref}
      className="mb-24 sm:mb-32 max-w-[54rem] scroll-mt-28 w-full px-4"
    >
      <SectionHeading>Services I Provide</SectionHeading>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 -mt-6 mb-10 max-w-[38rem] mx-auto">
        Specializing in end-to-end website and mobile app development built precisely according to your business and technical specifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl mb-4 border border-indigo-100 dark:border-indigo-800">
                  <Icon />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2"
                    >
                      <BsCheckCircleFill className="text-emerald-500 text-[0.75rem] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  Tailored to Client Scope
                </span>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition inline-flex items-center gap-1 group"
                >
                  Learn More
                  <BsArrowRight className="group-hover:translate-x-0.5 transition" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition shadow-md group"
        >
          Explore All Services & Client Workflow
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
