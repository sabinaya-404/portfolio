import './Contact.css'
import {FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'
function Contact() {
    return (
        <section id="contact" className="content-section contact-section">
        <p className="section-label">05 — CONTACT</p>

        <h2>WANT TO YAP?</h2>

        <p className="contact-text">
          Got an interesting project or question,
          You can find me here
        </p>
        <div className="contact-links">
  <a
    href="https://github.com/sabinaya-404"className="contact-link contact-github" target="_blank"
    rel="noopener noreferrer">
    <span>GITHUB</span>
    <FaGithub size={32} />
  </a>

  <a
    href="mailto:sabinayakhadka3@gmail.com"
    className="contact-link contact-email"
  >
    <span>EMAIL</span>
    <FaEnvelope size={32} />
  </a>

  <a href="https://www.instagram.com/sbkh_21/"
    className="contact-link contact-instagram"
    target="_blank" rel="noopener noreferrer">
    <span>INSTAGRAM</span>
    <FaInstagram size={32} />
  </a>
</div>  
      </section>
    )
}
export default Contact