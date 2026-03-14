'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function TestimonialSlider() {
    const sliderRef = useRef(null);
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 3;

    const scrollToSlide = (index) => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${index * 100}%)`;
            setActiveIndex(index);
        }
    };

    const scrollPrev = () => {
        const newIndex = activeIndex === 0 ? totalSlides - 1 : activeIndex - 1;
        scrollToSlide(newIndex);
    };

    const scrollNext = () => {
        const newIndex = (activeIndex + 1) % totalSlides;
        scrollToSlide(newIndex);
    };

    return (
        <>
            <div className="testimonial-slider" ref={sliderRef}>
                <div className="testimonial-track" ref={trackRef}>
                    {/* Testimonial 1 */}
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>“Working with Sarvanu transformed the way we structured our operations. His strategies
                                gave us clarity and boosted our revenue within months.”</p>
                        </div>
                        <div className="testimonial-footer">
                            <Image src="/t1.webp" alt="Client Company Logo" className="client-logo" width={80} height={80} />
                            <div className="client-info">
                                <h3>Pronel Mohanti</h3>
                                <span>Co-Founder, Idealcore Solution LLP</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>“From marketing funnels to business development, the insights were actionable and
                                results-driven. Highly recommend for scaling businesses.”</p>
                        </div>
                        <div className="testimonial-footer">
                            <Image src="/t2.png" alt="Client Company Logo" className="client-logo" width={80} height={80} />
                            <div className="client-info">
                                <h3>Dayan Saradel</h3>
                                <span>CEO, Esoftware Solution LLC</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p>“A true partner in growth. Sarvanu doesn’t just consult—he collaborates. His structured
                                approach helped us scale sustainably.”</p>
                        </div>
                        <div className="testimonial-footer">
                            <Image src="/t3.jpeg" alt="Client Company Logo" className="client-logo" width={80} height={80} />
                            <div className="client-info">
                                <h3>Tarak Das</h3>
                                <span>Founder, Tarak Agro Ventures</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button className="nav prev" onClick={scrollPrev}>‹</button>
                <button className="nav next" onClick={scrollNext}>›</button>
            </div>

            {/* Dots */}
            <div className="dots">
                {[0, 1, 2].map(i => (
                    <button
                        key={i}
                        className={activeIndex === i ? 'active' : ''}
                        onClick={() => scrollToSlide(i)}
                    ></button>
                ))}
            </div>
        </>
    );
}
