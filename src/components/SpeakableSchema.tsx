import React from 'react';

interface SpeakableSchemaProps {
    url: string;
    headline?: string;
    cssSelectors: string[];
}

/**
 * SpeakableSchema component for voice search optimization (Alexa, Siri, Google Assistant)
 * Used to identify sections of an article or webpage that are most appropriate for text-to-speech playback.
 */
export default function SpeakableSchema({ url, headline, cssSelectors }: SpeakableSchemaProps) {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "WebPage",
        "name": headline,
        "url": url,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": cssSelectors
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
