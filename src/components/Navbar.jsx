import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <nav>
      <a href="/" className="nav-brand">SABINAYA</a>

      <div className="nav-right">
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle color theme"
        >
          {theme === 'light' ? '☾ DARK' : '☼ LIGHT'}
        </button>

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