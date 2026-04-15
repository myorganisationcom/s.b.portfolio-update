import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogPosts';
import styles from './blog.module.css';

export const metadata = {
    title: "Business Growth Blog | Sarvanu Strategies",
    description: "Actionable strategies for founders and MSMEs to scale their businesses.",
    openGraph: {
        title: 'Business Growth Blog | Sarvanu Strategies',
        description: 'Actionable strategies for founders and MSMEs to scale their businesses.',
        url: 'https://sarvanu.com/blog',
        type: 'website',
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sarvanu Strategies Blog",
            },
        ],
    },
    twitter: {
        title: 'Business Growth Blog | Sarvanu Strategies',
        description: 'Actionable strategies for founders and MSMEs to scale their businesses.',
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/blog",
    },
};

export default function BlogListing() {
    return (
        <>
            <section className={styles.blogHero}>
                <h1>Insights & Articles</h1>
                <p>Strategies, frameworks, and hard truths about scaling your business.</p>
            </section>

            <div className={styles.blogContainer}>
                <div className={styles.blogGrid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.blogCard}>
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageOverlay}></div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className={styles.blogFeaturedImage}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.categoryBadge}>{post.category}</div>
                                </div>
                                <div className={styles.blogContent}>
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                    <span className={styles.readMore}>
                                        Read Article &rarr;
                                    </span>
                                </div>
                            </Link>
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
                        "name": "Business Growth Blog | Sarvanu Strategies",
                        "description": "Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.",
                        "url": "https://sarvanu.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Sarvanu Strategies",
                            "url": "https://sarvanu.com"
                        }
                    })
                }}
            />
        </>
    );
}
