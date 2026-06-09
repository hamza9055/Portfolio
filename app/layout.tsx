import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Hamza Hamid - Web Developer Portfolio',
  description: 'Professional web developer specializing in modern web technologies and beautiful user interfaces.',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#111827',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}