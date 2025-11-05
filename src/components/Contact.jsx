import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Dribbble, Link as LinkIcon, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-[#0b0d12] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_30%_80%,rgba(34,211,238,0.10),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Let’s create something amazing together
            <span className="ml-3 h-6 w-px bg-gradient-to-b from-cyan-400/70 to-transparent align-middle inline-block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 gap-5">
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-cyan-400/60 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-cyan-400/60 focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-zinc-300">Message</label>
                <textarea
                  rows={5}
                  className="w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-white placeholder:text-zinc-500 focus:border-cyan-400/60 focus:outline-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex w-fit items-center gap-2 rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-transform hover:scale-[1.01]"
              >
                <Mail className="h-4 w-4" /> Send Message
                <span className="absolute inset-0 rounded-md bg-cyan-400/40 blur-md" aria-hidden />
              </button>
            </div>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="max-w-md text-zinc-400">
              I’m available for product design, interface design, and design systems work. Let’s discuss how we can build something impactful.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-white/5 px-3 py-2 text-sm text-cyan-100 hover:border-cyan-400/60">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-white/5 px-3 py-2 text-sm text-cyan-100 hover:border-cyan-400/60">
                <Dribbble className="h-4 w-4" /> Dribbble
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-white/5 px-3 py-2 text-sm text-cyan-100 hover:border-cyan-400/60">
                <LinkIcon className="h-4 w-4" /> Behance
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer + back to top */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} AF — All rights reserved.</span>
          <a href="#home" className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-3 py-1.5 text-cyan-100 hover:border-cyan-400/60">
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
