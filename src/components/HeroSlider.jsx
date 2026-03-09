'use client';

import { useState, useEffect } from 'react';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/hero4.png', '/hero3.png', '/hero1.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-slide every 4s

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={
              i === 0
                ? 'Business Strategy Consulting'
                : i === 1
                ? 'Growth Planning Session'
                : 'Team Building Workshop'
            }
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(i)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </div>
  );
}
