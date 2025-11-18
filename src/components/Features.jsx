import { motion } from "framer-motion";
import { ShieldCheck, Bot, Lock, Activity } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Continuous Protection",
    desc: "Real‑time detection across endpoints, cloud, and identity with automated hardening.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    desc: "Natural‑language investigations, playbook suggestions, and auto‑triage in chat.",
  },
  {
    icon: Lock,
    title: "Zero‑Trust Access",
    desc: "Fine‑grained policies that adapt to context and device posture instantly.",
  },
  {
    icon: Activity,
    title: "Incident Rooms",
    desc: "Spin up collaborative war rooms that sync with your tooling and audit trail.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white">
            Everything your security team needs
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 text-slate-300">
            Built with a familiar, chat‑first workflow so your team can move faster together.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }} className="group relative rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:border-emerald-400/30">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:via-emerald-500/5 transition" />
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
