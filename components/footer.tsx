"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Twitter, MessageCircle } from "lucide-react";
import Image from "next/image";

// Create a typed MotionDiv so it accepts all standard div props like className
const MotionDiv: React.FC<HTMLMotionProps<"div">> = motion.div;

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
    {
      name: "TikTok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M15 8v8a4 4 0 0 1-4 4" />
          <line x1="15" y1="4" x2="15" y2="12" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          ref={ref as React.Ref<HTMLDivElement>}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d5Ld4onfUnfHD3KYoQGV49vpo3tk9Y.png"
                alt="GOPLAI Logo"
                width={140}
                height={70}
                className="mb-4"
              />
              <p className="text-gray-400 max-w-xs">
                The first AI-powered sports community for amateur athletes.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <div className="flex items-center text-gray-400">
                <MessageCircle className="h-4 w-4 mr-2" />
                <a
                  href="mailto:contact@goplai.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  contact@goplai.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GOPLAI. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}
