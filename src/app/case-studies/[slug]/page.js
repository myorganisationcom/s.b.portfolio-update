import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getAllCaseStudySlugs } from '@/server/repositories/case-studies';
import StickyCta from '@/components/StickyCta';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    try {
        const slugs = await getAllCaseStudySlugs();
        return slugs.map((slug) => ({ slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const study = await getCaseStudyBySlug(resolvedParams.slug);

    if (!study) {
        return {
            title: 'Case Study Not Found | Sarvanu',
        };
    }

    return {
        title: `${study.title} | Sarvanu`,
        description: study.introText,
        keywords: `case study, sarvanu, ${(study.industry || '').toLowerCase()}, business consulting`,
        alternates: {
            canonical: `https://sarvanu.com/case-studies/${study.slug}`,
        },
        openGraph: {
            title: study.title,
            description: study.introText,
            type: 'article',
            url: `https://sarvanu.com/case-studies/${study.slug}`,
            images: study.featuredImage ? [{ url: study.featuredImage }] : ['/og-image.png'],
        },
    };
}

export default async function CaseStudyDetail({ params }) {
    const resolvedParams = await params;
    const study = await getCaseStudyBySlug(resolvedParams.slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="cs-detail-main">
            {/* Hero */}
            <section className="cs-detail-hero">
                <div className="cs-detail-hero-inner">
                    <Link href="/case-studies" className="cs-detail-back">
                        ← All Case Studies
                    </Link>
                    <span className="cs-detail-badge">{study.industry}</span>
                    <h1 className="cs-detail-title">{study.title}</h1>
                    <span className="cs-detail-duration">{study.duration}</span>
                </div>
            </section>

            {/* Intro */}
            <section className="cs-detail-section">
                <div className="cs-detail-container">
                    <p className="cs-detail-intro">{study.introText}</p>
                </div>
            </section>

            {/* Challenges vs Solutions */}
            <section className="cs-detail-section">
                <div className="cs-detail-container">
                    <div className="cs-detail-two-col">
                        <div className="cs-detail-col">
                            <h3 className="cs-detail-col-label cs-detail-col-label--red">Challenges</h3>
                            <ul className="cs-detail-list">
                                {study.challenges.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="cs-detail-col">
                            <h3 className="cs-detail-col-label cs-detail-col-label--gold">Solutions</h3>
                            <ul className="cs-detail-list">
                                {study.solutions.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="cs-detail-section">
                <div className="cs-detail-container">
                    <div className="cs-detail-results">
                        {study.results.map((r, i) => (
                            <div className="cs-detail-result-item" key={i}>
                                <span className="cs-detail-result-num">{r.num}</span>
                                <span className="cs-detail-result-desc">{r.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {study.quoteText && (
                <section className="cs-detail-section">
                    <div className="cs-detail-container">
                        <blockquote className="cs-detail-quote">
                            <p>&ldquo;{study.quoteText}&rdquo;</p>
                            {study.quoteAuthor && <cite>{study.quoteAuthor}</cite>}
                        </blockquote>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="cs-detail-cta">
                <div className="cs-detail-cta-inner">
                    <h2>Ready to see results like this?</h2>
                    <p>
                        Book a 30-minute call. No pitch deck. No script. Just a direct conversation about where
                        you are, what's getting in the way, and whether working together makes sense.
                    </p>
                    <div className="cs-cta-actions">
                        <a href="/book" className="btn-primary">Book a Free Strategy Call</a>
                        <a href="/how-we-work" className="cs-cta-link">See How Engagements Work →</a>
                    </div>
                </div>
            </section>

            <StickyCta />

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        'mainEntityOfPage': {
                            '@type': 'WebPage',
                            '@id': `https://sarvanu.com/case-studies/${study.slug}`,
                        },
                        'headline': study.title,
                        'description': study.introText,
                        'image': study.featuredImage || 'https://sarvanu.com/og-image.png',
                        'datePublished': study.createdAt
                            ? new Date(study.createdAt).toISOString()
                            : '2025-01-01T00:00:00+05:30',
                        'dateModified': study.updatedAt
                            ? new Date(study.updatedAt).toISOString()
                            : '2025-01-01T00:00:00+05:30',
                        'articleSection': study.industry,
                        'author': {
                            '@type': 'Person',
                            'name': 'Sarvanu',
                            'url': 'https://sarvanu.com',
                            'jobTitle': 'Business Management & Operations Consultant',
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'Sarvanu',
                            'url': 'https://sarvanu.com',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://sarvanu.com/logo.png',
                                'width': 512,
                                'height': 512,
                            },
                        },
                    }),
                }}
            />

            {/* BreadcrumbList Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        'itemListElement': [
                            {
                                '@type': 'ListItem',
                                'position': 1,
                                'name': 'Home',
                                'item': 'https://sarvanu.com',
                            },
                            {
                                '@type': 'ListItem',
                                'position': 2,
                                'name': 'Case Studies',
                                'item': 'https://sarvanu.com/case-studies',
                            },
                            {
                                '@type': 'ListItem',
                                'position': 3,
                                'name': study.title,
                                'item': `https://sarvanu.com/case-studies/${study.slug}`,
                            },
                        ],
                    }),
                }}
            />
        </main>
    );
}
