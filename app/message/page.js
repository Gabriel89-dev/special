'use client';
import { useState } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import ConfettiButton from '../components/ConfettiButton';

export default function MessagePage() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200 py-12">
      <FloatingHearts />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Special Message 💌
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Tulisan ini aku buat khusus untukmu, dari hati yang paling dalam. 💕
          </p>
        </div>

        {/* Envelope / Letter */}
        {!showFullMessage ? (
          <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
            <div 
              className="glass rounded-3xl p-12 cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setShowFullMessage(true)}
            >
              <div className="text-8xl mb-6 animate-heartbeat">💌</div>
              <h2 className="text-2xl font-bold text-red-700 mb-3">Ada Surat Untukmu</h2>
              <p className="text-gray-600 mb-4">Klik untuk membuka pesan spesial ✨</p>
              <div className="text-red-400 text-sm">💕 Dari: Seseorang yang mencintaimu 💕</div>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto animate-fadeInUp">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-br-full opacity-50" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-100 rounded-tl-full opacity-50" />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">💝</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-red-700">
                    Untuk Kamu yang Tersayang
                  </h2>
                  <div className="w-24 h-1 bg-red-300 mx-auto mt-4 rounded-full" />
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Happy birthday, sayangku! 🎂❤️
                  </p>
                  
                  <p>
                    Hari ini adalah hari yang paling spesial dalam setahun, karena pada hari ini, 
                    orang terbaik di dunia lahir. Aku bersyukur setiap hari karena Tuhan 
                    mempertemukan kita. Kamu adalah hadiah terindah yang pernah aku terima.
                  </p>
                  
                  <p>
                    Setiap hari bersamamu adalah petualangan yang menyenangkan. Senyummu 
                    bisa membuat hari terburukku menjadi cerah. Tawamu adalah musik 
                    terindah yang pernah aku dengar. Dan matamu... matamu adalah bintang 
                    yang selalu memandu jalanku.
                  </p>
                  
                  <p>
                    Aku mencintai caramu tertawa, caramu bicara, caramu marah, dan caramu 
                    mencintaiku. Aku mencintai setiap bagian dirimu, termasuk kekuranganmu, 
                    karena itulah yang membuatmu sempurna di mataku.
                  </p>
                  
                  <p>
                    Di hari ulang tahunmu ini, aku berdoa semoga semua impianmu menjadi 
                    kenyataan. Semoga kita selalu diberi kesehatan dan kebahagiaan. 
                    Semoga cinta kita terus tumbuh dan berkembang setiap harinya.
                  </p>
                  
                  <div className="bg-red-50 rounded-xl p-6 my-6 text-center">
                    <p className="text-red-600 text-xl italic">
                      &quot;Aku tidak butuh bintang di langit, karena aku sudah 
                      memiliki bintang di hatiku. Dan bintang itu adalah kamu.&quot;
                    </p>
                    <p className="text-red-400 mt-3">— Untukmu, satu-satunya</p>
                  </div>
                  
                  <p>
                    Terima kasih untuk semua kenangan indah yang sudah kita buat bersama. 
                    Terima kasih untuk setiap pelukan hangat, setiap tawa bahagia, 
                    dan setiap air mata yang kita bagi bersama.
                  </p>
                  
                  <p className="font-bold text-red-600 text-center text-xl mt-8">
                    I Love You More Than Words Can Say! 💕
                  </p>
                  
                  <p className="text-center mt-8">
                    Forever yours,<br />
                    <span className="text-red-600 font-bold text-lg">[Nama Kamu] 💝</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 mt-8 text-3xl">
                  <span className="animate-heartbeat">❤️</span>
                  <span className="animate-heartbeat" style={{animationDelay: '0.2s'}}>💕</span>
                  <span className="animate-heartbeat" style={{animationDelay: '0.4s'}}>💗</span>
                </div>

                <div className="text-center mt-8">
                  <ConfettiButton onClick={() => setShowFullMessage(false)}>
                    Tutup Pesan 💌
                  </ConfettiButton>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative footer */}
        <div className="text-center mt-12">
          <div className="inline-block glass rounded-full px-8 py-3">
            <p className="text-red-600">💕 Dengan segenap cinta dari hatiku untukmu 💕</p>
          </div>
        </div>
      </div>
    </div>
  );
}