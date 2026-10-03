import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { SoundProvider } from '@/components/audio/SoundController';

export const metadata: Metadata = {
  title: 'Poppy Productions | Creative Films & Brand Stories',
  description:
    'Award-winning creative film production studio & scene production house. We create films that command attention.',
  keywords: [
    'Poppy Productions',
    'Creative Films',
    'Brand Stories',
    'film production house',
    'creative cinema',
    'commercial production',
    'brand films',
  ],
  authors: [{ name: 'Poppy Productions' }],
  openGraph: {
    title: 'Poppy Productions | Creative Films & Brand Stories',
    description: 'We Create Films That Command Attention. Commercials • Brand Stories • Creative Cinema.',
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
