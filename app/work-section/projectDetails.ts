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
export type DesignProps = {
  id: number;
  name: string;
  figma: string;

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
    id: 5,
    name: "TG BOT DEV",

    figma:
      "https://www.figma.com/proto/hQAxsVSGeiPYV3iGIBEzGe/TG-BOT?page-id=0%3A1&type=design&node-id=17-108&viewport=323%2C-163%2C0.36&t=jG6sVV4T3wKMxfpC-1&scaling=scale-down&mode=design",
    demo: "",
    image: require(".//../../public/projects/tgdev.png"),
    available: false,
  },
  {
    id: 5,
    name: "Digital Duellers",

    figma:
      "https://www.figma.com/file/ioycUKJjj7YBFmpS2yHOt9/Untitled?type=design&node-id=1%3A2&mode=design&t=KZUZCtXcyJQGZCLZ-1",
    demo: "",
    image: require(".//../../public/projects/digitduel.png"),
    available: false,
  },
  {
    id: 6,
    name: "Martian Munchies",

    figma:
      "https://www.figma.com/file/0MdzLtaN58i2PODTCqKJG7/MARS-POV?type=design&node-id=0%3A1&mode=design&t=f1IxDT7mRKvRBMlF-1",
    demo: "",
    image: require(".//../../public/projects/marss.png"),
    available: false,
  },

  {
    id: 2,
    name: "Spice Hut",

    figma:
      "https://www.figma.com/file/FNFX5lAzD8eSa0YA0Ise8g/Spice-Hut?type=design&node-id=0%3A1&mode=design&t=wTHyEQMDIkkGm793-1",
    demo: "",
    image: require(".//../../public/projects/spice.png"),
    available: false,
  },
  {
    id: 3,
    name: "THC Blog",

    figma:
      "https://www.figma.com/file/wvdsL6XyfDF5uNE4hzrjl8/THC-web?type=design&node-id=509%3A126&mode=design&t=FTNT0CbrnRUOe1FH-1",
    demo: "",
    image: require(".//../../public/projects/dddddds.png"),
    available: false,
  },

  {
    id: 1,
    name: "Bet AI",

    figma: "https://bet-ai.netlify.app/",
    demo: "",
    image: require(".//../../public/projects/betai.png"),
    available: false,
  },
  {
    id: 4,
    name: "MITHRA store",

    figma: "https://moonex.netlify.app/",
    demo: "",
    image: require(".//../../public/projects/moonexl.png"),
    available: false,
  },
];
