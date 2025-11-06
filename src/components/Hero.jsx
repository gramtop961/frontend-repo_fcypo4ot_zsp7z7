import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 12 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#0b0d12' }}>
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial vignette overlay (non-interactive) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d12]/20 via-transparent to-[#0b0d12]/60" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(60% 50% at 50% 30%, rgba(0, 198, 255, 0.12) 0%, rgba(0, 0, 0, 0) 60%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">
          <motion.p variants={item} className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200/90 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.6)]" />
            Open to opportunities
          </motion.p>

          <motion.h1 variants={item} className="pt-16 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Aditya Faisal
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Designer • Frontend • 3D Curious</span>
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            I craft dark, sleek interfaces with delightful motion. Blending code, design, and a touch of 3D to build immersive web experiences.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-[#0b0d12] shadow-[0_10px_30px_-12px_rgba(34,211,238,0.6)] transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
