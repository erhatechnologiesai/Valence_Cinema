'use client';

import { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Send,
} from 'lucide-react';
import AntiGravityCanvas from '@/components/canvas/AntiGravityCanvas';
import { useSound } from '@/components/audio/SoundController';

const projectFormats = [
  {
    id: 'event-coverage',
    title: 'Event & Expo Coverage',
    desc: 'From focused events to large-scale expos, capturing people, moments, energy, and experience.',
    badge: 'Popular for Expos',
  },
  {
    id: 'commercials',
    title: 'Commercials & Ad Films',
    desc: 'Translating your brand message into engaging visual stories and ad campaigns.',
    badge: 'High Impact',
  },
  {
    id: 'video-production',
    title: 'Professional Video Production',
    desc: 'Professional video content built around your objectives and vision from planning to final cut.',
    badge: 'Full-Service',
  },
  {
    id: 'photography-content',
    title: 'Photography & Content',
    desc: 'Professional photography for brands, events, and projects captured with purpose and precision.',
    badge: 'Campaign Essential',
  },
  {
    id: 'post-motion',
    title: 'Post-Production & Motion Graphics',
    desc: 'Video editing, visual refinement, and motion graphics that add clarity, movement, and impact.',
    badge: 'Refinement',
  },
];

const timelineOptions = [
  'Immediate Rush (Next 1 - 2 Weeks)',
  'Standard Production (2 - 4 Weeks)',
  'Quarterly Campaign (1 - 2 Months)',
  'Large-Scale Expo / Event Window',
];

const budgetTiers = [
  { range: '$5,000 - $15,000', label: 'Tier 1: Focused Shoot / Photography / Social Suite' },
  { range: '$15,000 - $35,000', label: 'Tier 2: Commercial Ad Film / Multi-Day Event Coverage' },
  { range: '$35,000 - $75,000', label: 'Tier 3: Large-Scale Expo / Comprehensive Brand Campaign' },
  { range: '$75,000+', label: 'Tier 4: Enterprise Annual Media Partner / Master Suite' },
];

const deliverablesList = [
  '4K Master Master Video Exports',
  'Same-Day / Next-Day Event Highlight Reels',
  '9:16 Vertical Video Cuts for Social Media',
  'High-Resolution Retouched Photography Package',
  'Motion Graphics & Animated Title Package',
  'Raw Footage Archive & Complete Project Files',
];

export default function StartProjectPage() {
  const { playUiClick, playWhoosh } = useSound();
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [selectedFormat, setSelectedFormat] = useState('commercial');
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[1]);
  const [selectedBudget, setSelectedBudget] = useState(budgetTiers[1].range);
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    deliverablesList[0],
    deliverablesList[1],
    deliverablesList[2],
  ]);

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [brandName, setBrandName] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleDeliverable = (item: string) => {
    playUiClick();
    if (selectedDeliverables.includes(item)) {
      setSelectedDeliverables(selectedDeliverables.filter((d) => d !== item));
    } else {
      setSelectedDeliverables([...selectedDeliverables, item]);
    }
  };

  const handleNextStep = () => {
    playUiClick();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    playUiClick();
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playWhoosh();

    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff5e3a', '#f59e0b', '#ffffff'],
      });
    } catch {}

    setIsCompleted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#08080a] text-zinc-100 pt-28 pb-20">
      <AntiGravityCanvas particleCount={25} interactive={true} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>Initiate Commission</span>
        </div>

        {/* Header */}
        <div className="mb-12 reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FF5E3A] mb-4">
            <Sparkles className="w-3.5 h-3.5" /> HAVE AN IDEA?
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-[0.98]">
            Let&apos;s take it from concept <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E3A] via-rose-500 to-amber-400">
              to final execution.
            </span>
          </h1>
          <p className="text-neutral-400 text-sm mt-3 max-w-2xl leading-relaxed">
            Whether you&apos;re planning a commercial, covering an event, producing content, or simply looking for a production partner, we&apos;re ready to understand your vision and build the production around it.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="mb-12 reveal">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
            <span>Step {currentStep} of 5</span>
            <span className="text-[#FF5E3A]">
              {currentStep === 1 && 'Creative Format'}
              {currentStep === 2 && 'Production Timeline'}
              {currentStep === 3 && 'Budget Tier'}
              {currentStep === 4 && 'Deliverables'}
              {currentStep === 5 && 'Brief & Transmission'}
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FF5E3A] to-amber-400 transition-all duration-500 rounded-full"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900/80 border border-white/10 shadow-2xl backdrop-blur-xl reveal-scale">
          {isCompleted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                Production Brief Locked & Transmitted
              </h2>
              <p className="text-neutral-300 text-sm max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{clientName}</strong> from <strong className="text-white">{brandName || 'your organization'}</strong>.
                Our executive directorial board has received your parameters:
              </p>

              <div className="max-w-md mx-auto p-5 rounded-2xl bg-black/60 border border-white/10 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Format:</span>
                  <span className="text-white font-medium capitalize">{selectedFormat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Timeline:</span>
                  <span className="text-white font-medium">{selectedTimeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Budget:</span>
                  <span className="text-white font-mono font-bold text-[#FF5E3A]">{selectedBudget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 uppercase">Deliverables:</span>
                  <span className="text-white font-medium">{selectedDeliverables.length} Selected</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <Link
                  href="/portfolio"
                  onClick={playUiClick}
                  className="px-6 py-3 rounded-full bg-white/10 text-white font-bold uppercase tracking-wider text-xs hover:bg-white/20 transition-colors"
                >
                  Browse Portfolio
                </Link>
                <Link
                  href="/"
                  onClick={playUiClick}
                  className="px-6 py-3 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs hover:brightness-110 transition-all"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {/* STEP 1: FORMAT */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      Select Primary Creative Format
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Choose the primary cinematic category for your production.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectFormats.map((fmt) => (
                      <button
                        key={fmt.id}
                        type="button"
                        onClick={() => {
                          playUiClick();
                          setSelectedFormat(fmt.id);
                        }}
                        className={`p-6 rounded-2xl border text-left transition-all relative ${
                          selectedFormat === fmt.id
                            ? 'bg-[#FF5E3A]/15 border-[#FF5E3A] text-white shadow-lg shadow-orange-500/10'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:border-white/25 hover:bg-white/[0.07]'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF5E3A] block mb-2">
                          {fmt.badge}
                        </span>
                        <h4 className="text-lg font-bold text-white mb-1">{fmt.title}</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">{fmt.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: TIMELINE */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      Production Window & Timeline
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      When do you envision principal photography and final master delivery?
                    </p>
                  </div>

                  <div className="space-y-3">
                    {timelineOptions.map((tl) => (
                      <button
                        key={tl}
                        type="button"
                        onClick={() => {
                          playUiClick();
                          setSelectedTimeline(tl);
                        }}
                        className={`w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                          selectedTimeline === tl
                            ? 'bg-[#FF5E3A] border-[#FF5E3A] text-white'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                        }`}
                      >
                        <span>{tl}</span>
                        {selectedTimeline === tl && <CheckCircle2 className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: BUDGET TIER */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      Production Scale & Budget
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Target budget allocation dictates camera packages, crew scale, and filming locations.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {budgetTiers.map((b) => (
                      <button
                        key={b.range}
                        type="button"
                        onClick={() => {
                          playUiClick();
                          setSelectedBudget(b.range);
                        }}
                        className={`w-full p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                          selectedBudget === b.range
                            ? 'bg-[#FF5E3A]/15 border-[#FF5E3A] text-white'
                            : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                        }`}
                      >
                        <div>
                          <span className="font-mono text-xl font-bold text-white block">
                            {b.range}
                          </span>
                          <span className="text-xs text-neutral-400">{b.label}</span>
                        </div>
                        {selectedBudget === b.range && (
                          <CheckCircle2 className="w-5 h-5 text-[#FF5E3A]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: DELIVERABLES */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      Deliverable Master Ecosystem
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Select all final files and stems required for broadcast, cinema, and digital.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {deliverablesList.map((item) => {
                      const isSelected = selectedDeliverables.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleDeliverable(item)}
                          className={`p-4 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-rose-500/15 border-rose-500/40 text-white'
                              : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
                          }`}
                        >
                          <span>{item}</span>
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isSelected ? 'bg-[#FF5E3A] border-[#FF5E3A]' : 'border-white/30'
                            }`}
                          >
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT & BRIEF */}
              {currentStep === 5 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                      Final Details & Transmission
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Who should our executive producer contact with the custom treatment?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. David Cole"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. david@mercedes-benz.com"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Brand / Studio Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Patagonia or Warner Bros"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Project Vision & Core Objectives
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Summarize the core story, target audience, preferred shooting locations, or references..."
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#FF5E3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-xl shadow-orange-500/25 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Lock In Brief & Dispatch to Studio Board</span>
                  </button>
                </form>
              )}

              {/* Navigation Buttons for Steps 1-4 */}
              {currentStep < 5 && (
                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-8 py-3 rounded-full bg-[#FF5E3A] text-white font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:brightness-110 transition-all shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer"
                  >
                    <span>Proceed to Step {currentStep + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
