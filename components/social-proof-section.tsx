"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

// ✅ Type-safe MotionDiv using forwardRef
const MotionDiv = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & MotionProps
>((props, ref) => <motion.div ref={ref} {...props} />);
MotionDiv.displayName = "MotionDiv";

export default function SocialProofSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const logos = [
    { name: "UCB", src: "/ucb.svg" },
    { name: "Sports Tech 2", src: "/imsport.jpg" },
    { name: "Partner 3", src: "/brewery.png" },
    { name: "Partner 4", src: "/calfc.png" },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          ref={ref}
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Trusted By</h2>
          </div>

          {/* Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* Video Section */}
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
        </MotionDiv>
      </div>
    </section>
  );
}
