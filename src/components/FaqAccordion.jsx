'use client';

import { useState } from 'react';

export default function FaqAccordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'active' : ''}`}>
            <div
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer' }}
            >
                <span>{question}</span>
                <span className="icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    {typeof answer === 'string' ? <p dangerouslySetInnerHTML={{ __html: answer }}></p> : answer}
                </div>
            )}
        </div>
    );
}
