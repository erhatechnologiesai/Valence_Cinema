'use client';

import Link from 'next/link';
import {
  Sparkles,
  Camera,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
  Zap,
  Clock,
  Expand
} from 'lucide-react';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';
import { whyPoppy, productionPipeline } from '@/data/services';
import { leadershipInfo } from '@/data/team';
import { brandPartners } from '@/data/projects';

export default function AboutPage() {
  const { playUiClick } = useSound();

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      {/* 3D Floating Canvas Background */}
      <AntiGravityCanvas particleCount={25} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>

        {/* 02. ABOUT US: HERO HEADLINE */}
        <div className="max-w-4xl mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> ABOUT POPPY PRODUCTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] uppercase">
            We Turn Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              Production.
            </span>
          </h1>
          <p className="text-neutral-300 text-lg sm:text-xl mt-8 leading-relaxed max-w-3xl">
            Poppy Productions is a full-service media production company founded by <strong className="text-white">Abdul Qadeer Bhatti</strong>, who brings 5 years of industry experience to the company.
          </p>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl">
            Built with a focus on better-quality production, Poppy Productions brings together an experienced team with 10+ years of individual industry experience across key members of the team, bringing proven expertise and practical knowledge to every production to handle projects from concept to final execution.
          </p>
          <p className="text-neutral-400 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl">
            From a focused shoot to large-scale event and expo coverage, we work closely with our clients to understand their vision, plan the production, execute the shoot, and deliver the final product.
          </p>
        </div>

        {/* Visual Showcase Stills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 reveal-stagger">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_hero.webp"
              alt="Event & Expo Coverage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">Scale & Energy</span>
              <h3 className="text-lg font-bold text-white">Large-Scale Event & Expo Coverage</h3>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_girl.webp"
              alt="Commercials & Ad Films"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">Visual Storytelling</span>
              <h3 className="text-lg font-bold text-white">Commercials & Brand Ad Films</h3>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_embers.webp"
              alt="Post-Production & Polish"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">Precision Finishing</span>
              <h3 className="text-lg font-bold text-white">Editing & Visual Refinement</h3>
            </div>
          </div>
        </div>

        {/* 05. WHY POPPY PRODUCTIONS */}
        <div className="py-16 border-t border-b border-white/10 mb-24">
          <div className="max-w-3xl mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              WHY POPPY PRODUCTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Built Around Your Vision.
            </h2>
            <p className="text-neutral-400 text-base mt-2">
              We believe good production starts with understanding the client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 reveal-stagger">
            {whyPoppy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center font-mono font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 09. LEADERSHIP */}
        <div className="mb-24">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900/80 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center reveal">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src="/posters/frame_hero.webp"
                alt="Abdul Qadeer Bhatti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs uppercase font-mono font-bold text-[#FF5E3A] tracking-widest">FOUNDER & CEO</span>
                <h3 className="text-2xl font-black text-white">{leadershipInfo.name}</h3>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block">
                LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                {leadershipInfo.headline}
              </h2>
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  With <strong className="text-white">5 years of industry experience</strong>, Abdul Qadeer Bhatti founded Poppy Productions with a clear objective: to provide better-quality productions and build a full-service production company.
                </p>
                <p className="text-neutral-400">
                  Poppy brings together a team with <strong className="text-white">more than 10 years of collective experience</strong>, combining production expertise with a practical understanding of the demands of modern media.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/team"
                  onClick={playUiClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors"
                >
                  <span>Meet Our Production Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 10. OUR CAPABILITY */}
        <div className="mb-24 py-16 border-t border-b border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              One Team. End-To-End Execution.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              From the first conversation to the final export, Poppy Productions brings the key stages of production together under one roof.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center mb-8 reveal-stagger">
            {[
              'Concept',
              'Production',
              'Photography',
              'Post-Production',
              'Editing',
              'Motion Graphics'
            ].map((cap, i) => (
              <div key={i} className="p-5 rounded-2xl bg-neutral-900/60 border border-white/10">
                <span className="text-xs font-mono font-bold text-[#FF5E3A] block mb-1">0{i + 1}</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">{cap}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center text-neutral-300 text-sm sm:text-base leading-relaxed reveal">
            Our approach allows clients to work with one production partner throughout the project rather than managing disconnected stages of production separately.
          </div>
        </div>

        {/* 07. OUR EXPERIENCE & COLLABORATIONS */}
        <div className="mb-24">
          <div className="max-w-3xl mb-8 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Small Projects. Large Productions. Same Commitment.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
              Our production experience ranges from focused individual shoots to large-scale event and expo coverage. We have worked on projects including <strong className="text-white">Future Fest, HESP 2026, Connected Pakistan, Skills Gala</strong>, and other brand, corporate, education, and commercial projects.
            </p>
            <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
              Our work has included collaborations with names such as <strong className="text-white">LEVIS, Sapphire, Rashid Latif Khan University, WinningGo, The Scarf</strong>, and <strong className="text-white">The RIAB</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 reveal-stagger">
            {brandPartners.map((bp, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-neutral-900/80 border border-white/10 text-xs font-mono font-bold text-white tracking-wider"
              >
                {bp}
              </span>
            ))}
          </div>
        </div>

        {/* 11. FINAL CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-scale">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E3A] block mb-1">
              HAVE AN IDEA?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Let&apos;s take it from concept to final execution.
            </h3>
            <p className="text-neutral-400 text-sm mt-2 max-w-lg">
              Poppy Productions — Your Growth Partner.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              onClick={playUiClick}
              className="px-6 py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors"
            >
              Selected Work
            </Link>
            <Link
              href="/start-project"
              onClick={playUiClick}
              className="px-6 py-3.5 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
