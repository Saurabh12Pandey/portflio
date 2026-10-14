import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaCheckCircle, FaRocket, FaLaptopCode } from "react-icons/fa";
import { BsArrowRight, BsGlobe, BsCheckCircleFill } from "react-icons/bs";
import { projectsData } from "@/lib/data";

export const metadata = {
  title: "Projects & Client Work | Saurabh Pandey",
  description:
    "Explore real-world web and mobile applications developed by Saurabh Pandey: Level Up Car Rental Dubai, Placely AI, TechniPlast India, and Botana Beauty.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full max-w-[58rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Portfolio & Case Studies
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Featured Client Projects & Live Platforms
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          In-depth look at production web applications, e-commerce stores, and digital portals I engineered for international businesses.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16 w-full">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className="w-full bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Visual Showcase Banner */}
            <div className="relative w-full h-[260px] sm:h-[380px] bg-gray-900 overflow-hidden group">
              <Image
                src={project.imageUrl}
                alt={`${project.title} live preview`}
                fill
                priority={index === 0}
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/20 inline-block mb-2">
                      {project.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-200 mt-0.5">
                      {project.subtitle} • {project.client}
                    </p>
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-900 font-bold text-xs sm:text-sm hover:bg-gray-100 transition shadow-lg w-max"
                  >
                    <span>Visit Live Website</span>
                    <FaExternalLinkAlt className="text-xs opacity-75" />
                  </a>
                </div>
              </div>
            </div>

            {/* Case Study Deep Dive */}
            <div className="p-6 sm:p-10">
              {/* Executive Summary */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Project Overview
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    The Client Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.detailedCaseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    My Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.detailedCaseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Key Features Implemented */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <FaCheckCircle className="text-indigo-600 dark:text-indigo-400" />
                  Key Features & Capabilities Built
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.detailedCaseStudy.features.map((feat, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/60 text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2.5"
                    >
                      <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400 text-xs mt-1 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact */}
              <div className="mb-8 p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50">
                <h4 className="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <FaRocket className="text-indigo-600 dark:text-indigo-400" />
                  Business Results & Impact
                </h4>
                <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300 leading-relaxed font-medium">
                  {project.detailedCaseStudy.impact}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                    Technologies & Architecture
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition"
                >
                  Explore {project.liveUrl.replace("https://", "").replace("/", "")}
                  <BsArrowRight />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Box */}
      <section className="mt-16 w-full text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-white shadow-2xl">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 tracking-tight">
          Ready to build your next custom platform?
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-[36rem] mx-auto mb-8">
          Whether you need a high-end web application like Level Up, an AI matching portal like Placely, an industrial B2B catalog, or an e-commerce platform, I can help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-gray-950 hover:bg-gray-100 font-bold text-sm transition shadow-lg"
          >
            Start Your Project Now
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
          >
            Review Services & Pricing &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
