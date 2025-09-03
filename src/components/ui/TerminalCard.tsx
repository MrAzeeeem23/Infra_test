"use client"

import React from 'react'
import { motion } from "framer-motion";

function TerminalCard() {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="mx-auto mt-14 max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 sm:p-6 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90"></span>
        </div>
        <div className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[11px] text-zinc-400">
          ~/infrathrone
        </div>
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-black/50 p-4 font-mono text-[13px] leading-relaxed">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex items-center gap-3 text-zinc-300"
        >
          <span className="text-emerald-400">→</span>
          <span>kubectl get war-room --ready</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mt-2 space-y-0.5 pl-7 text-zinc-400"
        >
          <div>STATUS: PRODUCTION-READY</div>
          <div>INCIDENTS: 3000+ HANDLED</div>
          <div>UPTIME: 99.99%</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-4 flex items-center gap-3 text-zinc-300"
        >
          <span className="text-blue-400">→</span>
          <span>npm run deploy-confidence</span>
          <span className="ml-2 inline-block h-4 w-1 bg-zinc-400/80 animate-pulse"></span>
        </motion.div>
      </div>
    </motion.div></div>
  )
}

export default TerminalCard