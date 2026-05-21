'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            text: "Working with Sarvanu.com transformed the way we structured our operations. Their strategies gave us clarity and boosted our revenue within months.",
            name: "Pronel Mohanti",
            role: "Co-Founder, Idealcore Solution LLP",
            img: "/t1.webp"
        },
        {
            text: "From marketing funnels to business development, the insights were actionable and results-driven. Highly recommend for scaling businesses.",
            name: "Dayan Saradel",
            role: "CEO, Esoftware Solution LLC",
            img: "/t2.png"
        },
        {
            text: "A true partner in growth. Sarvanu.com doesn’t just consult—they collaborate. Their structured approach helped us scale sustainably.",
            name: "Tarak Das",
            role: "Founder, Tarak Agro Ventures",
            img: "/t3.jpeg"
        },
        {
            text: "We were stuck in our growth phase for over a year. The strategic audit and subsequent roadmap completely shifted our trajectory. Unparalleled clarity.",
            name: "Amit Sharma",
            role: "Director, Innovate Tech Solutions",
            img: "/t1.webp"
        },
        {
            text: "The operational workflows introduced by Sarvanu.com saved us countless hours. We now have a predictable, scalable system in place.",
            name: "Sarah Jenkins",
            role: "Operations Head, Global Retail Inc.",
            img: "/t2.png"
        }
    ];

    const changeSlide = (index) => {
        if (isAnimating || index === activeIndex) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const nextSlide = () => changeSlide((activeIndex + 1) % testimonials.length);
    const prevSlide = () => changeSlide((activeIndex - 1 + testimonials.length) % testimonials.length);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const current = testimonials[activeIndex];

    return (
        <div className="premium-testimonial-container">
            <div className="premium-testimonial-card">
                <i className="fas fa-quote-left quote-icon-large"></i>
                
                <div className={`testimonial-fade ${isAnimating ? 'fading' : ''}`}>
                    <p className="premium-quote-text">"{current.text}"</p>
                    
                    <div className="premium-client-info">
                        <div className="client-avatar-wrapper">
                            <Image src={current.img} alt={current.name} width={60} height={60} className="client-avatar" />
                            <div className="avatar-glow"></div>
                        </div>
                        <div className="client-details">
                            <h4>{current.name}</h4>
                            <span>{current.role}</span>
                        </div>
                    </div>
                </div>

                <div className="testimonial-controls">
                    <button className="ctrl-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                    <div className="testimonial-dots">
                        {testimonials.map((_, i) => (
                            <span 
                                key={i} 
                                className={`dot ${i === activeIndex ? 'active' : ''}`}
                                onClick={() => changeSlide(i)}
                            ></span>
                        ))}
                    </div>
                    <button className="ctrl-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    );
}
