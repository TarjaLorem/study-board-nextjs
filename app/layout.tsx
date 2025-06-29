import { inter } from '@/ui/fonts';
import './globals.css';
import Header from '@/components/header/header';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

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
            <Toaster position={"top-center"} />
          </main>
        </Suspense>
        </body>
    </html>
  );
}
