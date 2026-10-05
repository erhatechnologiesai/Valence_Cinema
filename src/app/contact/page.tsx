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
    city: 'London HQ',
    address: '42 Lexington Street, Soho, London W1D 3QU',
    phone: '+44 20 7946 0920',
    email: 'london@poppyproductions.cinema',
    hours: 'Mon - Fri, 09:00 - 19:00 GMT',
  },
  {
    city: 'New York Lab',
    address: '63 Flushing Avenue, Brooklyn Navy Yard, NY 11205',
    phone: '+1 212 555 0198',
    email: 'nyc@poppyproductions.cinema',
    hours: 'Mon - Fri, 09:00 - 18:00 EST',
  },
  {
    city: 'Tokyo Stages',
    address: '1-23-10 Jinnan, Shibuya-ku, Tokyo 150-0041',
    phone: '+81 3 5456 0880',
    email: 'tokyo@poppyproductions.cinema',
    hours: 'Mon - Fri, 10:00 - 20:00 JST',
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
                className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#FF5E3A]" />
                    <span>{loc.city}</span>
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-xs text-neutral-400">{loc.address}</p>
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Phone className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Mail className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{loc.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}

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
