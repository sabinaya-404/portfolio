import { useState } from 'react'
import './Contact.css'
import { FaGithub, FaInstagram, FaEnvelope, FaCheck } from 'react-icons/fa'

function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sabinayakhadka3@gmail.com')
    setCopied(true)

    // Reset back to normal after 2 seconds (2000ms)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section id="contact" className="content-section contact-section">
      <p className="section-label">05 — CONTACT</p>

      <h2>WANT TO YAP?</h2>

      <p className="contact-text">
        Got an interesting project or question,
        You can find me here
      </p>

      <div className="contact-links">
        {/* GitHub Link */}
        <a
          href="https://github.com/sabinaya-404"
          className="contact-link contact-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GITHUB</span>
          <FaGithub size={32} />
        </a>

        {/* Copy Email Button */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className={`contact-link contact-email ${copied ? 'copied' : ''}`}
          title="Click to copy email address"
        >
          <span>{copied ? 'COPIED TO CLIPBOARD!' : 'EMAIL (COPY)'}</span>
          {copied ? <FaCheck size={28} /> : <FaEnvelope size={32} />}
        </button>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/sbkh_21/"
          className="contact-link contact-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>INSTAGRAM</span>
          <FaInstagram size={32} />
        </a>
      </div>  
    </section>
  )
}

export default Contact