import { useEffect, useState } from "react";
import { useForm } from "@formspree/react";
import "./Contact.css";
import { FaGithub, FaInstagram, FaEnvelope, FaCheck } from "react-icons/fa";

function Contact() {
  const [state, handleSubmit] = useForm("mqpakbdb");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sabinayakhadka3@gmail.com");
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="content-section contact-section">
      <p className="section-label">05 / CONTACT</p>

      <h2>WANT TO YAP?</h2>

      <p className="contact-text">
        Got something interesting to build, break, or talk about? Say hi.
      </p>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
        aria-label="Contact form"
      >
        <input
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
          className="contact-honeypot"
          aria-hidden="true"
        />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">YOUR NAME</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              minLength={2}
              maxLength={80}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">YOUR EMAIL</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">WHAT'S UP?</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project, question, collaboration, random thought..."
            minLength={3}
            maxLength={120}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write whatever you came here to say."
            rows="7"
            minLength={10}
            maxLength={2000}
            required
          />
        </div>

        <button
          type="submit"
          className="contact-submit"
          disabled={state.submitting}
        >
          {state.submitting ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {state.succeeded && (
          <p className="form-success" role="status">
            Message sent. I'll get back to you soon.
          </p>
        )}
        {state.errors && (
          <p className="form-error" role="alert">
            Couldn't send the message. Please try again.
          </p>
        )}
      </form>

      <div className="contact-divider">
        <span>OR FIND ME ELSEWHERE</span>
      </div>

      <div className="contact-links">
        <a
          href="https://github.com/sabinaya-404"
          className="contact-link contact-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GITHUB</span>
          <FaGithub size={32} aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          className={`contact-link contact-email ${copied ? "copied" : ""}`}
          title="Copy email address"
        >
          <span>{copied ? "COPIED TO CLIPBOARD!" : "EMAIL (COPY)"}</span>

          {copied ? (
            <FaCheck size={28} aria-hidden="true" />
          ) : (
            <FaEnvelope size={32} aria-hidden="true" />
          )}
        </button>

        <a
          href="https://www.instagram.com/sbkh_21/"
          className="contact-link contact-instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>INSTAGRAM</span>
          <FaInstagram size={32} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
