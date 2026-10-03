'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-black/80 backdrop-blur-md py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Poppy Productions */}
          <Link
            href="/"
            className="flex items-center text-xl sm:text-2xl font-bold tracking-tight transition-transform duration-200 hover:scale-[1.02]"
          >
            <span className="text-white">Poppy</span>
            <span className="text-[#FF5E3A] ml-1.5">Productions</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Sound Toggle + Start Project Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center cursor-pointer ${
                isPlaying
                  ? 'bg-white/15 border-white/30 text-[#FF5E3A]'
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              title={isPlaying ? 'Mute Audio' : 'Play Audio'}
              aria-label="Toggle Sound"
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-[#FF5E3A]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Start Project CTA Button (Matching screenshot orange pill) */}
            <Link
              href="/start-project"
              className="px-6 py-2.5 rounded-full bg-[#FF5E3A] hover:bg-[#e04e2c] active:scale-95 text-white text-sm font-semibold tracking-wide shadow-md shadow-orange-600/30 transition-all duration-200"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-white/10 text-white cursor-pointer"
              aria-label="Toggle Sound"
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-[#FF5E3A]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-white/10 px-6 pt-5 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-white/10 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E3A]" />}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-white/10">
            <Link
              href="/start-project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#FF5E3A] text-center text-white font-semibold tracking-wide text-sm block shadow-lg shadow-orange-600/30"
            >
              Start Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
