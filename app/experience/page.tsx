import React from "react";
import Link from "next/link";
import { experiencesData, personalData } from "@/lib/data";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import { FaLaptopCode, FaRocket, FaHandshake, FaGlobe } from "react-icons/fa";

export const metadata = {
  title: "Experience | Saurabh Pandey",
  description:
    "Explore Saurabh Pandey's professional timeline, freelance milestones, and client success stories across web and mobile development.",
};

export default function ExperiencePage() {
  return (
    <main className="w-full max-w-[56rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Career Timeline
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Professional Experience & Milestones
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          4+ years of building web and mobile applications, partnering directly with businesses globally to ship scalable software.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 w-full mb-16">
        {experiencesData.map((exp, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider inline-block mb-1.5">
                  {exp.date}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h2>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                <FaGlobe className="text-indigo-500" />
                {exp.location}
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {exp.description}
            </p>

            {index === 0 && (
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                <h3 className="text-xs font-bold text-indigo-900 dark:text-indigo-200 uppercase tracking-wider mb-2">
                  Featured Key Engagements:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400" />
                    <span><strong>Level Up Car Rental</strong> (Dubai Supercar Platform)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400" />
                    <span><strong>Placely</strong> (AI Soccer Recruiting Web App)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400" />
                    <span><strong>TechniPlast India</strong> (Industrial Packaging Portal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircleFill className="text-indigo-600 dark:text-indigo-400" />
                    <span><strong>Botana Beauty</strong> (Organic E-Commerce Store)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Client Collaboration Model */}
      <section className="w-full bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 border border-indigo-100 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Global Client Partnership Model
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          Working across time zones with clients in the UAE, Canada, the US, and India requires proven communication discipline:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Active Time Zone Flexibility
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Available for regular syncs across Gulf Standard Time (GST), Eastern Time (ET), and Indian Standard Time (IST).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Social Client Channels
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Fast responsiveness via LinkedIn messaging, Facebook, and WhatsApp for urgent updates.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
              Sprint-Based Milestones
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              Transparent project timelines with interactive preview deployments so you always know the exact status.
            </p>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="w-full text-center p-8 sm:p-10 rounded-3xl bg-gray-900 text-white dark:bg-gray-800 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Interested in working together?
        </h2>
        <p className="text-sm text-gray-300 max-w-[34rem] mx-auto mb-6">
          Download my resume or reach out directly to schedule a project kickoff.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={personalData.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm transition shadow-md inline-flex items-center justify-center gap-2"
          >
            Download Full CV
            <HiDownload className="text-base" />
          </a>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20 inline-flex items-center justify-center gap-2"
          >
            Contact Saurabh &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
