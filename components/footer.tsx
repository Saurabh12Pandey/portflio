import React from "react";
import Link from "next/link";
import { links, personalData } from "@/lib/data";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-black/5 dark:border-white/10 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm py-10 px-4 text-center text-gray-500 text-xs">
      <div className="max-w-[50rem] mx-auto flex flex-col items-center">
        {/* Brand */}
        <div className="mb-4">
          <span className="font-bold text-base text-gray-900 dark:text-white">
            {personalData.name}
          </span>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Full-Stack Web & Mobile App Developer
          </p>
        </div>

        {/* Quick Nav Links */}
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6 text-xs font-medium text-gray-600 dark:text-gray-400">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 text-base mb-6">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition text-xs font-semibold"
            title="LinkedIn"
          >
            <BsLinkedin className="text-sm text-blue-700 dark:text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personalData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-xs font-semibold"
            title="Facebook"
          >
            <BsFacebook className="text-sm text-blue-600 dark:text-blue-400" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="mb-1 text-xs">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </p>
        <p className="text-[0.7rem] text-gray-400 dark:text-gray-500">
          Built with Next.js (App Router), React, TypeScript, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
