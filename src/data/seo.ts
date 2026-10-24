import { profile } from './profile';

export const seo = {
  keywords: [
    'Ricardo Valenzuela Quintana',
    'senior full-stack engineer',
    'full-stack developer Mexico',
    'Hermosillo',
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'GraphQL',
    '.NET',
    'PostgreSQL',
    'AI integration',
  ],
  author: profile.fullName,
  publisher: profile.fullName,
  locale: 'en_US',
  image: { path: '/og.png', width: 1200, height: 630, alt: `${profile.fullName}, ${profile.role.toLowerCase()}` },
};

// schema.org Person, so search engines can tie the site to the person.
export const personSchema = (siteUrl: string | undefined) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Hermosillo', addressRegion: 'Sonora', addressCountry: 'MX' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Estatal de Sonora' },
  knowsAbout: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'GraphQL', '.NET', 'SQL'],
  sameAs: [profile.links.github.href, profile.links.linkedin.href],
  ...(siteUrl ? { url: siteUrl } : {}),
});
