'use client';
import { useState, useRef } from 'react';
import FloatingHearts from '../components/FloatingHearts';

export default function MusicPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  // Ganti dengan lagu kesukaan pacar kamu
  const songs = [
    {
      id: 1,
      title: 'Lagu Spesial Untukmu',
      artist: 'Artist Name',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      cover: 'https://picsum.photos/id/167/200/200',
      message: 'Lagu ini selalu mengingatkanku padamu 💕'
    },
    {
      id: 2,
      title: 'Lagu Kenangan Kita',
      artist: 'Artist Name',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      cover: 'https://picsum.photos/id/169/200/200',
      message: 'Setiap nada bercerita tentang kita 🎵'
    },
    {
      id: 3,
      title: 'Melodi Cinta',
      artist: 'Artist Name',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      cover: 'https://picsum.photos/id/174/200/200',
      message: 'Untukmu yang selalu di hati 💖'
    },
  ];

  const playSong = (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentSong(song);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-red-100 to-red-200 py-12">
      <FloatingHearts />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            Lagu Kesukaanmu 🎵
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Lagu-lagu yang menemani hari-hari kita, menjadi saksi bisu 
            setiap tawa dan cinta yang kita bagikan. 💕
          </p>
          <div className="flex justify-center gap-2 mt-4 text-2xl">
            <span>🎼</span> <span>🎵</span> <span>🎶</span> <span>🎹</span> <span>🎸</span>
          </div>
        </div>

        {/* Currently Playing */}
        {currentSong && (
          <div className="max-w-2xl mx-auto mb-8 animate-fadeInUp">
            <div className="glass rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-6">
                <img
                  src={currentSong.cover}
                  alt={currentSong.title}
                  className="w-20 h-20 rounded-full object-cover animate-spin-slow"
                  style={{animationPlayState: isPlaying ? 'running' : 'paused'}}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-700">{currentSong.title}</h3>
                  <p className="text-gray-600">{currentSong.artist}</p>
                  <div className="mt-2">
                    <button
                      onClick={togglePlay}
                      className="text-3xl hover:scale-110 transition"
                    >
                      {isPlaying ? '⏸️' : '▶️'}
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-red-500 text-center mt-4 italic">{currentSong.message}</p>
            </div>
          </div>
        )}

        {/* Song List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className="bg-white rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer animate-fadeInUp"
              style={{animationDelay: `${0.1 * index}s`}}
              onClick={() => playSong(song)}
            >
              <div className="relative">
                <img
                  src={song.cover}
                  alt={song.title}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover hover:animate-spin-slow transition-all"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                  <div className="bg-black/50 rounded-full p-3 text-4xl">▶️</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-red-700 mb-1">{song.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{song.artist}</p>
              <p className="text-gray-600 text-sm">{song.message}</p>
            </div>
          ))}
        </div>

        {/* Hidden audio element */}
        {currentSong && (
          <audio
            ref={audioRef}
            src={currentSong.url}
            onEnded={() => setIsPlaying(false)}
            autoPlay
          />
        )}

        {/* Quote */}
        <div className="text-center mt-12">
          <div className="inline-block glass rounded-full px-8 py-3">
            <p className="text-red-600">🎵 "Music is the soundtrack of our love story" 🎵</p>
          </div>
        </div>
      </div>
    </div>
  );
}