import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'projects', 'about']

      for (const id of sections) {
        const el = document.getElementById(id)

        if (el) {
          const rect = el.getBoundingClientRect()

          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(id)
            return
          }
        }
      }

      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav>
      <a href="/" className="nav-brand">SABINAYA</a>

      <div className="nav-right">
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>

          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar