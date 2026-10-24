// Team projects: products Ricardo helped build inside a company or for a client.
// Facts and figures come from his CV. The interface fragments that show
// each project are illustrative reconstructions, not screenshots.
export type Project = {
  id: string;
  name: string;
  context: string;
  summary: string;
  result: string;
  stack: string;
  fragment: 'chat' | 'crm' | 'migration' | 'query';
};

export const projects: Project[] = [
  {
    id: 'negotiachat',
    name: 'Negotiachat',
    context: 'With the TNUniversity team · 2024 to present',
    summary: 'An AI-powered WhatsApp platform that automates customer conversations and negotiations.',
    result: 'Handling time down 40%.',
    stack: 'LLM integration, WhatsApp, agentic development with Claude Code',
    fragment: 'chat',
  },
  {
    id: 'tnu-crm',
    name: 'TNU CRM',
    context: 'With the TNUniversity team · 2024 to present',
    summary:
      'A modular CRM used daily by management, collections and marketing, with 20 to 40 active users and lead capture from Meta through GraphQL.',
    result: 'Enrollment 30–40% faster; manual follow-up down 25%.',
    stack: 'GraphQL, Meta APIs, GitHub Actions, Docker',
    fragment: 'crm',
  },
  {
    id: 'dotnet-10',
    name: '.NET 10 migration',
    context: 'For Tairy, as a freelancer · 2026',
    summary:
      'Moved a backend from .NET Framework to .NET 10 and replaced deprecated code, such as page-level permission handling.',
    result: 'About 8 endpoints refactored, ~50% faster.',
    stack: 'C#, .NET 10',
    fragment: 'migration',
  },
  {
    id: 'query-tuning',
    name: '4 minutes to 10 seconds',
    context: 'With the Rombo, LLC team · 2022 to 2023',
    summary: 'Redesigned the queries and indexes of a production system, on a team of three engineers.',
    result: 'Execution time cut from 4 minutes to 10 seconds.',
    stack: 'SQL, indexing, query redesign',
    fragment: 'query',
  },
];

// Own projects: designed, built and run by Ricardo himself. Taken from his
// public GitHub repositories; descriptions to be confirmed by him.
export type OwnProject = {
  id: string;
  name: string;
  years?: string;
  summary: string;
  stack: string;
  code?: string;
  live?: string;
};

export const ownProjects: OwnProject[] = [
  {
    id: 'rfid-access',
    name: 'RFID access control',
    years: '2025 to 2026',
    summary:
      'Employees tap a card at a kiosk and the entry shows up live on an admin dashboard. Covers cards, employees, access logs and card replacements.',
    stack: 'NestJS, Prisma, WebSockets, Next.js',
    code: 'https://github.com/RicardoDevValenzula/rfid_access_reader',
  },
  {
    // Repository is private and the deployment sits behind Vercel login, so no links yet.
    id: 'vecma',
    name: 'VECMA',
    summary:
      'A web app for a nutritionist, built full stack in Next.js, with Supabase handling sign-in and the PostgreSQL database.',
    stack: 'Next.js, Supabase Auth, PostgreSQL',
  },
  {
    id: 'burrititos',
    name: 'Burrititos',
    years: 'In development',
    summary: 'The landing page for Burrititos, built with React and Next.js.',
    stack: 'React, Next.js',
  },
  {
    id: 'rvqport',
    name: 'This portfolio',
    years: '2026',
    summary:
      'Built with Astro and no UI framework. The slug demo at the top runs the same TypeScript function in the browser and on the server.',
    stack: 'Astro, TypeScript, plain CSS',
    code: 'https://github.com/RicardoDevValenzula/rvqport',
    live: 'https://rvqport.vercel.app',
  },
];
