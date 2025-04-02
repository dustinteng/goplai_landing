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
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 px-4 md:px-8 py-12">
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
      <div className="container mx-auto z-10 text-center">
        {/* Small Header */}
        <div className="text-sm md:text-base text-emerald-300 font-semibold tracking-wider uppercase mb-4">
          The AI-Powered Sports Community for Everyone
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d5Ld4onfUnfHD3KYoQGV49vpo3tk9Y.png"
            alt="GOPLAI Logo"
            width={240}
            height={120}
            className="mb-6 rounded-xl"
          />
        </div>

        {/* Headline */}
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

        {/* Subheadline */}
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

        {/* Call to Action Button */}
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

        {/* Mock UI Overlay (optional) */}
        <MotionDiv
          className="mt-16 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        ></MotionDiv>

        {/* Video Preview Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-6 md:p-8">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/video/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
