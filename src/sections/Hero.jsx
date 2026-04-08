import { useState, useEffect,} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { HERO_WORDS } from "../data/index.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);


  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % HERO_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const codeLines = [
    { cls: styles.lineViolet,  text: "const Aimen = () => ({" },
    { cls: styles.lineCyan,    text: "  name: 'Aimen Yusra'," },
    { cls: styles.lineCyan,    text: "  role: 'Full Stack Dev'," },
    { cls: styles.lineCyan,    text: "  location: '→ Dubai'," },
    { cls: styles.lineEmerald, text: "  stack: 'React + Node'," },
    { cls: styles.lineYellow,  text: "  passion: 'UI/UX + APIs'," },
    { cls: styles.lineViolet,  text: "});" },
    { cls: styles.lineMuted,   text: "export default Aimen;" },
  ];

  return (
    <section id="Home" className={styles.section}>
      <div className={styles.bgGrid} />
      <div className={styles.orbViolet} />
      <div className={styles.orbCyan} />

      <div className={styles.container}>
        {/* Text Column */}
        <div className={styles.textCol}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.badge}
          >
            <Sparkles size={12} />
            Open to Full Stack opportunities in Dubai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.heading}
          >
            Hi, I'm <span className={styles.gradientText}>Aimen</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.wordSwapWrapper}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={wordIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className={styles.wordSwap}
              >
                {HERO_WORDS[wordIdx]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.description}
          >
            I'm a full stack developer with a passion for crafting seamless web experiences. With a background in fashion design, I bring a unique blend of creativity and technical skill to every project. I'm currently open to new opportunities in Dubai, where I can contribute my expertise in React, Node.js, and UI/UX design to build impactful digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={styles.stackPills}
          >
            {["React", "Node.js", "MongoDB", "TypeScript", "REST APIs"].map((s) => (
              <span key={s} className={styles.stackPill}>{s}</span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.buttons}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("Projects")}
              className={styles.btnPrimary}
            >
              View Projects <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("Contact")}
              className={styles.btnSecondary}
            >
              Contact Me <Mail size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={styles.stats}
          >
            {[
              { n: "4+", label: "Projects Built" },
              { n: "10+", label: "Technologies" },
              { n: "2025", label: "Graduate" },
            ].map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.n}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Illustration Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={styles.illustrationCol}
        >
          <div className={styles.ring1} />
          <div className={styles.ring2} />

          <div className={styles.codeCard}>
            <div className={styles.codeCardOverlay} />
            <div className={styles.codeContent}>
              <div className={styles.trafficLights}>
                <span className={styles.red} />
                <span className={styles.yellow} />
                <span className={styles.green} />
              </div>
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className={`${styles.codeLine} ${line.cls}`}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
          </div>

          {[
            { label: "Full Stack Dev", icon: "⚡", cls: styles.badgeTopRight },
            { label: "Dubai Ready",    icon: "🇦🇪", cls: styles.badgeBottomLeft },
          ].map((b) => (
            <motion.div
              key={b.label}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={`${styles.floatingBadge} ${b.cls}`}
            >
              <span>{b.icon}</span> {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("Projects")}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={styles.scrollHint}
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}