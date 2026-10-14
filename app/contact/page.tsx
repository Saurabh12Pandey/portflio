import React from "react";
import Contact from "@/components/contact";
import { BsQuestionCircleFill } from "react-icons/bs";

export const metadata = {
  title: "Contact | Saurabh Pandey - Full-Stack & Mobile App Developer",
  description:
    "Get in touch with Saurabh Pandey for website development, mobile app development (iOS & Android), and custom digital solutions. Reach out via LinkedIn or Facebook.",
};

const faqs = [
  {
    q: "How do you usually collaborate with new clients?",
    a: "We start by connecting via LinkedIn or Facebook to review your requirements, target audience, and feature list. Once the scope and timeline are defined, I provide a detailed milestone roadmap and begin development in agile sprints.",
  },
  {
    q: "Do you build both iOS and Android mobile applications?",
    a: "Yes! Using cross-platform technologies such as React Native and Progressive Web Apps (PWAs), I deliver native-grade applications that operate seamlessly on both iOS and Android with a unified, cost-effective codebase.",
  },
  {
    q: "How do payments and project milestones work?",
    a: "I work with milestone-based payment schedules (e.g. 30% initial deposit, 40% after prototype/core feature completion, and 30% upon final delivery, testing, and deployment) to ensure transparency and security for both parties.",
  },
  {
    q: "Can you assist with redesigning or optimizing an existing website?",
    a: "Absolutely. I often help clients revamp outdated websites, improve Core Web Vitals and SEO rankings, or refactor backends for improved speed, reliability, and modern mobile responsiveness.",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full max-w-[56rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-10 sm:mb-14">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          Let&apos;s Connect
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Start Your Next Project
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          I provide website and mobile app development based on your unique requirements. Connect via my social channels or send an inquiry below.
        </p>
      </div>

      {/* Main Contact Form Component */}
      <div className="w-full mb-16 flex justify-center">
        <Contact />
      </div>

      {/* Frequently Asked Questions */}
      <section className="w-full bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-sm mb-12">
        <div className="text-center mb-8">
          <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
            Client FAQ
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900/40 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <BsQuestionCircleFill className="text-indigo-600 dark:text-indigo-400 text-sm flex-shrink-0" />
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
