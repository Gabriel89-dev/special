'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { path: '/', name: '🏠 Home', label: 'Beranda' },
    { path: '/photos', name: '📸 Photos', label: 'Foto' },
    { path: '/music', name: '🎵 Music', label: 'Lagu' },
    { path: '/message', name: '💌 Message', label: 'Pesan' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                pathname === item.path
                  ? 'bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg scale-105'
                  : 'text-red-700 hover:bg-red-100 hover:scale-105'
              }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}