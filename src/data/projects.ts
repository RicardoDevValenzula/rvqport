// Facts and figures come from Ricardo's CV. The interface fragments that show
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
    context: 'TNUniversity · 2024 to present',
    summary: 'An AI-powered WhatsApp platform that automates customer conversations and negotiations.',
    result: 'Handling time down 40%.',
    stack: 'LLM integration, WhatsApp, agentic development with Claude Code',
    fragment: 'chat',
  },
  {
    id: 'tnu-crm',
    name: 'TNU CRM',
    context: 'TNUniversity · 2024 to present',
    summary:
      'A modular CRM used daily by management, collections and marketing, with 20 to 40 active users and lead capture from Meta through GraphQL.',
    result: 'Enrollment 30–40% faster; manual follow-up down 25%.',
    stack: 'GraphQL, Meta APIs, GitHub Actions, Docker',
    fragment: 'crm',
  },
  {
    id: 'dotnet-10',
    name: '.NET 10 migration',
    context: 'Tairy, freelance · 2026',
    summary:
      'Moved a backend from .NET Framework to .NET 10 and replaced deprecated code, such as page-level permission handling.',
    result: 'About 8 endpoints refactored, ~50% faster.',
    stack: 'C#, .NET 10',
    fragment: 'migration',
  },
  {
    id: 'query-tuning',
    name: '4 minutes to 10 seconds',
    context: 'Rombo, LLC · 2022 to 2023',
    summary: 'Redesigned the queries and indexes of a production system, on a team of three engineers.',
    result: 'Execution time cut from 4 minutes to 10 seconds.',
    stack: 'SQL, indexing, query redesign',
    fragment: 'query',
  },
];
