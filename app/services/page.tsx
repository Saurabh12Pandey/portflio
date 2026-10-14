import React from "react";
import Link from "next/link";
import { servicesData, workflowSteps } from "@/lib/data";
import { BsArrowRight, BsCheckCircleFill, BsLightningChargeFill } from "react-icons/bs";
import { FaLaptopCode, FaMobileAlt, FaServer, FaShoppingBag, FaPaintBrush, FaTools } from "react-icons/fa";

export const metadata = {
  title: "Services | Website & Mobile App Development | Saurabh Pandey",
  description:
    "Explore bespoke web development, mobile app development (iOS & Android), full-stack SaaS, and e-commerce solutions by Saurabh Pandey.",
};

export default function ServicesPage() {
  return (
    <main className="w-full max-w-[58rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Services & Solutions
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Website & Mobile App Development
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          Every solution is engineered from scratch around your specific business goals, user needs, and performance benchmarks.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
        {servicesData.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-gray-800/70 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl mb-5 border border-indigo-100 dark:border-indigo-800 shadow-sm">
                  <Icon />
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2.5"
                      >
                        <BsCheckCircleFill className="text-emerald-500 text-xs mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 mb-6">
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1.5">
                    Standard Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[0.7rem] bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-sm"
                >
                  Request a Quote for {service.title}
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5-Step Client Delivery Workflow */}
      <section className="w-full bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-sm mb-16">
        <div className="text-center max-w-[36rem] mx-auto mb-10">
          <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 dark:bg-purple-950/60 dark:border-purple-800 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider">
            Development Lifecycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-3 mb-3">
            How We Will Work Together
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            A structured, transparent development journey designed to guarantee on-time delivery and flawless code quality.
          </p>
        </div>

        <div className="space-y-6">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 sm:p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 hover:border-indigo-200 dark:hover:border-indigo-800 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                {step.step}
              </div>
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900 text-white shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
          Ready to turn your requirements into reality?
        </h2>
        <p className="text-sm sm:text-base text-gray-200 max-w-[36rem] mx-auto mb-8">
          Send me your project brief or schedule a free 20-minute technical consultation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-bold text-sm transition shadow-lg"
        >
          Discuss Your Project Requirements &rarr;
        </Link>
      </section>
    </main>
  );
}
