'use client';
import { useEffect } from 'react';
import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  useEffect(() => {
    // Ensure smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-[#1A0F0A] min-h-screen">
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-[#3b2314]/70 backdrop-blur-md border border-[#d4a574]/20 shadow-lg">
          <button onClick={() => scrollToSection('origins')} className="text-sm text-[#EADBC8] hover:text-white transition">
            Our Story
          </button>

          <button onClick={() => scrollToSection('menu')} className="text-sm text-[#EADBC8] hover:text-white transition">
            Menu
          </button>

          <button onClick={() => scrollToSection('subscription')} className="text-sm text-[#EADBC8] hover:text-white transition">
            Daily Plan
          </button>

          <button onClick={() => scrollToSection('locations')} className="text-sm text-[#EADBC8] hover:text-white transition">
            Locations
          </button>

          <button onClick={() => scrollToSection('menu')} className="ml-2 px-4 py-2 rounded-full bg-[#D4A574] text-black text-sm font-medium hover:scale-105 transition">
            Order Now
          </button>
        </nav>
      </header>

      {/* Hero: Scroll-Triggered Canvas Animation */}
      <section id="origins" className="pt-24">
        <HeroCanvasAnimation />
      </section>
      
      {/* Product Showcase Section */}
      <section id="menu">
        <ProductShowcase />
      </section>
      
      {/* Feature Highlights Section */}
      <section id="locations">
        <FeatureSection />
      </section>
      
      {/* Final Call-to-Action */}
      <section id="subscription">
        <FinalCTA />
      </section>

      <footer className="py-6 text-center text-[#e7d3b0] text-sm opacity-70 tracking-wide">
        © Sudiksha
      </footer>
    </main>
  );
}

