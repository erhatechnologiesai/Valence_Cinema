'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Film,
  Camera,
  Layers,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Cpu,
} from 'lucide-react';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

const milestones = [
  {
    year: '2018',
    title: 'Studio Inception in London Soho',
    desc: 'Founded by documentary director Marcus Vance with a single ARRI camera package and a conviction that commercial filmmaking lacked visceral human soul.',
  },
  {
    year: '2020',
    title: 'First Cannes Lions Gold Craft',
    desc: 'Awarded for groundbreaking sub-zero mountain cinematography in the Karakoram range for Arc’teryx.',
  },
  {
    year: '2022',
    title: 'Expansion to New York & Tokyo',
    desc: 'Established state-of-the-art DaVinci color grading suites and high-speed Phantom macro stages in Brooklyn and Shibuya.',
  },
  {
    year: '2024',
    title: 'Pioneering Heavy-Lift FPV Drone Cinema',
    desc: 'Engineered custom cinelifters capable of carrying full ARRI Alexa 65 packages through severe alpine environments.',
  },
  {
    year: '2026',
    title: 'Next-Gen Anti-Gravity Platform',
    desc: 'Merging real-time WebGL physics, spatial ambisonics, and 4K HDR digital streaming for interactive brand worlds.',
  },
];

const cineGear = [
  {
    category: 'Camera Systems',
    items: [
      'ARRI Alexa 65 (Large Format 65mm Sensor)',
      'Sony Venice 2 with Rialto Detached Block',
      'Phantom Flex4K (1,000 fps high-speed macro)',
      'RED V-Raptor XL 8K VV',
    ],
  },
  {
    category: 'Anamorphic & Prime Optics',
    items: [
      'Panavision Primo Anamorphic 35mm / 50mm / 75mm',
      'Cooke Anamorphic /i Full Frame Plus',
      'Leica Summilux-C T1.4 Primes',
      'Laowa 24mm T14 2X Macro Probe Lens',
    ],
  },
  {
    category: 'Finishing & Sound Engineering',
    items: [
      'DaVinci Resolve Studio Advanced Hardware Panels',
      'Sony BVM-HX310 4K HDR 1000-nit Master Monitors',
      'Dolby Atmos 7.1.4 Spatial Genelec SAM Monitors',
      'Sequential Prophet-6 & Moog Analog Synthesizers',
    ],
  },
  {
    category: 'Aerial & Specialty Rigs',
    items: [
      'Freefly Alta X Heavy-Lift Cine-Drone',
      'Custom 10" Carbon Fiber X8 Heavy Cinelifters',
      'DJI Ronin 2 3-Axis Gyrostabilizer',
      'Submersible Hydro-Housing with Air-Knife Deflector',
    ],
  },
];

export default function AboutPage() {
  const { playUiClick } = useSound();

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      {/* 3D Floating Canvas Background */}
      <AntiGravityCanvas particleCount={25} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Subtitle */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>About Studio</span>
        </div>

        {/* Hero Headline */}
        <div className="max-w-4xl mb-20 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Born From Raw Cinema
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.98] uppercase">
            We Sculpt Cinema That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              Refuses To Be Ignored.
            </span>
          </h1>
          <p className="text-neutral-400 text-lg sm:text-xl mt-8 leading-relaxed max-w-3xl">
            Poppy Productions was established on a radical belief: in an era of infinite scroll and digital noise, mere content disappears. What endures is the cinematic spectacle — the sudden breath caught in a viewer’s chest, the tactile weight of 35mm film grain, and the raw truth of human emotion.
          </p>
        </div>

        {/* Studio Stills / Reel Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 reveal-stagger">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_hero.webp"
              alt="High-Altitude Aerial Expedition"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">The Element</span>
              <h3 className="text-lg font-bold text-white">Sub-Zero Mountain Expeditions</h3>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_girl.webp"
              alt="Human Emotional Depth"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">The Emotion</span>
              <h3 className="text-lg font-bold text-white">Unfiltered Rembrandt Portraits</h3>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group">
            <img
              src="/posters/frame_embers.webp"
              alt="High-Speed Macro Dynamics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs uppercase font-bold tracking-widest text-[#FF5E3A]">The Alchemy</span>
              <h3 className="text-lg font-bold text-white">Phantom 1000fps Macro Physics</h3>
            </div>
          </div>
        </div>

        {/* Studio Philosophy 3 Pillars */}
        <div className="py-16 border-t border-b border-white/10 mb-24">
          <div className="max-w-3xl mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The Architecture of Sensation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Optical Authenticity</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We avoid sterile digital rendering wherever nature provides real physics. We shoot on large format sensors with vintage anamorphic glass, capturing genuine chromatic warmth, lens flares, and microscopic textures.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Anti-Gravity Momentum</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Cinema is rhythm. We construct dynamic camera movements — from weightless drone dives to high-speed tracking runs — synchronizing every cut to acoustic frequencies that keep the audience mesmerized.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Commercial Conversion</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                A masterpiece is pointless if it leaves the market unmoved. Our films are engineered to create intense brand equity, command viral cultural cachet, and drive measurable global growth for our partners.
              </p>
            </div>
          </div>
        </div>

        {/* Cine Arsenal / Equipment Standard */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
                PRODUCTION INFRASTRUCTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                The Cine Arsenal
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              We own and maintain our cinema packages in-house, ensuring zero downtime and immediate deployment anywhere on earth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {cineGear.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF5E3A] mb-4">
                    {group.category}
                  </h3>
                  <ul className="space-y-3 text-xs text-neutral-300">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="py-16 border-t border-white/10 mb-20">
          <div className="max-w-3xl mb-12 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Studio Milestones
            </h2>
          </div>

          <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12 ml-4 reveal-stagger">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-900 border-2 border-[#FF5E3A] group-hover:bg-[#FF5E3A] transition-colors" />

                <span className="font-mono text-xs font-bold text-[#FF5E3A] tracking-widest block mb-1">
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 reveal-scale">
          <div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Ready to create your next landmark film?
            </h3>
            <p className="text-neutral-400 text-sm mt-2 max-w-lg">
              Explore our selected portfolio or connect directly with our executive creative team.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/portfolio"
              onClick={playUiClick}
              className="px-6 py-3.5 rounded-full bg-white text-black font-bold uppercase tracking-wider text-xs hover:bg-neutral-200 transition-colors"
            >
              View Work
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
