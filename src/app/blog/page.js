import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
    openGraph: {
        title: 'Business Insights | Sarvanu Banerjee',
        description: 'Expert insights on business strategy and scaling.',
        url: 'https://sarvanu.com/blog',
        type: 'website',
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
                        "@type": "Person",
                        "name": "Sarvanu Banerjee",
                        "url": "https://sarvanu.com",
                        "jobTitle": "Business Consultant",
                        "sameAs": [
                            "https://www.linkedin.com/in/sarvanu-banerjee",
                            "https://www.instagram.com/sarvanu_banerjee/",
                            "https://www.facebook.com/sarvanu.banerjee"
                        ],
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Sarvanu Consulting",
                            "url": "https://sarvanu.com"
                        }
                    })
                }}
            />
        </>
    );
}
