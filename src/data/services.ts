export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  equipment: string[];
  sampleClip: string;
  poster: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'commercial-films',
    number: '01',
    title: 'High-Concept Commercials & Brand Anthems',
    tagline: 'We turn brands into stories that command global attention.',
    description: 'From initial creative treatment to 4K theatrical mastering. We engineer emotionally resonant films with high-velocity visual impact for category-leading brands.',
    deliverables: ['Theatrical 60s & 30s Cutdowns', 'Vertical 9:16 Social Masters', 'Dolby Cinema DCP Deliverables', 'Raw Pro-Res 4444 Archives'],
    equipment: ['ARRI Alexa 65', 'Panavision Primo Anamorphic', 'Motion Control Cine-Rig', 'Wireless Teradek 4K Monitoring'],
    sampleClip: '/videos/project_alpine.mp4',
    poster: '/posters/frame_hero.webp'
  },
  {
    id: 'documentary-narrative',
    number: '02',
    title: 'Documentary & Human Storytelling',
    tagline: 'Raw human truth, captured with cinematic reverence.',
    description: 'Expeditionary, cultural, and biographical long-form films. We venture into untamed geographies and intimate human moments to surface unforgettable narratives.',
    deliverables: ['Feature & Short Doc Cuts', 'Broadcast Television Stems', 'Film Festival Master Packages', 'Bilingual Subtitle & Caption Stems'],
    equipment: ['Sony Venice 2 Rialto', 'Cooke Anamorphic /i', 'Sennheiser MKH 416 & AMBEO VR', 'Dual-Battery Basecamp Generators'],
    sampleClip: '/videos/project_portrait.mp4',
    poster: '/posters/frame_girl.webp'
  },
  {
    id: 'aerial-fpv',
    number: '03',
    title: '4K Heavy-Lift Aerial & FPV Cinematography',
    tagline: 'Defying gravity to capture perspective impossible by human hand.',
    description: 'Licensed heavy-lift cinematic drone pilots capable of diving vertical mountain faces, weaving through dense forests, and matching 100mph race vehicles.',
    deliverables: ['8K / 6K Raw Aerial Plates', 'GPS Telemetry & Spatial Point Clouds', 'High-Speed Tracking Sequences', 'Live 4K Ground Broadcast Feeds'],
    equipment: ['Freefly Alta X Heavy Lifter', 'Custom X8 Carbon Cinelifter', 'DJI Ronin 2 3-Axis Stabilizer', 'DJI Transmission 4K Long-Range'],
    sampleClip: '/videos/project_glacial.mp4',
    poster: '/posters/frame_lake.webp'
  },
  {
    id: 'high-speed-macro',
    number: '04',
    title: 'High-Speed Phantom Macro & Tabletop',
    tagline: 'Revealing the hidden physics of liquid, light, and texture.',
    description: 'Up to 1000 frames per second at 4K resolution. Microscopic fluid choreographies, explosive sensory closeups, and luxury product poetry.',
    deliverables: ['Ultra Slow-Motion 1000fps Masters', 'Custom Fluid Simulation References', 'Microscopic Optical Stacks', 'Liquid Splatter & Particle Passes'],
    equipment: ['Phantom Flex4K High-Speed', 'Laowa 24mm T14 2X Probe Lens', '100,000-Lumen Cold Flicker-Free Lighting', 'Robotic Repeatable Motion Arm'],
    sampleClip: '/videos/project_embers.mp4',
    poster: '/posters/frame_embers.webp'
  },
  {
    id: 'color-grading-vfx',
    number: '05',
    title: 'DaVinci Resolve Color Grading & Post-Finishing',
    tagline: 'The alchemy that transforms raw digital sensors into 35mm film.',
    description: 'Master colorists with calibrated Barco 4K laser projectors and Sony Master Monitors. We craft proprietary 35mm film stock print emulations and seamless invisible VFX.',
    deliverables: ['Dolby Vision HDR & HDR10+ Grades', 'SDR Rec.709 Broadcast Masters', 'DCI-P3 Theatrical Masters', 'Custom Show LUT Packages'],
    equipment: ['DaVinci Resolve Advanced Panel', 'Sony BVM-HX310 1000-nit Master Monitor', 'Apple Mac Studio M2 Ultra Clusters', 'SAN Fiber 100Gb Storage'],
    sampleClip: '/videos/project_heritage.mp4',
    poster: '/posters/frame_prayer.webp'
  },
  {
    id: 'spatial-sound',
    number: '06',
    title: 'Spatial Audio, Film Scoring & Sound Design',
    tagline: 'Sound that surrounds, moves, and strikes the chest.',
    description: 'Bespoke orchestral and modular analog synthesizer film scoring paired with Dolby Atmos 7.1.4 spatial audio mixing. We design sound you feel before you hear.',
    deliverables: ['Dolby Atmos 7.1.4 ADM BWF Master', 'Stereo 24-bit 96kHz High-Res Mix', 'Isolated Dialogue / Music / Effects (DME) Stems', 'Spatial Web Audio Formats'],
    equipment: ['Genelec 8351B SAM Spatial Array', 'Sequential Prophet-6 & Moog Matriarch', 'Pro Tools Ultimate HDX Engine', 'Neve 1073 Mic Preamps'],
    sampleClip: '/videos/project_kayak.mp4',
    poster: '/posters/frame_kayak.webp'
  }
];

export const productionPipeline = [
  {
    step: '01',
    phase: 'Treatment & Narrative Strategy',
    desc: 'Uncovering the singular emotional core of your brand and translating it into an unshakeable cinematic screenplay and moodboard.'
  },
  {
    step: '02',
    phase: 'Pre-Vis & Production Engineering',
    desc: 'Location scouting across the globe, technical shot-listing, stunt and aerial choreography, and precision gear calibration.'
  },
  {
    step: '03',
    phase: 'Principal Cinema Photography',
    desc: 'Deploying our world-class DoPs and crew with ARRI and Panavision cameras, capturing every frame with painterly natural light.'
  },
  {
    step: '04',
    phase: 'Color Grade, Score & Theatrical Master',
    desc: 'Sculpting custom film LUTs, weaving Dolby Atmos spatial audio, and delivering pristine 4K master files ready for broadcast and cinema.'
  }
];
