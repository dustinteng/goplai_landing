"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

// ✅ Properly typed motion components
const MotionDiv = motion.div as React.ComponentType<
  HTMLAttributes<HTMLDivElement> & MotionProps
>;
const MotionH1 = motion.h1 as React.ComponentType<
  HTMLAttributes<HTMLHeadingElement> & MotionProps
>;
const MotionP = motion.p as React.ComponentType<
  HTMLAttributes<HTMLParagraphElement> & MotionProps
>;

export default function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-40" : "opacity-0"
          }`}
        >
          <source
            src="/placeholder.svg?height=1080&width=1920"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        {/* Small Header */}
        <div className="text-sm md:text-base text-emerald-300 font-semibold tracking-wider uppercase mb-4">
          The AI-Powered Sports Community for Everyone
        </div>
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d5Ld4onfUnfHD3KYoQGV49vpo3tk9Y.png"
            alt="GOPLAI Logo"
            width={240}
            height={120}
            className="mb-6 rounded-xl "
          />
        </div>

        <MotionH1
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Game. Your Highlights. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Your Reputation.
          </span>
        </MotionH1>

        <MotionP
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          GOPLAI is the first AI-powered sports community for amateur athletes.
          Track your performance, prove your skill, and relive every game with
          AI-powered highlights.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            onClick={() =>
              document
                .getElementById("signup")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Sign Up for Early Access!
          </Button>
        </MotionDiv>

        {/* Mock UI Overlay */}
        <MotionDiv
          className="mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Game Stats */}
              <div className="bg-black/40 rounded-lg p-3 border border-emerald-500/30">
                <h3 className="text-emerald-400 text-sm font-medium mb-2">
                  Game Stats
                </h3>
                <div className="space-y-2">
                  {[
                    ["Goals", "3"],
                    ["Assists", "2"],
                    ["Pass Accuracy", "87%"],
                  ].map(([label, value]) => (
                    <div className="flex justify-between" key={label}>
                      <span className="text-gray-300 text-xs">{label}</span>
                      <span className="text-white font-bold text-xs">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-black/40 rounded-lg p-3 border border-blue-500/30">
                <h3 className="text-blue-400 text-sm font-medium mb-2">
                  Highlights
                </h3>
                <div className="rounded bg-black/50 h-24 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Skill Ranking */}
              <div className="bg-black/40 rounded-lg p-3 border border-purple-500/30">
                <h3 className="text-purple-400 text-sm font-medium mb-2">
                  Skill Ranking
                </h3>
                <div className="space-y-2">
                  {[
                    ["Speed", "85%"],
                    ["Accuracy", "70%"],
                    ["Stamina", "90%"],
                  ].map(([label, percent]) => (
                    <div
                      className="flex justify-between items-center"
                      key={label}
                    >
                      <span className="text-gray-300 text-xs">{label}</span>
                      <div className="w-24 bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-purple-500 h-1.5 rounded-full"
                          style={{ width: percent }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
