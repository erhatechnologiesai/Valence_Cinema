'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit' })
      );
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-neutral-950 border-t border-white/10 text-white pt-20 pb-12 overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 11. FINAL CTA Callout */}
        <div className="border-b border-white/10 pb-16 reveal">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-6">
                <Sparkles className="w-3.5 h-3.5" /> HAVE AN IDEA?
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.98] uppercase">
                Let&apos;s Take It From Concept <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
                  To Final Execution.
                </span>
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
                Whether you&apos;re planning a commercial, covering an event, producing content, or simply looking for a production partner, we&apos;re ready to understand your vision and build the production around it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/start-project"
                className="px-8 py-4 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-orange-500/20 text-center flex items-center justify-center gap-2"
              >
                <span>Initiate Project Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-semibold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors text-center"
              >
                Direct Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Global Studio Info Bar */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm reveal-stagger">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <MapPin className="w-5 h-5 text-[#FF5E3A] shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block font-semibold">Studio Location</span>
              <span className="text-sm font-bold text-white">DHA Phase 1 Fort Villas , 54810</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Phone className="w-5 h-5 text-[#FF5E3A] shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block font-semibold">Direct Phone / WhatsApp</span>
              <a href="tel:03000288060" className="font-mono text-base font-bold text-white hover:text-[#FF5E3A] transition-colors">
                03000288060
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <Clock className="w-5 h-5 text-[#FF5E3A] shrink-0" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block font-semibold">Studio Time (PKT)</span>
              <span className="font-mono text-base font-bold text-white">{localTime || 'Live PKT'}</span>
            </div>
          </div>
        </div>

        {/* Navigation & Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-white/10 text-xs reveal-stagger">
          {/* Col 1: Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-1.5 mb-4 text-xl font-bold tracking-tight">
              <span className="text-white">Poppy</span>
              <span className="text-[#FF5E3A]">Productions</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed max-w-sm mb-4">
              Your Growth Partner. A full-service media production company providing end-to-end production solutions — from shooting and photography to post-production, editing, commercials, and event coverage.
            </p>
            <div className="text-xs font-mono font-bold text-[#FF5E3A] uppercase tracking-wider mb-4">
              Founded by Abdul Qadeer Bhatti
            </div>
            <div className="flex items-center gap-2 text-neutral-400 mb-5">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                END-TO-END
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                10+ YRS EXPERIENCE
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                4K PRODUCTION
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.instagram.com/poppyproductions22/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poppy Productions Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-neutral-300 hover:text-white transition-all text-xs group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-pink-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href="https://web.facebook.com/profile.php?id=61588100360036"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Poppy Productions Facebook"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-neutral-300 hover:text-white transition-all text-xs group"
              >
                <svg className="w-3.5 h-3.5 fill-current text-blue-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Leadership & Team</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Studios</Link></li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Event Coverage</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Commercials & Ad Films</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Video Production</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Photography</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Post Production</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Motion Graphics</Link></li>
            </ul>
          </div>

          {/* Col 4: Featured Case Studies */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Notable Work</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/portfolio/future-fest" className="hover:text-white transition-colors">Future Fest</Link></li>
              <li><Link href="/portfolio/hesp-2026" className="hover:text-white transition-colors">HESP 2026</Link></li>
              <li><Link href="/portfolio/connected-pakistan" className="hover:text-white transition-colors">Connected Pakistan</Link></li>
              <li><Link href="/portfolio/levis-brand-story" className="hover:text-white transition-colors">LEVIS</Link></li>
              <li><Link href="/portfolio/sapphire-collection" className="hover:text-white transition-colors">Sapphire</Link></li>
              <li><Link href="/portfolio/skills-gala" className="hover:text-white transition-colors">Skills Gala</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Poppy Productions. Your Growth Partner. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Poppy Productions Ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
