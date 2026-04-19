'use client';
import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    let intervalId;
    
    // Function to add heart
    const addHeart = () => {
      const id = Date.now() + Math.random();
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 30;
      const duration = 3 + Math.random() * 4;

      setHearts(prev => [...prev, { id, left, size, duration }]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== id));
      }, duration * 1000);
    };

    // Start adding hearts
    intervalId = setInterval(addHeart, 800);

    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []); // Empty dependency array - no state in effect body

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s ease-in-out infinite`,
            opacity: 0.7
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}