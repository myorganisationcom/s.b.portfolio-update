export const metadata = {
    title: "Book a Strategy Call | Sarvanu",
    description: "Schedule a 10-15 minute discovery session with Sarvanu to identify your growth bottlenecks and roadmap your success.",
    openGraph: {
        title: "Book a Strategy Call | Sarvanu",
        description: "Schedule a 10-15 minute discovery session with Sarvanu to identify your growth bottlenecks and roadmap your success.",
        url: "https://sarvanu.com/book",
        images: ["/og-image.png"],
    },
    twitter: {
        title: "Book a Strategy Call | Sarvanu",
        description: "Schedule a 10-15 minute discovery session with Sarvanu to identify your growth bottlenecks.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/book",
    },
};

export default function BookLayout({ children }) {
    return <>{children}</>;
}
