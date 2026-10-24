export type Role = { title: string; org: string; place: string; dates: string };

export const experience: { part: string; rows: Role[] }[] = [
  {
    part: 'Now',
    rows: [{ title: 'Full stack software engineer', org: 'TNUniversity', place: 'Mexico', dates: 'Aug 2024 – Present' }],
  },
  {
    part: 'Before',
    rows: [
      { title: '.NET developer, freelance', org: 'Tairy', place: 'Remote', dates: 'May 2026 – Sep 2026' },
      { title: 'Flutter developer', org: 'Disruptive Studio', place: 'Mexico', dates: 'May 2023 – May 2024' },
      { title: 'Full stack developer', org: 'Rombo, LLC', place: 'Remote', dates: 'May 2022 – May 2023' },
      { title: 'Full stack developer, freelance', org: 'Industria Social', place: 'Mexico', dates: 'Dec 2021 – Dec 2022' },
      { title: 'Full stack developer', org: 'CT Internacional', place: 'Mexico', dates: 'Nov 2021 – May 2022' },
      { title: 'Intern to junior developer', org: 'Industria Social', place: 'Mexico', dates: 'Jan 2021 – Nov 2021' },
    ],
  },
  {
    part: 'Education',
    rows: [
      {
        title: 'B.S. in Software Engineering',
        org: 'Universidad Estatal de Sonora',
        place: 'Sonora',
        dates: '2018 – 2022',
      },
    ],
  },
];
