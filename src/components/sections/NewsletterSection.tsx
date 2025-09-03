"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Activity, Cpu, Briefcase, Users } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function NewsletterSection() {
  const items = [
    { text: "Real RCA breakdowns", icon: Activity },
    { text: "Production insights & tooling", icon: Cpu },
    { text: "DevOps interview prep", icon: Briefcase },
    { text: "Engineering culture stories", icon: Users },
  ];

  return (
    <section className="relative w-full py-28 bg-black text-white overflow-hidden">
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,87,34,0.15),transparent_60%)]" /> */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
        >
          Newsletter – Your Infra Digest
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto font-light"
        >
          Curated every 2 weeks — practical, sharp, and built for engineers like you.
        </motion.p>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 shadow-[0_0_25px_rgba(255,90,30,0.15)] hover:shadow-[0_0_35px_rgba(255,90,30,0.35)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-7 h-7 text-orange-500" />
                  <p className={`${jetbrainsMono.className} text-gray-300 text-lg`}>
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <a
            href="https://infrathrone.xyz/newsletter"
            target="_blank"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-lg font-semibold border border-white/10
                       hover:shadow-[0_0_40px_rgba(255,90,30,0.45)] hover:scale-105 transition-all"
          >
            <Mail className="w-6 h-6" />
            Join the Newsletter →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
