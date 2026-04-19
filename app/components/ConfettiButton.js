'use client';

export default function ConfettiButton({ children, onClick }) {
  const handleClick = async (e) => {
    if (onClick) onClick(e);
    
    // Dynamic import for canvas-confetti
    const confetti = (await import('canvas-confetti')).default;
    
    // Confetti burst
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff0000', '#ff3333', '#ff6666', '#ff9999']
    });
    
    // Multiple bursts
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#e53935', '#ef5350']
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#e53935', '#ef5350']
      });
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-linear-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-red-600 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl"
      style={{animation: 'heartbeat 0.5s ease-in-out infinite'}}
    >
      {children}
    </button>
  );
}