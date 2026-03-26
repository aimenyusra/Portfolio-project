import React from "react";
import FadeUp from "../components/Fadeup";
import SectionLabel from "../components/SectionLabel";
import { SKILLS } from "../data/index.jsx";
import styles from "./Skills.module.css";

function MarqueeStrip({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className={styles.marqueeWrapper}>
      <div className={`${styles.marqueeTrack} ${reverse ? styles.reverse : ""}`}>
        {doubled.map((skill, i) => (
          <div key={i} className={styles.marqueeItem}>
            <span className={styles.marqueeIcon}>{skill.icon}</span>
            <span className={styles.marqueeName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CATEGORY_CONFIG = {
  Frontend: { label: "Frontend",  color: "violet", reverse: false },
  Backend:  { label: "Backend",   color: "cyan",   reverse: true  },
  Tools:    { label: "Tools",     color: "emerald", reverse: false },
};

export default function Skills() {
  return (
    <section id="Skills" className={styles.section}>
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <FadeUp className={styles.header}>
          <SectionLabel>Expertise</SectionLabel>
          <h2 className={styles.heading}>
            Technical <span className={styles.gradientText}>Skills</span>
          </h2>
          <p className={styles.subtext}>
            Full stack capabilities — from UI to database.
          </p>
        </FadeUp>
      </div>

      {/* Marquee strips — full width, outside container */}
      <div className={styles.strips}>
        {Object.entries(SKILLS).map(([cat, items]) => {
          const config = CATEGORY_CONFIG[cat];
          return (
            <FadeUp key={cat}>
              <div className={styles.stripRow}>
                <div className={`${styles.stripLabel} ${styles[`label_${config.color}`]}`}>
                  {config.label}
                </div>
                <div className={styles.stripTrackOuter}>
                  {/* Fade edges */}
                  <div className={styles.fadeLeft} />
                  <div className={styles.fadeRight} />
                  <MarqueeStrip items={items} reverse={config.reverse} />
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}