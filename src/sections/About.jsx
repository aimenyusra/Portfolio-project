import { MapPin } from "lucide-react";
import FadeUp from "../components/FadeUp";
import SectionLabel from "../components/SectionLabel";
import { ABOUT_CARDS } from "../data";
import styles from "./About.module.css";
import avatarImg from "../assets/avatar.png"; // place your image here

export default function About() {
  return (
    <section id="About" className={styles.section}>
      <div className={styles.orbBottomLeft} />

      <div className="container">
        <div className={styles.grid}>
          {/* Image Column */}
          <FadeUp>
            <div className={styles.avatarContainer}>
              {/* glow */}
              <div className="styles.avatarGlow"></div>
              {/* png avatar */}
              <img src={avatarImg}
              alt="Aimen Yusra"
              className={styles.avatar}
               />
               {/* info below avatar */}
              <div className={styles.avatarInfo}>
                <h3>Aimen Yusra</h3>
                <p>Full Stack Developer</p>
                <div className= {styles.location}>
                  <MapPin size={14} /> India → Dubai
                </div>
              </div>
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
          I’m a full-stack developer focused on building modern, scalable, and user-centric web applications.
           I enjoy turning complex problems into clean, intuitive, and high-performing digital experiences.
              </p>
              <p>
            My core stack includes React, TypeScript, and modern CSS on the frontend, combined with Node.js, Express, and MongoDB on the backend. I work across the full development lifecycle — from designing responsive interfaces to building robust APIs and managing data efficiently
              </p>
              <p>
                I’m particularly interested in creating products that balance performance with great design. Currently, I’m seeking opportunities where I can contribute to real-world projects, grow as a full-stack developer, and build impactful solutions in collaborative environments.
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