import { inter, roboto_mono } from '@/lib/fonts';
import './globals.css';

import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`}>
      <body className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto] font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
