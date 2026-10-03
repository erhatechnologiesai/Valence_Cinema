'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Film, Sparkles, MapPin } from 'lucide-react';

export default function Footer() {
  const [londonTime, setLondonTime] = useState('');
  const [nyTime, setNyTime] = useState('');
  const [tokyoTime, setTokyoTime] = useState('');

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setLondonTime(
        now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' })
      );
      setNyTime(
        now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' })
      );
      setTokyoTime(
        now.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' })
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
        {/* Massive Callout */}
        <div className="border-b border-white/10 pb-16 reveal">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Next Production Window Open
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase">
                Let’s Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
                  Attention.
                </span>
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
                Whether you’re commissioning an international 4K commercial anthem, a raw human documentary, or an immersive brand universe — we sculpt cinema that refuses to be ignored.
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

        {/* Global Studio Clocks */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm reveal-stagger">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <MapPin className="w-4 h-4 text-[#FF5E3A]" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block">London Soho Studio</span>
              <span className="font-mono text-base font-bold text-white">{londonTime || '15:20 GMT'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <MapPin className="w-4 h-4 text-[#FF5E3A]" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block">New York Brooklyn Lab</span>
              <span className="font-mono text-base font-bold text-white">{nyTime || '10:20 EST'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <MapPin className="w-4 h-4 text-[#FF5E3A]" />
            <div>
              <span className="text-xs uppercase tracking-wider text-neutral-400 block">Tokyo Shibuya Stages</span>
              <span className="font-mono text-base font-bold text-white">{tokyoTime || '00:20 JST'}</span>
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
            <p className="text-neutral-400 leading-relaxed max-w-sm mb-6">
              Award-winning creative film production studio & scene production collective. Creating films and commercial narratives that command attention.
            </p>
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                4K UHD 60FPS
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                CINEMA EDIT
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                HIGH FIDELITY
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home Experience</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About & Philosophy</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Selected Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Cine Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Directors & Crew</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Studios</Link></li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Disciplines</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Commercial Anthems</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Documentary Expeditions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">4K FPV Drone Cinematography</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Phantom 1000fps Macro</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">DaVinci Color Grading</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Dolby Atmos Spatial Sound</Link></li>
            </ul>
          </div>

          {/* Col 4: Featured Case Studies */}
          <div>
            <h4 className="text-neutral-300 font-bold uppercase tracking-wider mb-4">Films</h4>
            <ul className="space-y-2.5 text-neutral-400">
              <li><Link href="/portfolio/the-alpine-odyssey" className="hover:text-white transition-colors">Alpine Odyssey</Link></li>
              <li><Link href="/portfolio/the-craftsmans-soul" className="hover:text-white transition-colors">The Craftsman’s Soul</Link></li>
              <li><Link href="/portfolio/solitary-tides" className="hover:text-white transition-colors">Solitary Tides</Link></li>
              <li><Link href="/portfolio/echoes-of-the-high-steppe" className="hover:text-white transition-colors">High Steppe Yak</Link></li>
              <li><Link href="/portfolio/viscous-gold" className="hover:text-white transition-colors">Viscous Gold Macro</Link></li>
              <li><Link href="/portfolio/glacial-horizon" className="hover:text-white transition-colors">Glacial Horizon</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Poppy Productions Ltd. All Rights Reserved. Award-Winning Creative Cinema Studio.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Commission</span>
            <span className="hover:text-neutral-400 cursor-pointer">Anti-Gravity Engine v2.4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
