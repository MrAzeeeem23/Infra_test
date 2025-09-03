"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Cloud, ServerCog, Rocket, Users } from "lucide-react";

const audience = [
  {
    icon: <Target className="w-8 h-8 text-orange-500" />,
    title: "DevOps Engineers",
    desc: "Sharpen your skills and master infra at scale.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-orange-500" />,
    title: "Cloud Architects",
    desc: "Design production-ready cloud systems with confidence.",
  },
  {
    icon: <ServerCog className="w-8 h-8 text-orange-500" />,
    title: "Platform / SREs",
    desc: "Build reliability, automate ops, and tame incidents.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
    title: "Aspiring Infra Leaders",
    desc: "Grow from tool-user to decision-maker with real context.",
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Scaling Startups",
    desc: "Scale infra with limited hands, without breaking things.",
  },
];

const MissionSection = () => {
  return (
    <section className="relative text-gray-200 py-20 px-6 lg:px-16 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            InfraThrone’s <span className="text-orange-500">Mission</span>
          </h2>
          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto font-light">
            We’re building a{" "}
            <span className="text-white font-medium">movement</span> where
            engineers don’t just learn tools — they{" "}
            <span className="text-orange-500 font-semibold">
              think like architects, act like SREs
            </span>
            , and{" "}
            <span className="text-orange-400 font-semibold">
              lead with production context
            </span>
            .
          </p>
        </div>

        <div className="relative mt-20">
          {/* Beam (now visible on all screens) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute inset-0 w-[3px] bg-gradient-to-b from-orange-500 via-orange-400 to-transparent"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 w-[8px] bg-orange-500/20 blur-md"
            />
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
              className="absolute top-0 w-[6px] h-24 bg-gradient-to-b from-orange-300 to-transparent blur-sm opacity-80"
            />
          </div>

          <div className="flex flex-col gap-20 relative z-10">
            {audience.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -120 : 120,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.25 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start md:text-left"
                    : "md:justify-end md:text-left"
                } justify-center`}
              >
                <div
                  className={`bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 shadow-xl relative group hover:shadow-orange-500/20 transition
                  w-full md:w-[42%]
                  ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  pl-10 pr-10 md:pl-6 md:pr-6`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                  <div className="absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* Glowing dot only on desktop */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow: [
                      "0 0 10px rgba(249,115,22,0.4)",
                      "0 0 25px rgba(249,115,22,0.8)",
                      "0 0 10px rgba(249,115,22,0.4)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-orange-500 border border-white"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
