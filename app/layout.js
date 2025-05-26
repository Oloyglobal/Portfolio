
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata = {
  title: 'portfolio',
  description: 'In God we Trust',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
