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
} from "react-icons/si";
import {FaCss3Alt} from "react-icons/fa";

import { VscVscode } from "react-icons/vsc";
export const NAV_LINKS = ["Home", "Projects", "Skills", "About", "Contact"];

export const PROJECTS = [
  {
    title: "HR Management Dashboard",
    desc: "A full-featured HR platform with 9 pages, analytics, and employee management built with React Router and Recharts.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tech: ["React", "Vite", "React Router", "Recharts", "CSS Modules"],
    demo: "#",
    github: "#",
    accent: "#7c3aed",
  },
  {
    title: "Personal Portfolio",
    desc: "A vivid pastel pop-art portfolio with SVG progress rings, scrolling marquee, and pure CSS animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    tech: ["React", "Vite", "Lucide React", "CSS Animations"],
    demo: "#",
    github: "#",
    accent: "#0ea5e9",
  },
  {
    title: "Crochet Business Landing Page",
    desc: "Pastel-aesthetic e-commerce landing page for @crochetbyhana with live weather API and product listings.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tech: ["React", "Framer Motion", "Axios", "REST API"],
    demo: "#",
    github: "#",
    accent: "#ec4899",
  },
  {
    title: "Real Estate Website",
    desc: "Modern property listing platform with advanced filters, map integration, and responsive design.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tech: ["React", "TypeScript", "Figma"],
    demo: "#",
    github: "#",
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
    { name: "Figma / UI-UX", icon: <SiFigma color="#F24E1E" /> },
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
  ],
};

export const ABOUT_CARDS = [
  { label: "BSc Fashion Design", sub: "TBAC College, 2022–2025" },
  { label: "Frontend Focused", sub: "React · TypeScript · CSS" },
  { label: "Creative Background", sub: "Figma · UI-UX · Visual Design" },
  { label: "Dubai-Ready", sub: "Open to relocation & remote" },
];

export const HERO_WORDS = [
  "Full Stack Developer",
  "React + Node.js Engineer",
  "UI/UX Enthusiast",
  "Creative Coder",
];