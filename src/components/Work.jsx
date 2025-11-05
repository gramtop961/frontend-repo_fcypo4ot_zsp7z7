import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Nova Mobile Banking',
    desc: 'A human-centered mobile banking app with a modular design system and adaptive dark UI.',
    tags: ['Mobile App', 'Design System'],
    img: 'https://images.unsplash.com/photo-1556125574-d7f27ec36a06?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Aether Analytics',
    desc: 'Web platform for cross-team insights with data visualization and accessible components.',
    tags: ['Web Design', 'Research'],
    img: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Pulse Health',
    desc: 'Patient-first healthcare portal focused on clarity, hierarchy, and trust.',
    tags: ['UX', 'Prototyping'],
    img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Orbit SaaS',
    desc: 'Marketing site and product onboarding with motion principles and soft glows.',
    tags: ['Web Design', 'Motion'],
    img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1400&auto=format&fit=crop',
  },
];

const experience = [
  {
    role: 'UI/UX Designer',
    company: 'PT Astra International',
    summary: 'Led feature discovery and prototyped cross-platform flows for enterprise apps.',
  },
  {
    role: 'Product Designer',
    company: 'PT Rise Lanskap Holtikultura',
    summary: 'Shipped responsive design system and streamlined research-to-design processes.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Nusatech Development (Blockchain Project)',
    summary: 'Designed secure wallets and clear mental models for web3 onboarding.',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-[#0b0d12] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_80%_60%,rgba(99,102,241,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        {/* Projects */}
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Projects
            <span className="ml-3 h-6 w-px bg-gradient-to-b from-indigo-400/70 to-transparent align-middle inline-block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
            >
              <div
            className="relative aspect-[16/10] w-full overflow-hidden"
              >
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Glass overlay on hover */}
                <div className="pointer-events-none absolute inset-0 hidden items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5 backdrop-blur-[2px] transition-opacity duration-300 group-hover:flex">
                  <button className="inline-flex items-center rounded-md border border-cyan-400/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
                    View Case Study
                  </button>
                </div>
              </div>

              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-zinc-400">{p.desc}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-cyan-400/20 bg-white/5 px-2.5 py-1 text-xs text-cyan-100/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Experience */}
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Experience</h2>
            <span className="h-6 w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
          </div>

          <div className="relative mx-auto max-w-3xl pl-6">
            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400/30 to-transparent shadow-[0_0_25px_rgba(34,211,238,0.35)]" />

            <div className="space-y-10">
              {experience.map((e, idx) => (
                <motion.div
                  key={e.company}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative"
                >
                  <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border border-cyan-300/60 bg-[#0b0d12] shadow-[0_0_18px_rgba(34,211,238,0.45)]" />
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-white">{e.role}</h3>
                      <span className="text-sm text-cyan-200/90">{e.company}</span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">{e.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
