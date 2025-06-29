import type { Metadata } from 'next';
import { inter } from '@/ui/fonts';
import './globals.css';
import Header from '@/components/header/header';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Study Board',
  description: 'Your tool for creating awesome studying experiences',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header/>
        <Suspense fallback={ <div className="text-lg text-center">LOADING...</div> }>
          <main className="p-6">
            {children}
          </main>
        </Suspense>
        </body>
    </html>
  );
}
