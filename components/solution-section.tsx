"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  UserCircle,
  TrendingUp,
  Video,
  Briefcase,
  Smartphone,
} from "lucide-react";
import type { MotionProps } from "framer-motion";
import type { HTMLAttributes } from "react";

// ✅ Type-safe MotionDiv using forwardRef
const MotionDiv = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & MotionProps
>((props, ref) => <motion.div ref={ref} {...props} />);
MotionDiv.displayName = "MotionDiv";

// ✅ Type-safe MotionH2 using forwardRef
const MotionH2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement> & MotionProps
>((props, ref) => <motion.h2 ref={ref} {...props} />);
MotionH2.displayName = "MotionH2";

const MotionCard = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & MotionProps
>((props, ref) => <motion.div ref={ref} {...props} />);
MotionCard.displayName = "MotionCard";

export default function SolutionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <UserCircle className="h-10 w-10 text-emerald-500" />,
      title: "AI-Powered Sports Profiles",
      description:
        "Create your digital sports identity with stats that matter for your game.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />,
      title: "Skill Rankings",
      description:
        "Get objective ratings based on your actual performance, not just reputation.",
    },
    {
      icon: <Video className="h-10 w-10 text-purple-500" />,
      title: "AI-Generated Highlights",
      description:
        "Our AI automatically creates highlight reels of your best moments.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-cyan-500" />,
      title: "Portable Player Profiles",
      description:
        "Take your stats and reputation with you to any league or tournament.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-20 bg-gray-50" id="solution">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <MotionH2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            The Solution
          </MotionH2>
        </div>

        <MotionDiv
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <MotionCard
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </MotionCard>
          ))}
        </MotionDiv>

        <MotionDiv
          className="mt-16 text-center flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Smartphone className="h-6 w-6 text-gray-700" />
          <p className="text-xl text-gray-700 font-medium">
            No fancy camera setup. Just your phone. AI does the rest.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
