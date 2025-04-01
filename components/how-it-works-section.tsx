"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Brain, Trophy } from "lucide-react";

export default function HowItWorksSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <Camera className="h-12 w-12 text-white" />,
      title: "Record & Upload",
      description: "Use your phone or a friend's to record your game.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <Brain className="h-12 w-12 text-white" />,
      title: "AI Analyzes Your Game",
      description: "Get stats, rankings, and highlights automatically.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Trophy className="h-12 w-12 text-white" />,
      title: "Build Your Sports Resume",
      description: "Compare, track, and share your achievements.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="w-full py-20 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          // className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            How It Works
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          // className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  // className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                    >
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-gray-200 text-gray-700 font-bold hidden md:flex">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          // className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-xl font-medium text-gray-900">
            The future of amateur sports is here. Be part of it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
