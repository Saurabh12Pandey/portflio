"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsLinkedin, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { personalData, clientChannels } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const [serviceType, setServiceType] = useState("Website Development");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,44rem)] text-center px-4"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Let&apos;s Build Your Next Project</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80 text-sm sm:text-base max-w-[36rem] mx-auto">
        I provide custom website and mobile app development based on your business requirements.
        Reach out directly via my client channels or send an inquiry below.
      </p>

      {/* Social / Client Acquisition Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8 text-left max-w-[36rem] mx-auto">
        {clientChannels.map((channel) => (
          <a
            key={channel.platform}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-white dark:bg-gray-800/80 border border-black/5 dark:border-white/10 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all hover:shadow-md group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-gray-900 dark:text-white">
                  {channel.platform}
                </span>
                <span className="text-[0.65rem] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {channel.badge}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {channel.handle}
              </p>
            </div>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-3 group-hover:underline inline-flex items-center gap-1">
              Connect &rarr;
            </span>
          </a>
        ))}
      </div>

      {/* Quick Direct Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm font-medium">
        <a
          href={personalData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 transition"
        >
          <BsWhatsapp className="text-emerald-600 dark:text-emerald-400 text-base" />
          WhatsApp: {personalData.phone}
        </a>
        <a
          href={`mailto:${personalData.email}`}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 hover:bg-gray-200 transition"
        >
          <HiOutlineMail className="text-base" />
          {personalData.email}
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white dark:bg-gray-800/60 p-6 sm:p-8 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm text-left">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          Send a Project Inquiry
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          Tell me about your project, timeline, and goals. I typically respond within 24 hours.
        </p>

        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            formData.append("serviceType", serviceType);
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Thank you! Your message has been sent successfully.");
          }}
        >
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Service Required
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Website Development",
                "Mobile App (iOS/Android)",
                "Full-Stack Web App",
                "E-Commerce Platform",
                "UI/UX Design",
                "Consultation / Other",
              ].map((service) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => setServiceType(service)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition text-center ${
                    serviceType === service
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                      : "bg-gray-50 dark:bg-gray-900/40 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                className="h-11 px-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white dark:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                name="senderName"
                type="text"
                placeholder="e.g. John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Your Email
              </label>
              <input
                className="h-11 px-4 w-full rounded-lg border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white dark:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Project Requirements & Details
            </label>
            <textarea
              className="h-36 w-full rounded-lg border border-black/10 dark:border-white/10 p-4 bg-gray-50 dark:bg-gray-900/50 text-gray-900 dark:text-white dark:outline-none focus:ring-2 focus:ring-indigo-500 text-sm leading-relaxed"
              name="message"
              placeholder="Describe your website or app requirements, goals, preferred timeline, budget, or links to references..."
              required
              maxLength={5000}
            />
          </div>

          <div className="pt-2">
            <SubmitBtn />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
