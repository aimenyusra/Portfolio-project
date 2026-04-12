import FadeUp from "../components/Fadeup";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/index.jsx";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="Projects" className={styles.section}>
      <div className={styles.orbTopRight} />

      <div className="container">
        <FadeUp className={styles.header}>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className={styles.heading}>
            Featured{" "}
            <span className="gradient-text-violet-cyan">Projects</span>
          </h2>
          <p className={styles.subtext}>
            A selection of real-world projects that showcase my skills across the full frontend stack.
          </p>
        </FadeUp>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}