import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12] text-white antialiased">
      {/* Global subtle vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(34,211,238,0.08),transparent_60%)]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wider text-cyan-200">AF</a>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="hover:text-white hover:underline/20">About</a>
            <a href="#work" className="hover:text-white hover:underline/20">Work</a>
            <a href="#contact" className="hover:text-white hover:underline/20">Contact</a>
          </nav>
          <a href="#contact" className="rounded-md border border-cyan-500/30 bg-white/5 px-3 py-1.5 text-xs text-cyan-100 hover:border-cyan-400/60">Get in touch</a>
        </div>
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

export default App;
