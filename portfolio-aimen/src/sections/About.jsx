import { MapPin } from "lucide-react";
import FadeUp from "../components/Fadeup";
import SectionLabel from "../components/SectionLabel";
import { ABOUT_CARDS } from "../data/index.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="About" className={styles.section}>
      <div className={styles.orbBottomLeft} />

      <div className="container">
        <div className={styles.grid}>
          {/* Image Column */}
          <FadeUp>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />
              <div className={styles.imageCard}>
                <div className={styles.avatarArea}>
                  <div className={styles.avatarCircle}>A</div>
                  <div className={styles.avatarName}>Aimen Yusra</div>
                  <div className={styles.avatarRole}>Frontend Developer</div>
                  <div className={styles.avatarLocation}>
                    <MapPin size={11} /> India → Dubai
                  </div>
                </div>
              </div>
              <span className={styles.dotTopRight} />
              <span className={styles.dotBottomLeft} />
            </div>
          </FadeUp>

          {/* Text Column */}
          <FadeUp delay={0.15}>
            <SectionLabel>About Me</SectionLabel>
            <h2 className={styles.heading}>
              Where{" "}
              <span className="gradient-text-violet-cyan">Design Meets</span>{" "}
              Code
            </h2>

            <div className={styles.paragraphs}>
              <p>
                I'm a frontend developer with a BSc in Fashion Design from Tamil Nadu, India —
                a combination that gives me a rare edge: I think visually and build precisely.
                My design intuition means I don't just implement UIs, I craft them.
              </p>
              <p>
                My stack centers around React, Vite, TypeScript, and Tailwind CSS, with experience
                in Node.js and MongoDB for full-stack work. Every project is an opportunity to push
                both aesthetics and performance simultaneously.
              </p>
              <p>
                Currently targeting the Dubai tech ecosystem, I'm eager to join a team where clean
                design and scalable frontend architecture are valued — whether in fashion-tech, retail,
                or SaaS.
              </p>
            </div>

            <div className={styles.infoGrid}>
              {ABOUT_CARDS.map((item) => (
                <div key={item.label} className={styles.infoCard}>
                  <div className={styles.infoLabel}>{item.label}</div>
                  <div className={styles.infoSub}>{item.sub}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}