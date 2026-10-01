'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Volume2,
  VolumeX,
  Play,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Clapperboard,
  Sliders,
  Award,
  Layers,
  Camera,
  Maximize2,
} from 'lucide-react';
import { useSound } from '@/components/audio/SoundController';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import VideoModal from '@/components/video/VideoModal';
import { projects, Project, projectCategories } from '@/data/projects';

export default function HomePage() {
  const { isPlaying, toggleSound, playUiClick, playWhoosh } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Live Cinema Timecode
  const [timecode, setTimecode] = useState('00:00:00:00');
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const f = (frame % 24).toString().padStart(2, '0');
      const s = Math.floor((frame / 24) % 60).toString().padStart(2, '0');
      const m = Math.floor((frame / 1440) % 60).toString().padStart(2, '0');
      const h = Math.floor(frame / 86400).toString().padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 24);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openModal = (proj: Project) => {
    playWhoosh();
    setActiveModalProject(proj);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH CLEAN 4K MOUNTAIN VIDEO + ARRI VIEWFINDER HUD        */}
      {/* ========================================================================= */}
      <section className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* Background Clean 4K Alpine Footage (User's creative_video_website.mp4) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/posters/hero_clean.webp"
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] will-change-transform"
        >
          <source src="/videos/hero_cinematic.mp4" type="video/mp4" />
        </video>

        {/* Ultra-Smooth 120fps Anti-Gravity Canvas */}
        <AntiGravityCanvas particleCount={40} interactive={true} />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/30 to-black/60 pointer-events-none z-[12]" />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,rgba(0,0,0,0.7)_100%] pointer-events-none z-[12]" />

        {/* ARRI / Panavision Viewfinder HUD Overlay */}
        <div className="absolute inset-6 sm:inset-10 pointer-events-none z-[15] flex flex-col justify-between text-[11px] font-mono text-white/50">
          {/* Top Bar HUD */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping inline-block" />
              <span className="font-bold text-white tracking-widest">● REC</span>
              <span className="hidden sm:inline text-white/70">ARRI ALEXA 65</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <span className="hidden md:inline">2.39:1 ANAMORPHIC</span>
              <span className="text-[#FF5E3A] font-bold">4K DCI 60FPS</span>
              <span>ISO 800</span>
              <span className="hidden sm:inline">5600K</span>
            </div>
          </div>

          {/* Center Crosshairs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-25">
            <div className="w-10 h-0.5 bg-white" />
            <div className="h-10 w-0.5 bg-white absolute" />
          </div>

          {/* Bottom Bar HUD */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/60">
              <span className="hidden sm:inline">SHUTTER 180.0°</span>
              <span className="hidden md:inline">FPS 23.976</span>
            </div>
            <div className="font-mono text-white/90 tracking-widest text-xs bg-black/40 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
              TC {timecode}
            </div>
          </div>
        </div>

        {/* Top Spacer for Navbar */}
        <div className="h-24" />

        {/* Hero Bottom Left Typography & Right Action Bar */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            {/* Left Content Area */}
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-[#FF5E3A] border border-white/15 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5E3A] animate-pulse" />
                <span>Global Scene Production</span>
                <span className="text-white/40">•</span>
                <span className="text-neutral-300">Large Format 65mm</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[0.94] drop-shadow-2xl uppercase">
                We Direct Films That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
                  Command Attention.
                </span>
              </h1>
              <p className="text-neutral-300 text-xs sm:text-sm md:text-base mt-4 max-w-xl leading-relaxed drop-shadow font-normal">
                Bespoke cinematic architecture for category-defining brands. Merging raw high-altitude cinematography, extreme 1,000fps macro physics, and deep human truth.
              </p>
            </div>

            {/* Right Action Bar: Play Showreel + Theatrical Sound + Scroll Down */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Play Showreel Button */}
              <button
                onClick={() => openModal(projects[0])}
                className="px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-xl"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Play Showreel</span>
              </button>

              {/* Theatrical Sound Button (Shifted from center to here) */}
              <button
                onClick={() => {
                  playUiClick();
                  toggleSound();
                }}
                className={`group px-5 py-3.5 rounded-full backdrop-blur-xl border transition-all duration-300 flex items-center gap-2.5 text-xs uppercase tracking-wider font-bold cursor-pointer ${
                  isPlaying
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-lg shadow-rose-500/25'
                    : 'bg-black/60 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5E3A] hover:bg-black/80'
                }`}
                title={isPlaying ? 'Mute Theatrical Audio' : 'Play Theatrical Audio'}
              >
                <div className="relative flex items-center justify-center">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isPlaying ? 'bg-[#FF5E3A] animate-ping' : 'bg-white/60'
                    }`}
                  />
                  <span
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      isPlaying ? 'bg-[#FF5E3A]' : 'bg-white'
                    }`}
                  />
                </div>
                <span>{isPlaying ? 'Sound Active' : 'Sound Off'}</span>
                {isPlaying ? (
                  <Volume2 className="w-3.5 h-3.5 text-[#FF5E3A]" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                )}
              </button>

              {/* Scroll Down Chevron */}
              <a
                href="#selected-work"
                className="w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-[#FF5E3A] transition-colors"
                aria-label="Scroll to Projects"
              >
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ELEVATED KINETIC MANIFESTO SEQUENCE                                   */}
      {/* ========================================================================= */}
      <section className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-600/10 via-rose-600/10 to-transparent blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
          <div className="space-y-4">
            <p className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-500 uppercase transition-all duration-700 hover:text-neutral-300">
              The World Is Drowning In Disposable Content.
            </p>
            <p className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase">
              <span className="text-white">We Direct </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400 drop-shadow-[0_0_40px_rgba(255,94,58,0.4)]">
                Enduring Cinema.
              </span>
            </p>
          </div>

          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FF5E3A] to-transparent mx-auto" />

          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold text-neutral-400 max-w-xl mx-auto">
            VISION. DEPTH. SCALE. <br />
            <span className="text-white font-black tracking-[0.4em]">WE IMMORTALIZE BRANDS ON FILM.</span>
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SELECTED WORK SHOWCASE (LAG-FREE HOVER PLAYBACK)                       */}
      {/* ========================================================================= */}
      <section id="selected-work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
                CURATED FILM ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
                Featured Showreel & Films
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-2">
                Stories that moved audiences. Campaigns that redefined industries.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    playUiClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-black shadow-lg shadow-white/10'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid: LAG-FREE (Only mounts video on active hover!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-orange-500/10"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  {/* Poster Image Always Present */}
                  <img
                    src={project.posterUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* ONLY MOUNT VIDEO ON HOVER: ELIMINATES ALL CPU/GPU LAG! */}
                  {hoveredProjectId === project.id && (
                    <video
                      src={project.videoUrl}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover z-[5] animate-in fade-in duration-300"
                    />
                  )}

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none z-[8]" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-widest text-[#FF5E3A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Watch CTA */}
                  <button
                    onClick={() => openModal(project)}
                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] cursor-pointer"
                    aria-label={`Watch ${project.title}`}
                  >
                    <div className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl scale-95 group-hover:scale-100 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-black" />
                      <span>Watch Cut</span>
                    </div>
                  </button>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-white/80 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    {project.duration}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                      {project.client} • {project.year}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF5E3A] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {project.synopsis}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {project.camera.split(' ')[0]} {project.camera.split(' ')[1]}
                    </span>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      onClick={playUiClick}
                      className="text-[#FF5E3A] font-bold uppercase tracking-wider flex items-center gap-1 group/btn hover:underline"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Works Button */}
          <div className="mt-14 text-center">
            <Link
              href="/portfolio"
              onClick={playUiClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105"
            >
              <span>Explore Complete Film Vault ({projects.length} Works)</span>
              <ArrowRight className="w-4 h-4 text-[#FF5E3A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE 3-ACT METHODOLOGY                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              THE 3-ACT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              How We Architect Emotion
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Every production is structured across a deliberate physiological arc designed to capture and hold human emotion from frame one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF5E3A]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Act I: Elemental Scale</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                Extreme wide FPV drone perspectives, sub-zero glacial topography, and raw organic textures. We anchor the viewer in an unforgettable sense of scale.
              </p>
              <div className="text-[11px] font-mono text-neutral-400">
                • ARRI Alexa 65 • Panavision Anamorphic
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF5E3A]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Act II: Human Intimacy</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                Tight Rembrandt close-ups, candid micro-expressions, and authentic cultural depth. We bridge the emotional gap between brand ideology and human heart.
              </p>
              <div className="text-[11px] font-mono text-neutral-400">
                • Cooke Anamorphic /i • Ambisonic Audio
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF5E3A]/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center font-bold text-lg mb-6 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Act III: Kinetic Velocity</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4">
                High-speed tracking, 1000fps phantom liquid gold, and visceral pace. The viewer is left electrified, driving explosive brand memory and conversion.
              </p>
              <div className="text-[11px] font-mono text-neutral-400">
                • Phantom Flex4K • DaVinci Kodak 2383 Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STUDIO METRICS & FESTIVAL HONORS                                      */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-5xl font-black text-white block mb-1">
                150M+
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Organic Views Generated
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-5xl font-black text-[#FF5E3A] block mb-1">
                18
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Cannes & Festival Honors
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-5xl font-black text-white block mb-1">
                42
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                International Commercials
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-3xl sm:text-5xl font-black text-[#FF5E3A] block mb-1">
                98%
              </span>
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Audience Retention Index
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PARTNERS MARQUEE                                                      */}
      {/* ========================================================================= */}
      <section className="py-14 border-t border-b border-white/5 bg-neutral-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-neutral-400">
            Trusted By Visionary Global Brands
          </span>
        </div>
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-16 text-lg sm:text-2xl font-black text-neutral-600 uppercase tracking-widest">
            <span className="hover:text-white transition-colors">ARC’TERYX</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">RED BULL MEDIA</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">A24 FILMS</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">VOLVO CARS</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">LVMH / MOËT</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">PATAGONIA</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">NAT GEO WILD</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">SONY MUSIC</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">ARC’TERYX</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">RED BULL MEDIA</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">A24 FILMS</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">VOLVO CARS</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CINEMA VIDEO LIGHTBOX MODAL                                           */}
      {/* ========================================================================= */}
      <VideoModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
