'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Tv,
  Video,
  Camera,
  Layers,
  Scissors,
  Sparkle,
  Sparkles
} from 'lucide-react';
import { servicesData, productionPipeline, whyPoppy } from '@/data/services';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

export default function ServicesPage() {
  const { playUiClick } = useSound();

  // Interactive Scope Estimator State
  const [calcTier, setCalcTier] = useState<'Event Coverage' | 'Commercial' | 'Video Production'>('Event Coverage');
  const [calcDays, setCalcDays] = useState<number>(2);
  const [calcPhotography, setCalcPhotography] = useState<boolean>(true);
  const [calcMotionGraphics, setCalcMotionGraphics] = useState<boolean>(true);

  // Estimator logic
  const baseCost = calcTier === 'Event Coverage' ? 25 : calcTier === 'Commercial' ? 40 : 30;
  const dayRate = 6;
  const totalEst = baseCost + calcDays * dayRate + (calcPhotography ? 8 : 0) + (calcMotionGraphics ? 10 : 0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'event-coverage':
        return <Calendar className="w-5 h-5" />;
      case 'commercials-ad-films':
        return <Tv className="w-5 h-5" />;
      case 'video-production':
        return <Video className="w-5 h-5" />;
      case 'photography':
        return <Camera className="w-5 h-5" />;
      case 'post-production':
        return <Layers className="w-5 h-5" />;
      case 'editing':
        return <Scissors className="w-5 h-5" />;
      case 'motion-graphics':
        return <Sparkle className="w-5 h-5" />;
      default:
        return <Video className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      <AntiGravityCanvas particleCount={25} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Our Services</span>
        </div>

        {/* 04. HERO HEADLINE */}
        <div className="max-w-3xl mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> END-TO-END PRODUCTION SOLUTIONS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
            Our Services & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              Capabilities
            </span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
            Whether you need a commercial, a complete event coverage, professional photography, or post-production support, we provide the production expertise to take your project from the initial brief to final delivery.
          </p>
        </div>

        {/* 7 Services Detailed Grid */}
        <div className="space-y-16 mb-28 reveal-stagger">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Media Preview Column */}
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 group">
                <video
                  src={svc.sampleClip}
                  poster={svc.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#FF5E3A] text-xs font-mono font-bold">
                    SERVICE {svc.number}
                  </span>
                </div>
              </div>

              {/* Service Details Column */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 text-[#FF5E3A]">
                    {getServiceIcon(svc.id)}
                    <span className="text-xs uppercase font-bold tracking-widest font-mono">
                      {svc.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mt-4">
                    {svc.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-neutral-300">
                      {svc.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5E3A] flex-shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                      Production Setup
                    </span>
                    <ul className="space-y-1.5 text-neutral-300">
                      {svc.equipment.map((eq, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    href="/start-project"
                    onClick={playUiClick}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5E3A] hover:text-white transition-colors"
                  >
                    <span>Initiate Project Brief</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 06. OUR APPROACH: ONE IDEA. ONE COMPLETE PROCESS */}
        <div className="py-20 border-t border-b border-white/10 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              One Idea. One Complete Process.
            </h2>
            <p className="text-neutral-400 text-sm mt-3">
              A structured six-stage methodology designed to ensure quality, transparency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {productionPipeline.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 hover:border-[#FF5E3A]/40 transition-colors"
              >
                <div className="font-mono text-3xl font-black text-[#FF5E3A]">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">{step.phase}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 10. OUR CAPABILITY */}
        <div className="mb-24 p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 reveal-scale">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
              One Team. End-To-End Execution.
            </h2>
            <p className="text-neutral-400 text-sm mt-2">
              From the first conversation to the final export, Poppy Productions brings the key stages of production together under one roof.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center mb-8">
            {[
              'Concept',
              'Production',
              'Photography',
              'Post-Production',
              'Editing',
              'Motion Graphics'
            ].map((cap, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-xs font-mono font-bold text-[#FF5E3A] block mb-1">0{i + 1}</span>
                <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{cap}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center text-neutral-300 text-sm leading-relaxed">
            Our approach allows clients to work with one production partner throughout the project rather than managing disconnected stages of production separately.
          </div>
        </div>

        {/* Interactive Scope & Production Cost Estimator */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-white/15 mb-20 reveal-scale">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              REAL-TIME ESTIMATOR
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Interactive Production Estimator
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1">
              Select your parameters below to get an indicative budgetary range and production timeline window.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                  Production Format
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Event Coverage', 'Commercial', 'Video Production'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        playUiClick();
                        setCalcTier(t);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                        calcTier === t
                          ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
                  <span>Shooting / Event Days</span>
                  <span className="text-[#FF5E3A]">{calcDays} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={calcDays}
                  onChange={(e) => setCalcDays(Number(e.target.value))}
                  className="w-full accent-[#FF5E3A] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    playUiClick();
                    setCalcPhotography(!calcPhotography);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    calcPhotography
                      ? 'bg-[#FF5E3A]/20 border-[#FF5E3A]/50 text-white'
                      : 'bg-white/5 border-white/10 text-neutral-400'
                  }`}
                >
                  <span className="font-bold block">Dedicated Photography</span>
                  <span className="text-[10px] text-neutral-400">Campaign / Event Stills</span>
                </button>

                <button
                  onClick={() => {
                    playUiClick();
                    setCalcMotionGraphics(!calcMotionGraphics);
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                    calcMotionGraphics
                      ? 'bg-[#FF5E3A]/20 border-[#FF5E3A]/50 text-white'
                      : 'bg-white/5 border-white/10 text-neutral-400'
                  }`}
                >
                  <span className="font-bold block">Motion Graphics</span>
                  <span className="text-[10px] text-neutral-400">Animated Visual Elements</span>
                </button>
              </div>
            </div>

            {/* Result Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block">
                Estimated Production Tier
              </span>
              <div className="font-mono text-3xl sm:text-4xl font-black text-white">
                ${totalEst}k - ${totalEst + 15}k
              </div>
              <p className="text-xs text-neutral-400">
                End-to-End Production • 4K Master Deliverables Included
              </p>
              <Link
                href="/start-project"
                onClick={playUiClick}
                className="w-full py-3 rounded-xl bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs block hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
              >
                Start Project Brief
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
