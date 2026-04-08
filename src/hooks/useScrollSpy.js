import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/index.jsx";

export function useScrollSpy() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map((id) => document.getElementById(id));
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActive(NAV_LINKS[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}

export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}