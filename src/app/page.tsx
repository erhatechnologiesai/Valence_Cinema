'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Volume2,
  VolumeX,
  Play,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Calendar,
  Tv,
  Video,
  Camera,
  Layers,
  Scissors,
  Sparkle,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Compass,
  Zap,
  Users,
  Award,
  ArrowUpRight
} from 'lucide-react';
import { useSound } from '@/components/audio/SoundController';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import VideoModal from '@/components/video/VideoModal';
import { projects, Project, projectCategories, brandPartners } from '@/data/projects';
import { servicesData, productionPipeline, whyPoppy } from '@/data/services';
import { leadershipInfo } from '@/data/team';

export default function HomePage() {
  const { isPlaying, toggleSound, playUiClick, playWhoosh } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const openModal = (proj: Project) => {
    playWhoosh();
    setActiveModalProject(proj);
  };

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
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 overflow-hidden">
      {/* ========================================================================= */}
      {/* 01. HERO SECTION                                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-black">
        {/* Background Clean 4K Video Loop (0-20.2s from latest_video) */}
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
        <AntiGravityCanvas particleCount={25} interactive={true} />

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-black/25 to-black/50 pointer-events-none z-[12]" />

        {/* Top Spacer for Fixed Navbar */}
        <div className="h-24 sm:h-28" />

        {/* Center Floating Button: Experience With Sound */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <button
            onClick={() => {
              playUiClick();
              toggleSound();
            }}
            className="pointer-events-auto px-6 py-3 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-white/40 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-2.5 transition-all duration-300 hover:scale-105 shadow-2xl cursor-pointer"
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#FF5E3A]" />
                <span>Sound Active</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-neutral-300" />
                <span>Experience With Sound</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Bottom Bar with Client Copywriting on Left side */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left Side: Growth Partner & Concept to Execution */}
          <div className="max-w-xl p-5 sm:p-6 rounded-2xl bg-black/55 backdrop-blur-md border border-white/15 shadow-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5E3A]/20 border border-[#FF5E3A]/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FF5E3A] mb-3">
              <Sparkles className="w-3 h-3" /> YOUR GROWTH PARTNER
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-snug">
              We take your idea from concept to final execution.
            </h1>
            <p className="text-neutral-300 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
              Poppy Productions is a media production company providing end-to-end production solutions — from shooting and photography to post-production, editing, commercials, and event coverage.
            </p>
          </div>

          {/* Right Side: Play Showreel + Scroll Down */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 self-end md:self-end">
            <button
              onClick={() => openModal(projects[0])}
              className="px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 cursor-pointer shadow-xl backdrop-blur-sm"
            >
              <Play className="w-3.5 h-3.5 fill-black" />
              <span>Watch Reel</span>
            </button>

            <a
              href="#about-us"
              className="w-11 h-11 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:border-[#FF5E3A] transition-colors"
              aria-label="Scroll to About Section"
            >
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02. ABOUT US                                                              */}
      {/* ========================================================================= */}
      <section id="about-us" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-b border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-600/10 via-rose-600/10 to-transparent blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block">
            ABOUT US
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
            We Turn Ideas Into Production.
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FF5E3A] to-transparent mx-auto my-4" />

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            Poppy Productions is a full-service media production company founded in 2026 by <strong className="text-white">Abdul Qadeer Bhatti</strong>, who brings 5 years of industry experience to the company.
          </p>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
            Built with a focus on better-quality production, Poppy Productions brings together an experienced team with 10+ years of individual industry experience across key members of the team, bringing proven expertise and practical knowledge to every production to handle projects from concept to final execution.
          </p>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            From a focused shoot to large-scale event and expo coverage, we work closely with our clients to understand their vision, plan the production, execute the shoot, and deliver the final product.
          </p>

          <div className="pt-6">
            <Link
              href="/about"
              onClick={playUiClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5E3A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03. WHAT WE DO                                                            */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-neutral-900/60 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block">
                WHAT WE DO
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                From Concept To Final Frame.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed border-l-0 lg:border-l lg:border-white/10 lg:pl-8">
              <p>
                Every project starts with an idea. Our job is to understand it, develop it, produce it, and bring it to life.
              </p>
              <p className="text-neutral-400">
                Whether you need a commercial, a complete event coverage, professional photography, or post-production support, we provide the production expertise to take your project from the initial brief to final delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04. OUR SERVICES                                                          */}
      {/* ========================================================================= */}
      <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Our Services
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              Full-spectrum media production solutions crafted for brands, events, and modern digital channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#FF5E3A]/40 transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FF5E3A]/10 text-[#FF5E3A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getServiceIcon(svc.id)}
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-500">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#FF5E3A] transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                    {svc.tagline}
                  </span>
                  <Link
                    href="/services"
                    onClick={playUiClick}
                    className="p-2 rounded-full bg-white/5 hover:bg-[#FF5E3A] text-white transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <Link
              href="/services"
              onClick={playUiClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-lg shadow-orange-500/20"
            >
              <span>View Full Services & Equipment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05. WHY POPPY PRODUCTIONS                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08080a] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              WHY POPPY PRODUCTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Built Around Your Vision.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              We believe good production starts with understanding the client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 reveal-stagger">
            {whyPoppy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3 hover:border-white/25 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 text-[#FF5E3A] flex items-center justify-center font-mono font-bold text-sm">
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
      </section>

      {/* ========================================================================= */}
      {/* 06. OUR APPROACH                                                          */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              One Idea. One Complete Process.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2">
              A structured six-stage methodology designed to ensure quality, transparency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {productionPipeline.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 hover:border-[#FF5E3A]/40 transition-colors"
              >
                <div className="font-mono text-2xl font-black text-[#FF5E3A]">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                  {step.phase}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 07 & 08. OUR EXPERIENCE & SELECTED WORK                                   */}
      {/* ========================================================================= */}
      <section id="selected-work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Experience Statement */}
          <div className="mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              Small Projects. Large Productions. Same Commitment.
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed">
              Our production experience ranges from focused individual shoots to large-scale event and expo coverage. We have worked on projects including <strong className="text-white">Future Fest, HESP 2026, Connected Pakistan, Skills Gala</strong>, and other brand, corporate, education, and commercial projects.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed">
              Our work has included collaborations with names such as <strong className="text-white">LEVIS, Sapphire, Rashid Latif Khan University, WinningGo, The Scarf</strong>, and <strong className="text-white">The RIAB</strong>.
            </p>
          </div>

          {/* Brand Collaborations Marquee */}
          <div className="mb-16 p-4 rounded-2xl bg-neutral-900/60 border border-white/10 overflow-hidden reveal">
            <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-3 text-center">
              Trusted By Leading Organizations & Commercial Brands
            </div>
            <div className="relative w-full flex overflow-x-hidden">
              <div className="animate-marquee whitespace-nowrap flex items-center gap-10 sm:gap-14 text-sm sm:text-lg font-black text-neutral-400 uppercase tracking-widest">
                {brandPartners.concat(brandPartners).map((partner, i) => (
                  <span key={i} className="hover:text-white transition-colors flex items-center gap-10 sm:gap-14">
                    <span>{partner}</span>
                    <span className="text-[#FF5E3A] text-xs">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 reveal">
            <div>
              <h3 className="text-2xl font-black text-white uppercase">
                Selected Work
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                A selection of projects we&apos;ve produced, captured, and delivered across different formats.
              </p>
            </div>

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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.posterUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

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
                      {project.subtitle}
                    </span>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      onClick={playUiClick}
                      className="text-[#FF5E3A] font-bold uppercase tracking-wider flex items-center gap-1 group/btn hover:underline"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center reveal">
            <Link
              href="/portfolio"
              onClick={playUiClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold uppercase tracking-widest text-xs transition-all hover:scale-105"
            >
              <span>Explore All {projects.length} Productions</span>
              <ArrowRight className="w-4 h-4 text-[#FF5E3A]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09. LEADERSHIP                                                            */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* ========================================================================= */}
      {/* 10. OUR CAPABILITY                                                        */}
      {/* ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 reveal">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-2">
              OUR CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
              One Team. End-To-End Execution.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              From the first conversation to the final export, Poppy Productions brings the key stages of production together under one roof.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/60 border border-white/10 reveal-scale">
            {/* Capability Pillars */}
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

            <div className="max-w-3xl mx-auto text-center text-neutral-300 text-sm sm:text-base leading-relaxed">
              Our approach allows clients to work with one production partner throughout the project rather than managing disconnected stages of production separately.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FINAL CTA                                                             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-white/10">
        <div className="max-w-5xl mx-auto p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-white/15 text-center space-y-6 reveal-scale">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block">
            HAVE AN IDEA?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Let&apos;s take it from concept to final execution.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re planning a commercial, covering an event, producing content, or simply looking for a production partner, we&apos;re ready to understand your vision and build the production around it.
          </p>
          <div className="text-xs font-mono font-bold text-[#FF5E3A] uppercase tracking-widest">
            Poppy Productions — Your Growth Partner.
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-project"
              onClick={playUiClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all shadow-xl shadow-orange-500/20"
            >
              Start Project Brief
            </Link>
            <Link
              href="/contact"
              onClick={playUiClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/20 transition-colors"
            >
              Contact Studios
            </Link>
          </div>
        </div>
      </section>

      {/* Cinema Video Lightbox Modal */}
      <VideoModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
