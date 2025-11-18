import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-40 h-80 blur-3xl bg-[radial-gradient(60%_60%_at_50%_100%,rgba(16,185,129,0.25),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300/90 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live threat monitoring for modern teams
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }} className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Cybersecurity, built like Slack.
            <span className="block text-emerald-400">Fast. Collaborative. Secure.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }} className="mt-6 text-lg text-slate-300 max-w-2xl">
            Sentinel turns security operations into a conversation. Detect, triage, and respond together — all inside a familiar, chat-first interface.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-lg bg-emerald-500 text-slate-900 font-medium shadow-[0_12px_40px_-12px_rgba(16,185,129,0.9)] hover:shadow-[0_16px_48px_-12px_rgba(16,185,129,1)] transition">Start free trial</a>
            <a href="#demo" className="px-5 py-3 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">Watch demo</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }} className="mt-8 flex items-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> SOC2 Type II</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> ISO 27001</div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /> GDPR Ready</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
