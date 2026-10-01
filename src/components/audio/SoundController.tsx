'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

interface SoundContextType {
  isPlaying: boolean;
  toggleSound: () => void;
  playUiClick: () => void;
  playWhoosh: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isPlaying: false,
  toggleSound: () => {},
  playUiClick: () => {},
  playWhoosh: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthNodesRef = useRef<(AudioNode | OscillatorNode)[]>([]);

  useEffect(() => {
    // Preload cinema audio track from the user's footage
    const audio = new Audio('/audio/cinema-soundtrack.mp3');
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      audio.pause();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  // Web Audio synthesizer fallback for cinematic low atmospheric resonance
  const startSynthDrone = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          audioCtxRef.current = new AudioCtx();
        }
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 2.0);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      masterGain.connect(filter);
      filter.connect(ctx.destination);

      // Low D root (73.4Hz) and Fifth (110Hz)
      const freqs = [73.4, 110.0, 146.8];
      const oscs = freqs.map((f) => {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.2, ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
        return osc;
      });

      synthNodesRef.current = [masterGain, ...oscs];
    } catch (e) {
      console.warn('Web Audio synthesis not supported', e);
    }
  };

  const stopSynthDrone = () => {
    try {
      if (synthNodesRef.current.length > 0 && audioCtxRef.current) {
        const ctx = audioCtxRef.current;
        const masterGain = synthNodesRef.current[0] as GainNode;
        if (masterGain && masterGain.gain) {
          masterGain.gain.setValueAtTime(masterGain.gain.value, ctx.currentTime);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
        }
        setTimeout(() => {
          synthNodesRef.current.slice(1).forEach((node) => {
            try {
              (node as OscillatorNode).stop();
            } catch {}
          });
          synthNodesRef.current = [];
        }, 800);
      }
    } catch {}
  };

  const toggleSound = () => {
    if (isPlaying) {
      // Fade out
      if (audioRef.current && !audioRef.current.paused) {
        let v = audioRef.current.volume;
        const interval = setInterval(() => {
          v = Math.max(0, v - 0.05);
          if (audioRef.current) audioRef.current.volume = v;
          if (v <= 0) {
            clearInterval(interval);
            audioRef.current?.pause();
          }
        }, 50);
      }
      stopSynthDrone();
      setIsPlaying(false);
    } else {
      // Fade in
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.volume = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              let v = 0;
              const interval = setInterval(() => {
                v = Math.min(0.45, v + 0.05);
                if (audioRef.current) audioRef.current.volume = v;
                if (v >= 0.45) clearInterval(interval);
              }, 60);
            })
            .catch(() => {
              // Browser blocked file or offline, fallback to Web Audio synth
              startSynthDrone();
            });
        } else {
          startSynthDrone();
        }
      } else {
        startSynthDrone();
      }
    }
  };

  const playUiClick = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioCtxRef.current || new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  };

  const playWhoosh = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = audioCtxRef.current || new AudioCtx();
      if (ctx.state === 'suspended') ctx.resume();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch {}
  };

  return (
    <SoundContext.Provider value={{ isPlaying, toggleSound, playUiClick, playWhoosh }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  return useContext(SoundContext);
}
