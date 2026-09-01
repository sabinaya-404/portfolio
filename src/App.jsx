import Navbar from './components/Navbar'

function App() {
  return (
    <>
      {/* Top navigation of the website */}
      <Navbar />

      {/* Intro of me */}
      <section className="hero">
        <div className="hero-content">
         
          <p className="hero-label">HELLO, I'M</p>

          
          <h1>SABINAYA</h1>

          
          <p className="hero-description">
            I like figuring out how things works and reverse engineer it.
          </p>

          
          <div className="hero-actions">
            
            <a href="#projects" className="button button-dark">
              VIEW MY WORK 
            </a>

          
            <a href="#contact" className="button button-pink">
              CONTACT ME 
            </a>
          </div>
        </div>

        
        <div className="hero-tag">
          RETARD · DEVELOPER · TINKERER
        </div>
      </section>

      {/* About section */}
      <section id="about" className="content-section">
        <p className="section-label">01 — ABOUT</p>

        <h2>ABOUT ME</h2>

        <p>
          Currently learning web development.Interested in Linux and Android.
        </p>
        <div className="about-tags">
          <span>WEB DEVELOPMENT</span>
           <span>LINUX</span>
            <span>ANDROID</span>
             <span>EXPERIMENTING</span>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="content-section">
        <p className="section-label">02 — PROJECTS</p>

        <h2>THINGS I'VE BUILT</h2>

        <p>
          Projects, experiments, and random things I've built while learning.
        </p>
      </section>

      {/* This is the fucking lab section where I showcase experiments and tinkering */}
      <section id="lab" className="content-section lab-section">
        <p className="section-label">03 -LAB</p>
        <p className="section-intro">Things I break, investigate, modify and nearly fuck my minds on. Mostly a destructor.</p>
        <div className="lab-grid">
          <article className="lab-card lab-mint">
            <p className="lab-number">LAB-01</p>
            <h3>ANDROID TINKERING</h3>
            <p>Exploring custom ROMs, system modifications and how android works internally,yeeeah baby!</p>
          </article>
          <article className="lab-card lab-blue">
            <p className="lab-number">LAB-02</p>
            <h3>LINUX EXPERIMENTS</h3>
            <p>
              Learning linux by customization, distro-hopping and most deliberately figuring out what I broke.
            </p>
          </article>
          <article className="lab-card lab-pink">
            <p className="lab-number">LAB-03</p>
            <h3>REVERSE ENGINEERING</h3>
            <p>
              Learning how softwares works by taking things apart, especially android apks decompilation, and investigating what happens underneath.
            </p>
          </article>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="content-section">
        <p className="section-label">03 — CONTACT</p>

        <h2>LET'S TALK and STFU</h2>

        
      </section>
    </>
  )
}

export default App