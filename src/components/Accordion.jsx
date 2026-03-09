'use client';

import { useState } from 'react';

export default function ServicesAccordion({ title, subtitle, children, defaultOpen = false }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <>
            <button
                className={`accordion ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>
            <div className={`panel ${isOpen ? 'open' : ''}`}>
                {subtitle && (
                    <h3 className="panel-subtitle">{subtitle}</h3>
                )}
                {children}
            </div>
        </>
    );
}
