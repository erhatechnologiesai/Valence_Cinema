export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Direction' | 'Cinematography' | 'Color & Post' | 'Sound Design' | 'Production';
  bio: string;
  credits: string[];
  equipmentPreference: string;
  image: string;
  awards: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Founder & Executive Creative Director',
    department: 'Direction',
    bio: 'Former documentary director for National Geographic and commercial visionary. Marcus combines cinematic realism with high-impact brand narrative arcs.',
    credits: ['Arc’teryx Alpine Odyssey', 'LVMH Viscous Gold', 'Volvo Glacial Horizon'],
    equipmentPreference: 'ARRI Alexa 65 / Panavision Anamorphic 35mm',
    image: '/posters/frame_proj4.webp',
    awards: ['Cannes Lions Gold', 'D&AD Yellow Pencil', 'Vimeo Best of Year']
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Director of Photography (DoP)',
    department: 'Cinematography',
    bio: 'Renowned for painterly Rembrandt natural lighting, sub-zero expedition cinematography, and tactile macro compositions.',
    credits: ['The Soul of the Craftsman', 'Patagonia Solitary Tides', 'Alpine Odyssey'],
    equipmentPreference: 'Cooke Anamorphic /i Full Frame & Leica Summilux-C',
    image: '/posters/frame_girl.webp',
    awards: ['BSC Best Cinematography in Commercial', 'Clio Grand Prix']
  },
  {
    id: 'kenji-takahashi',
    name: 'Kenji Takahashi',
    role: 'Master Colorist & Finishing Artist',
    department: 'Color & Post',
    bio: 'Specialist in custom film emulation LUT creation, Kodak 2383/5219 grain profiles, and high dynamic range Dolby Vision master grading.',
    credits: ['National Geographic Echoes', 'Moët Hennessy Macro Series', 'Midnight Sprint'],
    equipmentPreference: 'DaVinci Resolve Advanced Panel & Sony BVM-HX310 Master Monitor',
    image: '/posters/frame_proj5.webp',
    awards: ['FilmLight Color Awards Winner', 'Awwwards Site of the Day']
  },
  {
    id: 'sofia-morales',
    name: 'Sofia Morales',
    role: 'Head of Production & Executive Producer',
    department: 'Production',
    bio: 'Over 14 years managing remote logistics across 26 countries, from Karakoram base camps to hyper-controlled high-speed studio stages.',
    credits: ['Whispers of the Valley', 'Solitary Tides', 'Volvo Global Launch'],
    equipmentPreference: 'Satellite Comms & Multi-Unit Remote Stream Command',
    image: '/posters/frame_proj6.webp',
    awards: ['PGA Producer of Excellence', 'Cannes Corporate Gold Dolphin']
  },
  {
    id: 'liam-gallagher',
    name: 'Liam Gallagher',
    role: 'Lead Sound Designer & Film Composer',
    department: 'Sound Design',
    bio: 'Creating visceral acoustic landscapes through custom modular analog synthesizers, ambisonic binaural field recordings, and sub-bass textures.',
    credits: ['Alpine Odyssey Soundscape', 'The Craftsman Ambisonics', 'LVMH Sonic Identity'],
    equipmentPreference: 'Sennheiser AMBEO VR Mic & Sequential Prophet-6 Synth',
    image: '/posters/frame_proj7.webp',
    awards: ['Grammy Nominated Sound Editor', 'Music+Sound Awards Best Sound Design']
  },
  {
    id: 'tariq-ahmed',
    name: 'Tariq Ahmed',
    role: 'Lead FPV Cine-Drone Pilot & Aerial DP',
    department: 'Cinematography',
    bio: 'Pioneering heavy-lift cinelifter FPV drone flights carrying full cinema packages through alpine canyons and narrow urban gaps.',
    credits: ['Alpine Odyssey Karakoram Dive', 'Tokyo Midnight Sprint', 'Red Bull Mountain Chase'],
    equipmentPreference: 'Custom 10-inch X8 Cinelifter with Freefly Ember & RED Raptor',
    image: '/posters/frame_hero.webp',
    awards: ['New York Drone Film Festival Winner', 'X-Games Aerial Excellence']
  }
];
