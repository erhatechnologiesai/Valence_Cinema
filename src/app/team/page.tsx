'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Briefcase,
} from 'lucide-react';
import { teamMembers } from '@/data/team';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

const departments = ['All', 'Direction', 'Cinematography', 'Color & Post', 'Sound Design', 'Production'] as const;

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
          <span>Directors & Crew</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
            <Users className="w-3.5 h-3.5" /> Masters of the Cinematic Craft
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
            The Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              Directorial Collective
            </span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Our team brings together award-winning directors, expedition cinematographers, master colorists, and sound designers unified by an obsessive standard for visual storytelling.
          </p>
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
                    Notable Credits
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

                {/* Rig Preference */}
                <div className="mt-4 text-xs text-neutral-400">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                    Signature Gear
                  </span>
                  <span className="font-mono text-[11px] text-white">
                    {member.equipmentPreference}
                  </span>
                </div>
              </div>

              {/* Honors */}
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

        {/* Join the Crew / Careers Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-scale">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#FF5E3A]">
              <Briefcase className="w-3.5 h-3.5" /> Now Hiring For 2026/2027 Expeditions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Join Our Production Crew
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We are actively accepting showreels from 1st ACs, aerial FPV pilots, DaVinci assistant colorists, and post-sound editors.
            </p>
          </div>

          <Link
            href="/contact"
            onClick={playUiClick}
            className="px-8 py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors whitespace-nowrap"
          >
            Submit Showreel
          </Link>
        </div>
      </div>
    </div>
  );
}
