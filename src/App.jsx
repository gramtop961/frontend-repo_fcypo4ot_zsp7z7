import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

export default function App() {
  return (
    <div id="top" className="min-h-screen w-full bg-[#0b0d12] text-white antialiased">
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white/80 hover:text-white">AF</a>
        <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-200 hover:bg-cyan-400/20">Let’s talk</a>
      </header>

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
