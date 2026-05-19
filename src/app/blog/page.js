import Link from 'next/link';
import Image from 'next/image';
import { getAllPublishedPosts } from '@/server/repositories/blogs';
import styles from './blog.module.css';

export const dynamic = 'force-dynamic';   // always SSR — read latest posts from DB

export const metadata = {
    title: "Business Growth Blog | Sarvanu",
    description: "Actionable strategies for founders and MSMEs to scale their businesses.",
    openGraph: {
        title: 'Business Growth Blog | Sarvanu',
        description: 'Actionable strategies for founders and MSMEs to scale their businesses.',
        url: 'https://sarvanu.com/blog',
        type: 'website',
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Sarvanu Blog",
            },
        ],
    },
    twitter: {
        title: 'Business Growth Blog | Sarvanu',
        description: 'Actionable strategies for founders and MSMEs to scale their businesses.',
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/blog",
    },
};

export default async function BlogListing() {
    const blogPosts = await getAllPublishedPosts();

    return (
        <>
            <section className={styles.blogHero}>
                <h1>Insights &amp; Articles</h1>
                <p>Strategies, frameworks, and hard truths about scaling your business.</p>
            </section>

            <div className={styles.blogContainer}>
                <div className={styles.blogGrid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.blogCard}>
                            <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageOverlay}></div>
                                    {post.image ? (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className={styles.blogFeaturedImage}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1a1a2e, #16213e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                                            {post.icon || '📝'}
                                        </div>
                                    )}
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

            {/* Blog Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Business Growth Blog | Sarvanu",
                        "description": "Insights, articles, and strategies for founders and MSMEs on scaling operations, optimizing marketing, and driving revenue growth.",
                        "url": "https://sarvanu.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Sarvanu",
                            "url": "https://sarvanu.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://sarvanu.com/logo.png"
                            }
                        },
                        "mainEntity": {
                            "@type": "ItemList",
                            "itemListElement": blogPosts.map((post, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "url": `https://sarvanu.com/blog/${post.slug}`,
                                "name": post.title,
                                "image": post.image,
                                "description": post.description
                            }))
                        }
                    })
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://sarvanu.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://sarvanu.com/blog"
                            }
                        ]
                    })
                }}
            />
        </>
    );
}
