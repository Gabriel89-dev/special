'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import FloatingHearts from './components/FloatingHearts';
import ConfettiButton from './components/ConfettiButton';

export default function Home() {
  const [greeting, setGreeting] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = '';
    if (hour < 12) newGreeting = 'Selamat Pagi';
    else if (hour < 18) newGreeting = 'Selamat Siang';
    else newGreeting = 'Selamat Malam';
    
    const timer = setTimeout(() => {
      setGreeting(newGreeting);
      setShowContent(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="min-h-screen bg-linear-to-br from-red-50 via-red-100 to-red-200 flex items-center justify-center">
        <div className="text-6xl animate-heartbeat">❤️</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-red-100 to-red-200 relative overflow-hidden">
      <FloatingHearts />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-7xl opacity-10 animate-spin-slow">❤️</div>
        <div className="absolute bottom-20 right-10 text-8xl opacity-10 animate-spin-slow">💕</div>
        <div className="absolute top-1/3 left-5 text-6xl opacity-10 animate-float">💗</div>
        <div className="absolute bottom-1/3 right-5 text-6xl opacity-10 animate-float">💖</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <div className="inline-block mb-6">
            <div className="text-8xl md:text-9xl animate-heartbeat">🎂❤️</div>
          </div>
          <p className="text-red-600 text-xl md:text-2xl mb-2 font-light">{greeting} Sayangku 💕</p>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            Happy Birthday!
          </h1>
          <div className="flex justify-center gap-3 text-3xl mt-4">
            <span>✨</span> <span>🎉</span> <span>💝</span> <span>🎈</span> <span>✨</span>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-3xl mx-auto glass rounded-3xl shadow-2xl p-8 md:p-12 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="text-center">
            <div className="text-7xl mb-4 animate-float">👑</div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
              Untuk Pacar Tersayang
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              Hari ini adalah hari yang sangat spesial karena pada hari ini, 
              orang terbaik di dunia lahir. Terima kasih telah menjadi 
              cahaya dalam hidupku, senyuman di hari-hariku, dan cinta 
              yang selalu membuatku bahagia. 💕
            </p>
            <div className="border-t-2 border-red-200 pt-6 mt-4">
              <p className="text-red-600 text-xl italic">
                &quot;Setiap detik bersamamu adalah anugerah terindah 
                yang takkan pernah bisa aku gantikan dengan apapun.&quot;
              </p>
              <p className="text-red-400 mt-3">— Dari seseorang yang sangat mencintaimu</p>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <Link href="/photos" className="group">
            <div className="bg-white/80 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="text-6xl mb-4 group-hover:animate-heartbeat">📸</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Galeri Foto</h3>
              <p className="text-gray-600">Kenangan indah kita berdua</p>
            </div>
          </Link>

          <Link href="/music" className="group">
            <div className="bg-white/80 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="text-6xl mb-4 group-hover:animate-heartbeat">🎵</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Lagu Spesial</h3>
              <p className="text-gray-600">Lagu yang selalu kita nikmati bersama</p>
            </div>
          </Link>

          <Link href="/message" className="group">
            <div className="bg-white/80 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-fadeInUp" style={{animationDelay: '0.5s'}}>
              <div className="text-6xl mb-4 group-hover:animate-heartbeat">💌</div>
              <h3 className="text-xl font-bold text-red-700 mb-2">Pesan Spesial</h3>
              <p className="text-gray-600">Untukmu dari lubuk hatiku</p>
            </div>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <ConfettiButton onClick={() => {}}>
            Jelajahi Lebih Lanjut 💝
          </ConfettiButton>
        </div>
      </div>
    </div>
  );
}