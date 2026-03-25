import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { HERO_WORDS } from "../data";
import styles from "./Hero.module.css";

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % HERO_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const codeLines = [
    { color: styles.lineViolet, text: "const Aimen = () => ({" },
    { color: styles.lineCyan, text: "  name: 'Aimen Yusra'," },
    { color: styles.lineCyan, text: "  role: 'Frontend Dev'," },
    { color: styles.lineCyan, text: "  location: '→ Dubai'," },
    { color: styles.lineEmerald, text: "  passion: 'UI/UX + Code'," },
    { color: styles.lineViolet, text: "});" },
    { color: styles.lineMuted, text: "" },
    { color: styles.lineYellow, text: "export default Aimen;" },
  ];

  return (
    <section id="Home" className={styles.section}>
      {/* Background */}
      <div className={`${styles.bgGrid} bg-grid`} />
      <div className={`${styles.orbViolet} orb orb-violet`} />
      <div className={`${styles.orbCyan} orb orb-cyan`} />

      <div className={`container ${styles.grid}`}>
        {/* ── Text Column ── */}
        <div className={styles.textCol}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.badge}
          >
            <Sparkles size={12} />
            Open to opportunities in Dubai
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.heading}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Aimen</span>
          </motion.h1>

          {/* Animated word swap */}
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
            Fashion design meets frontend engineering. I craft fast, beautiful,
            and accessible digital experiences — blending creative intuition
            with clean, scalable code.
          </motion.p>

          {/* CTA Buttons */}
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

          {/* Stats */}
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

        {/* ── Illustration Column ── */}
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
                  className={`${styles.codeLine} ${line.color}`}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          {[
            { label: "React Dev", icon: "⚛️", className: styles.badgeTopRight },
            { label: "Dubai Ready", icon: "🇦🇪", className: styles.badgeBottomLeft },
          ].map((b) => (
            <motion.div
              key={b.label}
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className={`${styles.floatingBadge} ${b.className}`}
            >
              <span>{b.icon}</span> {b.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
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