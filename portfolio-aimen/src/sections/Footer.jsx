import { motion } from "framer-motion";
import { GitBranch, Mail, ExternalLink } from "lucide-react";
import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { Icon: GitBranch,       href: "#",                          label: "GitHub" },
  { Icon: Mail,         href: "mailto:aimen@example.com",   label: "Email" },
  { Icon: ExternalLink, href: "#",                          label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoGradient}>Aimen</span>
          <span className={styles.logoDot}>.</span>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Aimen Yusra. Built with React.
        </p>

        <div className={styles.socials}>
          {SOCIAL_LINKS.map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              whileHover={{ scale: 1.2 }}
              className={styles.socialIcon}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}