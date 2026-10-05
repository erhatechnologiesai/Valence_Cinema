export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Direction' | 'Cinematography' | 'Color & Post' | 'Sound Design' | 'Production';
  bio: string;
  credits: string[];
  equipmentPreference: string;
  image: string;
  awards: string[];
}

export const leadershipInfo = {
  headline: 'LED BY EXPERIENCE. BUILT FOR PRODUCTION.',
  name: 'Abdul Qadeer Bhatti',
  role: 'Founder & CEO',
  bio: 'With 5 years of industry experience, Abdul Qadeer Bhatti founded Poppy Productions with a clear objective: to provide better-quality productions and build a full-service production company. Poppy brings together a team with more than 10 years of collective experience, combining production expertise with a practical understanding of the demands of modern media.'
};

export const teamMembers: TeamMember[] = [
  {
    id: 'abdul-qadeer-bhatti',
    name: 'Abdul Qadeer Bhatti',
    role: 'Founder & CEO',
    department: 'Leadership',
    bio: 'With 5 years of industry experience, Abdul Qadeer Bhatti founded Poppy Productions to deliver better-quality productions. He leads the company with a hands-on approach from initial client vision to final execution.',
    credits: ['Future Fest', 'Connected Pakistan', 'LEVIS Campaign', 'HESP 2026', 'Sapphire'],
    equipmentPreference: 'Cinema Packages & Multi-Cam Event Rigs',
    image: '/posters/frame_proj4.webp',
    awards: ['5 Years Industry Leadership', 'Over 100+ Completed Productions', 'Founding Director']
  },
  {
    id: 'production-lead',
    name: 'Senior Production Producer',
    role: 'Head of Production & Logistics',
    department: 'Production',
    bio: '10+ years of individual experience managing end-to-end production pipelines, large-scale expos, multi-camera live setups, and on-schedule execution.',
    credits: ['Future Fest Expo', 'Skills Gala', 'Rashid Latif Khan University', 'HESP 2026'],
    equipmentPreference: 'Multi-Unit Production Management & Live Comms',
    image: '/posters/frame_proj6.webp',
    awards: ['10+ Years Industry Experience', 'Large-Scale Expo Lead']
  },
  {
    id: 'director-cinematography',
    name: 'Director of Photography (DoP)',
    role: 'Lead Cinematographer',
    department: 'Cinematography',
    bio: 'Crafting powerful visual language for commercial films, ad campaigns, and dynamic event coverage with cinema optics and professional lighting.',
    credits: ['LEVIS Commercial', 'Sapphire Film', 'WinningGo', 'The Scarf'],
    equipmentPreference: 'Full-Frame Cinema Cameras & Prime Lenses',
    image: '/posters/frame_hero.webp',
    awards: ['Best Commercial Cinematography', 'High-Dynamic Range Specialist']
  },
  {
    id: 'lead-editor-post',
    name: 'Post-Production Lead',
    role: 'Senior Video Editor & Colorist',
    department: 'Color & Post',
    bio: 'Turning recorded footage into structured, engaging, and polished content with seamless pacing, look development, and broadcast-ready finishing.',
    credits: ['Connected Pakistan Recaps', 'The RIAB Content', 'LEVIS Commercial Cut', 'Future Fest Reels'],
    equipmentPreference: 'DaVinci Resolve Studio & Premiere Pro Suites',
    image: '/posters/frame_proj5.webp',
    awards: ['Senior Post-Production Specialist', 'Speed & Precision Editor']
  },
  {
    id: 'motion-designer',
    name: 'Lead Motion Designer',
    role: 'Motion Graphics & Visual FX Artist',
    department: 'Direction',
    bio: 'Specializing in motion graphics, kinetic typography, 3D visual elements, and brand identity animations that add clarity and impact.',
    credits: ['Skills Gala Openers', 'WinningGo Brand Motion', 'Future Fest Screen Visuals'],
    equipmentPreference: 'After Effects, Cinema 4D & Blender Pipeline',
    image: '/posters/frame_girl.webp',
    awards: ['Interactive Visual Design', 'Motion Brand Architecture']
  },
  {
    id: 'sound-engineer',
    name: 'Audio Director',
    role: 'Sound Designer & Audio Engineer',
    department: 'Sound Design',
    bio: 'Ensuring pristine audio fidelity, dialogue clarity, immersive sound design, and impact for ad films and live event broadcasts.',
    credits: ['Commercial Soundtracks', 'Live Event Sound Stems', 'Narrative Brand Mixes'],
    equipmentPreference: 'Pro Tools & Genelec Spatial Monitors',
    image: '/posters/frame_proj7.webp',
    awards: ['Broadcast Sound Standards', 'Acoustic Clarity Lead']
  }
];
