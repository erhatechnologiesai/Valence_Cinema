export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Commercial' | 'Documentary' | 'Brand Anthem' | 'Narrative' | 'Fashion';
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

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'the-alpine-odyssey',
    title: 'The Alpine Odyssey',
    subtitle: 'Ascending the razor ridges of the Karakoram',
    category: 'Brand Anthem',
    client: 'Arc’teryx / Red Bull Media House',
    year: '2026',
    duration: '03:45',
    aspectRatio: '2.39:1 Anamorphic',
    camera: 'ARRI Alexa 65',
    lenses: 'Panavision Primo Anamorphic 35mm & 50mm',
    colorGrade: 'Kodak 2383 35mm Print Emulation (Teal & Gold)',
    director: 'Marcus Vance',
    cinematographer: 'Elena Rostova',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_alpine.mp4',
    posterUrl: '/posters/frame_hero.webp',
    synopsis: 'A relentless FPV drone journey tracking high-altitude mountain ascents across virgin glacial terrain. Exploring human resilience where gravity yields to sheer willpower.',
    challenge: 'Filming sub-zero aerials above 6,000 meters with battery volatility and harsh wind shears, maintaining buttery 60fps IMAX precision without digital stabilization artifacts.',
    solution: 'Engineered custom heated gimbal rigs and high-thrust custom carbon fiber cine-drones, paired with specialized optical filters to capture true crystalline snow textures.',
    awards: ['Cannes Lions - Gold Craft (Cinematography)', 'Vimeo Staff Pick Best of the Month', 'Banff Mountain Film Festival Winner'],
    metrics: [
      { label: 'Global Impressions', value: '42.8M' },
      { label: 'Brand Lift', value: '+340%' },
      { label: 'Cinema Releases', value: '180 Screens' }
    ],
    behindTheScenes: [
      {
        title: 'Rigging at -28°C',
        description: 'Deploying the ARRI Alexa 65 onto custom stabilized drones in severe alpine blizzards.',
        image: '/posters/frame_hero.webp'
      },
      {
        title: 'Natural Light Choreography',
        description: 'Waiting for the 14-minute golden twilight window over the glacial crests.',
        image: '/posters/frame_lake.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-2',
    slug: 'the-craftsmans-soul',
    title: 'The Soul of the Craftsman',
    subtitle: 'An intimate portrait in raw Rembrandt shadows',
    category: 'Documentary',
    client: 'A24 / Masterworks Heritage',
    year: '2026',
    duration: '04:12',
    aspectRatio: '1.85:1 Academy Flat',
    camera: 'Sony Venice 2 with Rialto System',
    lenses: 'Cooke Anamorphic /i Full Frame Plus',
    colorGrade: 'Custom Low-Key Tungsten & Amber Separation',
    director: 'Marcus Vance',
    cinematographer: 'Elena Rostova',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_portrait.mp4',
    posterUrl: '/posters/frame_girl.webp',
    synopsis: 'An emotional exploration into generational artisanal memory. Captured in micro-expressions of raw determination, quiet pauses, and the cadence of human breath.',
    challenge: 'Capturing unscripted, genuine human micro-emotions without intimidating the subjects with massive cine-rigs.',
    solution: 'Used miniature detached optical heads with tethered sensor blocks, creating an invisible, quiet atmosphere where genuine vulnerability surfaced naturally.',
    awards: ['Tribeca X Official Selection', 'Clio Award - Grand Prix Craft', 'D&AD Yellow Pencil'],
    metrics: [
      { label: 'Viewer Retention', value: '94.2%' },
      { label: 'Average Watch Time', value: '3m 52s' },
      { label: 'Organic Shares', value: '620K' }
    ],
    behindTheScenes: [
      {
        title: 'Rembrandt Key Lighting',
        description: 'Single large diffused softbox through muslin to isolate eyes and cheekbones.',
        image: '/posters/frame_girl.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-3',
    slug: 'solitary-tides',
    title: 'Solitary Tides: The Cold North',
    subtitle: 'A single paddle against the boundless Arctic Atlantic',
    category: 'Commercial',
    client: 'Patagonia Films',
    year: '2025',
    duration: '02:50',
    aspectRatio: '2.40:1 Cinemascope',
    camera: 'RED V-Raptor XL 8K VV',
    lenses: 'Leica Summilux-C T1.4',
    colorGrade: 'Deep Cyan & Nordic Obsidian Silver',
    director: 'Sofia Morales',
    cinematographer: 'Elena Rostova',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_kayak.mp4',
    posterUrl: '/posters/frame_kayak.webp',
    synopsis: 'Tracking a solitary ocean kayaker threading through ice-flecked black water fjords beneath looming basalt sea walls.',
    challenge: 'Saltwater spray management and extreme dynamic range between glistening black water and blinding ice cliffs.',
    solution: 'Custom carbon hydro-housing with continuous air-knife lens clearing and dual native ISO sensor calibration.',
    awards: ['Ocean Film Festival Best Short', 'Awwwards Site of the Day Winner'],
    metrics: [
      { label: 'Product Conversion', value: '+215%' },
      { label: 'Festival Screenings', value: '34' }
    ],
    behindTheScenes: [
      {
        title: 'Water Level Tracking',
        description: 'Submerged chase boat keeping the lens 4 inches above icy ocean swell.',
        image: '/posters/frame_kayak.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-4',
    slug: 'echoes-of-the-high-steppe',
    title: 'Echoes of the High Steppe',
    subtitle: 'Galloping giants across frozen plateaus',
    category: 'Documentary',
    client: 'National Geographic Wild',
    year: '2025',
    duration: '05:15',
    aspectRatio: '2.39:1',
    camera: 'ARRI Alexa Mini LF',
    lenses: 'Angenieux Optimo Ultra 12x Zoom',
    colorGrade: 'Naturalistic Crisp Winter Daylight',
    director: 'Marcus Vance',
    cinematographer: 'Kenji Takahashi',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_yak.mp4',
    posterUrl: '/posters/frame_yak.webp',
    synopsis: 'A visceral wildlife encounter tracking wild yak herds stampeding through deep snow drifts at 4,800m altitude.',
    challenge: 'Matching the unpredictable 45km/h speed of wild herds across uncharted snow fields without disturbing wildlife.',
    solution: 'Ultralight acoustic-dampened electric snow vehicles paired with ultra-telephoto high-speed tracking gyros.',
    awards: ['Wildscreen Film Festival Best Action', 'Jackson Wild Media Award'],
    metrics: [
      { label: 'Broadcast Audience', value: '18.4M' },
      { label: 'Conservation Donations', value: '$1.4M' }
    ],
    behindTheScenes: [
      {
        title: 'Snow Tracking Rig',
        description: 'Gyrostabilized head mounted on continuous rubber tracks.',
        image: '/posters/frame_yak.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-5',
    slug: 'whispers-of-the-valley',
    title: 'Whispers of the Valley',
    subtitle: 'Sacred ceremonies & mountain village heritage',
    category: 'Narrative',
    client: 'Cultural Heritage Institute',
    year: '2025',
    duration: '06:30',
    aspectRatio: '1.66:1 European Widescreen',
    camera: 'ARRI Alexa 35',
    lenses: 'Zeiss Supreme Prime Radiance',
    colorGrade: 'Warm Saffron, Earth Ochre & Incense Smoke',
    director: 'Sofia Morales',
    cinematographer: 'Elena Rostova',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_heritage.mp4',
    posterUrl: '/posters/frame_prayer.webp',
    synopsis: 'Documenting centuries-old ritual ceremonies, prayer flag blessing ceremonies, and traditional communal gathering high in remote valleys.',
    challenge: 'Shooting in dense incense smoke, dim monastery interiors, and unpredictable candid spiritual moments without disrupting rituals.',
    solution: 'Used ARRI Alexa 35’s Enhanced Sensitivity Mode (EI 3200) with ultra-fast T1.5 prime lenses and directional ambisonic audio mics.',
    awards: ['BFI London Film Festival Selection', 'Tokyo Doc Fest Grand Prize'],
    metrics: [
      { label: 'Streaming Plays', value: '8.9M' },
      { label: 'Audience Score', value: '98%' }
    ],
    behindTheScenes: [
      {
        title: 'Incense & Smoke Lighting',
        description: 'Using natural backlight through prayer smoke to create dimensional volume.',
        image: '/posters/frame_prayer.webp'
      }
    ],
    featured: false
  },
  {
    id: 'proj-6',
    slug: 'viscous-gold',
    title: 'Viscous Gold & Atmospheric Embers',
    subtitle: '1000fps phantom macro fluid dynamics',
    category: 'Commercial',
    client: 'LVMH / Moët Hennessy',
    year: '2026',
    duration: '01:30',
    aspectRatio: '16:9 Cinema 4K',
    camera: 'Phantom Flex4K at 1000fps',
    lenses: 'Laowa 24mm T14 2X Macro Probe Lens',
    colorGrade: 'Deep Obsidian Black & 24K Liquid Gold',
    director: 'Marcus Vance',
    cinematographer: 'Kenji Takahashi',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_embers.mp4',
    posterUrl: '/posters/frame_embers.webp',
    synopsis: 'High-speed microscopic fluid choreography showing suspended 24K gold flakes swirling in zero-gravity obsidian fluid with rising incandescent embers.',
    challenge: 'Lighting liquid particles at 1000fps requires extreme 100,000-lumen illumination without boiling or warping the delicate viscous fluid.',
    solution: 'Engineered cold LED fiber-optic light arrays and magnetic stirrers for zero-heat illumination and micro-fluidic turbulence control.',
    awards: ['Cannes Corporate Media & TV Awards - Gold Dolphin', 'ADC Gold Cube for VFX & Macro'],
    metrics: [
      { label: 'Instagram Viral Reach', value: '31M' },
      { label: 'E-commerce CTR', value: '+410%' }
    ],
    behindTheScenes: [
      {
        title: 'Macro Probe Probe Rig',
        description: 'Precision robotic arm sliding into tiny glass vortex chambers.',
        image: '/posters/frame_embers.webp'
      }
    ],
    featured: true
  },
  {
    id: 'proj-7',
    slug: 'glacial-horizon',
    title: 'Glacial Horizon: The Pristine Depths',
    subtitle: 'Panoramic reflection of silent monoliths',
    category: 'Brand Anthem',
    client: 'Volvo Cars International',
    year: '2026',
    duration: '02:15',
    aspectRatio: '2.39:1 Anamorphic',
    camera: 'ARRI Alexa 65 Large Format',
    lenses: 'Hasselblad Prime DNA Lenses',
    colorGrade: 'Teal Glacial Ice & Minimalist Slate',
    director: 'Marcus Vance',
    cinematographer: 'Elena Rostova',
    soundDesigner: 'Liam Gallagher',
    videoUrl: '/videos/project_glacial.mp4',
    posterUrl: '/posters/frame_lake.webp',
    synopsis: 'A cinematic masterclass in stillness and monumental scale. A serene mirror glacial lake reflecting immense peaks as dawn breaks over the horizon.',
    challenge: 'Water surface agitation from wind destroying the mirror reflection of the mountain crests.',
    solution: 'Stationed crew at 4:30 AM to capture the 20-minute window of absolute thermal calm before valley breezes initiate.',
    awards: ['Eurobest Grand Prix', 'Art Directors Club of Europe Gold'],
    metrics: [
      { label: 'Global Campaign Reach', value: '88M' },
      { label: 'Social Engagement', value: '3.4M' }
    ],
    behindTheScenes: [
      {
        title: 'Dawn Mirror Reflection',
        description: 'Subtle tilt-shift focal plane to keep both the foreground pebble and distant 7000m peak pin-sharp.',
        image: '/posters/frame_lake.webp'
      }
    ],
    featured: true
  }
];

export const projectCategories = ['All', 'Commercial', 'Documentary', 'Brand Anthem', 'Narrative'] as const;
