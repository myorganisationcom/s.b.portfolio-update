export const metadata = {
    title: "Terms & Conditions | Sarvanu.com",
    description: "Terms and Conditions for using Sarvanu.com services — business consulting, growth strategy, audit reports, and related advisory services.",
    openGraph: {
        title: "Terms & Conditions | Sarvanu.com",
        description: "Read the Terms and Conditions governing the use of Sarvanu.com services and website.",
        url: "https://sarvanu.com/terms-of-service",
        images: ["/og-image.png"],
    },
    twitter: {
        title: "Terms & Conditions | Sarvanu.com",
        description: "Read the Terms and Conditions governing the use of Sarvanu.com services and website.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/terms-of-service",
    },
};

const sectionStyle = {
    marginBottom: '36px',
};

const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
};

const paraStyle = {
    fontSize: '0.92rem',
    lineHeight: 1.75,
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '12px',
};

const listStyle = {
    paddingLeft: '20px',
    marginBottom: '12px',
};

const listItemStyle = {
    fontSize: '0.92rem',
    lineHeight: 1.75,
    color: 'rgba(255,255,255,0.55)',
    marginBottom: '6px',
};

const dividerStyle = {
    height: '1px',
    background: 'rgba(255,255,255,0.06)',
    border: 'none',
    margin: '36px 0',
};

export default function TermsOfService() {
    const lastUpdated = '21 May 2026';

    return (
        <>
            {/* Hero */}
            <section style={{
                padding: '100px 20px 50px',
                textAlign: 'center',
                background: 'linear-gradient(180deg, rgba(245,197,24,0.04) 0%, transparent 60%)',
            }}>
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '6px 16px', borderRadius: 20,
                    background: 'rgba(245,197,24,0.08)',
                    border: '1px solid rgba(245,197,24,0.18)',
                    color: '#F5C518', fontSize: '0.7rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.12em',
                    marginBottom: 20,
                }}>
                    Legal
                </div>
                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '14px',
                    letterSpacing: '-0.02em',
                }}>
                    Terms & Conditions
                </h1>
                <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.4)',
                    maxWidth: 520,
                    margin: '0 auto',
                    lineHeight: 1.6,
                }}>
                    Please read these terms carefully before using Sarvanu.com services.
                </p>
                <p style={{
                    fontSize: '0.78rem',
                    color: 'rgba(255,255,255,0.25)',
                    marginTop: '16px',
                }}>
                    Last Updated: {lastUpdated}
                </p>
            </section>

            {/* Content */}
            <section style={{
                maxWidth: 780,
                margin: '0 auto',
                padding: '20px 24px 80px',
            }}>
                {/* Card wrapper */}
                <div style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 20,
                    padding: 'clamp(24px, 4vw, 48px)',
                    backdropFilter: 'blur(8px)',
                }}>

                    {/* 1. Acceptance */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📋</span> 1. Acceptance of Terms
                        </h2>
                        <p style={paraStyle}>
                            By accessing or using the website <strong style={{ color: '#F5C518' }}>sarvanu.com</strong> ("Website") and any services provided by Sarvanu.com ("Company", "we", "us", "our"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, please do not use our Website or services.
                        </p>
                        <p style={paraStyle}>
                            These Terms apply to all visitors, users, clients, and any other persons who access or use our Website and services.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 2. Services */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🛠️</span> 2. Description of Services
                        </h2>
                        <p style={paraStyle}>
                            Sarvanu.com provides business consulting, growth strategy, operational systems design, marketing advisory, SaaS development, AI automation solutions, and related professional services. Our services include but are not limited to:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Business growth audits and diagnostic assessments</li>
                            <li style={listItemStyle}>Strategic consulting and advisory sessions</li>
                            <li style={listItemStyle}>Operational systems and SOP development</li>
                            <li style={listItemStyle}>Marketing strategy, funnel building, and CRM setup</li>
                            <li style={listItemStyle}>SaaS product development and AI agent services</li>
                            <li style={listItemStyle}>Custom business reports and action plans</li>
                        </ul>
                        <p style={paraStyle}>
                            The specific scope, deliverables, and timelines for each engagement will be discussed and agreed upon before commencement of work.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 3. Client Responsibilities */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>👤</span> 3. Client Responsibilities
                        </h2>
                        <p style={paraStyle}>As a client of Sarvanu.com, you agree to:</p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Provide accurate and complete business information when requested</li>
                            <li style={listItemStyle}>Respond to communications and requests in a timely manner</li>
                            <li style={listItemStyle}>Implement recommended strategies and provide feedback on outcomes</li>
                            <li style={listItemStyle}>Make payments as per the agreed schedule</li>
                            <li style={listItemStyle}>Maintain confidentiality of proprietary frameworks and methodologies shared during engagement</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 4. Payment Terms */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>💳</span> 4. Payment Terms
                        </h2>
                        <p style={paraStyle}>
                            All fees for consulting services are quoted in Indian Rupees (₹) unless stated otherwise. Payment terms are as follows:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Monthly Retainers:</strong> Payable in advance at the beginning of each month.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Project-Based Work:</strong> 50% advance payment before commencement, with the balance due upon delivery of agreed milestones.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Late Payments:</strong> Payments overdue by more than 15 days may result in pausing of services until the outstanding amount is cleared.</li>
                        </ul>
                        <p style={paraStyle}>
                            Applicable taxes (GST) will be charged as per Indian law in addition to the quoted service fees.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 5. Intellectual Property */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>©️</span> 5. Intellectual Property
                        </h2>
                        <p style={paraStyle}>
                            All content on this Website — including text, graphics, logos, images, design elements, frameworks, methodologies, and software — is the intellectual property of Sarvanu.com and is protected under applicable copyright and trademark laws.
                        </p>
                        <p style={paraStyle}>
                            You may not reproduce, distribute, modify, create derivative works of, or publicly display any content from this Website without prior written consent from Sarvanu.com.
                        </p>
                        <p style={paraStyle}>
                            Custom deliverables created specifically for a client during an engagement (such as reports, SOPs, or strategies) become the property of the client upon full payment. However, the underlying frameworks, templates, and methodologies used to create those deliverables remain the intellectual property of Sarvanu.com.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 6. Confidentiality */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🔒</span> 6. Confidentiality
                        </h2>
                        <p style={paraStyle}>
                            We take confidentiality seriously. All business information, financial data, strategies, and operational details shared by clients during the course of engagement are treated as strictly confidential.
                        </p>
                        <p style={paraStyle}>
                            Sarvanu.com will not disclose, share, or sell your confidential business information to any third party without your explicit written consent, unless required by law.
                        </p>
                        <p style={paraStyle}>
                            Similarly, clients agree to maintain confidentiality regarding Sarvanu.com&apos;s proprietary methods, frameworks, tools, and strategies shared during the engagement.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 7. Limitation of Liability */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>⚠️</span> 7. Limitation of Liability
                        </h2>
                        <p style={paraStyle}>
                            Sarvanu.com provides advisory and consulting services based on our professional expertise and the information provided by clients. While we strive for the best outcomes:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>We <strong style={{ color: 'rgba(255,255,255,0.75)' }}>do not guarantee</strong> specific business results, revenue increases, or growth outcomes. Results depend on various factors including market conditions, implementation quality, and client effort.</li>
                            <li style={listItemStyle}>Our audit reports and recommendations are <strong style={{ color: 'rgba(255,255,255,0.75)' }}>advisory in nature</strong> and should be validated against your specific business context before implementation.</li>
                            <li style={listItemStyle}>Sarvanu.com shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or Website.</li>
                        </ul>
                        <p style={paraStyle}>
                            Our total liability in any matter arising out of or related to these Terms shall not exceed the amount paid by the client for the specific service in question.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 8. Website Usage */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🌐</span> 8. Website Usage
                        </h2>
                        <p style={paraStyle}>
                            When using our Website, you agree not to:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Use the Website for any unlawful purpose or in violation of any applicable laws</li>
                            <li style={listItemStyle}>Attempt to gain unauthorized access to any part of the Website or its systems</li>
                            <li style={listItemStyle}>Submit false, misleading, or spam information through any forms on the Website</li>
                            <li style={listItemStyle}>Scrape, copy, or extract content from the Website using automated tools</li>
                            <li style={listItemStyle}>Interfere with the Website&apos;s functionality or security measures</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 9. Free Audit & Reports */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📊</span> 9. Free Business Audit
                        </h2>
                        <p style={paraStyle}>
                            Sarvanu.com offers a free Business Growth Audit through its Website. By submitting your information for the audit, you acknowledge and agree that:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>The audit report is generated based on the information you provide and is intended for informational purposes only.</li>
                            <li style={listItemStyle}>The audit findings are preliminary in nature and may require further analysis for comprehensive action planning.</li>
                            <li style={listItemStyle}>Your submitted information may be used by Sarvanu.com to contact you regarding relevant services and insights.</li>
                            <li style={listItemStyle}>You may opt out of further communications at any time by contacting us at <strong style={{ color: '#F5C518' }}>info@sarvanu.com</strong>.</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 10. Termination */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🚪</span> 10. Termination
                        </h2>
                        <p style={paraStyle}>
                            Either party may terminate an ongoing consulting engagement by providing 15 days&apos; written notice via email. Upon termination:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>The client is responsible for payment of all services rendered up to the date of termination.</li>
                            <li style={listItemStyle}>Any advance payments for unused services will be refunded on a pro-rata basis.</li>
                            <li style={listItemStyle}>All deliverables completed and paid for up to the termination date will be handed over to the client.</li>
                            <li style={listItemStyle}>Confidentiality obligations continue to apply even after termination.</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 11. Third-Party Links */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🔗</span> 11. Third-Party Links
                        </h2>
                        <p style={paraStyle}>
                            Our Website may contain links to third-party websites or services that are not owned or controlled by Sarvanu.com. We are not responsible for the content, privacy policies, or practices of any third-party websites. Accessing third-party links is at your own risk.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 12. Modifications */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>✏️</span> 12. Changes to Terms
                        </h2>
                        <p style={paraStyle}>
                            Sarvanu.com reserves the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting on this page. The "Last Updated" date at the top of this page reflects the most recent revision.
                        </p>
                        <p style={paraStyle}>
                            Continued use of our Website and services after any changes constitutes your acceptance of the revised Terms.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 13. Governing Law */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>⚖️</span> 13. Governing Law & Jurisdiction
                        </h2>
                        <p style={paraStyle}>
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 14. Contact */}
                    <div style={{ ...sectionStyle, marginBottom: 0 }}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📧</span> 14. Contact Us
                        </h2>
                        <p style={paraStyle}>
                            If you have any questions, concerns, or requests regarding these Terms & Conditions, please contact us:
                        </p>
                        <div style={{
                            background: 'rgba(245,197,24,0.04)',
                            border: '1px solid rgba(245,197,24,0.12)',
                            borderRadius: 14,
                            padding: '20px 24px',
                            marginTop: '16px',
                        }}>
                            <p style={{ ...paraStyle, marginBottom: '8px' }}>
                                <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Sarvanu.com</strong>
                            </p>
                            <p style={{ ...paraStyle, marginBottom: '6px' }}>
                                📧 Email: <strong style={{ color: '#F5C518' }}>info@sarvanu.com</strong>
                            </p>
                            <p style={{ ...paraStyle, marginBottom: '6px' }}>
                                📞 Phone: <strong style={{ color: 'rgba(255,255,255,0.7)' }}>+91 87005 41657</strong>
                            </p>
                            <p style={{ ...paraStyle, marginBottom: 0 }}>
                                🌐 Website: <strong style={{ color: '#F5C518' }}>www.sarvanu.com</strong>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
