import { motion } from "framer-motion";
import { Globe, GitBranch } from "lucide-react";
import FadeUp from "./FadeUp.jsx";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index }) {
  return (
    <FadeUp delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={styles.card}
        style={{ "--accent": project.accent }}
      >
        {/* Image */}
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
          <span className={styles.accentDot} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.desc}</p>

          {/* Tech Badges */}
          <div className={styles.badges}>
            {project.tech.map((t) => (
              <span key={t} className={styles.badge}>{t}</span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={styles.btnDemo}
            >
              <Globe size={13} /> Live Demo
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={styles.btnGithub}
            >
              <GitBranch size={13} /> GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </FadeUp>
  );
}