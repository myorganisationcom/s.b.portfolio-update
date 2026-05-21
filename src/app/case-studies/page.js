import Link from 'next/link';
import { getAllPublishedCaseStudies } from '@/server/repositories/case-studies';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
    return {
        title: 'Client Results & Proof | Sarvanu',
        description:
            'Documented outcomes from founders and businesses who worked with Sarvanu Banerjee. Real engagements, real numbers, real stories.',
        openGraph: {
            title: 'Client Results & Proof | Sarvanu',
            description:
                'Documented outcomes from founders and businesses who worked with Sarvanu Banerjee.',
            url: 'https://sarvanu.com/case-studies',
            images: ['/og-image.png'],
        },
        alternates: {
            canonical: 'https://sarvanu.com/case-studies',
        },
    };
}

export default async function CaseStudies() {
    const caseStudies = await getAllPublishedCaseStudies();

    return (
        <>
            {/* HERO */}
            <section className="cs-hero">
                <div className="cs-hero-inner">
                    <span className="cs-eyebrow">Proof of Work</span>
                    <h1>What Actually Happens<br />When We Work Together</h1>
                    <p>
                        These aren't case studies written for optics. They're documented outcomes from founders who were stuck,
                        overwhelmed, or growing too fast to keep up — and what changed when we got to work.
                    </p>
                    <div className="cs-hero-stats">
                        <div className="cs-stat">
                            <span className="cs-stat-num">40+</span>
                            <span className="cs-stat-label">Founders Worked With</span>
                        </div>
                        <div className="cs-stat-divider" />
                        <div className="cs-stat">
                            <span className="cs-stat-num">₹3Cr+</span>
                            <span className="cs-stat-label">Revenue Unlocked</span>
                        </div>
                        <div className="cs-stat-divider" />
                        <div className="cs-stat">
                            <span className="cs-stat-num">6</span>
                            <span className="cs-stat-label">Industries Served</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="cs-section">
                <div className="cs-container">
                    {caseStudies.map((study) => (
                        <article className="cs-card" key={study.id}>
                            <div className="cs-card-header">
                                <span className="cs-tag">{study.industry}</span>
                                <span className="cs-duration">{study.duration}</span>
                            </div>
                            <h2 className="cs-card-title">
                                <Link href={`/case-studies/${study.slug}`}>
                                    {study.title}
                                </Link>
                            </h2>
                            <p className="cs-card-intro">{study.introText}</p>

                            <div className="cs-two-col">
                                <div className="cs-col">
                                    <h3 className="cs-col-label cs-col-label--red">Challenges</h3>
                                    <ul className="cs-list">
                                        {study.challenges.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cs-col">
                                    <h3 className="cs-col-label cs-col-label--gold">Solutions</h3>
                                    <ul className="cs-list">
                                        {study.solutions.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="cs-results">
                                {study.results.map((r, i) => (
                                    <div className="cs-result-item" key={i}>
                                        <span className="cs-result-num">{r.num}</span>
                                        <span className="cs-result-desc">{r.desc}</span>
                                    </div>
                                ))}
                            </div>

                            {study.quoteText && (
                                <blockquote className="cs-quote">
                                    <p>&ldquo;{study.quoteText}&rdquo;</p>
                                    {study.quoteAuthor && <cite>{study.quoteAuthor}</cite>}
                                </blockquote>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* HONEST NOTE */}
            <section className="cs-honest">
                <div className="cs-honest-inner">
                    <h2>A Note on What You're Reading</h2>
                    <p>
                        These are real engagements. Where clients have consented, their names appear.
                        Where they've asked for privacy — especially in B2B manufacturing and funded startups where
                        competitive sensitivity matters — we've described the situation without identifying the company.
                        The numbers are documented, not inflated. Results vary based on execution, market conditions,
                        and the founder's own commitment to doing the work.
                    </p>
                    <p>
                        If you want to speak to a past client directly before deciding, that can be arranged on a call.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="cs-cta">
                <div className="cs-cta-inner">
                    <h2>Your business should be in this list.</h2>
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

            {/* CollectionPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'CollectionPage',
                        'name': 'Client Results & Proof | Sarvanu',
                        'description':
                            'Documented outcomes from founders and businesses who worked with Sarvanu Banerjee.',
                        'url': 'https://sarvanu.com/case-studies',
                        'mainEntity': {
                            '@type': 'ItemList',
                            'itemListElement': caseStudies.map((study, i) => ({
                                '@type': 'ListItem',
                                'position': i + 1,
                                'url': `https://sarvanu.com/case-studies/${study.slug}`,
                                'name': study.title,
                            })),
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
                        ],
                    }),
                }}
            />
        </>
    );
}
