"use client";

import React from "react";
import { motion } from "framer-motion";
import { Book, Cpu, Terminal } from "lucide-react";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const assets = [
  {
    icon: Book,
    title: "War Room Engineer Book",
    desc: "50+ real-world RCAs, troubleshooting techniques & much more",
    color: "from-orange-500/10 to-orange-600/20",
    className: "bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 backdrop-blur-xl"
  },
  {
    icon: Cpu,
    title: "AI + System Design Book",
    desc: "Modern architecture decoded with AI-infra integration",
    color: "from-orange-400 to-orange-500",
    className: "bg-gradient-to-br from-blue-400/20 to-blue-600/10 backdrop-blur-xl "
  },
  {
    icon: Terminal,
    title: "DevOps Interview Question Bank",
    desc: "Battle-tested questions from top-tier companies",
    color: "from-yellow-500 to-orange-500",
    className: "bg-gradient-to-br from-violet-400/20 to-violet-600/10 backdrop-blur-xl"
  },
];

export default function UpcomingAssets() {
  return (
    <section className="relative w-full py-24 text-white overflow-hidden">
   
      {/* <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-44 -left-40 h-[28rem] w-[28rem] rounded-full bg-red-600/10 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-50 -right-50 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-[140px]"
      /> */}

   
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Upcoming
          </h2>
        </div>

        <div className="relative">
          {/* vertical glowing line (hidden on mobile) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-orange-500/60 via-orange-400/40 to-transparent rounded-full" />

          <div className="flex flex-col gap-16 md:gap-24">
            {assets.map((asset, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={asset.title}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                 
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-[0_0_40px_rgba(255,90,30,0.45)]" />

                  <div
                    className={`w-full max-w-sm p-6 rounded-2xl border border-gray-800 shadow-xl group hover:shadow-[0_0_40px_rgba(255,90,30,0.45)] transition
                      ${isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left"} ${asset.className} text-left`}
                  >
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${asset.color} text-white mb-5`}
                    >
                      <asset.icon className="w-7 h-7" />
                    </div>
                    <h3
                      className={`${inter.className} text-xl font-semibold mb-3 group-hover:text-[#ff5f1f]`}
                    >
                      {asset.title}
                    </h3>
                    <p
                      className={`${jetbrainsMono.className} text-gray-400 leading-relaxed text-sm`}
                    >
                      {asset.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
