import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(40% 40% at 10% 10%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(30% 30% at 90% 20%, rgba(34,211,238,0.10), transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h2>
          <p className="mt-3 max-w-2xl text-white/80">I’m Aditya Faisal — a frontend engineer with a design-first mindset. I love building calm, futuristic interfaces powered by motion and subtle 3D.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Profile + Bio */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10">
                <img src="https://images.unsplash.com/photo-1748722144965-6f7a17a87570?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZGl0eWElMjBwb3J0cmFpdHxlbnwwfDB8fHwxNzYyMzk2NzE1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Aditya portrait" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Design-led development</h3>
                <p className="mt-2 text-white/80">I approach problems with systems thinking, crafting component libraries and interactions that scale.</p>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-white/80">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <Palette className="mb-2 h-4 w-4 text-cyan-300" />
                Aesthetic systems
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <Code2 className="mb-2 h-4 w-4 text-indigo-300" />
                Clean, typed code
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <Sparkles className="mb-2 h-4 w-4 text-blue-300" />
                Delightful motion
              </div>
            </div>
          </motion.div>

          {/* Tools / Tags */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-medium">Tools & Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion', 'Spline', 'Three.js', 'GSAP', 'Figma', 'Radix UI'].map(tag => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
