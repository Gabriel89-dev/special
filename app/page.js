'use client';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const audioRef = useRef(null);
    const [youtubePlayer, setYoutubePlayer] = useState(null);

     // Auto play YouTube when page loads
  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player('youtube-auto-player', {
        height: '0',
        width: '0',
        videoId: 'izVwViYWJso?si=OeiyrNM0WV6MSlh2', // ID video YouTube
        playerVars: {
          'autoplay': 1,
          'loop': 1,
          'controls': 0,
          'disablekb': 1,
          'modestbranding': 1,
          'rel': 0,
          'showinfo': 0
            
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Loop
            }
          }
        }
      });
      setYoutubePlayer(player);
    };
  }, []);

  

  // Floating hearts effect
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 30;
      const duration = 3 + Math.random() * 4;
      
      setFloatingHearts(prev => [...prev, { id, left, size, duration }]);
      
      setTimeout(() => {
        setFloatingHearts(prev => prev.filter(heart => heart.id !== id));
      }, duration * 1000);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const songs = [
    { id: 1, title: 'Lagu Spesial Untukmu', artist: 'Untuk Pacar Tersayang', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', emoji: '🎵' },
    { id: 2, title: 'Melodi Cinta Kita', artist: 'Special For You', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', emoji: '🎶' },
    { id: 3, title: 'Bahagia Bersamamu', artist: 'Love Song', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', emoji: '🎹' },
  ];

  // BANYAK FOTO UNTUK HALAMAN KEDUA (things you get when you turn)
  const memoriesPhotos = [
    { id: 1, url: '/images/motion_photo_7052348533607391035.jpg', caption: '' },
    { id: 2, url: '/images/1.jpg', caption: '' },
    { id: 3, url: '/images/2.jpg', caption: '' },
    { id: 4, url: '/images/3.jpg', caption: '' },
    { id: 5, url: '/images/4.jpg', caption: '' },
    { id: 6, url: '/images/5.jpg', caption: '' },
    { id: 7, url: '/images/6.jpg', caption: '' },
    { id: 8, url: '/images/7.jpg', caption: '' },
    { id: 9, url: '/images/8.jpg', caption: '' },
    { id: 10, url: '/images/9.jpg', caption: '' },
    { id: 11, url: '/images/10.jpg', caption: '' },
    { id: 12, url: '/images/11.jpg', caption: '' },
    { id: 13, url: '/images/22.jpg', caption: '' },
    { id: 14, url: '/images/33.jpg', caption: '' },
    { id: 15, url: '/images/44.jpg', caption: '' },
    { id: 16, url: '/images/55.jpg', caption: '' },
    { id: 17, url: '/images/66.jpg', caption: '' },
    { id: 18, url: '/images/88.jpg', caption: '' },
  ];

  const photos = [
    { id: 1, url: 'https://picsum.photos/id/20/400/400', caption: 'Momen pertama kita bertemu 💕' },
    { id: 2, url: 'https://picsum.photos/id/26/400/400', caption: 'Liburan bersama 🏖️' },
    { id: 3, url: 'https://picsum.photos/id/30/400/400', caption: 'Saat kita tersenyum bersama 😊' },
    { id: 4, url: 'https://picsum.photos/id/64/400/400', caption: 'Petualangan seru 🎒' },
    { id: 5, url: 'https://picsum.photos/id/89/400/400', caption: 'Momen romantis 🌅' },
    { id: 6, url: 'https://picsum.photos/id/96/400/400', caption: 'Kebersamaan yang indah 💑' },
  ];

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentSong(song);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) audioRef.current.play();
    }, 100);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="relative"
      style={{
        backgroundImage: 'url("/images/Princess.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Floating Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.left}%`,
              bottom: '-50px',
              fontSize: `${heart.size}px`,
              animation: `float ${heart.duration}s ease-in-out infinite`,
              opacity: 0.5
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Konten utama */}
      <div className="relative z-10">
        
        {/* ========== SECTION 1: HERO / WELCOME ========== */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-1 drop-shadow-lg tracking-wider"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                letterSpacing: '0.15em'
              }}
            >
              HAPPY
            </h1>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-lg tracking-wide"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
                letterSpacing: '0.1em'
              }}
            >
              BIRTHDAY!
            </h1>
            
            <div className="w-24 h-0.5 bg-white/50 mx-auto my-6 rounded-full"></div>
            
            <p 
              className="text-white text-xl md:text-2xl drop-shadow-lg italic"
              style={{
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Happy birthday to the best person in my life! 💕
            </p>
            
            <div className="flex justify-center gap-4 text-3xl mt-10">

            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-white text-2xl"></div>
          </div>
        </section>

        {/* ========== SECTION 2: THINGS YOU GET WHEN YOU TURN dengan BANYAK FOTO ========== */}
        <section className="min-h-screen py-20 px-4 relative overflow-hidden">
          {/* Background dengan efek zoom/gerak */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/images/IMG_20260216_162610.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: 'zoomSlow 20s ease-in-out infinite'
            }}
          ></div>
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          
          <div className="relative z-10">
            {/* Teks things you get when you turn */}
            <div className="text-center mb-12">
              <h2 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg tracking-wide animate-fadeInUp"
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  letterSpacing: '0.1em'
                }}
              >
                Happy
              </h2>
              
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-light text-white/90 mb-6 drop-shadow-lg animate-fadeInUp"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  animationDelay: '0.2s'
                }}
              >
                 18th Birthdayy
              </h2>

              
              <div className="w-32 h-0.5 bg-white/50 mx-auto my-8 rounded-full animate-fadeInUp" style={{animationDelay: '0.6s'}}></div>
            </div>

            {/* BANYAK FOTO - GRID GALERI */}
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {memoriesPhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group cursor-pointer animate-fadeInUp"
                    style={{animationDelay: `${0.03 * index}s`}}
                    onClick={() => setSelectedPhoto(photo)}
                  >
                    <div className="relative overflow-hidden rounded-xl aspect-square bg-white/10 backdrop-blur-sm">
                      <img 
                        src={photo.url} 
                        alt={photo.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                        <p className="text-white text-xs text-center font-medium">{photo.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Keterangan jumlah foto */}
              <div className="text-center mt-8">
                <p className="text-white/80 text-sm">
                   {memoriesPhotos.length} foto pacar akuuu yang cantik bangeet kaya bidadarii sebenernya banyak sihh fotonya, cuman tidak muaat.TAPIII FOTO PACAR AKU SEMUANYA CANTIIIK 
                </p>
              </div>
            </div>
          </div>
        </section>

 

{/* ========== SECTION 4: LAGU KESUKAAN ========== */}
<section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <div className="text-5xl mb-2 animate-heartbeat inline-block"></div>
      <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">This song is for you</h2>
      <div className="w-24 h-1 bg-red-400 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* LEFT - YouTube */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed//fldKt9IIUyU?si=L8ubC1Xp8h_N0Naa"
            title="YouTube player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-3 bg-red-600">
          <p className="text-white text-center font-medium">Made In Japan</p>
        </div>
      </div>

      {/* RIGHT - Message */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl"></span>
        </div>
        
        <div className="space-y-3 text-gray-600">
          <p>Sayang,</p>
          <p>this song always reminds me of you, and I’ve come to love this song because of you. and You’re truly so special to me. I’m the luckiest person to have met you. I’m so grateful to be your girlfriend; I’ve learned so much. And lastly, you’re sooo beautiful, I swear! I want to tell Mom, “Thank you for sending down an angel like youuuu.</p>
          <div className="bg-pink-50 p-3 rounded-lg my-3">
            <p className="text-red-500 italic text-center text-sm">"You are my favorite singer"</p>
          </div>
          <p>I love you soooo muchhh, and i will love u foreverr💕</p>
        </div>
        
        <div className="mt-4 pt-3 text-center text-gray-400 text-xs border-t">
          💕 For you, with love 💕
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ========== SECTION 5: SPECIAL MESSAGE ========== */}
        <section className="py-20 px-4 bg-white/80 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-5xl mb-2 animate-heartbeat inline-block">💌</div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">special message</h2>
              <div className="w-24 h-1 bg-red-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {!showMessage ? (
              <div 
                className="bg-white rounded-3xl p-12 text-center cursor-pointer hover:scale-105 transition-all duration-300 shadow-xl group"
                onClick={() => setShowMessage(true)}
              >
                <div className="text-8xl mb-4 animate-bounce group-hover:animate-heartbeat">💌</div>
                <p className="text-gray-600 text-lg">Click to open the special message ✨</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-br-full opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-red-100 rounded-tl-full opacity-50"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-4 animate-heartbeat">💝</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">For My Princess</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>Happy birthday, sayangku! 🎂❤️</p>
                    <p>Akuu mau bilangg selamat ulang tahun ya sayaang,panjang umur,sehat selaluu, banggaiin pappa mama dan orang orang yang kamu sayaang. di hari ulangg tahun kamuu inii yang 18 semoga kamuu bisa jadi pribadi yang lebii baikk ya sayaang kita belajar bareng barenng, kita suda semakiin dewasaa dan kita haruus bisaa belajar mengendalikan emosi kitaaa, stress kitaa dan semua itu yang menghalang kita buatt makin berkembangg oteyyy, Akuu yakiiin kamu pasti bisa jadi dokter impiaan papa mama dan akuuu. Aku akan selalu jadi supporter kamuu yang terdepan buat dukung kamuu dalam hal apapunn dan aku akan selalu bangga dengan kerja keras kamu yang sudah kamuu lakukann. SELAMAAT ULANG TAHUUN YA SAYANGKUUU. I LOVEEE U MOREE, I LOVE U THE MOST, I LOVE U EVERYDAYYY AND FOREVEEER SAYAAANG..</p>
                    <p>Teruuus aku harapp semoga kita bisa barengg barengg teruuus yahh, kalua ada apa apaa kita bisa selesainn bareng barenggg. akuu bener bener sayaang banget sama kamuu.Tetapp jadi fav person yang akuu kenal ya sayangkuuu cintaaa. akuu gamau kehilangaan kamuuu huhuhu.aku mauu bareng bareng terus sama kamu kalua bisa selamanya sama kamuuu.</p>
                    <p>Di hari spesial ini, aku berdoa semoga semua impian sayaang bisa dicapaii dann, jangan lupa berdoa oteyyy.kita harus andaliin tuhan dalam setiap langkah kita ya sayaang.</p>
                    <div className="bg-red-50 rounded-xl p-6 my-6">
                      <p className="text-red-600 text-xl italic">"I thank my God every time I remember you."</p>
                      <p className="text-red-600 text-xl italic">Philippians 1:3</p>
                    </div>
                    <p className="font-bold text-red-600 text-xl mt-6">I Love You Forever! 💕</p>
                    <p className="mt-4 text-gray-500">- iel -</p>
                  </div>
                  <button 
                    className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition hover:scale-105"
                    onClick={() => setShowMessage(false)}
                  >
                    Tutup Pesan
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========== SECTION 6: FOOTER ========== */}
        <section className="py-20 px-4 bg-red-700/90 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4 animate-heartbeat"></div>
            <p className="text-white text-xl md:text-2xl mb-4 font-light">Thank you for being the most wonderful part of my life</p>
            <p className="text-white/80">With all my heart,</p>
            <p className="text-white font-bold text-xl mt-2"> ur beloved boyfriend iel</p>
            <div className="flex justify-center gap-4 text-3xl mt-8">
              <span className="animate-float">❤️</span>
              <span className="animate-float" style={{animationDelay: '0.2s'}}>💕</span>
              <span className="animate-float" style={{animationDelay: '0.4s'}}>💖</span>
              <span className="animate-float" style={{animationDelay: '0.6s'}}>💗</span>
              <span className="animate-float" style={{animationDelay: '0.8s'}}>❤️</span>
            </div>
            <p className="text-white/60 text-sm mt-8">© 2026 - For my princess belle</p>
          </div>
        </section>

        {/* MODAL FOR PHOTO */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden animate-float" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPhoto.url} alt={selectedPhoto.caption} className="w-full" />
              <div className="p-6 text-center">
                <p className="text-gray-800 text-lg">{selectedPhoto.caption}</p>
                <button 
                  className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition hover:scale-105"
                  onClick={() => setSelectedPhoto(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FLOATING MUSIC BUTTON */}
        <div className="fixed bottom-4 right-4 z-40">
          <button 
            className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:scale-110 transition-all duration-300 group"
            onClick={() => {
              if (currentSong) {
                togglePlay();
              } else {
                playSong(songs[0]);
              }
            }}
          >
            <span className="text-2xl group-hover:animate-heartbeat">{isPlaying ? '⏸️' : '▶️'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}