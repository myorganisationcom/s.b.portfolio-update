import AuditFunnel from '@/components/audit/AuditFunnel';

export const metadata = {
  title: 'Free Business Growth Audit | Sarvanu',
  description: 'Get a comprehensive AI-powered business audit report. Identify your growth bottlenecks and receive a personalised strategic roadmap.',
  robots: { index: true, follow: true },
};

export default function AuditPage() {
  return <AuditFunnel />;
}
