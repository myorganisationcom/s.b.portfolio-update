import HomeClient from './page-client';

export const metadata = {
  title: "Strategic Business Consulting for Startups & MSMEs",
  description: "Transform your business with expert guidance. We partner with Founders, Startups, and MSMEs to build scalable systems and accelerate growth.",
  openGraph: {
    title: "Strategic Business Consulting for Startups & MSMEs",
    description: "Transform your business with expert guidance. We partner with Founders, Startups, and MSMEs to build scalable systems.",
    url: "https://sarvanu.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sarvanu Banerjee Strategies",
      },
    ],
  },
  twitter: {
    title: "Strategic Business Consulting for Startups & MSMEs",
    description: "Transform your business with expert guidance. We partner with Founders, Startups, and MSMEs to build scalable systems.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sarvanu.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
