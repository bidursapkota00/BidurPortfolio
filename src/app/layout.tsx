import './globals.css';
import * as React from 'react';
import type { Metadata } from 'next';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { Playfair_Display, Quicksand } from 'next/font/google';

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'Bidur Sapkota',
  description: 'Electronics Engineer and Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${quicksand.variable}`}>
      <body className='font-quicksand text-[1.6rem] text-[rgba(0,0,0,0.7)] leading-[1.8] font-[400]'>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
