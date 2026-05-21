import { Poppins } from 'next/font/google';
import "./globals.css";
import "./tailwind.css";
import OrganizationSchema from "@/components/OrganizationSchema";
import SiteShell from "@/components/SiteShell";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://sarvanu.com"),
  title: {
    default: "Sarvanu.com | Business Growth Consultant",
    template: "%s | Sarvanu.com",
  },
  description:
    "Sarvanu.com helps founders, startups, and MSMEs simplify, systematize, and scale their businesses with expert consulting.",
  keywords:
    "business consultant India, startup growth consultant, MSME consulting, Sarvanu.com, business strategy",
  openGraph: {
    title: "Sarvanu.com | Business Growth Consultant",
    description: "Sarvanu.com helps founders, startups, and MSMEs simplify, systematize, and scale their businesses.",
    url: "https://sarvanu.com",
    siteName: "Sarvanu.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarvanu.com",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvanu.com | Business Growth Consultant",
    description: "Sarvanu.com helps founders, startups, and MSMEs simplify, systematize, and scale their businesses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://sarvanu.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={poppins.className}>
        <OrganizationSchema />
        <SiteShell>{children}</SiteShell>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B442V7QVGB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B442V7QVGB');
          `}
        </Script>
      </body>
    </html>
  );
}