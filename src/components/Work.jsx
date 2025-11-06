import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Futuristic Dashboard',
    desc: 'A neon-calm analytics dashboard with glass panels and soft glows, optimized for readability in the dark.',
    img: 'https://images.unsplash.com/photo-1557093793-1e51b6ee7b4f?q=80&w=1200&auto=format&fit=crop',
    href: '#',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Interactive Portfolio',
    desc: 'Immersive personal site blending Spline scenes with snappy motion and accessible UI.',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
    href: '#',
    tags: ['Spline', 'Three.js', 'Design'],
  },
  {
    title: 'E-commerce Concept',
    desc: 'Glassmorphism product cards with floating micro-interactions and subtle parallax.',
    img: 'https://images.unsplash.com/photo-1587135941948-670b2abb6c58?q=80&w=1200&auto=format&fit=crop',
    href: '#',
    tags: ['Next.js', 'Stripe', 'UX'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(40% 40% at 0% 10%, rgba(99,102,241,0.12), transparent 60%), radial-gradient(30% 30% at 100% 30%, rgba(34,211,238,0.10), transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work</h2>
          <p className="mt-3 max-w-2xl text-white/80">Selected projects and explorations. Hover to preview — tiles subtly lift and glow for focus.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_40px_-16px_rgba(0,0,0,0.6)] backdrop-blur"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </div>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/75">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-[14px] ring-1 ring-inset ring-white/10 group-hover:ring-cyan-300/40" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background: 'radial-gradient(120% 80% at 50% -10%, rgba(34,211,238,0.10), transparent 50%)'
              }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
