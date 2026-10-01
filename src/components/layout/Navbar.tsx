'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, Clapperboard } from 'lucide-react';
import { useSound } from '@/components/audio/SoundController';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isPlaying, toggleSound } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Valence Cinema */}
          <Link
            href="/"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5E3A] via-rose-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow">
              <Clapperboard className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white uppercase">
                  VALENCE<span className="text-[#FF5E3A] ml-0.5">.</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  REC 4K
                </span>
              </div>
              <span className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
                Creative Cinema & Scene Production
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5E3A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar: Audio Toggle + Start Commission CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs font-medium cursor-pointer ${
                isPlaying
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-400 hover:bg-rose-500/25 shadow-lg shadow-rose-500/20'
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title={isPlaying ? 'Mute Cinema Sound' : 'Play Cinema Sound'}
            >
              {isPlaying ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-rose-400 rounded animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
                    <span className="w-0.5 bg-rose-400 rounded animate-[pulse_0.9s_ease-in-out_infinite] h-2/3" />
                    <span className="w-0.5 bg-rose-400 rounded animate-[pulse_0.7s_ease-in-out_infinite] h-4/5" />
                  </div>
                  <Volume2 className="w-3.5 h-3.5 text-rose-400" />
                </>
              ) : (
                <VolumeX className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Start Project CTA Button */}
            <Link
              href="/start-project"
              className="group relative px-5 py-2 rounded-full bg-gradient-to-r from-[#FF5E3A] to-[#FF3B30] text-white text-xs uppercase font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-orange-500/25 flex items-center gap-1.5"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-white/10 text-white cursor-pointer"
              aria-label="Toggle Sound"
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-rose-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-white/10 px-6 pt-6 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold tracking-wider uppercase py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E3A]" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/start-project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5E3A] to-[#FF3B30] text-center text-white font-bold uppercase tracking-wider text-sm shadow-lg shadow-orange-500/20"
            >
              Initiate Project Brief
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
