import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, GitBranch, ExternalLink } from "lucide-react";
import FadeUp from "../components/Fadeup";
import SectionLabel from "../components/SectionLabel";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const fields = [
    { key: "name",  label: "Your Name",      type: "text",  placeholder: "Jane Smith" },
    { key: "email", label: "Email Address",  type: "email", placeholder: "jane@example.com" },
  ];

  const socials = [
    { icon: <Mail size={14} />,         label: "aimen@example.com", href: "mailto:aimen@example.com" },
    { icon: <GitBranch size={14} />,       label: "GitHub",            href: "#" },
    { icon: <ExternalLink size={14} />, label: "LinkedIn",          href: "#" },
  ];

  return (
    <section id="Contact" className={styles.section}>
      <div className={styles.centerGlow} />

      <div className={`container ${styles.inner}`}>
        <FadeUp className={styles.header}>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className={styles.heading}>
            Let's{" "}
            <span className="gradient-text-violet-cyan">Work Together</span>
          </h2>
          <p className={styles.subtext}>
            Have an opportunity or just want to chat? My inbox is always open.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className={styles.card}>
            {/* Text inputs */}
            {fields.map(({ key, label, type, placeholder }, i) => (
              <motion.div
                key={key}
                className={styles.fieldGroup}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <label className={styles.label}>{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className={styles.input}
                />
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              className={styles.fieldGroup}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className={styles.label}>Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${styles.input} ${styles.textarea}`}
              />
            </motion.div>

            {/* Submit */}
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(124,58,237,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className={styles.submitBtn}
            >
              {sent ? (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={styles.sentMsg}
                >
                  ✅ Message Sent!
                </motion.span>
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </motion.button>
          </div>
        </FadeUp>

        {/* Social pills */}
        <FadeUp delay={0.2} className={styles.socials}>
          {socials.map(({ icon, label, href }) => (
            <a key={label} href={href} className={styles.socialPill}>
              {icon} {label}
            </a>
          ))}
        </FadeUp>
      </div>
    </section>
  );
}