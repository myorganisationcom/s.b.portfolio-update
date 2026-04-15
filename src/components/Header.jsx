'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const isCurrent = (path) => pathname === path;

    return (
        <header id="main-header" className={scrolled ? 'scrolled' : ''}>
            <nav className="navbar">
                {/* Logo */}
                <div className="logo">
                    <Link href="/" className="logo-link" onClick={closeMenu}>
                        <div className="logo-text-wrapper">
                            <span className="logo-primary">Sarvanu</span>
                        </div>
                        <span className="logo-tag">Strategies</span>
                    </Link>
                </div>

                {/* Hamburger */}
                <div
                    className={`menu-toggle ${menuActive ? 'active' : ''}`}
                    id="menu-toggle"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Nav Links */}
                <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="nav-links">
                    <li>
                        <Link href="/" onClick={closeMenu} className={isCurrent('/') ? 'active' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link href="/#services" onClick={closeMenu}>Services</Link>
                    </li>
                    <li>
                        <Link href="/saas" onClick={closeMenu} className={isCurrent('/saas') ? 'active' : ''}>SaaS & AI</Link>
                    </li>
                    <li>
                        <Link href="/ai-agent-service" onClick={closeMenu} className={isCurrent('/ai-agent-service') ? 'active' : ''}>AI Agents</Link>
                    </li>

                    {/* Dropdown Menu */}
                    <li className="nav-dropdown" onClick={(e) => {
                        // Toggle dropdown on mobile only via CSS logic with class toggle
                        // Let's use a simple inline state or just hover for desktop, tap for mobile.
                        if (window.innerWidth <= 900) {
                            e.currentTarget.classList.toggle('mobile-open');
                        }
                    }}>
                        <div className="nav-dropdown-btn">
                            Company <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                        </div>
                        <ul className="nav-dropdown-menu">
                            <li>
                                <Link href="/case-studies" onClick={closeMenu} className={isCurrent('/case-studies') ? 'active' : ''}>Case Studies</Link>
                            </li>
                            <li>
                                <Link href="/blog" onClick={closeMenu} className={isCurrent('/blog') ? 'active' : ''}>Blog</Link>
                            </li>
                            <li>
                                <Link href="/press" onClick={closeMenu} className={isCurrent('/press') ? 'active' : ''}>Press</Link>
                            </li>
                            <li>
                                <Link href="/resources" onClick={closeMenu} className={isCurrent('/resources') ? 'active' : ''}>Resources</Link>
                            </li>
                            <li>
                                <Link href="/faq" onClick={closeMenu} className={isCurrent('/faq') ? 'active' : ''}>FAQ</Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link href="/book" onClick={closeMenu} className="cta-btn glow-btn">
                            <i className="fas fa-calendar-alt"></i> Book a Call
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
