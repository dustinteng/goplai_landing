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
    { name: "Sports League 1", src: "/placeholder.svg?height=60&width=120" },
    { name: "Sports Tech 2", src: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 3", src: "/placeholder.svg?height=60&width=120" },
    { name: "Partner 4", src: "/placeholder.svg?height=60&width=120" },
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
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Trusted By</h2>
          </div>

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

          <div className="mt-16 bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
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
                  <p className="text-gray-600">Demo Video Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
