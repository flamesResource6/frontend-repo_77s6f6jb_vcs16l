import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import SlackPreview from './components/SlackPreview'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(100,116,139,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" aria-hidden />

      <Navbar />
      <Hero />
      <Features />
      <SlackPreview />
      <CTA />

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/30 grid place-items-center">
              <span className="text-emerald-400 font-bold">S</span>
            </div>
            <span className="text-slate-300">© {new Date().getFullYear()} Sentinel Security Cloud</span>
          </div>
          <div className="text-sm text-slate-400 flex items-center gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App