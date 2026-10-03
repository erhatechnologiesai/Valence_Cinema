'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  ArrowLeft,
  ArrowRight,
  Award,
  Film,
} from 'lucide-react';
import { Project } from '@/data/projects';
import VideoModal from '@/components/video/VideoModal';
import { useSound } from '@/components/audio/SoundController';

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
  projectIndex: number;
  totalProjects: number;
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
  projectIndex,
  totalProjects,
}: ProjectDetailClientProps) {
  const { playUiClick, playWhoosh } = useSound();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-24 pb-20">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between">
        <Link
          href="/portfolio"
          onClick={playUiClick}
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF5E3A]" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
          <span>
            {projectIndex + 1} / {totalProjects}
          </span>
        </div>
      </div>

      {/* Hero Video Screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 reveal-scale">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl group">
          {/* Main Video Loop */}
          <video
            src={project.videoUrl}
            poster={project.posterUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50 pointer-events-none" />

          {/* Center Play Button for Full Lightbox Experience */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button
              onClick={() => {
                playWhoosh();
                setIsModalOpen(true);
              }}
              className="px-8 py-4 rounded-full bg-white/90 hover:bg-white text-black font-bold uppercase tracking-wider text-xs flex items-center gap-3 shadow-2xl shadow-black/80 hover:scale-105 transition-all cursor-pointer backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-full bg-[#FF5E3A] flex items-center justify-center text-white">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </div>
              <span>Experience Theatrical 4K Cut</span>
            </button>
          </div>

          {/* Bottom Title Bar Inside Video */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#FF5E3A] text-white text-[10px] uppercase font-bold tracking-widest inline-block mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-none drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base mt-2 font-medium drop-shadow">
                {project.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
              <span>{project.aspectRatio}</span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span className="text-[#FF5E3A]">4K MASTER</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left 2 Cols: Synopsis, Challenge, Solution & BTS */}
          <div className="lg:col-span-2 space-y-14">
            {/* The Concept */}
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-3">
                THE NARRATIVE CONCEPT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                Synopsis & Emotional Arc
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                {project.synopsis}
              </p>
            </div>

            {/* Challenge & Solution Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-stagger">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  The Production Challenge
                </span>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E3A]">
                  The Cine Engineering Solution
                </span>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Campaign Performance Metrics */}
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-4">
                CAMPAIGN IMPACT & ROI
              </span>
              <div className="grid grid-cols-3 gap-4 reveal-stagger">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 text-center"
                  >
                    <span className="font-mono text-2xl sm:text-4xl font-black text-white block mb-1">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Behind the Scenes Stills */}
            <div className="reveal">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF5E3A] block mb-4">
                BEHIND THE SCENES BREAKDOWN
              </span>
              <div className="space-y-6 reveal-stagger">
                {project.behindTheScenes.map((bts, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 grid grid-cols-1 md:grid-cols-2"
                  >
                    <div className="relative aspect-[16/10]">
                      <img
                        src={bts.image}
                        alt={bts.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-center space-y-2">
                      <span className="text-[10px] uppercase font-mono text-neutral-400">
                        BTS Phase 0{i + 1}
                      </span>
                      <h4 className="text-lg font-bold text-white">{bts.title}</h4>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                        {bts.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: Technical Credits & Specs Table */}
          <div className="space-y-8 reveal-right">
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-white/10 sticky top-28 space-y-6">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4 flex items-center justify-between">
                <span>Production Specs</span>
                <Film className="w-4 h-4 text-[#FF5E3A]" />
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Client & Commission
                  </span>
                  <span className="text-white text-sm font-medium">{project.client}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Release Year
                  </span>
                  <span className="text-white text-sm font-medium">{project.year}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Camera System
                  </span>
                  <span className="text-white text-sm font-medium">{project.camera}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Optics & Glass
                  </span>
                  <span className="text-white text-sm font-medium">{project.lenses}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Aspect Ratio
                  </span>
                  <span className="text-white text-sm font-medium">{project.aspectRatio}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Color Grade Architecture
                  </span>
                  <span className="text-white text-sm font-medium">{project.colorGrade}</span>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Director
                  </span>
                  <span className="text-white text-sm font-medium">{project.director}</span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Cinematography
                  </span>
                  <span className="text-white text-sm font-medium">
                    {project.cinematographer}
                  </span>
                </div>

                <div>
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold">
                    Sound Design & Score
                  </span>
                  <span className="text-white text-sm font-medium">{project.soundDesigner}</span>
                </div>
              </div>

              {/* Awards Pill */}
              {project.awards.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <span className="text-neutral-500 uppercase tracking-wider block font-semibold text-xs mb-2">
                    Accolades
                  </span>
                  <div className="space-y-1.5">
                    {project.awards.map((aw, i) => (
                      <div
                        key={i}
                        className="p-2 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-400 flex items-center gap-2"
                      >
                        <Award className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{aw}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/start-project"
                  onClick={playUiClick}
                  className="w-full py-3.5 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all text-center block shadow-lg shadow-orange-500/20"
                >
                  Commission Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Transition Bar */}
      <section className="border-t border-white/10 py-16 bg-neutral-950 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            onClick={playUiClick}
            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF5E3A] group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] uppercase font-mono block">Previous Film</span>
              <span className="text-sm font-bold text-white">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            href="/portfolio"
            onClick={playUiClick}
            className="px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs uppercase font-bold tracking-wider text-white"
          >
            All Films
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            onClick={playUiClick}
            className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-right group"
          >
            <div>
              <span className="text-[10px] uppercase font-mono block">Next Landmark Film</span>
              <span className="text-sm font-bold text-white">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#FF5E3A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <VideoModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
