'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Play,
  ArrowRight,
  LayoutGrid,
  ListFilter,
  Search,
  Sparkles,
  ArrowUpRight,
  Film
} from 'lucide-react';
import { projects, Project, projectCategories, brandPartners } from '@/data/projects';
import VideoModal from '@/components/video/VideoModal';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

export default function PortfolioPage() {
  const { playUiClick, playWhoosh } = useSound();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory =
      selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.synopsis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (proj: Project) => {
    playWhoosh();
    setActiveModalProject(proj);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      <AntiGravityCanvas particleCount={20} interactive={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Selected Work</span>
        </div>

        {/* 08. HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl reveal">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
              <Film className="w-3.5 h-3.5" /> OUR WORK
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[0.98]">
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
                Work
              </span>
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base mt-4 leading-relaxed">
              A selection of projects we&apos;ve produced, captured, and delivered across different formats and production requirements.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
              Small projects. Large productions. Same commitment. From focused individual shoots to large-scale event and expo coverage.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs reveal-scale">
            <div>
              <span className="font-mono text-xl font-bold text-white block">
                {projects.length}
              </span>
              <span className="text-neutral-400 uppercase tracking-wider text-[10px]">
                Delivered Projects
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="font-mono text-xl font-bold text-[#FF5E3A] block">
                {brandPartners.length}+
              </span>
              <span className="text-neutral-400 uppercase tracking-wider text-[10px]">
                Collaborations
              </span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <span className="font-mono text-xl font-bold text-white block">
                100%
              </span>
              <span className="text-neutral-400 uppercase tracking-wider text-[10px]">
                End-to-End
              </span>
            </div>
          </div>
        </div>

        {/* Filter & Controls Toolbar */}
        <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/10 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 reveal">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playUiClick();
                  setSelectedCategory(cat);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black shadow-md'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative flex-grow md:w-56">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-full pl-8 pr-3 py-1.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
              />
            </div>

            <div className="flex items-center p-1 rounded-full bg-black/40 border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'
                }`}
                title="List View"
              >
                <ListFilter className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* GRID VIEW                                                                */}
        {/* ========================================================================= */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 reveal-stagger">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-orange-500/10"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-[8]" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-widest text-[#FF5E3A]">
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

                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
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
        ) : (
          /* ========================================================================= */
          /* LIST VIEW                                                                */
          /* ========================================================================= */
          <div className="divide-y divide-white/10 border-t border-b border-white/10 reveal-stagger">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-white/[0.02] px-4 transition-colors rounded-xl"
              >
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                    <img
                      src={project.posterUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => openModal(project)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-colors"
                    >
                      <Play className="w-5 h-5 fill-white text-white" />
                    </button>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs uppercase font-bold text-[#FF5E3A] tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs text-neutral-500">•</span>
                      <span className="text-xs text-neutral-400">{project.client}</span>
                    </div>
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#FF5E3A] transition-colors"
                    >
                      {project.title}
                    </Link>
                    <p className="text-xs text-neutral-400 mt-1 max-w-xl hidden sm:block">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs text-neutral-400 font-mono">
                  <span>{project.duration}</span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    onClick={playUiClick}
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#FF5E3A] hover:border-[#FF5E3A] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-neutral-400">
            <p className="text-lg">No projects found matching your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-full bg-white/10 text-white text-xs uppercase tracking-wider font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <VideoModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}
