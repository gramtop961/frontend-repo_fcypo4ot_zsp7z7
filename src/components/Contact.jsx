import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-40" style={{
          background: 'radial-gradient(40% 40% at 10% 0%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(30% 30% at 100% 80%, rgba(34,211,238,0.10), transparent 60%)'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something</h2>
          <p className="mt-3 text-white/80">Have an idea or role in mind? I’m open to exciting opportunities and collaborations.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <label className="mb-4 block text-sm">
              <span className="mb-1 block text-white/70">Name</span>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
            </label>
            <label className="mb-4 block text-sm">
              <span className="mb-1 block text-white/70">Email</span>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="you@example.com" />
            </label>
            <label className="mb-4 block text-sm">
              <span className="mb-1 block text-white/70">Message</span>
              <textarea rows={5} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Tell me about your project" />
            </label>
            <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-medium text-[#0b0d12] shadow-[0_10px_30px_-12px_rgba(34,211,238,0.6)] transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60">
              {sent ? 'Sent!' : (<><span>Send Message</span><Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div>
              <h3 className="text-lg font-medium">Connect</h3>
              <p className="mt-2 text-white/80">I’m most active on GitHub and LinkedIn. Email works too.</p>

              <div className="mt-5 grid gap-3 text-sm">
                <a className="group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10" href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 text-white/70" />
                  github.com/adityafaisal
                </a>
                <a className="group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10" href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4 text-white/70" />
                  linkedin.com/in/adityafaisal
                </a>
                <a className="group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white/80 transition hover:bg-white/10" href="mailto:hello@adityafaisal.dev">
                  <Mail className="h-4 w-4 text-white/70" />
                  hello@adityafaisal.dev
                </a>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs text-white/50">© {new Date().getFullYear()} Aditya Faisal</span>
              <a href="#top" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200 transition hover:bg-cyan-300/20">Back to top ↑</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
