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

    const toggleDropdown = (e) => {
        if (window.innerWidth <= 900) {
            e.currentTarget.classList.toggle('mobile-open');
        }
    };

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
                    
                    {/* Services Dropdown */}
                    <li className="nav-dropdown" onClick={toggleDropdown}>
                        <div className="nav-dropdown-btn">
                            Services <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                        </div>
                        <ul className="nav-dropdown-menu">
                            <li><Link href="/services/business-strategy" onClick={closeMenu}>Business Strategy</Link></li>
                            <li><Link href="/services/operations" onClick={closeMenu}>Operations & Workflow</Link></li>
                            <li><Link href="/services/marketing" onClick={closeMenu}>Marketing Strategy</Link></li>
                            <li><Link href="/services/b2b-lead-gen" onClick={closeMenu}>B2B Lead Generation</Link></li>
                            <li><Link href="/services/funnel-crm" onClick={closeMenu}>Funnel & CRM Setup</Link></li>
                        </ul>
                    </li>

                    {/* Who We Help Dropdown */}
                    <li className="nav-dropdown" onClick={toggleDropdown}>
                        <div className="nav-dropdown-btn">
                            Who We Help <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                        </div>
                        <ul className="nav-dropdown-menu">
                            <li><Link href="/startups" onClick={closeMenu}>Startups</Link></li>
                            <li><Link href="/small-business" onClick={closeMenu}>Small Businesses</Link></li>
                            <li><Link href="/scaling" onClick={closeMenu}>Scaling Businesses</Link></li>
                            <li><Link href="/who-its-for" onClick={closeMenu}>Is This For You?</Link></li>
                        </ul>
                    </li>

                    {/* Authority Dropdown */}
                    <li className="nav-dropdown" onClick={toggleDropdown}>
                        <div className="nav-dropdown-btn">
                            Authority <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                        </div>
                        <ul className="nav-dropdown-menu">
                            <li><Link href="/how-we-work" onClick={closeMenu}>How We Work</Link></li>
                            <li><Link href="/business-systems" onClick={closeMenu}>Business Systems Explained</Link></li>
                            <li><Link href="/problems-we-solve" onClick={closeMenu}>Problems We Solve</Link></li>
                            <li><Link href="/why-choose-us" onClick={closeMenu}>Why Choose Us</Link></li>
                        </ul>
                    </li>

                    {/* Resources Dropdown */}
                    <li className="nav-dropdown" onClick={toggleDropdown}>
                        <div className="nav-dropdown-btn">
                            Company <i className="fas fa-chevron-down" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
                        </div>
                        <ul className="nav-dropdown-menu">
                            <li><Link href="/pricing" onClick={closeMenu}>Pricing</Link></li>
                            <li><Link href="/case-studies" onClick={closeMenu}>Case Studies & Proof</Link></li>
                            <li><Link href="/roi" onClick={closeMenu}>ROI Perspective</Link></li>
                            <li><Link href="/faq" onClick={closeMenu}>FAQ</Link></li>
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
