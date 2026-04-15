import { Poppins } from 'next/font/google';
import "./globals.css";
import "./tailwind.css";
import SnapBar from "@/components/SnapBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import OrganizationSchema from "@/components/OrganizationSchema";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://sarvanu.com"),
  title: {
    default: "Sarvanu Strategies | Business Growth Consultant",
    template: "%s | Sarvanu Strategies",
  },
  description:
    "Sarvanu Strategies helps founders, startups, and MSMEs simplify, systematize, and scale their businesses with expert consulting.",
  keywords:
    "business consultant India, startup growth consultant, MSME consulting, Sarvanu, business strategy",
  openGraph: {
    title: "Sarvanu Strategies | Business Growth Consultant",
    description: "Sarvanu Strategies helps founders, startups, and MSMEs simplify, systematize, and scale their businesses.",
    url: "https://sarvanu.com",
    siteName: "Sarvanu Strategies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarvanu Strategies",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvanu Strategies | Business Growth Consultant",
    description: "Sarvanu Strategies helps founders, startups, and MSMEs simplify, systematize, and scale their businesses.",
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
        <SnapBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
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