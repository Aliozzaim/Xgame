import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tripguide,
  threejs,
} from "../assets";

import sompo from "../assets/company/sompo.png";
import poznan from "../assets/company/poznan.png";
import eru from "../assets/company/eru.png";
import patika from "../assets/company/patika.png";

import ecommerce from "../assets/ecommerce.png";
import garden from "../assets/garden.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer intern",
    company_name: "Sompo Sigorta",
    icon: sompo,
    location: "Istanbul, Turkey (Remote)",
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Technologies: Vue.js, React.js, PrimeReact, Tailwind.",
      "Maintained and improved the client portal web applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const education = [
  {
    title: "Master of Science - Product Engineering",
    company_name: "Politechnika Poznanska",
    icon: poznan,
    iconBg: "#E6DEDD",
    date: "February 2023 - July 2024",
    location: " Poznan Poland",
    points: [],
  },
  {
    title: "Full Stack Bootcamp",
    company_name: "Patika.dev",
    icon: patika,
    iconBg: "#E6DEDD",
    location: "Remote",
    date: "October 2022 - March 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Aeronautical Engineering",
    company_name: "Erciyes University",
    icon: eru,
    location: "  Turkey",
    iconBg: "#383E56",
    date: "September 2018 - September 2022",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trip Guide",
    description:
      "This project is a full-stack application that allows users to create, view, update, and delete places. It consists of a backend API built with Node.js, Express.js, and MongoDB, and a frontend user interface built with React.js.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Aliozzaim/TravelExplorer",
  },
  {
    name: "E-Commerce",
    description:
      "E-Commerce Web App provides grid and slide product views, dynamic user navigation, and an admin panel for efficient product and order management. Users can seamlessly browse and shop for products, while administrators have access to powerful tools for managing them.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "Formik",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/Aliozzaim/eCommerce-WebSite",
  },
  {
    name: "Garden Planner",
    description:
      "AdTask is a web application that showcases a responsive image gallery with a Masonry layout. It allows users to explore a collection of images, view them in a modal, and navigate through a slideshow. The application also features a search functionality for easy image discovery.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Masonry",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: garden,
    source_code_link: "https://github.com/Aliozzaim/AdTask",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
};
