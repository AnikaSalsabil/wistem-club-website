import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'UOW WiSTEM Club',
  description: 'Official Website of UoW WiSTEM Club',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 w-full bg-white shadow z-50">
          <div className="flex justify-between items-center px-8 py-4">
            <h1 className="font-bold text-xl">UOW WiSTEM Club</h1>
            <nav className="space-x-6">
              <a href="#home" className="hover:text-purple-600">Home</a>
              <a href="#events" className="hover:text-purple-600">Events</a>
              <a href="#blog" className="hover:text-purple-600">Blog</a>
              <a href="#gallery" className="hover:text-purple-600">Gallery</a>
              <a href="#team" className="hover:text-purple-600">About Team</a>
              <a href="#sponsorship" className="hover:text-purple-600">Sponsorship</a>
              <a href="#contact" className="hover:text-purple-600">Let's Contact</a>
            </nav>
          </div>
        </header>
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
