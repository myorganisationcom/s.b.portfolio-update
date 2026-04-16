import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { blogContent } from '@/data/blogContent';
import StickyCta from '@/components/StickyCta';
import Image from 'next/image';
import styles from '../blog.module.css';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found | Sarvanu Strategies',
        };
    }

    return {
        title: `${post.title} | Sarvanu Strategies`,
        description: post.description,
        keywords: `business consulting, sarvanu, ${post.category.toLowerCase()}`,
        alternates: {
            canonical: `https://sarvanu.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://sarvanu.com/blog/${post.slug}`,
            images: [{ url: post.image }],
        },
    };
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800';

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    const contentHTML = blogContent[resolvedParams.slug];

    if (!post || !contentHTML) {
        notFound();
    }

    const featuredImage = post.image || FALLBACK_IMAGE;

    return (
        <main className={styles.articleMain}>
            {/* Header Section */}
            <header className={styles.articleHeader}>
                <div className={styles.articleHeaderInner}>
                    <Link href="/blog" className={styles.backLink}>
                        <i className="fas fa-arrow-left"></i> All Articles
                    </Link>
                    <span className={styles.articleCategory}>
                        <i className="fas fa-folder" style={{ marginRight: '6px' }}></i>
                        {post.category}
                    </span>
                    <h1 className={styles.articleTitle}>{post.title}</h1>
                    <p className={styles.articleDescription}>{post.description}</p>
                </div>
            </header>

            {/* Featured Image */}
            <div className={styles.featuredImageWrapper}>
                <div className={styles.featuredImageContainer}>
                    <Image
                        src={featuredImage}
                        alt={post.title}
                        width={1200}
                        height={630}
                        className={styles.featuredImg}
                        priority
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className={styles.articleContainer}>
                <article
                    className={styles.articleBody}
                    dangerouslySetInnerHTML={{ __html: contentHTML }}
                />

                {/* AUTHOR BOX */}
                <div className={styles.authorBox}>
                    <Image src="/your-photo.jpeg" alt="Sarvanu" className={styles.authorImg} width={80} height={80} />
                    <div className={styles.authorInfo}>
                        <h3>Sarvanu</h3>
                        <span className={styles.authorRole}>Business Transformation Strategist</span>
                        <p>Helping founders scale their agencies and service businesses through systems, leadership mindset, and strategic growth. 150+ clients across 6+ countries.</p>
                        <div className={styles.authorSocials}>
                            <a href="https://www.linkedin.com/in/sarvanu-banerjee/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                            <a href="mailto:info@sarvanu.com">
                                <i className="fas fa-envelope"></i> Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* BACK LINK */}
                <div className={styles.bottomBackLink}>
                    <Link href="/blog">
                        &larr; Back to All Articles
                    </Link>
                </div>
            </div>

            <StickyCta />

            {/* BlogPosting Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `https://sarvanu.com/blog/${post.slug}`
                        },
                        "headline": post.title,
                        "description": post.description,
                        "image": featuredImage,
                        "datePublished": post.date ? new Date(post.date).toISOString() : "2025-01-01T00:00:00+05:30",
                        "dateModified": post.date ? new Date(post.date).toISOString() : "2025-01-01T00:00:00+05:30",
                        "articleSection": post.category,
                        "wordCount": contentHTML ? contentHTML.replace(/<[^>]+>/g, '').split(/\s+/).length : 0,
                        "author": {
                            "@type": "Person",
                            "name": "Sarvanu",
                            "url": "https://sarvanu.com",
                            "jobTitle": "Business Management & Operations Consultant"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Sarvanu Strategies",
                            "url": "https://sarvanu.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://sarvanu.com/logo.png",
                                "width": 512,
                                "height": 512
                            }
                        },
                        "isPartOf": {
                            "@type": "Blog",
                            "@id": "https://sarvanu.com/blog",
                            "name": "Business Growth Blog | Sarvanu Strategies"
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
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.title,
                                "item": `https://sarvanu.com/blog/${post.slug}`
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
