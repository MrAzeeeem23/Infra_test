"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, UserCheck, FileText, Briefcase } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function MentorshipSection() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      text: "DevOps roadmap & job transition",
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      text: "Mock interviews with real-world Qs",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      text: "Resume & storytelling guidance",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      text: "Break into top product companies",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white antialiased">
      {/* Background grid effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative container mx-auto mt-12 px-6 lg:px-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className={`${inter.className} text-4xl md:text-6xl font-bold text-center mb-14`}
        >
          <span className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            1:1 DevOps Mentorship
          </span>
        </motion.h2>

        {/* Features list */}
        <div className="flex flex-col max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: true }}
              className="flex justify-between items-center p-6 border-b border-white/10 group cursor-pointer"
            >
              <p
                className={`text-md  text-gray-200 transition-colors group-hover:text-[#ff5f1f]`}
              >
                {feature.text}
              </p>
              <motion.div
                whileHover={{ scale: 1.15, rotate: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-3 rounded-full border border-white/70 bg-white/5 group-hover:text-[#ff5f1f]"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://topmate.io/infrathrone"
            target="_blank"
            className="inline-flex items-center uppercase gap-3 px-10 py-4 rounded-4xl text-lg border border-white/20
            hover:shadow-[0_0_40px_rgba(255,90,30,0.45)] hover:text-[#ff5f1f] transition-all"
          >
            Book a 1:1 Call{" "}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
