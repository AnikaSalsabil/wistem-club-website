import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center">Welcome to UoW WiSTEM Club</h1>
      <p className="mt-4 text-lg md:text-xl text-center max-w-2xl">
        Empowering Women in Science, Technology, Engineering, and Mathematics.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Link href="/about" className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
          About Us
        </Link>
        <Link href="/events" className="px-6 py-3 bg-pink-600 text-white rounded-xl hover:bg-pink-700">
          Events
        </Link>
        <Link href="/blog" className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700">
          Blog
        </Link>
        <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
          Contact
        </Link>
      </div>
    </main>
  );
}
