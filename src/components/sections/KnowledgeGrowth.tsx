"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import infrothrone from "../../../public/infrathrone.webp"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function KnowledgeGrowth() {
  return (
    <section className="relative w-full py-24 bg-black text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <div className="mb-20 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.1]">
            Knowledge <span className="text-white/90">&</span> Growth
            </h2>
            <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto font-light">
              The bootcamp where DevOps turns into{" "}
              <span className="text-amber-600 font-medium">
                battlefield-tested experience
              </span>
              .
            </p>
          </div>
          <p
            className={`${jetbrainsMono.className} text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed`}
          >
            YouTube – Learn from{" "}
            <span className="text-orange-400">Real Outages</span>. DevOps
            deep-dives, outage walkthroughs, mock interviews, and guest infra
            breakdowns{" "}
            <span className="text-orange-500">(Netflix, Microsoft, etc.)</span>.
          </p>

          <motion.a
            href="https://youtube.com/@infrathrone"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg backdrop-blur-lg border border-white/10
                      transition-all duration-300"
          >
            <PlayCircle className="w-6 h-6" />
            Watch Infra Stories →
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <Image
              src={infrothrone}
              alt="InfraThrone YouTube Preview"
              width={500}
              height={500}
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500/80 group-hover:bg-orange-600 transition shadow-lg cursor-pointer">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-400">
            Exclusive learning content on{" "}
            <span className="text-orange-400 font-medium">
              InfraThrone’s YouTube
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
