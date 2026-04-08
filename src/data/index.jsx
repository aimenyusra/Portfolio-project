import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFramer,
  SiHtml5,
  SiBootstrap,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVite,
  SiPostman,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import {FaCss3Alt} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
export const NAV_LINKS = ["Home", "Projects", "Skills", "About", "Contact"];

export const PROJECTS = [
  {
    title: "HR Management Dashboard",
    desc: "A full-featured HR platform with 9 pages, analytics, and employee management built with React Router and Recharts.",
    image: "src/assets/dashboard.png",
    tech: ["React", "Vite", "React Router", "Recharts", "CSS Modules"],
    demo: "https://hr-dashboard-wheat.vercel.app/",
    github: "https://github.com/aimenyusra/real-estate-react-app",
    accent: "#7c3aed",
  },

  {
    title: "Real Estate Website",
    desc: "Modern property listing platform with advanced filters, map integration, and responsive design.",
    image: "src/assets/realestate.png",
    tech: ["React", "React Router", "CSS Modules"],
    demo: "https://real-estate-react-app-nine.vercel.app/",
    github: "https://github.com/aimenyusra/real-estate-react-app",
    accent: "#10b981",
  },
];

export const SKILLS = {
  Frontend: [   { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "CSS Modules", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Framer Motion", icon: <SiFramer /> },
    { name: "HTML5 / CSS3", icon: <SiHtml5 color="#E34F26" /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Figma (UI/UX)", icon: <SiFigma color="#F24E1E" /> },
  
  ],
  Backend: [
       { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "REST APIs", icon: <SiPostman color="#FF6C37" /> },
  ],
  Tools: [  { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "Vite", icon: <SiVite color="#646CFF" /> },
    { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "Figma", icon: <SiFigma color="#ff37de" /> },
   { name: "Framer", icon: <SiFramer color="#6e6d89" /> },
    { name: "Adobe Photoshop", icon: <TbBrandAdobePhotoshop color="#37e4ff" /> },
  ],
};

export const ABOUT_CARDS = [
  { label: "BSc Fashion Design", sub: "TBAC College, 2022–2025" },
  { label: "FullStack Focused", sub: "React · Express.js · MongoDB" },
  { label: "Creative Background", sub: "Figma · UI-UX · Visual Design" },
  { label: "Dubai-Ready", sub: "Open to relocation & remote" },
];

export const HERO_WORDS = [
  "Full Stack Developer",
  "React + Node.js Engineer",
  "UI/UX Enthusiast",
  "Creative Coder",
];