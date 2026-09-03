import {useState} from 'react'
import './Navbar.css'
function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav>
            <a href ="/">SABINAYA</a>
         <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
                    {isMenuOpen ? 'CLOSE' : 'MENU'}
                </button>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                 <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    )
}
export default Navbar