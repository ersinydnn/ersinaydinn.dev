import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi";
import restImg from "@/public/restcountries.png";
import netfilmsImg from "@/public/netfilms.png";
import getirImg from "@/public/getir.png";
import multistepImg from "@/public/multistep.png";
import ecommerceImg from "@/public/ecommerce.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bootcamp Education",
    location: "In home",
    description:
      "In the last year of my education, i want to learn new stuffs and i decided to start learning to React. I finished the course after 4 months of studying.",
    icon: React.createElement(HiOutlineLightBulb),
    date: "2023",
  },
  {
    title: "Highschool Student",
    location: "Antalya, Turkey",
    description:
      "I graduated after 4 years of studying. I studied Electrical-Electronics Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Intern Engineer",
    location: "Bursa, Turkey",
    description:
      "I worked as a intern engineer for 3 months. I learned teamwork and engineering stufs.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "Rest Countries App",
    description:
      "In this project, i use ReactJS and Tailwind CSS. I use Rest Countries API to get data.",
    tags: ["React", "Next.js", "API", "Tailwind"],
    imageUrl: restImg,
    live: "https://rest-countries-api-react-tailwind.vercel.app/",
    repo: "https://github.com/ersinydnn/rest-countries-api--react-tailwind",
  },
  {
    title: "E-Commerce App",
    description:
      "This project is a Frontend Mentor challenge. I use ReactJS and Tailwind CSS. Also in this project, i improve my skills at responsive design.",
    tags: ["React", "Next.js", "Responsive", "Tailwind"],
    imageUrl: ecommerceImg,
    live: "https://e-commerce-app-nine-peach.vercel.app/",
    repo: "https://github.com/ersinydnn/e-commerce-app",
  },
  {
    title: "Getir-Clone",
    description:
      "Getir is the largest ordering compaies in Turkey. I re-create Getir's home page in this project. This is the first project that i use TailwindCSS.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: getirImg,
    live: "https://getir-clone-react-tailwind-delta.vercel.app/",
    repo: "https://github.com/ersinydnn/getir-clone---react-tailwind",
  },
  {
    title: "Multi-Step Form",
    description:
      "React Hooks like useState, useEffect; i learned them in this project. Also i use Styled Components.",
    tags: ["React", "React-Hooks", "Next.js", "Tailwind"],
    imageUrl: multistepImg,
    live: "https://react-multi-step-form-psi.vercel.app/",
    repo: "https://github.com/ersinydnn/react-multi-step-form",
  },
  {
    title: "Netfilms App",
    description:
      "This is my biggest and fullest application. I use NextJS in this project and i learned so many this about NextJS. I understand NextJS routing system in this project. By the way this is not my app, i re-create this app.",
    tags: [
      "React",
      "React-Hooks",
      "Next.js",
      "Styled-Components",
      "Responsive",
    ],
    imageUrl: netfilmsImg,
    live: "https://netfilms-chi.vercel.app/",
    repo: "https://github.com/ersinydnn/netflims-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
] as const;
