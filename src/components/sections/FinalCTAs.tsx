"use client";

import React from "react";
import { ExternalLink, Flame, Laptop, PhoneCall, Globe } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function FinalCTAs() {
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerContainer: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative text-gray-200 py-20 px-6 text-center min-h-screen flex items-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-[0.9] mb-6">
            Powering Your Journey
          </h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            transition={{ delay: 0.8 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {[
            {
              icon: <Flame className="w-7 h-7 text-[#ff5f1f]" />,
              text: "Join Elite Program",
              link: "https://elite.infrathrone.xyz",
            },
            {
              icon: <Laptop className="w-7 h-7 text-[#ff5f1f]" />,
              text: "Start with Live Projects",
              link: "https://build.infrathrone.xyz",
            },
            {
              icon: <PhoneCall className="w-7 h-7 text-[#ff5f1f]" />,
              text: "1:1 Guidance",
              link: "https://topmate.io/infrathrone",
            },
            {
              icon: <Globe className="w-7 h-7 text-[#ff5f1f]" />,
              text: "Hire Us for Consulting",
              link: "https://fiverr.com/infrathrone",
            },
          ].map((cta, index) => (
            <motion.a
              key={index}
              href={cta.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className={`group relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] hover:from-[#222222] hover:to-[#1a1a1a] text-gray-200 font-semibold py-6 px-8 rounded-2xl border border-orange-500/30 hover:border-orange-500/60 shadow-2xl transition-all duration-500 transform hover:scale-[1.02]`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10"></div>
              <div className="relative flex flex-col items-center justify-center gap-3 min-h-[120px]">
                <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {cta.icon}
                </div>
                <span className="text-base font-medium leading-tight text-center">
                  {cta.text}
                </span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors duration-300 transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.footer
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="pt-12"
        >
          <div className="space-y-4">
            <p className="text-base text-gray-400 font-medium">
              Built by{" "}
              <span className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300 cursor-default">
                The War Room Engineers
              </span>{" "}
              with chaos
            </p>
            <p className="italic text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              InfraThrone: Because{" "}
              <span className="text-orange-400 font-mono text-base bg-gray-900/50 px-2 py-1 rounded border border-gray-800">
                kubectl delete pod
              </span>{" "}
              fixes everything. Almost.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}