export const ABOUT_ME = ""

type TExperience = {
    company: string;
    title: string;
    date: string;
    source: string;
    link: string;
    description: string;
    tech?: string[]
}
type TMenuItem = {
  title: string;
  link: string
}

export const NAV_ITEMS: TMenuItem[] = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Projects',
    link: '/projects'
  }
]
export const EXPERIENCES: TExperience[] = [
    {
      company: "Bluecore",
      title: "Senior Frontend Engineer",
      date: "2022 - 2024",
      link: "https://www.bluecore.com",
      source: "/bluecore.png",
      description: "Spearheaded the frontend development of the company's new SMS marketing product called Tape-to-Join, which connects marketers to consumers via a subscription model to notify consumers of new products and sales",
      tech: ["Typescript", "Next.JS", "React", "Go"]
    },
    {
      company: "dv01",
      title: "Senior Frontend Engineer",
      date: "2019 - 2022",
      source: "/dv01.png",
      link: "https://www.dv01.co",
      description: "Led the frontend development of a new green field project called Tape Cracker, a data wrangling tool that allows investors to upload their loan tapes. Features include auto-matching fields to help facilitate standardizing and normalizing data, customizable stratification tables, and an in-house scripting language to modify datasets.",
      tech: ["Typescript", "React", "Redux", "GraphQL"]
    },
    {
      company: "Noble Markets",
      title: "Senior Frontend Engineer",
      date: "2017 - 2018",
      source: "/noble.png",
      link: "https://www.linkedin.com/company/noble-markets/about/",
      description:"Developed a KYC (Know Your Client) application that helped facilitate the onboarding process of new potential clients to the platform and also met the financial regulations and compliances.",
      tech: ["Typescript", "Angular", "NgRx"]
    },
    {
    company: "Google",
    title: "Student Facilitator",
    date: "2016 - 2016",
    source: "/google.png",
    link: "https://appliedcsskills.withgoogle.com/",
    description: "Delivered weekly workshops on campus, in which students develop games in Android using data structures and algorithms.",
    tech: ["Java", "Android Studio"]
    },
    {
      company: "Mount Sinai",
      title: "Senior Research Technician",
      link: "https://labs.icahn.mssm.edu/sorianolab/",
      date: "2013 - 2015",
      source: "/ms.png",
      description: "Conducted experiments and analyzed genotyping data to identify the pathways by which Platelet Derived Growth Factor (PDGF) and Fibroblast Growth Factor (FGF) signaling in multipotent neural crest cells regulate the development of the midface."
    },
  ];