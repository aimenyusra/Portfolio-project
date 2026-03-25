import { motion } from "framer-motion";
import { Code2, Terminal, Wrench, Zap, Layers, Sparkles } from "lucide-react";
import FadeUp from "../components/Fadeup";
import SectionLabel from "../components/SectionLabel";
import { SKILLS } from "../data";
import styles from "./Skills.module.css";

const CATEGORY_META = {
  Frontend: { Icon: Code2,    colorKey: "violet" },
  Backend:  { Icon: Terminal, colorKey: "cyan"   },
  Tools:    { Icon: Wrench,   colorKey: "emerald" },
};

export default function Skills() {
  return (
    <section id="Skills" className={styles.section}>
      <div className={`${styles.bgGrid} bg-grid-sm`} />

      <div className="container">
        <FadeUp className={styles.header}>
          <SectionLabel>Expertise</SectionLabel>
          <h2 className={styles.heading}>
            Technical{" "}
            <span className="gradient-text-violet-cyan">Skills</span>
          </h2>
        </FadeUp>

        {/* Skill Category Cards */}
        <div className={styles.grid}>
          {Object.entries(SKILLS).map(([cat, items], ci) => {
            const { Icon, colorKey } = CATEGORY_META[cat];
            return (
              <FadeUp key={cat} delay={ci * 0.1}>
                <div className={`${styles.card} ${styles[`card_${colorKey}`]}`}>
                  <div className={`${styles.cardHeader} ${styles[`header_${colorKey}`]}`}>
                    <Icon size={18} />
                    <h3 className={styles.cardTitle}>{cat}</h3>
                  </div>
                  <div className={styles.skillBadges}>
                    {items.map((skill, si) => (
                      <motion.span
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.1 + si * 0.05 }}
                        whileHover={{ scale: 1.08 }}
                        className={`${styles.skillBadge} ${styles[`badge_${colorKey}`]}`}
                      >
                        <span>{skill.icon}</span>
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Highlight Strip */}
        <FadeUp delay={0.3} className={styles.highlights}>
          {[
            { Icon: Zap,      label: "Vite-powered builds" },
            { Icon: Layers,   label: "Component-driven architecture" },
            { Icon: Sparkles, label: "Fashion × Tech crossover" },
          ].map(({ Icon, label }) => (
            <div key={label} className={styles.highlightItem}>
              <span className={styles.highlightIcon}><Icon size={20} /></span>
              {label}
            </div>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}