import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollSpy, useScrolled } from "../hooks/useScrollSpy";
import { NAV_LINKS } from "../data";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy();
  const scrolled = useScrolled(20);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("Home")}
          whileHover={{ scale: 1.05 }}
          className={styles.logo}
        >
          <span className={styles.logoGradient}>Aimen</span>
          <span className={styles.logoDot}>.</span>
        </motion.button>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`${styles.navLink} ${active === link ? styles.navLinkActive : ""}`}
            >
              {active === link && (
                <motion.span
                  layoutId="nav-pill"
                  className={styles.activePill}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {link}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("Contact")}
            className={styles.hireBtn}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileMenu}
          >
            <div className={styles.mobileMenuInner}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className={`${styles.mobileLink} ${active === link ? styles.mobileLinkActive : ""}`}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}