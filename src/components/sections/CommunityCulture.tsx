"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Headphones, Flame } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Where Engineers Belong",
    desc: "Our Discord isn’t just chat — it’s where peer learning, job opportunities, and daily problem-solving happen together.",
  },
  {
    icon: Headphones,
    title: "Events & Collaborations",
    desc: "War room simulations, podcast interviews",
  },
  {
    icon: Flame,
    title: "Bonded in Fire",
    desc: "Our culture is built by engineers who’ve survived sleepless nights and critical incidents — and came back stronger.",
  },
];

const CommunityCulture = () => {
  return (
    <section className="relative text-gray-200 py-20 px-6 lg:px-16 overflow-hidden" id="Community">
  
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading (unchanged) */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.1]">
            Community & <span className="text-orange-300">Culture</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto px-4 font-light">
            Built by engineers who survived 3 AM outages{" "}
            <span className="text-amber-600">— so you don’t have to.</span>
          </p>
        </div>

        <div className="space-y-12 text-left">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0">
                <item.icon className="w-10 h-10 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <a
            href="https://discord.gg/infrathrone"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-xl text-lg font-semibold bg-orange-500 text-white shadow-md hover:bg-orange-600 transition"
          >
            Join the Community →
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityCulture;
