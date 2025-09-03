"use client";

import React from "react";
import { motion , Variants, easeOut } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  LineChart,
  Database,
  Cog,
  Cpu,
} from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const ConsultingSection = () => {
  return (
    <section className="relative text-white py-20 px-6 md:px-16 lg:px-28 overflow-hidden" id="Consulting" >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <div className="text-center mb-20 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.1]">
            DevOps Consulting for Startups &amp; Enterprises
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 text-orange-300">
              <Building2 size={22} /> Services We Deliver
            </h3>
            <ul className="space-y-4 text-gray-300 text-base mt-6 leading-relaxed">
              <li className="flex items-start gap-3">
                <LineChart className="text-orange-400 w-5 h-5 mt-1" />
                Infra architecture &amp; scale planning
              </li>
              <li className="flex items-start gap-3">
                <Database className="text-orange-400 w-5 h-5 mt-1" />
                FinOps: cost reduction &amp; right-sizing
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-orange-400 w-5 h-5 mt-1" />
                Security, HA/DR, compliance, DevSecOps
              </li>
              <li className="flex items-start gap-3">
                <Cpu className="text-orange-400 w-5 h-5 mt-1" />
                Monitoring, chaos engineering, AI/LLM integration
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300"
          >
            <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 text-orange-300">
              <Cog size={22} /> Engagement Models
            </h3>
            <ul className="space-y-4 text-gray-300 text-base mt-6 leading-relaxed">
              <li className="flex items-start gap-3">
                Project-based or monthly retainers
              </li>
              <li className="flex items-start gap-3">
                Hands-on or advisory support
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://fiverr.com/infrathrone"
            className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden transition-all bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg hover:scale-105"
          >
            Hire us on Fiverr →
          </a>
          <a
            href="https://upwork.com/infrathrone"
            className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden transition-all bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:scale-105"
          >
            Hire us on Upwork →
          </a>
          <a
            href="mailto:work@infrathrone.xyz"
            className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden border border-orange-400/40 text-orange-300 bg-gray-900/60 hover:bg-gray-800/80 shadow-md hover:scale-105 transition-all"
          >
            Enterprise Inquiries →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultingSection;