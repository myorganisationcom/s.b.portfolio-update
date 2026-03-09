'use client';

import { useEffect, useRef, useState } from 'react';

export default function FadeIn({ children, direction = 'up', className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  let animationClass = 'fade-in';
  if (direction === 'left') animationClass = 'fade-left';
  if (direction === 'right') animationClass = 'fade-right';

  return (
    <div
      ref={domRef}
      className={`${animationClass} ${isVisible ? 'show' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
