"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";
import React from "react";

// Create a MotionDiv component that supports ref, className, and motion props.
const MotionDiv = motion.div as React.ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> &
    MotionProps &
    React.RefAttributes<HTMLDivElement>
>;

export default function ProblemSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="w-full py-20 bg-white" id="problem">
      <div className="container mx-auto px-4">
        <MotionDiv
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            The Problem
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Millions of players compete in pickup games, leagues, and
            tournaments—but they have no way to track performance, prove skill,
            or build a reputation beyond word-of-mouth.
          </p>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 md:p-8 rounded-xl mb-10">
            <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
              No more forgotten wins. <br className="hidden md:block" />
              No more 'trust me, I scored 3 goals.'
            </p>
          </div>

          <p className="text-lg md:text-xl font-semibold text-gray-900 italic">
            "If you've ever wanted your own ESPN highlight reel, this is the
            easiest money you'll ever spend."
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
