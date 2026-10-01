import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SoundProvider } from '@/components/audio/SoundController';

export const metadata: Metadata = {
  title: 'VALENCE CINEMA | Next-Gen Scene Production & Brand Films',
  description:
    'Award-winning creative cinema studio & theatrical scene production house. Engineering 65mm large format cinema and brand narratives that command attention.',
  keywords: [
    'Valence Cinema',
    'Creative Scene Production',
    'film production house',
    'creative cinema',
    'theatrical brand films',
    'commercial director',
    'ARRI Alexa 65',
    'Panavision anamorphic',
    '4K cinematography'
  ],
  authors: [{ name: 'Valence Cinema' }],
  openGraph: {
    title: 'VALENCE CINEMA | Next-Gen Scene Production & Brand Films',
    description: 'We Direct Cinema That Commands Attention. Large Format • Aerial FPV • 1000fps Macro.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#08080a] text-zinc-100">
      <body className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-[#ff5e3a] selection:text-white flex flex-col justify-between">
        <SoundProvider>
          <Navbar />
          <main className="flex-grow pt-0">{children}</main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
