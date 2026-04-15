/** @type {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: 'Sarvanu Strategies',
    short_name: 'Sarvanu',
    description: 'Trusted Business Growth Partner for Founders, Startups, and MSMEs to build scalable systems and accelerate growth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a1833',
    theme_color: '#0a1833',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
