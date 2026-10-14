"use client";

import { useRef } from "react";
import { ProjectItem } from "@/lib/types";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Project({
  title,
  subtitle,
  client,
  liveUrl,
  category,
  description,
  tags,
  imageUrl,
}: ProjectItem) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-6 sm:mb-10 last:mb-0 w-full max-w-[50rem]"
    >
      <section className="bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Content Column */}
          <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Badge & Category */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                  {category}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {client}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                {subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <ul className="flex flex-wrap gap-1.5 mb-5">
                {tags.map((tag, index) => (
                  <li
                    className="bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 px-2.5 py-1 text-[0.7rem] font-medium rounded-md"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100 dark:border-gray-700/50">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-sm"
                >
                  Visit Live Site
                  <FaExternalLinkAlt className="text-[0.7rem] opacity-75" />
                </a>

                <Link
                  href="/projects"
                  className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition px-3 py-2"
                >
                  Case Study Details &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="md:col-span-5 relative min-h-[220px] md:min-h-full bg-gray-100 dark:bg-gray-900 overflow-hidden group/img">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image
                src={imageUrl}
                alt={`${title} project preview`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden flex items-end p-4">
                <span className="text-white text-xs font-medium flex items-center gap-1.5">
                  Visit {liveUrl.replace("https://", "").replace("/", "")} &rarr;
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
