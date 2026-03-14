import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
    title: "Business Growth Blog | Sarvanu Banerjee Strategies",
    description: "Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.",
    openGraph: {
        title: 'Business Growth Blog | Sarvanu Banerjee Strategies',
        description: 'Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.',
        url: 'https://sarvanu.com/blog',
        type: 'website',
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sarvanu Banerjee Strategies Blog",
            },
        ],
    },
    twitter: {
        title: 'Business Growth Blog | Sarvanu Banerjee Strategies',
        description: 'Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.',
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/blog",
    },
};

export default function BlogListing() {
    return (
        <>
            <section className="blog-hero">
                <h1>Insights & Articles</h1>
                <p>Strategies, frameworks, and hard truths about scaling your business.</p>
            </section>

            <div className="blog-container">
                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image">{post.icon}</div>
                            <div className="blog-content">
                                <div className="blog-meta">{post.category}</div>
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <Link href={`/blog/${post.slug}`} className="read-more">
                                    Read Article →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Business Growth Blog | Sarvanu Banerjee Strategies",
                        "description": "Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.",
                        "url": "https://sarvanu.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Sarvanu Banerjee Strategies",
                            "url": "https://sarvanu.com"
                        }
                    })
                }}
            />
        </>
    );
}
