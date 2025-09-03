"use client";

import React from "react";
import { Inter } from "next/font/google";
import { Play, ArrowRight, Calendar, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import TerminalCard from "../ui/TerminalCard";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  })
};

export default function HeroSection() {
  const words = [
    "Master DevOps",
    "Survive War Rooms",
    "Build Prod* Infrastructure",
  ];

  return (
    <div
      className={`relative min-h-screen overflow-hidden bg-black text-white antialiased ${inter.className}`}
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-44 -left-40 h-[20rem] w-[20rem] md:h-[28rem] md:w-[28rem] rounded-full bg-emerald-500/20 blur-[100px] md:blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[22rem] w-[22rem] md:h-[30rem] md:w-[30rem] rounded-full bg-violet-500/20 blur-[110px] md:blur-[140px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      <main className="relative z-10">
      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-33 pb-12 sm:pt-30 md:pt-24 lg:pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md text-xs sm:text-sm"
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="font-medium text-zinc-300">
                Elite DevOps Training
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={1}
              className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-6xl leading-tight sm:leading-[1.1] font-semibold bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
            >
              <FlipWords words={words} />
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={2}
              className="mx-auto mt-4 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 px-2"
            >
              InfraThrone is your one-stop ecosystem for  <span className="text-amber-600 font-medium">real-world DevOps mastery, blending elite training, live projects, AI-powered infra, expert mentorship, and enterprise-grade </span>consulting.{" "}
              
            </motion.p>


            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={3}
              className="mt-8 flex flex-col sm:flex-row sm:justify-center items-center gap-3 sm:gap-4"
            >
              <a
                href="#Courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black shadow-sm outline outline-white/20 transition-all hover:shadow hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="https://topmate.io/infrathrone"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 sm:py-3 text-sm text-zinc-200 backdrop-blur-md transition-all hover:text-white hover:border-white/20 hover:bg-white/10 w-full sm:w-auto"
              >
                <Calendar className="h-4 w-4" />
                Book a 1:1 Call
              </a>

              <a
                href="https://fiverr.com/infrathrone"
                target="_blank"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 sm:py-3 text-sm text-zinc-200 backdrop-blur-md transition-all hover:text-white hover:border-white/20 hover:bg-white/10 w-full sm:w-auto"
              >
                <Users className="h-4 w-4" />
                Hire for Consulting
              </a>
            </motion.div>
          </div>

          <div className="mt-12 sm:mt-16">
            <TerminalCard />
          </div>
        </section>
      </main>
    </div>
  );
}
