import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0d12]">
      {/* Subtle radial gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_20%,rgba(56,189,248,0.10),transparent_60%)]" />

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-28 md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-cyan-200/90 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.15)]"
        >
          Modern • Futuristic • Professional
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-4xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Hi, I’m <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">Aditya Faisal</span>
            <span className="absolute -inset-1 rounded-md bg-cyan-400/10 blur-md" aria-hidden />
          </span>
          — UI/UX & Product Designer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
        >
          Designing intuitive, modern, and meaningful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-2 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 rounded-md bg-cyan-400/40 blur-md" aria-hidden />
          </a>

          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-md border border-cyan-500/30 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-sm transition-colors hover:border-cyan-400/60 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
