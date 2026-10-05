export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Event Coverage' | 'Commercials & Ads' | 'Video Production' | 'Content';
  client: string;
  year: string;
  duration: string;
  aspectRatio: string;
  camera: string;
  lenses: string;
  colorGrade: string;
  director: string;
  cinematographer: string;
  soundDesigner: string;
  videoUrl: string;
  posterUrl: string;
  synopsis: string;
  challenge: string;
  solution: string;
  awards: string[];
  metrics: { label: string; value: string }[];
  behindTheScenes: {
    title: string;
    description: string;
    image: string;
  }[];
  featured: boolean;
}

export const projectCategories = [
  'All',
  'Event Coverage',
  'Commercials & Ads',
  'Video Production',
  'Content'
] as const;

export const brandPartners = [
  'LEVIS',
  'SAPPHIRE',
  'FUTURE FEST',
  'CONNECTED PAKISTAN',
  'HESP 2026',
  'SKILLS GALA',
  'RASHID LATIF KHAN UNIVERSITY',
  'WINNINGGO',
  'THE SCARF',
  'THE RIAB'
];

export const projects: Project[] = [
  {
    id: 'proj-future-fest',
    slug: 'future-fest',
    title: 'Future Fest',
    subtitle: 'Large-scale innovation expo and premier technology festival coverage',
    category: 'Event Coverage',
    client: 'Future Fest',
    year: '2026',
    duration: '03:15',
    aspectRatio: '16:9 4K UHD',
    camera: 'Multi-Cam Cinema Package',
    lenses: 'Prime & Telephoto Cine Lenses',
    colorGrade: 'High-Energy Vibrant Festival Grade',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_alpine.mp4',
    posterUrl: '/posters/frame_hero.webp',
    synopsis: 'Complete, multi-faceted event coverage of one of the largest innovation and tech expos. Capturing the massive crowds, keynote speakers, immersive energy, and groundbreaking exhibits from start to finish.',
    challenge: 'Managing simultaneous multi-stage coverage across sprawling expo halls, coordinating real-time media ingestion for same-day social highlights, and maintaining cinematic visual consistency.',
    solution: 'Deployed a synchronized multi-camera crew with high-speed field storage, dedicated live editors, and wireless monitoring to deliver rapid social clips alongside the flagship aftermovie.',
    awards: ['Premier Tech Event Coverage', '100K+ Live Attendees Captured', 'Flagship Aftermovie'],
    metrics: [
      { label: 'Event Footfall', value: '100K+' },
      { label: 'Highlight Reach', value: '2.5M+' },
      { label: 'Turnaround Time', value: 'Same Day' }
    ],
    behindTheScenes: [
      {
        title: 'Multi-Stage Production Grid',
        description: 'Coordinating synchronized camera positions across main stage and exhibition halls.',
        image: '/posters/frame_hero.webp'
      },
      {
        title: 'Rapid On-Site Editing Suite',
        description: 'Cutting immediate reels for social broadcast while keynotes were concluding.',
        image: '/posters/frame_lake.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-hesp-2026',
    slug: 'hesp-2026',
    title: 'HESP 2026',
    subtitle: 'Higher education summit and leadership conference production',
    category: 'Event Coverage',
    client: 'HESP Secretariat',
    year: '2026',
    duration: '02:40',
    aspectRatio: '16:9 Widescreen',
    camera: '4K Cinema Sensor Systems',
    lenses: 'Continuous Zoom & Portrait Primes',
    colorGrade: 'Warm Corporate & Editorial Tone',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_portrait.mp4',
    posterUrl: '/posters/frame_girl.webp',
    synopsis: 'A comprehensive production capturing the intellectual prestige, strategic panels, international delegations, and visionary dialogues of the Higher Education Summit.',
    challenge: 'Delivering broadcast-quality audio in acoustically reverberant convention spaces while capturing seamless candid interactions between global leaders.',
    solution: 'Used multi-track digital wireless audio feeds integrated directly with stage boards, paired with fluid gimbal systems to track discussions naturally.',
    awards: ['Official Production Partner', 'Executive Endorsement', 'Full Archive Delivery'],
    metrics: [
      { label: 'Panels Covered', value: '32+' },
      { label: 'Global Delegates', value: '1,200+' },
      { label: 'Deliverables', value: '100% On-Time' }
    ],
    behindTheScenes: [
      {
        title: 'Conference Rigging',
        description: 'Discreet multi-camera setups preserving clean line-of-sight for attendees.',
        image: '/posters/frame_girl.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-connected-pakistan',
    slug: 'connected-pakistan',
    title: 'Connected Pakistan',
    subtitle: 'Empowerment convention and national conference documentation',
    category: 'Event Coverage',
    client: 'Connected Pakistan',
    year: '2025',
    duration: '03:00',
    aspectRatio: '16:9 Full HD & 4K',
    camera: 'Sony Full Frame Cinema',
    lenses: 'G-Master Cine Optics',
    colorGrade: 'Vibrant Cinematic Contrast',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_glacial.mp4',
    posterUrl: '/posters/frame_lake.webp',
    synopsis: 'Capturing the electric passion, youth leadership, and digital empowerment conference that unites visionary changemakers and tech leaders from all across the nation.',
    challenge: 'Balancing fast-paced stage momentum with intimate, inspiring behind-the-scenes moments and attendee testimonials.',
    solution: 'Assigned dedicated roving documentary units to capture raw attendee emotion while the primary production team locked in cinematic multi-cam stage coverage.',
    awards: ['National Youth Impact Recognition', '5M+ Viral Impressions', 'Top Partner Award'],
    metrics: [
      { label: 'Audience Reach', value: '5.2M' },
      { label: 'Live Engagement', value: '98%' },
      { label: 'Recap Views', value: '850K+' }
    ],
    behindTheScenes: [
      {
        title: 'Floor Coverage',
        description: 'Moving through dense convention crowds with lightweight stabilized rigs.',
        image: '/posters/frame_lake.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-levis',
    slug: 'levis-brand-story',
    title: 'LEVIS',
    subtitle: 'Dynamic commercial & brand narrative film',
    category: 'Commercials & Ads',
    client: 'LEVIS',
    year: '2025',
    duration: '01:00',
    aspectRatio: '2.39:1 Anamorphic & 9:16 Vertical',
    camera: 'Large-Format Cinema Cameras',
    lenses: 'Anamorphic Primes',
    colorGrade: 'Vintage Indigo & Golden Amber Tone',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_embers.mp4',
    posterUrl: '/posters/frame_embers.webp',
    synopsis: 'A high-energy commercial and lifestyle content production showcasing timeless denim culture, urban rhythm, and authenticity designed to connect deeply with the modern generation.',
    challenge: 'Translating iconic global heritage denim aesthetics into modern urban culture with crisp pacing and authentic visual texture.',
    solution: 'Shot with prime anamorphic glass, utilizing tactile natural light, practical locations, and rhythmic editing to craft an unmistakable lifestyle anthem.',
    awards: ['Top Commercial Campaign', 'Multi-Platform Ad Release', 'High Brand Lift'],
    metrics: [
      { label: 'Campaign Views', value: '3.8M' },
      { label: 'CTR Increase', value: '+42%' },
      { label: 'Master Delivery', value: '4K Theatrical' }
    ],
    behindTheScenes: [
      {
        title: 'Tactile Lighting Setup',
        description: 'Crafting contrast and rich fabric textures with directional lighting.',
        image: '/posters/frame_embers.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-sapphire',
    slug: 'sapphire-collection',
    title: 'Sapphire',
    subtitle: 'Sensory fashion commercial & seasonal campaign film',
    category: 'Commercials & Ads',
    client: 'Sapphire',
    year: '2025',
    duration: '01:15',
    aspectRatio: '16:9 & 9:16 Social Cut',
    camera: 'High-Speed 4K Cinema',
    lenses: 'Macro & Portrait Glass',
    colorGrade: 'Lush Pastel & High Fashion Grade',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_heritage.mp4',
    posterUrl: '/posters/frame_prayer.webp',
    synopsis: 'An elegant visual commercial and lookbook film celebrating luxury fabrics, graceful movement, and intricate craftsmanship across modern and classic silhouettes.',
    challenge: 'Accurately representing true-to-life textile colors and fine thread embroidery while creating a soft, dreamlike cinematic atmosphere.',
    solution: 'Used color-calibrated studio lighting with high CRI ratings, combined with slow-motion passes to highlight fluid fabric motions and luxurious textures.',
    awards: ['Fashion Campaign of the Season', 'Retail Conversion Lift', 'Social Buzz Hit'],
    metrics: [
      { label: 'Social Engagement', value: '1.4M' },
      { label: 'Sales Velocity', value: '+65%' },
      { label: 'Deliverables', value: '12 Cuts' }
    ],
    behindTheScenes: [
      {
        title: 'Fabric Texture Macro',
        description: 'Detailed lens tests ensuring embroidery and gold foil shine naturally on camera.',
        image: '/posters/frame_prayer.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-skills-gala',
    slug: 'skills-gala',
    title: 'Skills Gala',
    subtitle: 'National youth talents and creative expo documentary showcase',
    category: 'Event Coverage',
    client: 'Skills Gala Council',
    year: '2025',
    duration: '02:30',
    aspectRatio: '16:9 Widescreen',
    camera: 'Multi-Cam Cinema Setup',
    lenses: 'Fast Zoom Cine Optics',
    colorGrade: 'Energetic Crisp Daylight Grade',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_kayak.mp4',
    posterUrl: '/posters/frame_kayak.webp',
    synopsis: 'Dynamic event coverage highlighting hands-on workshops, technological creations, student competitions, and awards ceremonies across two action-packed days.',
    challenge: 'Capturing dozens of simultaneous interactive skill arenas across multiple convention halls without missing key competition milestones.',
    solution: 'Established zone-based production teams equipped with wireless sync and dedicated field producers to ensure every major award moment was captured in 4K.',
    awards: ['Youth Talent Partner Recognition', 'Official Gala Recap Film'],
    metrics: [
      { label: 'Projects Filmed', value: '80+' },
      { label: 'Total Attendees', value: '15,000+' },
      { label: 'Delivery Turnaround', value: '48 Hours' }
    ],
    behindTheScenes: [
      {
        title: 'Arena Live Filming',
        description: 'Tracking fast-moving robotics and tech demonstrations with handheld gimbals.',
        image: '/posters/frame_kayak.webp'
      }
    ],
    featured: false
  },
  {
    id: 'proj-rlku',
    slug: 'rashid-latif-khan-university',
    title: 'Rashid Latif Khan University',
    subtitle: 'Institutional film, campus documentary & commencement event coverage',
    category: 'Video Production',
    client: 'Rashid Latif Khan University',
    year: '2025',
    duration: '03:30',
    aspectRatio: '16:9 Cinematic',
    camera: 'Cinema Sensor Package with Aerial Drone',
    lenses: 'Ultra-Wide & Architectural Primes',
    colorGrade: 'Clean Academic & Inspiring Warm Grade',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/hero_cinematic.mp4',
    posterUrl: '/posters/hero_clean.webp',
    synopsis: 'An institutional showcase and commencement event production capturing state-of-the-art medical laboratories, campus architecture, academic excellence, and student graduation ceremonies.',
    challenge: 'Covering expansive multi-acre campus facilities while blending formal institutional dignity with personal student success stories.',
    solution: 'Combined heavy-lift drone aerial cinematography of the campus architecture with heartfelt, documentary-style faculty and student interviews.',
    awards: ['Chancellor Commendation', 'Official University Admissions Showcase'],
    metrics: [
      { label: 'Campus Scale', value: '50+ Acres' },
      { label: 'Graduates Filmed', value: '2,500+' },
      { label: 'Enrollment Impact', value: '+28%' }
    ],
    behindTheScenes: [
      {
        title: 'Campus Aerial Mapping',
        description: 'Filming smooth sweeping morning aerials across modern university faculties.',
        image: '/posters/hero_clean.webp'
      }
    ],
    featured: false
  },
  {
    id: 'proj-the-scarf',
    slug: 'the-scarf',
    title: 'The Scarf',
    subtitle: 'Brand storytelling, product narrative & lifestyle content',
    category: 'Content',
    client: 'The Scarf',
    year: '2025',
    duration: '01:30',
    aspectRatio: '16:9 & 9:16 Social Pack',
    camera: 'High-Resolution 4K Mirrorless Cinema',
    lenses: 'Vintage Prime Glass',
    colorGrade: 'Soft Earthy Tones & Velvety Shadow Roll-off',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_portrait.mp4',
    posterUrl: '/posters/frame_girl.webp',
    synopsis: 'A heartfelt, stylistic lifestyle film portraying modest fashion elegance, daily self-expression, and premium fabric drape across contemporary lifestyle scenarios.',
    challenge: 'Creating an intimate, relatable feel that speaks directly to everyday lifestyle choices while upholding high production values.',
    solution: 'Employed soft diffused natural lighting, handheld organic camera movement, and intimate voiceover to craft an authentic lifestyle dialogue.',
    awards: ['Social Media Campaign Winner', 'Viral Audience Sharing'],
    metrics: [
      { label: 'Social Engagement', value: '650K' },
      { label: 'Brand Sentiment', value: '99% Positive' },
      { label: 'Assets Created', value: '18 Video Stems' }
    ],
    behindTheScenes: [
      {
        title: 'Lifestyle Staging',
        description: 'Naturalistic ambient lighting setup in realistic lifestyle settings.',
        image: '/posters/frame_girl.webp'
      }
    ],
    featured: false
  },
  {
    id: 'proj-winninggo',
    slug: 'winninggo',
    title: 'WinningGo',
    subtitle: 'Commercial campaign & high-velocity digital product content',
    category: 'Video Production',
    client: 'WinningGo',
    year: '2025',
    duration: '01:00',
    aspectRatio: '16:9 & 9:16 Multi-Format',
    camera: 'Full Frame Cinema System',
    lenses: 'Sharp Modern Cinema Primes',
    colorGrade: 'Punchy Electric & High Contrast Grade',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_alpine.mp4',
    posterUrl: '/posters/frame_hero.webp',
    synopsis: 'A high-octane commercial and digital content package engineered to drive user acquisition, product excitement, and digital brand presence.',
    challenge: 'Translating digital app features into exhilarating visual scenes with tangible physical emotion and swift kinetic tempo.',
    solution: 'Designed fast dynamic camera sweeps, bold motion graphics integration, and high-impact sound design that holds viewer retention across digital feeds.',
    awards: ['Digital Conversion Hit', 'App Acquisition Campaign of the Year'],
    metrics: [
      { label: 'Conversion Lift', value: '+54%' },
      { label: 'Total Video Views', value: '2.1M' },
      { label: 'Completion Rate', value: '88%' }
    ],
    behindTheScenes: [
      {
        title: 'Speed Tracking',
        description: 'Dynamic rig movement synchronized with app UI kinetic cues.',
        image: '/posters/frame_hero.webp'
      }
    ],
    featured: false
  },
  {
    id: 'proj-the-riab',
    slug: 'the-riab',
    title: 'The RIAB',
    subtitle: 'Creative content production & brand visual storytelling',
    category: 'Content',
    client: 'The RIAB',
    year: '2025',
    duration: '01:45',
    aspectRatio: '16:9 & 4:5 Social Suite',
    camera: 'Cinema Package',
    lenses: 'Artisan Glass',
    colorGrade: 'Cinematic Muted Moody Palette',
    director: 'Abdul Qadeer Bhatti',
    cinematographer: 'Poppy Productions Team',
    soundDesigner: 'Poppy Audio Lab',
    videoUrl: '/videos/project_embers.mp4',
    posterUrl: '/posters/frame_embers.webp',
    synopsis: 'A distinctive brand identity and creative content piece crafted to establish unique positioning and creative authority across modern digital channels.',
    challenge: 'Formulating a non-standard, memorable visual signature that stands distinct from generic corporate video templates.',
    solution: 'Focused on moody low-key lighting, sculptural framing, and crisp editorial pacing to build an aura of sophistication and intrigue.',
    awards: ['Creative Identity Recognition', 'Organic Digital Reach'],
    metrics: [
      { label: 'Brand Retention', value: '92%' },
      { label: 'Client Feedback', value: '5/5 Stars' },
      { label: 'Production Window', value: '2 Weeks' }
    ],
    behindTheScenes: [
      {
        title: 'Sculptural Lighting Design',
        description: 'Using hard rim lights and deep shadows to carve out dramatic silhouettes.',
        image: '/posters/frame_embers.webp'
      }
    ],
    featured: false
  }
];
