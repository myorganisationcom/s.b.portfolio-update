import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { blogContent } from '@/data/blogContent';
import StickyCta from '@/components/StickyCta';

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
            title: 'Post Not Found | Sarvanu Banerjee Strategies',
        };
    }

    return {
        title: `${post.title} | Sarvanu Banerjee Strategies`,
        description: post.description,
        keywords: `business consulting, sarvanu banerjee, ${post.category.toLowerCase()}`,
        alternates: {
            canonical: `https://sarvanu.com/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://sarvanu.com/blog/${post.slug}`,
        },
    };
}

export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
    const contentHTML = blogContent[resolvedParams.slug];

    if (!post || !contentHTML) {
        notFound();
    }

    // Need to add single-blog-page class to body conceptually, 
    // but since we can't easily modify body tag per page in App router without a template, 
    // we'll wrap the content in a div that acts like the body class, or just use <main className="single-blog-page">
    return (
        <main className="single-blog-page container" style={{ padding: '80px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <article dangerouslySetInnerHTML={{ __html: contentHTML }} />

            {/* AUTHOR BOX */}
            <div className="article-author">
                <img src="/your-photo.jpeg" alt="Sarvanu Banerjee" className="author-img" loading="lazy" />
                <div className="author-info">
                    <h3>Sarvanu Banerjee</h3>
                    <span className="author-role">Business Transformation Strategies</span>
                    <p className="author-bio">Helping founders scale their agencies and service businesses through systems, leadership mindset, and strategic growth. 150+ clients across 6+ countries.</p>
                    <div style={{ marginTop: '15px' }}>
                        <a href="https://www.linkedin.com/in/sarvanu-banerjee/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-blue-accent)', marginRight: '15px' }}>
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="mailto:sarvanubanerjee@gmail.com" style={{ color: 'var(--clr-blue-accent)' }}>
                            <i className="fas fa-envelope"></i> Email
                        </a>
                    </div>
                </div>
            </div>

            {/* BACK LINK */}
            <div style={{ margin: '40px 0', textAlign: 'center' }}>
                <Link href="/blog" style={{ fontWeight: '600', color: 'var(--clr-navy-mid)', textDecoration: 'none' }}>
                    &larr; Back to Articles
                </Link>
            </div>

            <StickyCta />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.description,
                        "author": {
                            "@type": "Person",
                            "name": "Sarvanu Banerjee",
                            "url": "https://sarvanu.com"
                        }
                    })
                }}
            />
        </main>
    );
}
