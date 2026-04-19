'use client';
import { useState } from 'react';
import FloatingHearts from '../components/FloatingHearts';

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Ganti dengan foto-foto kamu
  const photos = [
    { id: 1, url: '/images/photo1.jpg', caption: 'Momen pertama kita bertemu 💕', date: '2024' },
    { id: 2, url: '/images/photo2.jpg', caption: 'Kencan pertama kita 🍕', date: '2024' },
    { id: 3, url: '/images/photo3.jpg', caption: 'Bulan madu kita 🌊', date: '2024' },
    { id: 4, url: '/images/photo4.jpg', caption: 'Hari spesial bersama 🎉', date: '2024' },
    { id: 5, url: '/images/photo5.jpg', caption: 'Senyum terindahmu 😊', date: '2024' },
    { id: 6, url: '/images/photo6.jpg', caption: 'Pelukan hangat 🤗', date: '2024' },
  ];

  // Jika belum punya foto, gunakan placeholder
  const placeholderPhotos = [
    { id: 1, url: 'https://picsum.photos/id/20/400/400', caption: 'Tempat kita pertama kali bertemu 💕', date: '2024' },
    { id: 2, url: 'https://picsum.photos/id/26/400/400', caption: 'Liburan bersama 🏖️', date: '2024' },
    { id: 3, url: 'https://picsum.photos/id/30/400/400', caption: 'Saat kita tersenyum bersama 😊', date: '2024' },
    { id: 4, url: 'https://picsum.photos/id/64/400/400', caption: 'Petualangan seru 🎒', date: '2024' },
    { id: 5, url: 'https://picsum.photos/id/89/400/400', caption: 'Momen romantis 🌅', date: '2024' },
    { id: 6, url: 'https://picsum.photos/id/96/400/400', caption: 'Kebersamaan yang indah 💑', date: '2024' },
  ];

  const displayPhotos = photos.length > 1 ? photos : placeholderPhotos;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200 py-12">
      <FloatingHearts />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Galeri Kenangan 📸
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Setiap foto menyimpan cerita, setiap cerita menyimpan cinta. 
            Ini adalah potongan-potongan kebahagiaan kita bersama. 💕
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>❤️</span> <span>📸</span> <span>💕</span> <span>🖼️</span> <span>💖</span>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group cursor-pointer animate-fadeInUp"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-700 font-medium">{photo.caption}</p>
                  <p className="text-red-400 text-sm mt-1">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full image */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeInUp"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="max-w-3xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="w-full" />
              <div className="p-6 text-center">
                <p className="text-gray-800 text-lg">{selectedPhoto.caption}</p>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Love note */}
        <div className="text-center mt-12">
          <div className="inline-block glass rounded-full px-8 py-3">
            <p className="text-red-600">💕 Setiap foto adalah bukti cinta kita yang terus tumbuh 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
}