interface Project {
  id: string;
  type: "Project";
  name: string;
  description: string;
  homepage?: string | undefined;
  github: string;
  icon: string;
  image: string;
  repo: string;
  techstack: Techstack[];
}

interface Techstack {
  id: string;
  type: "Techstack";
  label: string;
}

export const allProjects: Project[] = [
  {
    id: "1",
    type: "Project",
    name: "Quesgen Pro",
    description:
      "QuesGen Pro is a platform designed to facilitate the taking of tests, whether they are multiple-choice (MCQ) or open-ended questions, with the assistance of AI.",
    homepage: "https://quesgen-pro.vercel.app/",
    github: "https://github.com/piyushyadav0191/QuesGen-Pro",
    icon: "/images/projects/icons/edit.png",
    image: "/images/projects/quesgen.png",
    repo: "QuesGen-Pro",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Shadcn UI",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Framer motion",
      },
      {
        id: "5",
        type: "Techstack",
        label: "GraphQL",
      },
      {
        id: "6",
        type: "Techstack",
        label: "OpenAI",
      },
      {
        id: "7",
        type: "Techstack",
        label: "Prisma",
      },
      {
        id: "8",
        type: "Techstack",
        label: "Sanity",
      },
    ],
  },
  {
    id: "2",
    type: "Project",
    name: "Issues tracker",
    description: "Create and track your issues easily with this application.",
    homepage: "https://issues-tracker-sand.vercel.app/",
    github: "https://github.com/piyushyadav0191/issues-tracker",
    icon: "/images/projects/icons/bug.png",
    image: "/images/projects/issues.png",
    repo: "issues-tracker",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Prisma",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Tailwind CSS",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Next Auth",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Sentry",
      },
    ],
  },
  {
    id: "3",
    type: "Project",
    name: "Whatsapp Clone",
    description:
      "Whatsapp clone with all features from individual chats to group chat and chat to video call",
    homepage: "https://whatsapp-clone-fs.vercel.app/login",
    github: "https://github.com/piyushyadav0191/Full-Stack-Whatsapp-Clone",
    icon: "/images/projects/icons/chat.png",
    image: "/images/projects/whatsapp.png",
    repo: "Full-Stack-Whatsapp-Clone",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "ReactJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "MongoDB",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Socket.io",
      },
      {
        id: "5",
        type: "Techstack",
        label: "WebRTC",
      },
      {
        id: "6",
        type: "Techstack",
        label: "Redux Toolkit",
      },
    ],
  },
  {
    id: "4",
    type: "Project",
    name: "Modern Ecommerce",
    description: "E commerce website made with latest tech",
    homepage: "https://next-ecommerce-puce-five.vercel.app/",
    github: "https://github.com/piyushyadav0191/Modern-E-Commerce-site",
    icon: "/images/projects/icons/shop.png",
    image: "/images/projects/ecommerce.png",
    repo: "Modern-E-Commerce-site",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Stripe",
      },
      {
        id: "3",
        type: "Techstack",
        label: "Zustand",
      },
      {
        id: "4",
        type: "Techstack",
        label: "TailwindCSS",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Framer motion",
      },
    ],
  },
  {
    id: "5",
    type: "Project",
    name: "Modern Blog",
    description:
      "A blog app built with Next.js and Sanity.io would be a web application that utilizes the benefits of both technologies to create a dynamic and easily maintainable blog",
    homepage: "https://blogwithsanity-piyushyadav0191.vercel.app/",
    github: "https://github.com/piyushyadav0191/full-stack-next-blog",
    icon: "/images/projects/icons/blog.png",
    image: "/images/projects/blog.png",
    repo: "full-stack-next-blog",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS + Node",
      },
      {
        id: "2",
        type: "Techstack",
        label: "Sanity.io",
      },
      {
        id: "3",
        type: "Techstack",
        label: "TailwindCSS",
      },
    ],
  },
  {
    id: "6",
    type: "Project",
    name: "Code with us Editor",
    description:
      "Where you can Write your code with your friends with syncing feature and compile your code with given compiler",
    homepage: "https://codewithus.vercel.app/",
    github: "https://github.com/piyushyadav0191/Code-with-us-Editor",
    icon: "/images/projects/icons/code.png",
    image: "/images/projects/code.png",
    repo: "Code-with-us-Editor",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "ReactJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "SocketIO",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
    ],
  },
  {
    id: "7",
    type: "Project",
    name: "Dashboard for Ecommerce",
    description: "Dashbaord to manage your ecommerce website with all features",
    homepage: "https://my-eccomerce-dashboard.netlify.app/",
    github: "https://github.com/piyushyadav0191/e-commerce-dashboard",
    icon: "/images/projects/icons/dashboard.png",
    image: "/images/projects/dashboard.png",
    repo: "e-commerce-dashboard",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "ReactJS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "MongoDB",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
    ],
  },
  {
    id: "8",
    type: "Project",
    name: "Darking Horse",
    description: "Colorful Dark theme for Vs code",
    homepage:
      "https://marketplace.visualstudio.com/items?itemName=piyush-yadav-india.darking-horse",
    github: "https://github.com/piyushyadav0191/Darking-horse",
    icon: "/images/projects/icons/theme.png",
    image: "/images/projects/theme.png",
    repo: "Darking-horse",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "Vs Code",
      },
    ],
  },
  {
    id: "9",
    type: "Project",
    name: "Share here",
    description:
      "Shared is a comment system which you can use to add it in your blog or any website where you need comments, reviews etc.",
    homepage: "https://shared-client.vercel.app/",
    github: "https://github.com/piyushyadav0191/share-here",
    icon: "/images/projects/icons/comment.png",
    image: "/images/projects/comment.png",
    repo: "share-here",
    techstack: [
      {
        id: "1",
        type: "Techstack",
        label: "NextJS + TS",
      },
      {
        id: "2",
        type: "Techstack",
        label: "NodeJS",
      },
      {
        id: "3",
        type: "Techstack",
        label: "MongoDB",
      },
      {
        id: "4",
        type: "Techstack",
        label: "Express",
      },
      {
        id: "5",
        type: "Techstack",
        label: "Zustand",
      },
      {
        id: "6",
        type: "Techstack",
        label: "TailwindCSS",
      },
    ],
  },
];
