"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-24 sm:mb-32 w-full max-w-[50rem] px-4">
      <SectionHeading>Featured Client Projects</SectionHeading>
      <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 -mt-6 mb-10 max-w-[36rem] mx-auto">
        Real-world platforms I have engineered for international clients across luxury automotive, sports recruiting, luxury manufacturing, and e-commerce.
      </p>

      <div className="flex flex-col items-center">
        {projectsData.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/50 dark:border-indigo-800 dark:text-indigo-300 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition group"
        >
          View Full Project Case Studies & Architectures
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  );
}
