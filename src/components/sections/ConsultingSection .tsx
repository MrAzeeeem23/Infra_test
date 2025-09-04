"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import {
  ShieldCheck,
  LineChart,
  Database,
  ArrowUpRight,
  Cpu,
  Handshake,
  Layers,
} from "lucide-react";
import TerminalServices from "../ui/addons/TerminalServices";
import ModernDevOpsPipeline from "../ui/addons/ModernDevOpsPipeline";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOut } },
};

const ConsultingSection = () => {
  return (
    <section
      id="Consulting"
      className="relative text-white py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 lg:px-16 overflow-hidden"
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
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-7xl"
      >
        <motion.div
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[56px] font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.15]">
            DevOps Consulting for Startups & Enterprises
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col justify-between rounded-2xl border border-white/10 p-5 sm:p-6 lg:p-8"
          >
            <div className="flex flex-col gap-6 sm:gap-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Services We Deliver
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LineChart className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                  <span className="text-sm sm:text-base text-zinc-200">
                    Infra architecture & scale planning
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                  <span className="text-sm sm:text-base text-zinc-200">
                    FinOps: cost reduction & right-sizing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                  <span className="text-sm sm:text-base text-zinc-200">
                    Security, HA/DR, compliance, DevSecOps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                  <span className="text-sm sm:text-base text-zinc-200">
                    Monitoring, chaos engineering, AI/LLM integration
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative rounded-2xl border border-white/10 flex justify-center items-center p-6"
          >
            <ModernDevOpsPipeline />
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Terminal
            </h3>
            <TerminalServices />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl border border-white/10 p-5 sm:p-6 lg:p-8"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent mb-6">
              Engagement Models
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Handshake className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200">
                  Project-based or monthly retainers
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Layers className="w-6 h-6 text-[#ff5f1f] mt-0.5" />
                <span className="text-sm sm:text-base text-zinc-200">
                  Hands-on or advisory support
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm p-6 sm:p-7 lg:p-10"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Hire Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <a
                  href="https://fiverr.com/infrathrone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base uppercase border border-white/10 hover:border-orange-400/40 hover:shadow-[0_0_32px_rgba(255,90,30,0.35)] transition-all"
                >
                  Hire on Fiverr <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="https://upwork.com/infrathrone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base uppercase border border-white/10 hover:border-orange-400/40 hover:shadow-[0_0_32px_rgba(255,90,30,0.35)] transition-all"
                >
                  Hire on Upwork <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:work@infrathrone.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base uppercase border border-orange-400/50 text-orange-200 shadow-md hover:shadow-[0_0_40px_rgba(255,90,30,0.45)] hover:scale-[1.02] transition-all"
                >
                  Enterprise Inquiries <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultingSection;

// <section className="relative text-white py-20 px-6 md:px-16 lg:px-28 overflow-hidden" id="Consulting" >
//   <div
//     className="pointer-events-none absolute inset-0 opacity-[0.08]"
//     style={{
//       backgroundImage:
//         "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
//       backgroundSize: "24px 24px",
//     }}
//   />

//   <motion.div
//     variants={fadeInUp}
//     initial="hidden"
//     whileInView="show"
//     viewport={{ once: true }}
//     className="relative z-10 max-w-5xl mx-auto"
//   >
//     <div className="text-center mb-20 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.1s_forwards]">
//       <h2 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[1.1]">
//         DevOps Consulting for Startups &amp; Enterprises
//       </h2>
//     </div>

//     <motion.div
//       variants={stagger}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="grid md:grid-cols-2 gap-10 mb-20"
//     >
//       <motion.div
//         variants={fadeInUp}
//         className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300"
//       >
//         <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 text-orange-300">
//           <Building2 size={22} /> Services We Deliver
//         </h3>
//         <ul className="space-y-4 text-gray-300 text-base mt-6 leading-relaxed">
//           <li className="flex items-start gap-3">
//             <LineChart className="text-orange-400 w-5 h-5 mt-1" />
//             Infra architecture &amp; scale planning
//           </li>
//           <li className="flex items-start gap-3">
//             <Database className="text-orange-400 w-5 h-5 mt-1" />
//             FinOps: cost reduction &amp; right-sizing
//           </li>
//           <li className="flex items-start gap-3">
//             <ShieldCheck className="text-orange-400 w-5 h-5 mt-1" />
//             Security, HA/DR, compliance, DevSecOps
//           </li>
//           <li className="flex items-start gap-3">
//             <Cpu className="text-orange-400 w-5 h-5 mt-1" />
//             Monitoring, chaos engineering, AI/LLM integration
//           </li>
//         </ul>
//       </motion.div>

//       <motion.div
//         variants={fadeInUp}
//         className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/40 transition-all duration-300"
//       >
//         <h3 className="text-lg md:text-xl font-medium flex items-center gap-2 text-orange-300">
//           <Cog size={22} /> Engagement Models
//         </h3>
//         <ul className="space-y-4 text-gray-300 text-base mt-6 leading-relaxed">
//           <li className="flex items-start gap-3">
//             Project-based or monthly retainers
//           </li>
//           <li className="flex items-start gap-3">
//             Hands-on or advisory support
//           </li>
//         </ul>
//       </motion.div>
//     </motion.div>

//     <motion.div
//       variants={fadeInUp}
//       className="flex flex-col md:flex-row items-center justify-center gap-6"
//     >
//       <a
//         href="https://fiverr.com/infrathrone"
//         className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden transition-all bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg hover:scale-105"
//       >
//         Hire us on Fiverr →
//       </a>
//       <a
//         href="https://upwork.com/infrathrone"
//         className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden transition-all bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:scale-105"
//       >
//         Hire us on Upwork →
//       </a>
//       <a
//         href="mailto:work@infrathrone.xyz"
//         className="relative px-8 py-3.5 rounded-xl font-medium overflow-hidden border border-orange-400/40 text-orange-300 bg-gray-900/60 hover:bg-gray-800/80 shadow-md hover:scale-105 transition-all"
//       >
//         Enterprise Inquiries →
//       </a>
//     </motion.div>
//   </motion.div>
// </section>
