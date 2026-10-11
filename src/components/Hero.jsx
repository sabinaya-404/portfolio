import "./Hero.css";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="hero-label">YOO, I'M</span>
        <h1>SABINAYA</h1>
        <p className="hero-description">
          I poke at things until I understand why they work. Sometimes they stop
          working first＞﹏＜
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-dark">
            VIEW MY WORK{" "}
          </a>
          <a href="#contact" className="button button-pink">
            CONTACT ME
          </a>
        </div>
      </motion.div>
      <div className="hero-visual">
        <div className="visual-circle"></div>
        <div className="visual-square"></div>
        <div className="visual-window">
          <div className="window-bar">
            <div className="window-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="window-title">sabinaya@dev-station:~</span>
          </div>
          <div className="window-content">
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cmd">whoami</span>
            </div>
            <p className="output">&gt; student, developer, tinkerer</p>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cmd">cat focus.txt</span>
            </div>
            <p className="output">
              &gt; Web, Linux &amp; Android internals
            </p>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cmd">status --current</span>
            </div>
            <p className="output">&gt; probably fixing something I broke</p>
            <div className="terminal-line">
              <span className="prompt">$</span>
              <span className="cursor"></span>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="hero-tag"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        STUDENT · DEVELOPER · TINKERER
      </motion.div>
    </section>
  );
}
export default Hero;