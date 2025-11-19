import { useRef } from "react";
import Hero from "./components/Hero";
import CTA from "./components/CTA";
import { IdentityHook, WhatItIs, WhyChoose, FitSection, Guide, Testimonials, Logistics } from "./components/Sections";
import "./index.css";

function App() {
  const ctaRef = useRef(null);
  const scrollToCTA = () => ctaRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-slate-950 text-cream-100">
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-slate-950/60 border-b border-cream-300/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-lg">Sacred Stillness</div>
          <div className="hidden sm:flex gap-6 text-sm text-cream-200/80">
            <a href="#what" className="hover:text-cream-100">What</a>
            <a href="#why" className="hover:text-cream-100">Why</a>
            <a href="#guide" className="hover:text-cream-100">Guide</a>
            <a href="#logistics" className="hover:text-cream-100">Logistics</a>
          </div>
          <button onClick={scrollToCTA} className="rounded-full px-4 py-2 text-sm font-medium bg-muted-gold text-slate-900 hover:opacity-95 transition">
            Join Waitlist
          </button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onPrimary={scrollToCTA} onSecondary={scrollToCTA} />
        <div id="identity"><IdentityHook /></div>
        <div id="what"><WhatItIs /></div>
        <div id="why"><WhyChoose /></div>
        <FitSection />
        <div id="guide"><Guide /></div>
        <Testimonials />
        <div id="logistics"><Logistics /></div>
        <div ref={ctaRef}><CTA /></div>
      </main>

      <footer className="px-6 py-12 text-center text-cream-300/60 text-sm">
        © {new Date().getFullYear()} Sacred Stillness. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
