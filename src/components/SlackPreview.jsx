import { motion } from "framer-motion";
import { Send, Lock, CheckCircle2, AlertTriangle, User, Shield } from "lucide-react";

function Message({ name, text, meta, tone = "default" }) {
  const tones = {
    default: "bg-slate-800/60 border-white/5",
    success: "bg-emerald-500/10 border-emerald-400/20",
    warning: "bg-amber-500/10 border-amber-400/20",
  };
  return (
    <div className={`rounded-2xl border ${tones[tone]} p-3.5`}> 
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <div className="w-5 h-5 rounded-full bg-slate-700/50 grid place-items-center"><User className="w-3.5 h-3.5 text-slate-300" /></div>
        <span className="text-slate-200">{name}</span>
        <span>•</span>
        <span>{meta}</span>
      </div>
      <p className="mt-1.5 text-slate-200 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

export default function SlackPreview() {
  return (
    <section id="demo" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-semibold text-white">
              Security that feels like Slack
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-4 text-slate-300">
              Channels for incidents, threads for findings, and apps for automation. Your entire security workflow in one place.
            </motion.p>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Threaded investigations with full audit trail</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> One‑click response actions from chat</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Native SSO, SCIM, and granular roles</div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">See pricing</a>
              <button className="px-5 py-3 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">Get a demo</button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-2xl blur-xl" aria-hidden />
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium"># incident-1427</span>
                </div>
                <div className="text-xs text-slate-500">private</div>
              </div>

              <div className="space-y-3">
                <Message name="Falcon SIEM" meta="09:14" text="High severity alert: Suspicious PowerShell encoded command on WIN‑23F1." tone="warning" />
                <Message name="Iris (AI)" meta="09:15" text="Correlating with EDR telemetry… similar pattern detected on 3 endpoints in OU‑Finance." />
                <Message name="Maya" meta="09:16" text="Creating response room. Assigning owners and starting containment playbook." />
                <Message name="Iris (AI)" meta="09:18" text="Quarantined hosts WIN‑23F1, WIN‑11C9. Blocked IP 185.199.110.153 at edge." tone="success" />
                <Message name="Compliance" meta="09:20" text="All actions logged. Evidence bundle prepared for review." />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 rounded-xl bg-slate-800/60 border border-white/5 px-3 py-2 text-slate-400 text-sm">/contain host:WIN‑23F1 reason:"encoded ps"</div>
                <button className="px-3 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium inline-flex items-center gap-1"><Send className="w-4 h-4" /> Send</button>
              </div>

              <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                <div className="inline-flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> End‑to‑end encrypted</div>
                <div className="inline-flex items-center gap-1"><AlertTriangle className="w-3.5 h-3.5" /> Auto‑redaction enabled</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
