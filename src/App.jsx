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

        <h2>WHY I LIKE BUILDING THINGS</h2>

        <p className="about-text">
          I'm a BCA student learning web development and figuring things out by actually building it, rather memorizing definitions.
          </p>
          <p className="about-text"> Outside of web development, I m interested in Android, Linux and reverse engineering, if somethings can be tinkered with, I'll probably spend my day tinkering it.</p>
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

        <h2>THINGS I'M BUILDING</h2>
        <div className="project-card">
          <p className="project-number">NO.1--IN PROGRESS</p>
          <h3>PORTFOLIO MANAGEMENT SYSTEM</h3>
          <p>
            A web application I'm building to manage demat accounts, holdings, companies, and IPO news while learning web development.
          </p>
          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
            <span>PHP</span>
            <span>MYSQL</span>
          </div>
          <span className="project-status">BUILDING</span>
        </div>
      </section>


      {/*Learning Section*/}
      <section id="learning" className="content-section learning-section">
        <p className="section-label">03-CURRENTLY LEARNING</p>
        <h2>STUFFS I'M FIGURING OUT</h2>
        <div className="learning-grid">
          <div className="learning-card learning-yellow">
            <span>01</span>
            <h3>REACT</h3>
            <p> Learning components, props, state and how React applications are structured</p>
          </div>
          <div className="learning-card learning-pink">
            <span>02</span>
            <h3>JAVASCRIPT</h3>
            <p>
              Just got my hands on few months ago, still naive.
            </p>
          </div>
          <div className="learning-card learning-mint">
            <span>03</span>
            <h3>CSS</h3>
            <p>
              Learning how to actually build interfaces instead of fighting CSS for three hours.
            </p>
          </div>
          <div className="learning-card learning-blue">
            <span>04</span>
            <h3>GIT</h3>
            <p>
              Learning version control and trying not to start unnecessary Git wars.
            </p>
          </div>
        </div>
      </section>


      {/* LAB SECTION */}
      <section id="lab" className="content-section lab-section">
        <p className="section-label">04 -LAB</p>
        <p className="section-intro">Things I break, investigate, modify and nearly lose my minds on. Mostly a destructor.</p>
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
        <p className="section-label">05 — CONTACT</p>

        <h2>CONNECT WITH ME</h2>

        
      </section>
    </>
  )
}
export default App