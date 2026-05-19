/**
 * Route Group Layout for (admin)
 *
 * In Next.js App Router, only ONE root layout can have <html>/<body>.
 * Nested layouts must NOT include <html>/<body>.
 *
 * This layout simply renders children — the admin sidebar layout
 * (admin/layout.js) handles the full admin chrome.
 */

export const metadata = {
  title: 'Admin Panel | Sarvanu',
  robots: { index: false, follow: false },
};

export default function AdminGroupLayout({ children }) {
  return children;
}
