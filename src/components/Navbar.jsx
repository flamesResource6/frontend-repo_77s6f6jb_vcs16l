import { Menu, Shield, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 grid place-items-center shadow-[0_0_25px_rgba(16,185,129,0.35)]">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="absolute -inset-1 rounded-2xl blur-lg bg-emerald-500/10 -z-10" aria-hidden />
            </div>
            <span className="text-white font-semibold tracking-tight text-lg">Sentinel</span>
            <span className="text-xs text-emerald-300/70 px-2 py-0.5 rounded-full border border-emerald-400/20 bg-emerald-500/10">Security Cloud</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {[
              { label: "Product", hasMenu: true },
              { label: "Solutions", hasMenu: true },
              { label: "Pricing" },
              { label: "Docs" },
            ].map((item) => (
              <button key={item.label} className="text-slate-300/90 hover:text-white transition inline-flex items-center gap-1">
                {item.label}
                {item.hasMenu && <ChevronDown className="w-4 h-4 opacity-70" />}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-slate-200 hover:text-white transition">Sign in</button>
            <motion.button whileHover={{ y: -1 }} whileTap={{ y: 0 }} className="px-4 py-2 rounded-lg bg-emerald-500 text-slate-900 font-medium shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] hover:shadow-[0_12px_40px_-12px_rgba(16,185,129,0.9)] transition">
              Get started
            </motion.button>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-200">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
