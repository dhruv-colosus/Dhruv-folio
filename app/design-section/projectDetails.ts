export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "THCplus",
    description:
      "THCblog offers an intuitive platform for college society circuits to post blogs effortlessly. Manage content easily with our user-friendly admin dashboard. Empower your college community with insightful articles.",
    technologies: ["Next.js", "Typescript", "Prisma"],
    github: "https://github.com/ujjujjuj/thc-blog",
    demo: "https://blog.thcplus.in/",
    image: require(".//../../public/projects/thcblog.png"),
    available: true,
  },
  {
    id: 1,
    name: "XeroCrypt",
    description:
      "Xerocrypt was my personal thrill ride – a 24-hour online cryptic hunt. Equipped with an interactive Gameplay and a realtime leaderboard and a profile customisation, it has it all",
    technologies: ["Express", "AWS", "Tailwind"],
    github: "https://github.com/dhruv-colosus/Cryptic-Hunt",
    demo: "https://xerocrypt.devcomm.international",
    image: require(".//../../public/projects/cryptic.png"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: require(".//../../public/projects/cryptic.png"),
    available: false,
  },
];
