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
    id: 1,
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
    id: 5,
    name: "Articuno Shop",

    figma:
      "https://www.figma.com/file/pRLSeJEd4VsH1D8BUvn4iV/Login-Page?type=design&node-id=0%3A1&mode=design&t=YyKtm1wuj82TY7Dx-1",
    demo: "",
    image: require(".//../../public/projects/articuno.png"),
    available: false,
  },
  {
    id: 4,
    name: "MITHRA store",

    figma:
      "https://www.figma.com/file/s1DxHbe48Dc2UXXpAJ2UIA/Untitled?type=design&node-id=141%3A7&mode=design&t=o1F4wamtEhb4stDC-1",
    demo: "",
    image: require(".//../../public/projects/warra.png"),
    available: false,
  },
];
