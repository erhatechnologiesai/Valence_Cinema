'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { teamMembers, leadershipInfo } from '@/data/team';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

const departments = ['All', 'Leadership', 'Direction', 'Cinematography', 'Color & Post', 'Sound Design', 'Production'] as const;

export default function TeamPage() {
  const { playUiClick } = useSound();
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const filteredMembers =
    selectedDept === 'All'
      ? teamMembers
      : teamMembers.filter((m) => m.department === selectedDept);

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      <AntiGravityCanvas particleCount={20} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Leadership & Team</span>
        </div>

        {/* 09. LEADERSHIP HERO */}
        <div className="max-w-4xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> LEADERSHIP
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
            Led By Experience. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              Built For Production.
            </span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
            Poppy brings together a team with more than 10 years of collective experience, combining production expertise with a practical understanding of the demands of modern media.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-white/15 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-scale">
          <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10">
            <img
              src="/posters/frame_hero.webp"
              alt={leadershipInfo.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-mono font-bold text-[#FF5E3A] tracking-widest">FOUNDER & CEO</span>
              <h3 className="text-2xl font-black text-white">{leadershipInfo.name}</h3>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block">
              FOUNDING VISION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {leadershipInfo.headline}
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              With <strong className="text-white">5 years of industry experience</strong>, Abdul Qadeer Bhatti founded Poppy Productions with a clear objective: to provide better-quality productions and build a full-service production company.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Under his direction, Poppy has grown into a trusted end-to-end media partner handling premier commercial campaigns, high-energy tech expos like Future Fest and Connected Pakistan, and major brand visual stories.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {['5 Years Industry Experience', '100+ Completed Productions', 'End-to-End Execution'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap gap-2 mb-12 reveal">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => {
                playUiClick();
                setSelectedDept(dept);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedDept === dept
                  ? 'bg-white text-black shadow-md'
                  : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 reveal-stagger">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo / Avatar */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FF5E3A] text-[10px] uppercase font-bold tracking-widest">
                      {member.department}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#FF5E3A] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-1">
                  {member.role}
                </p>

                <p className="text-neutral-400 text-xs leading-relaxed mt-4">
                  {member.bio}
                </p>

                {/* Credits */}
                <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Key Projects & Credits
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.credits.map((cr, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-neutral-300 font-mono"
                      >
                        {cr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Honors / Badges */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {member.awards.map((aw, i) => (
                  <span
                    key={i}
                    className="text-[10px] text-amber-400/90 font-medium flex items-center gap-1"
                  >
                    ★ {aw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join the Production Team */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-scale">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#FF5E3A]">
              <Briefcase className="w-3.5 h-3.5" /> GROW WITH POPPY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Work With Our Production Collective
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We collaborate with cinematographers, editors, sound designers, and event production specialists who share our dedication to better-quality production.
            </p>
          </div>

          <Link
            href="/contact"
            onClick={playUiClick}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    </div>
  );
}
