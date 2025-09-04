"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Headphones, Flame, ArrowUpRight } from "lucide-react";

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
    <section
      className="relative text-gray-200 py-20 px-6 lg:px-16 overflow-hidden"
      id="Community"
    >
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
            Community & Culture
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto px-4 font-light">
            Built by engineers who survived 3 AM outages{" "}
            <span className="text-[#ff5f1f]">— so you don’t have to.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-14 p-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <item.icon className="w-12 h-12 text-[#ff5f1f]" />
              </div>

              {/* Title + Desc */}
              <div className="flex flex-col gap-2 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
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
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base uppercase border border-white/10 hover:border-orange-400/40 hover:shadow-[0_0_32px_rgba(255,90,30,0.35)] transition-all"
          >
            Join the Community <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityCulture;
