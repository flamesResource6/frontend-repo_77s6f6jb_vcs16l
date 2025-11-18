import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Copy */}
          <div className="lg:col-span-1">
            <motion.h3 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl font-semibold text-white">
              Start in minutes
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-slate-300">
              No hardware. No agents. Connect your SIEM and identity provider to get instant visibility.
            </motion.p>
          </div>

          {/* Plans */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 hover:via-emerald-500/5 transition" />
              <div className="flex items-baseline justify-between">
                <h4 className="text-white font-medium">Team</h4>
                <div className="text-white text-3xl font-semibold">$29<span className="text-slate-400 text-base font-normal">/user</span></div>
              </div>
              <ul className="mt-4 text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>Up to 50 users</li>
                <li>Chat‑first investigations</li>
                <li>Standard integrations</li>
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Choose Team</button>
            </div>

            <div className="relative rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 shadow-[0_20px_60px_-20px_rgba(16,185,129,0.5)]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 via-emerald-500/10 to-emerald-500/0" />
              <div className="flex items-baseline justify-between">
                <h4 className="text-white font-medium">Enterprise</h4>
                <div className="text-white text-3xl font-semibold">Custom</div>
              </div>
              <ul className="mt-4 text-sm text-emerald-50/90 space-y-2 list-disc list-inside">
                <li>Unlimited users</li>
                <li>Advanced response actions</li>
                <li>SOC2, ISO 27001, HIPAA</li>
              </ul>
              <button className="relative mt-6 w-full px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium shadow-[0_12px_40px_-12px_rgba(16,185,129,0.9)] hover:shadow-[0_16px_56px_-12px_rgba(16,185,129,1)] transition">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
