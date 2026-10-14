import React from "react";
import Link from "next/link";
import { skillsCategories, skillsData } from "@/lib/data";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";
import { FaLaptopCode, FaMobileAlt, FaServer, FaDatabase, FaTools, FaHandshake } from "react-icons/fa";

export const metadata = {
  title: "Skills & Technologies | Saurabh Pandey",
  description:
    "Explore Saurabh Pandey's technical toolkit: React, Next.js, React Native, TypeScript, Node.js, MongoDB, PostgreSQL, and cloud deployments.",
};

const categoryIcons = [
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaTools,
  FaHandshake,
];

export default function SkillsPage() {
  return (
    <main className="w-full max-w-[58rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Technical Toolkit
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Skills, Frameworks & Tooling
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          Carefully curated technologies ensuring peak runtime performance, clean architecture, and seamless cross-platform user experiences.
        </p>
      </div>

      {/* Quick Pills Bar */}
      <div className="mb-14 p-6 rounded-3xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm w-full text-center">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
          Core Technologies at a Glance
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {skillsData.map((skill, i) => (
            <span
              key={i}
              className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200 border border-black/5 dark:border-white/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
        {skillsCategories.map((cat, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];
          return (
            <div
              key={cat.title}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg border border-indigo-100 dark:border-indigo-800 shadow-sm">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 border border-indigo-100/80 dark:border-indigo-900/40"
                    >
                      <BsCheckCircleFill className="text-indigo-500 text-[0.65rem]" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-World Application Spotlight */}
      <section className="w-full bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 border border-indigo-100 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Skills in Production: How I Apply These Tools
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6">
          Every library and tool in my stack has been battle-tested on real client applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Next.js 13+ App Router & SSR
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Applied on <strong className="text-indigo-600 dark:text-indigo-400">Level Up Car Rental</strong> and <strong className="text-indigo-600 dark:text-indigo-400">Botana</strong> to deliver instant server-rendered pages with 95+ Core Web Vitals scores.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Data Visualization & AI Matching
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Leveraged on <strong className="text-indigo-600 dark:text-indigo-400">Placely</strong> to display dynamic multi-factor athlete fit radars, GPA benchmarks, and recruitment algorithms.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Cross-Platform Mobile Architecture
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Building native iOS and Android apps with React Native, smooth gesture physics, and offline data sync based on client specifications.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Static SEO & Fast Asset Bundling
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Used on <strong className="text-indigo-600 dark:text-indigo-400">TechniPlast India</strong> to ensure rapid international page loads and top Google ranking for luxury packaging keywords.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="w-full text-center p-8 sm:p-10 rounded-3xl bg-gray-900 text-white dark:bg-gray-800 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Need a developer proficient in these technologies?
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-[34rem] mx-auto mb-6">
          I am available for full-time freelance contracts, new platform builds, and feature expansions.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm transition shadow-lg"
        >
          Get in Touch Today &rarr;
        </Link>
      </section>
    </main>
  );
}
