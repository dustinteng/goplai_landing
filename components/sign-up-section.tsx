"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, Toaster } from "sonner";

export default function SignUpSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sport: "",
    experienceLevel: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "You're on the list!",
      description: "Thank you for signing up for early access to GOPLAI.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      sport: "",
      experienceLevel: "",
    });
  };

  const sports = [
    "Basketball",
    "Soccer",
    "Football",
    "Baseball",
    "Tennis",
    "Volleyball",
    "Hockey",
    "Rugby",
    "Other",
  ];

  const experienceLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Semi-Pro",
    "Professional",
  ];

  return (
    <section
      className="w-full py-20 bg-gradient-to-b from-gray-50 to-gray-100"
      id="signup"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Be the First to Experience GOPLAI
              </h2>
              <p className="text-gray-600">
                Join our exclusive early access program and revolutionize your
                sports experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sport">Primary Sport</Label>
                <Select
                  value={formData.sport}
                  onValueChange={(value) => handleSelectChange("sport", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport} value={sport}>
                        {sport}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experienceLevel">Experience Level</Label>
                <Select
                  value={formData.experienceLevel}
                  onValueChange={(value) =>
                    handleSelectChange("experienceLevel", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing Up..." : "Sign Up for Early Access!"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-emerald-600 font-medium">
                First 500 sign-ups get VIP early access perks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
}
