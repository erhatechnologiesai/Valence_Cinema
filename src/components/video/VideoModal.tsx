'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';
import { Project } from '@/data/projects';

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((current / dur) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      videoRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-10 animate-in fade-in duration-300">
      {/* Background Dimmer click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl bg-neutral-900/90 border border-white/15 rounded-2xl overflow-hidden shadow-2xl shadow-rose-950/30 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-950/60">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-lg bg-[#FF5E3A]/20 text-[#FF5E3A]">
              <Film className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-white text-base font-bold tracking-tight">{project.title}</h3>
              <p className="text-xs text-neutral-400">
                {project.client} • {project.aspectRatio} • {project.camera}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 text-neutral-300 hover:text-white hover:bg-white/20 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={project.posterUrl}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Center Play Overlay on Pause */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer backdrop-blur-[2px]"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5E3A] text-white flex items-center justify-center shadow-xl shadow-orange-500/30 scale-100 hover:scale-110 transition-transform">
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Floating Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
            {/* Scrubber Bar */}
            <div
              onClick={handleSeek}
              className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer group/scrub hover:h-2.5 transition-all"
            >
              <div
                className="absolute top-0 left-0 bottom-0 bg-[#FF5E3A] rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/scrub:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="hover:text-white transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-white transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[11px] font-mono text-neutral-400">
                  {project.duration} / 4K MASTER
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-[11px] text-neutral-400">
                  Grade: {project.colorGrade}
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="hover:text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Footer Details */}
        <div className="p-4 sm:p-5 bg-neutral-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-6 text-neutral-400">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Director</span>
              <span className="text-white">{project.director}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Cinematography</span>
              <span className="text-white">{project.cinematographer}</span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Sound Design</span>
              <span className="text-white">{project.soundDesigner}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.awards.slice(0, 2).map((aw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-amber-400 font-medium"
              >
                ★ {aw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
