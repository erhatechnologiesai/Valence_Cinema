'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

const studioLocations = [
  {
    city: 'Poppy Productions Studio',
    address: 'DHA Phase 1 Fort Villas , 54810',
    phone: '03000288060',
    phoneLink: 'tel:03000288060',
    whatsappLink: 'https://wa.me/923000288060',
    email: 'info@poppyproductions.pk',
    hours: 'Mon - Sat, 10:00 - 20:00 PKT',
  },
];

export default function ContactPage() {
  const { playUiClick } = useSound();
  const [department, setDepartment] = useState('New Commercial Commission');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playUiClick();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          department,
          message,
        }),
      });

      const data = await res.json();
      if (!res.ok || data.success === false) {
        throw new Error(data.message || 'Failed to submit inquiry');
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error transmitting message';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      <AntiGravityCanvas particleCount={20} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Contact Studios</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
            <MessageSquare className="w-3.5 h-3.5" /> DIRECT STUDIO CHANNELS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
            Initiate Contact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              With Poppy Productions
            </span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Whether you&apos;re planning a commercial, covering an event, producing content, or simply looking for a production partner, we&apos;re ready to understand your vision and build the production around it.
          </p>
        </div>

        {/* Main Grid: Form + Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-neutral-900/70 border border-white/10 reveal-left">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                  Inquiry Dispatched to Executive Producer
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. An executive creative producer has been assigned to your brief and will connect via <strong className="text-white">{email}</strong> within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs uppercase font-bold tracking-wider hover:bg-white/20 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                    Inquiry Department
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Event & Expo Coverage',
                      'Commercials & Ad Films',
                      'Video Production',
                      'Photography & Post-Production',
                    ].map((dept) => (
                      <button
                        type="button"
                        key={dept}
                        onClick={() => {
                          playUiClick();
                          setDepartment(dept);
                        }}
                        className={`p-3 rounded-xl text-left text-xs font-medium border transition-all ${
                          department === dept
                            ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@brand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Arc’teryx or Universal Media"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                    Project Overview / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the project scope, desired shoot dates, deliverables, or creative direction..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs leading-relaxed">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#FF5E3A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  <span>{loading ? 'Transmitting Inquiry to Producers...' : 'Transmit Inquiry to Producers'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Locations (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 reveal-right">
            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4">
              Physical Studios
            </h3>

            {studioLocations.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF5E3A]" />
                    <span>{loc.city}</span>
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-sm font-semibold text-white/90">{loc.address}</p>
                <div className="pt-3 border-t border-white/5 space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FF5E3A]" />
                      <a href={loc.phoneLink} className="hover:text-white font-mono font-bold">
                        {loc.phone}
                      </a>
                    </div>
                    <a
                      href={loc.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-[#FF5E3A]" />
                    <a href={`mailto:${loc.email}`} className="hover:text-white">
                      {loc.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Official Social Channels Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E3A] block">
                Connect Directly
              </span>
              <h4 className="text-base font-bold text-white">
                Official Studio Channels
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Follow our latest production reels, behind-the-scenes footage, and project releases on social media.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.instagram.com/poppyproductions22/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-neutral-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-current text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61588100360036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/40 text-neutral-200 hover:text-white transition-all text-xs font-semibold"
                >
                  <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Brief CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FF5E3A]/20 to-neutral-900 border border-[#FF5E3A]/30 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5E3A] block">
                Have a detailed project brief ready?
              </span>
              <h4 className="text-base font-bold text-white">
                Use our Interactive Brief Builder
              </h4>
              <p className="text-xs text-neutral-400">
                Step-by-step scope, budget tier, deliverable formats and timeline estimation in 2 minutes.
              </p>
              <div className="pt-2">
                <Link
                  href="/start-project"
                  onClick={playUiClick}
                  className="inline-block px-5 py-2.5 rounded-full bg-[#FF5E3A] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Start Project Brief →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
