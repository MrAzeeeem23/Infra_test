"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, UserCheck, FileText, Briefcase } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function MentorshipSection() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6 text-indigo-400" />,
      text: "DevOps roadmap & job transition",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      text: "Mock interviews with real-world Qs",
    },
    {
      icon: <FileText className="w-6 h-6 text-pink-400" />,
      text: "Resume & storytelling guidance",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-yellow-400" />,
      text: "Break into top product companies",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white antialiased">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`${inter.className} text-4xl md:text-6xl font-bold text-center mb-14`}
        >
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            1:1 DevOps Mentorship
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-900/20 backdrop-blur-sm hover:bg-gray-900/70 transition"
            >
              <div className="p-3 rounded-full bg-gray-800/80 border border-gray-700">
                {feature.icon}
              </div>
              <p
                className={`${jetbrainsMono.className} text-lg text-gray-200 transition hover:text-amber-600`}
              >
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://topmate.io/infrathrone"
            target="_blank"
            className="px-6 py-3 text-zinc-300 hover:text-white transition-all duration-300 border border-zinc-700 hover:border-zinc-500 rounded-lg"
          >
            Book a 1:1 Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
