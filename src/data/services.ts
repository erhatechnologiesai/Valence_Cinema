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
    id: 'event-coverage',
    number: '01',
    title: 'Event Coverage',
    tagline: 'Capturing the people, moments, energy, and experience of your event.',
    description: 'From focused events to large-scale expos, we provide complete event coverage designed to capture the people, moments, energy, and experience of your event.',
    deliverables: [
      'Multi-Camera Live Coverage',
      'Same-Day Highlight Reels',
      'Keynote & Speaker Full Recaps',
      'High-Energy Social Media Cuts',
      '4K Archival Master Stems'
    ],
    equipment: [
      'Multi-Cam Cinema Setup',
      'Wireless Live Monitoring',
      'Gimbal & Steadycam Rigs',
      'High-Fidelity Audio Recorders'
    ],
    sampleClip: '/videos/project_alpine.mp4',
    poster: '/posters/frame_hero.webp'
  },
  {
    id: 'commercials-ad-films',
    number: '02',
    title: 'Commercials & Ad Films',
    tagline: 'Translating your brand message into engaging visual stories.',
    description: 'We produce commercials and advertising films that translate your brand message into engaging visual stories.',
    deliverables: [
      'TV Commercial 60s/30s/15s Cuts',
      '9:16 Vertical Video for Paid Social',
      'Theatrical Brand Anthems',
      'Digital Campaign Assets'
    ],
    equipment: [
      'Cinema Camera Packages',
      'Anamorphic & Prime Optics',
      'Studio & Location Lighting',
      'Color-Calibrated Field Monitors'
    ],
    sampleClip: '/videos/project_portrait.mp4',
    poster: '/posters/frame_girl.webp'
  },
  {
    id: 'video-production',
    number: '03',
    title: 'Video Production',
    tagline: 'Professional video content built around your objectives and vision.',
    description: 'From planning and production to the final cut, we create professional video content built around your objectives and vision.',
    deliverables: [
      'Brand & Corporate Stories',
      'Documentary & Narrative Formats',
      'Product Launch Films',
      'Educational & Institutional Showcases'
    ],
    equipment: [
      'Full-Frame 4K/6K Cinema Sensors',
      'Pro Wireless Audio Systems',
      'Motorized Sliders & Jibs',
      'Dedicated Soundstage & Studio Lighting'
    ],
    sampleClip: '/videos/project_glacial.mp4',
    poster: '/posters/frame_lake.webp'
  },
  {
    id: 'photography',
    number: '04',
    title: 'Photography',
    tagline: 'Captured with purpose and precision.',
    description: 'Professional photography for brands, businesses, events, campaigns, and projects that need to be captured with purpose and precision.',
    deliverables: [
      'Commercial & Brand Campaign Stills',
      'Editorial & Portrait Sessions',
      'Event & Expo Photo Journalism',
      'High-Resolution Retouched Deliverables'
    ],
    equipment: [
      'High-Megapixel Medium Format & Mirrorless',
      'Prime Lenses (24mm, 50mm, 85mm, 135mm)',
      'Profoto Portable Studio Strobes',
      'Tethered Field Capture'
    ],
    sampleClip: '/videos/project_heritage.mp4',
    poster: '/posters/frame_prayer.webp'
  },
  {
    id: 'post-production',
    number: '05',
    title: 'Post Production',
    tagline: 'From editing and visual refinement to the final delivery.',
    description: 'We bring the production together in post — from editing and visual refinement to the final delivery.',
    deliverables: [
      'Full Narrative Assembly & Polish',
      'Color Grading & Look Development',
      'Audio Clean-up & Spatial Mixing',
      'Multi-Format Master Deliveries'
    ],
    equipment: [
      'DaVinci Resolve Studio Suites',
      'Calibrated 4K HDR Reference Monitors',
      'Dolby Audio Monitoring Suites',
      'High-Speed RAID Storage Arrays'
    ],
    sampleClip: '/videos/project_embers.mp4',
    poster: '/posters/frame_embers.webp'
  },
  {
    id: 'editing',
    number: '06',
    title: 'Editing',
    tagline: 'Structured, engaging, and finished content.',
    description: 'Professional video editing that turns recorded footage into a structured, engaging, and finished piece of content.',
    deliverables: [
      'Pacing, Rhythm & Story Cut',
      'Sound Synchronization & Foley',
      'Platform-Optimized Aspect Ratios',
      'Clean Archival Export'
    ],
    equipment: [
      'Apple Silicon M-Series Workstations',
      'Adobe Premiere Pro & Final Cut Pro',
      'Dedicated Color Grading Panels',
      'Studio Quality Genelec Audio'
    ],
    sampleClip: '/videos/project_kayak.mp4',
    poster: '/posters/frame_kayak.webp'
  },
  {
    id: 'motion-graphics',
    number: '07',
    title: 'Motion Graphics',
    tagline: 'Clarity, movement, and visual impact.',
    description: 'Motion graphics and visual elements that add clarity, movement, and impact to your content.',
    deliverables: [
      '2D & 3D Animated Title Sequences',
      'Lower Thirds & Kinetic Typography',
      'Product Visualization & Explainer Assets',
      'Brand Identity Motion Packages'
    ],
    equipment: [
      'After Effects & Cinema 4D',
      'Blender & Unreal Engine 3D Pipelines',
      'GPU Render Farms',
      'Vector Asset Suites'
    ],
    sampleClip: '/videos/hero_cinematic.mp4',
    poster: '/posters/hero_clean.webp'
  }
];

export const productionPipeline = [
  {
    step: '01',
    phase: 'Brief',
    desc: 'We start by understanding your requirements, objectives, and vision.'
  },
  {
    step: '02',
    phase: 'Concept & Creative Direction',
    desc: 'We shape the idea into a clear creative direction for production.'
  },
  {
    step: '03',
    phase: 'Planning',
    desc: 'We prepare the production around the creative, requirements, resources, and timeline.'
  },
  {
    step: '04',
    phase: 'Production',
    desc: 'Our team brings the plan to life through professional shooting and production.'
  },
  {
    step: '05',
    phase: 'Post-Production',
    desc: 'The footage is shaped through editing, visual refinement, motion graphics, and other post-production requirements.'
  },
  {
    step: '06',
    phase: 'Final Delivery',
    desc: "The finished content is prepared and delivered according to the project's requirements."
  }
];

export const whyPoppy = [
  {
    title: 'End-to-End Production',
    desc: 'From the initial brief to the final delivery, we can manage the complete production journey.'
  },
  {
    title: 'Understanding Your Vision',
    desc: 'We take the time to understand what you want to communicate before we start creating.'
  },
  {
    title: 'Experienced Leadership',
    desc: 'Led by Abdul Qadeer Bhatti, with 5 years of industry experience and a team bringing more than 10 years of collective experience.'
  },
  {
    title: 'Fast Delivery',
    desc: 'We value your timelines and work with a focused production process to deliver efficiently.'
  },
  {
    title: 'Scalable Production',
    desc: 'From smaller productions to large-scale events and expos, our production capabilities can adapt to the project.'
  }
];
