import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/reset.css';
import '@/styles/layout.css';
import '@/styles/typography.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magefølelsen kommunikasjon & design',
  description: 'Strategi, design, nettsider og analyse',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='no'>
      <body className={inter.className}>
        {children} <Analytics />{' '}
      </body>
    </html>
  );
}
