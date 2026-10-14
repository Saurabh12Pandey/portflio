import React from "react";
import Link from "next/link";
import { BsArrowRight, BsCheckCircleFill } from "react-icons/bs";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaHandshake, FaAward } from "react-icons/fa";
import { personalData, clientChannels } from "@/lib/data";

export const metadata = {
  title: "About Saurabh Pandey | Full-Stack Web & Mobile App Developer",
  description:
    "Learn about Saurabh Pandey's background, development philosophy, and client partnership model across web and mobile app development.",
};

export default function AboutPage() {
  return (
    <main className="w-full max-w-[56rem] px-4 py-8 sm:py-12 flex flex-col items-center">
      {/* Page Header */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
          About Me
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-4 mb-4 tracking-tight leading-tight">
          Engineering High-Performance Web & Mobile Solutions
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[42rem] mx-auto leading-relaxed">
          Full-Stack Web & Mobile App Developer dedicated to turning complex business requirements into elegant, scalable digital reality.
        </p>
      </div>

      {/* Story & Philosophy Section */}
      <section className="w-full bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-lg shadow-md">
            <FaLaptopCode />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              My Journey & Development Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Passionate developer with 4+ years of hands-on production experience
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            My engineering journey started with a strong fascination for how clean code and intuitive design converge to create impactful digital experiences. Over the past 4+ years, I evolved from a frontend enthusiast into a full-stack engineer and cross-platform mobile developer.
          </p>
          <p>
            I specialize in developing end-to-end applications using <strong className="text-gray-900 dark:text-white">React, Next.js, TypeScript, React Native, Node.js, and modern cloud databases (MongoDB, PostgreSQL)</strong>.
            I have had the opportunity to build and scale production web platforms for diverse industries, including luxury automotive rentals in Dubai (
            <a href="https://levelupcarrent.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium underline">
              Level Up Car Rental
            </a>
            ), AI-driven college recruiting in Canada (
            <a href="https://placely.ca/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium underline">
              Placely
            </a>
            ), industrial B2B manufacturing (
            <a href="https://techniplastindia.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium underline">
              TechniPlast India
            </a>
            ), and botanical e-commerce (
            <a href="https://botana.co.in/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-medium underline">
              Botana Beauty
            </a>
            ).
          </p>
          <p>
            My philosophy centers on one core truth: <strong className="text-gray-900 dark:text-white">software should solve business challenges first</strong>. Whether it is reducing bounce rates with sub-second page loads, boosting conversion funnels, or ensuring native touch performance on mobile, every architectural decision is purpose-driven.
          </p>
        </div>
      </section>

      {/* How I Find & Partner with Clients */}
      <section className="w-full bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-gray-800/80 dark:via-gray-900 dark:to-gray-800/80 border border-indigo-100 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-sm mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center text-lg shadow-md">
            <FaHandshake />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Client Acquisition & Outreach Channels
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Connecting with founders across LinkedIn and Facebook
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I believe great partnerships begin with active communication and genuine understanding. Rather than relying on faceless bidding platforms, I build direct relationships through two primary channels: LinkedIn and Facebook.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 max-w-[42rem] mx-auto">
          {clientChannels.map((channel) => (
            <div
              key={channel.platform}
              className="p-5 rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 dark:text-white text-base">
                    {channel.platform}
                  </span>
                  <span className="text-[0.65rem] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    {channel.badge}
                  </span>
                </div>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {channel.role}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 inline-flex items-center gap-1"
              >
                Connect on {channel.platform} &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-800/70 border border-indigo-100 dark:border-gray-700 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          <strong className="text-gray-900 dark:text-white">Seamless Workflow:</strong> From your initial message on LinkedIn or Facebook, I schedule a discovery call or WhatsApp chat to define your project scope, deliverables, and timeline with total clarity.
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="w-full mb-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Guiding Development Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 flex items-center justify-center text-lg mb-3">
              <FaAward />
            </div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
              Client-First Customization
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Every project is tailored to the client&apos;s exact requirements. No cookie-cutter templates—only bespoke architectures built for longevity and growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400 flex items-center justify-center text-lg mb-3">
              <FaRocket />
            </div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
              Speed & Core Web Vitals
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Fast websites rank higher and convert better. I implement aggressive image optimization, code-splitting, and server caching to ensure sub-second loads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 dark:bg-pink-950/60 dark:text-pink-400 flex items-center justify-center text-lg mb-3">
              <FaMobileAlt />
            </div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
              Cross-Platform Fluidity
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Whether building a responsive web portal or an iOS/Android mobile app, I ensure buttery-smooth touch interactions and responsive breakpoints on every screen.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/60 border border-black/5 dark:border-white/10 shadow-sm">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 flex items-center justify-center text-lg mb-3">
              <FaHandshake />
            </div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-1.5">
              Clear & Transparent Delivery
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Weekly milestone previews, direct communication over WhatsApp/Slack, and thorough documentation so you have complete ownership of your product.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="w-full text-center p-8 sm:p-10 rounded-3xl bg-gray-900 text-white dark:bg-gray-800 dark:border dark:border-white/10 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          Have an upcoming website or mobile app project?
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-[34rem] mx-auto mb-6">
          Let&apos;s discuss your goals, target audience, and feature requirements. I&apos;m ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-gray-900 hover:bg-gray-100 font-semibold text-sm transition shadow-md"
          >
            Start a Conversation
          </Link>
          <Link
            href="/projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/20"
          >
            Explore My Work &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
