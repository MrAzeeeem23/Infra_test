"use client";

import { Flame, Server, Brain, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CoursesSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className="bg-black antialiased font-[Inter,system-ui,-apple-system,Segoe_UI,Roboto,Ubuntu,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif]"
      id="Courses"
    >
      <section className="relative py-28 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Section Heading */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.1]">
            Courses – Learn by Doing, Not Watching
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto px-4 font-light">
            The bootcamp where DevOps turns into{" "}
            <span className="text-[#ff5f1f] font-medium">
              battlefield-tested experience
            </span>
            .
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10 px-4"
        >
          {/* Course 1: InfraThrone Elite */}
          <motion.div variants={fadeInUp} className="relative rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 backdrop-blur-xl shadow-xl p-10 transition-all duration-500 group hover:scale-105">
            {/* Glow Accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/40 shadow-md">
                <Flame className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-white leading-snug">
                InfraThrone Elite
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              6-week flagship program for mid to senior engineers.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Real
                incident fire drills
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> RCA
                storytelling
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Infra
                debugging labs
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Mock
                interviews
              </li>
            </ul>

            {/* Format */}
            <p className="mt-6 text-sm text-zinc-500 italic">
              Weekday self-paced + weekend war rooms + mentorship
            </p>

            {/* CTA Button */}
            <a
              href="https://elite.infrathrone.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 text-black font-semibold shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Course 2: Live Client Projects */}
          <motion.div variants={fadeInUp} className="relative rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-blue-400/20 to-blue-600/10 backdrop-blur-xl shadow-xl p-10 transition-all duration-500 group hover:scale-105">
            {/* Glow Accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/40 shadow-md">
                <Server className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-white leading-snug">
                Live Client Projects – Shadowing Program
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Work on 4 production-grade projects with real constraints:
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> AWS cost
                optimization
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> CI/CD +
                Observability revamp
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                Greenfield infra build
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                Multi-product platform management
              </li>
            </ul>

            {/* Format */}
            <p className="mt-6 text-sm text-zinc-500 italic">
              Resume-worthy, guided, and outcome-driven
            </p>

            {/* CTA Button */}
            <a
              href="https://build.infrathrone.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 text-black font-semibold shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Course 3: DevOps + AI */}
          <motion.div variants={fadeInUp} className="relative rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-violet-400/20 to-violet-600/10 backdrop-blur-xl shadow-xl p-10 transition-all duration-500 group hover:scale-105">
            {/* Glow Accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-violet-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/40 shadow-md">
                <Brain className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-white leading-snug">
                DevOps + AI Course
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Bridge DevOps and AI with hands-on AIOps, observability
              insights, and generative automation.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                LLM-powered SRE copilots
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Anomaly
                detectors
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                AI-driven runbooks
              </li>
            </ul>

            {/* Format */}
            <p className="mt-6 text-sm text-zinc-500 italic">
              Cutting-edge curriculum, hands-on learning
            </p>

            {/* CTA Button */}
            <a
              href="https://ai.infrathrone.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 text-black font-semibold shadow-lg hover:shadow-violet-500/20 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </motion.div>

          {/* Course 4: Fresher's Program */}
          <motion.div variants={fadeInUp} className="relative rounded-2xl border border-zinc-700/50 bg-gradient-to-br from-orange-400/20 to-orange-600/10 backdrop-blur-xl shadow-xl p-10 transition-all duration-500 group hover:scale-105">
            {/* Glow Accent */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-400/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700/40 shadow-md">
                <GraduationCap
                  className="w-7 h-7 text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-2xl font-semibold text-white leading-snug">
                Fresher&apos;s DevOps Program
              </h3>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              For absolute beginners.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 text-zinc-300 text-sm">
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Linux,
                Git, CI/CD
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span> Docker,
                Kubernetes, Cloud
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                Mentorship & career planning
              </li>
              <li className="flex items-start gap-2 leading-relaxed">
                <span className="text-emerald-400 font-bold">›</span>{" "}
                Community support
              </li>
            </ul>

            {/* Format */}
            <p className="mt-6 text-sm text-zinc-500 italic">
              Learn from scratch with guided mentorship
            </p>

            {/* CTA Button */}
            <a
              href="https://fresher.infrathrone.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-black font-semibold shadow-lg hover:shadow-orange-500/20 transition-all hover:scale-105 hover:-translate-y-0.5"
            >
              Enroll Now <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </motion.div>
        </motion.div>

        {/* Background Floating Glows */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-emerald-500/10 blur-[140px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-violet-500/10 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/10 blur-[100px] rounded-full animate-pulse"></div>
      </section>
    </div>
  );
}