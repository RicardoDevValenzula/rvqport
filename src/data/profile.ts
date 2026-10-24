export const profile = {
  firstName: 'Ricardo',
  lastName: 'Valenzuela',
  fullName: 'Ricardo Valenzuela Quintana',
  role: 'Senior full-stack engineer',
  location: 'Hermosillo, Sonora, Mexico',
  lead: 'Senior full-stack engineer in Hermosillo, Mexico. TypeScript from the React screen to the Node.js server.',
  email: 'ricardovalenzuelaquintana7@gmail.com',
  links: {
    github: { href: 'https://github.com/RicardoDevValenzula', handle: 'RicardoDevValenzula' },
    linkedin: { href: 'https://www.linkedin.com/in/ricardo-val', handle: 'ricardo-val' },
  },
} as const;

export const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Hello Ricardo')}`;

export const facts = [
  { label: 'Based in', value: 'Hermosillo, Sonora, Mexico' },
  { label: 'Experience', value: '5+ years shipping to production' },
  { label: 'Primary stack', value: 'TypeScript, React, Next.js, Node.js, NestJS' },
] as const;

export const about =
  'I build business systems that run in production every day: a CRM used by three departments, REST and GraphQL APIs, and an AI-powered WhatsApp platform. My main stack is TypeScript, with React and Next.js on the screen and Node.js and NestJS on the server, and I have led a .NET migration when the job called for it. I care about fast queries, boring deploys, and taking a project from the first requirement to production.';

export const toolbox = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', detail: 'Hooks, Context' },
      { name: 'Next.js', detail: 'SSR, SSG, ISR' },
      { name: 'Tailwind CSS', detail: 'Styling' },
      { name: 'Flutter', detail: 'iOS, Android' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', detail: 'NestJS, Express' },
      { name: 'GraphQL', detail: 'APIs' },
      { name: '.NET', detail: 'Framework → 10' },
      { name: 'Java', detail: 'Spring Boot' },
    ],
  },
  {
    title: 'Data and delivery',
    items: [
      { name: 'PostgreSQL', detail: 'MySQL, Prisma' },
      { name: 'Docker', detail: 'Containers' },
      { name: 'GitHub Actions', detail: 'CI/CD' },
      { name: 'Claude Code', detail: 'Agentic dev' },
    ],
  },
] as const;
