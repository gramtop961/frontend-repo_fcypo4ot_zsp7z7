import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-[#0b0d12] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_20%,rgba(147,197,253,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            About
            <span className="ml-3 h-6 w-px bg-gradient-to-b from-cyan-400/70 to-transparent align-middle inline-block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-1"
          >
            <div className="h-full w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
            <span className="pointer-events-none absolute -inset-1 rounded-xl bg-cyan-500/10 blur-xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-zinc-300">
              I craft user-centered products that balance aesthetics with utility. My approach blends research, systems thinking, and rapid iteration to transform complexity into elegant, intuitive experiences.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <p className="text-zinc-400">
              Focus areas: Design Systems, Interaction Design, Prototyping, and Cross-functional Collaboration. Tools I enjoy: Figma, Framer, Webflow, Principle, and modern design ops stacks.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {['Design Systems', 'Interaction', 'Prototyping', 'User Research', 'Accessibility', 'Motion'].map((item) => (
                <div key={item} className="rounded-md border border-cyan-500/20 bg-white/5 px-3 py-2 text-sm text-cyan-100/90">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
