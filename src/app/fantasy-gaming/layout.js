export const metadata = {
    title: "Fantasy Gaming Platform Development | Build Your Own Dream11/1xBet | Sarvanu",
    description:
        "We build custom Fantasy Gaming Platforms — Cricket, Football, Multi-Sport. Sportsbook, Betting, White-Label solutions. Android + iOS + Web. Launch in 4-6 weeks. 30+ platforms delivered.",
    keywords:
        "fantasy gaming platform development, build fantasy cricket app, dream11 clone, 1xbet clone, fantasy sports software, sportsbook software provider, white label sportsbook, fantasy gaming app development India, betting platform development",
    openGraph: {
        title: "Fantasy Gaming Platform Development | Sarvanu",
        description: "We Build the Platform. You Own the Action. Custom Fantasy Sports & Sportsbook development for operators and entrepreneurs.",
        url: "https://sarvanu.com/fantasy-gaming",
        type: "website",
    },
    alternates: {
        canonical: "https://sarvanu.com/fantasy-gaming",
    },
};

export default function FantasyGamingLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Fantasy Gaming Platform Development",
        "operatingSystem": "Web, Android, iOS",
        "applicationCategory": "GameApplication",
        "about": "Custom Fantasy Sports and Sportsbook Betting Platform Development",
        "provider": {
            "@type": "Organization",
            "name": "Sarvanu",
            "url": "https://sarvanu.com"
        },
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "lowPrice": "250000",
            "offerCount": "3"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "34"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
