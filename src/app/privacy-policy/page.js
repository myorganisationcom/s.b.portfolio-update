export const metadata = {
    title: "Privacy Policy | Sarvanu.com",
    description: "Privacy Policy for Sarvanu.com — how we collect, use, store, and protect your personal and business information.",
    openGraph: {
        title: "Privacy Policy | Sarvanu.com",
        description: "Read the Privacy Policy governing data collection and usage on Sarvanu.com.",
        url: "https://sarvanu.com/privacy-policy",
        images: ["/og-image.png"],
    },
    twitter: {
        title: "Privacy Policy | Sarvanu.com",
        description: "Read the Privacy Policy governing data collection and usage on Sarvanu.com.",
        images: ["/og-image.png"],
    },
    alternates: {
        canonical: "https://sarvanu.com/privacy-policy",
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

export default function PrivacyPolicy() {
    const lastUpdated = '22 May 2026';

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
                    Privacy Policy
                </h1>
                <p style={{
                    fontSize: '0.95rem',
                    color: 'rgba(255,255,255,0.4)',
                    maxWidth: 520,
                    margin: '0 auto',
                    lineHeight: 1.6,
                }}>
                    Your privacy matters to us. This policy explains how we collect, use, and protect your information.
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

                    {/* 1. Introduction */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🔐</span> 1. Introduction
                        </h2>
                        <p style={paraStyle}>
                            <strong style={{ color: '#F5C518' }}>Sarvanu.com</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting and respecting your privacy. This Privacy Policy describes how we collect, use, store, and safeguard your personal information when you visit our website, use our services, or interact with us in any way.
                        </p>
                        <p style={paraStyle}>
                            By using our Website and services, you consent to the data practices described in this policy. If you do not agree, please discontinue use of our Website.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 2. Information We Collect */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📋</span> 2. Information We Collect
                        </h2>
                        <p style={paraStyle}>
                            We collect the following types of information to deliver and improve our services:
                        </p>
                        <h3 style={{ ...headingStyle, fontSize: '1.05rem', marginTop: '20px' }}>
                            a) Information You Provide Directly
                        </h3>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Full name, email address, and phone number (via contact forms, audit forms, and booking forms)</li>
                            <li style={listItemStyle}>Organisation name, designation, and business details</li>
                            <li style={listItemStyle}>Business audit responses — including revenue, team size, growth goals, challenges, and operational data</li>
                            <li style={listItemStyle}>Messages or communications sent to us via email, WhatsApp, or the Website</li>
                        </ul>
                        <h3 style={{ ...headingStyle, fontSize: '1.05rem', marginTop: '20px' }}>
                            b) Information Collected Automatically
                        </h3>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>IP address, browser type, and device information</li>
                            <li style={listItemStyle}>Pages visited, time spent on the Website, and referral source</li>
                            <li style={listItemStyle}>Cookies and similar tracking technologies (see Section 5)</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 3. How We Use Your Information */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>⚙️</span> 3. How We Use Your Information
                        </h2>
                        <p style={paraStyle}>
                            We use the collected information for the following purposes:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>To deliver consulting services, audit reports, and strategic recommendations</li>
                            <li style={listItemStyle}>To respond to your enquiries and communicate about our services</li>
                            <li style={listItemStyle}>To personalise your experience on our Website</li>
                            <li style={listItemStyle}>To send relevant business insights, updates, and service-related communications</li>
                            <li style={listItemStyle}>To improve our Website, services, and overall user experience</li>
                            <li style={listItemStyle}>To comply with legal obligations and enforce our terms</li>
                        </ul>
                        <p style={paraStyle}>
                            We will <strong style={{ color: 'rgba(255,255,255,0.75)' }}>never sell</strong> your personal information to third parties for marketing purposes.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 4. Data Storage & Security */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🛡️</span> 4. Data Storage &amp; Security
                        </h2>
                        <p style={paraStyle}>
                            Your data is stored securely using industry-standard encryption and security practices. We implement the following measures to protect your information:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>SSL/TLS encryption for all data transmitted through our Website</li>
                            <li style={listItemStyle}>Secure database storage with restricted access controls</li>
                            <li style={listItemStyle}>Regular security audits and monitoring of our systems</li>
                            <li style={listItemStyle}>Access to personal data is limited to authorised personnel only</li>
                        </ul>
                        <p style={paraStyle}>
                            While we take all reasonable precautions, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the best of our ability.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 5. Cookies */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🍪</span> 5. Cookies &amp; Tracking Technologies
                        </h2>
                        <p style={paraStyle}>
                            Our Website uses cookies and similar technologies to enhance your browsing experience. Types of cookies we use:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Essential Cookies:</strong> Required for the Website to function properly (e.g., session management, authentication).</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Analytics Cookies:</strong> Help us understand how visitors interact with our Website, enabling us to improve performance and content.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Functional Cookies:</strong> Remember your preferences and settings for a better experience.</li>
                        </ul>
                        <p style={paraStyle}>
                            You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of the Website.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 6. Third-Party Services */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🔗</span> 6. Third-Party Services
                        </h2>
                        <p style={paraStyle}>
                            We may use trusted third-party services to support our operations. These include:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Analytics:</strong> Google Analytics or similar tools to track Website traffic and user behaviour.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Email Services:</strong> For sending transactional emails and service updates.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Payment Processors:</strong> Secure third-party payment gateways for processing transactions.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>AI Services:</strong> For generating business audit analysis and reports.</li>
                        </ul>
                        <p style={paraStyle}>
                            These third-party providers have their own privacy policies, and we encourage you to review them. We only share the minimum data necessary for these services to function.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 7. Business Audit Data */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📊</span> 7. Business Audit Data
                        </h2>
                        <p style={paraStyle}>
                            When you complete our Business Growth Audit, we collect detailed business information to generate your personalised audit report. Regarding this data:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Your audit responses are stored securely and used solely to generate your report and provide relevant recommendations.</li>
                            <li style={listItemStyle}>Audit data may be used in an anonymised and aggregated form for internal research and service improvement.</li>
                            <li style={listItemStyle}>Your individual business data will <strong style={{ color: 'rgba(255,255,255,0.75)' }}>never be shared publicly</strong> or with competitors.</li>
                            <li style={listItemStyle}>You may request deletion of your audit data at any time by contacting us.</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 8. Your Rights */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>✅</span> 8. Your Rights
                        </h2>
                        <p style={paraStyle}>
                            You have the following rights regarding your personal data:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Access:</strong> Request a copy of the personal data we hold about you.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Correction:</strong> Request correction of any inaccurate or incomplete data.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Deletion:</strong> Request deletion of your personal data, subject to legal obligations.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
                            <li style={listItemStyle}><strong style={{ color: 'rgba(255,255,255,0.75)' }}>Data Portability:</strong> Request your data in a structured, commonly used format.</li>
                        </ul>
                        <p style={paraStyle}>
                            To exercise any of these rights, please contact us at <strong style={{ color: '#F5C518' }}>info@sarvanu.com</strong>. We will respond to your request within 30 days.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 9. Data Retention */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>🗂️</span> 9. Data Retention
                        </h2>
                        <p style={paraStyle}>
                            We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including:
                        </p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Active client data is retained for the duration of the engagement and for 2 years thereafter for reference.</li>
                            <li style={listItemStyle}>Audit and lead data is retained for up to 1 year unless you request earlier deletion.</li>
                            <li style={listItemStyle}>Financial and transaction records are retained as required by applicable tax and accounting laws.</li>
                        </ul>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 10. Children's Privacy */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>👶</span> 10. Children&apos;s Privacy
                        </h2>
                        <p style={paraStyle}>
                            Our Website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 11. Changes to Policy */}
                    <div style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>✏️</span> 11. Changes to This Policy
                        </h2>
                        <p style={paraStyle}>
                            Sarvanu.com reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this page periodically.
                        </p>
                        <p style={paraStyle}>
                            Continued use of our Website after any modifications constitutes your acceptance of the updated Privacy Policy.
                        </p>
                    </div>

                    <hr style={dividerStyle} />

                    {/* 12. Contact Us */}
                    <div style={{ ...sectionStyle, marginBottom: 0 }}>
                        <h2 style={headingStyle}>
                            <span style={{ fontSize: '1.1rem' }}>📧</span> 12. Contact Us
                        </h2>
                        <p style={paraStyle}>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
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
