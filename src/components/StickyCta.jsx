'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyCta() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="sticky-cta-bottom"
            style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
                transition: 'transform 0.3s ease-in-out'
            }}
        >
            <div className="sticky-cta-text">Ready to scale your business? Let's build a strategy.</div>
            <Link href="/book" className="sticky-cta-btn">Scale Now</Link>
        </div>
    );
}
