'use client';

import { usePathname } from 'next/navigation';
import SnapBar from "@/components/SnapBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LeadModalProvider } from "@/components/LeadModalContext";
import ContactModal from "@/components/ContactModal";
import DiagnosisModal from "@/components/DiagnosisModal";
import AuditModal from "@/components/AuditModal";
import BookModal from "@/components/BookModal";

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const isAdmin  = pathname?.startsWith('/admin') || pathname?.startsWith('/audit');

  if (isAdmin) {
    // Admin pages — no site chrome at all
    return <>{children}</>;
  }

  return (
    <LeadModalProvider>
      <SnapBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <ContactModal />
      <DiagnosisModal />
      <AuditModal />
      <BookModal />
    </LeadModalProvider>
  );
}
