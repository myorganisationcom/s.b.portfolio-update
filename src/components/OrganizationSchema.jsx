import Script from 'next/script';

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sarvanu Strategies",
        "url": "https://sarvanu.com",
        "logo": "https://sarvanu.com/logo.png",
        "description": "Business growth consulting, SaaS implementation, and strategic systems for founders, startups, and MSMEs.",
        "founder": {
            "@type": "Person",
            "name": "Sarvanu",
            "jobTitle": "Business Management & Operations Consultant",
            "url": "https://sarvanu.com"
        },
        "sameAs": [
            "https://www.linkedin.com/in/sarvanu",
            "https://www.instagram.com/sarvanu/",
            "https://www.facebook.com/sarvanu"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8700541657",
            "contactType": "customer support",
            "email": "sarvanu@gmail.com",
            "availableLanguage": ["English", "Hindi"]
        }
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
