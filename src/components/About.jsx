import './About.css'
function About() {
    return (
        <section id="about" className="content-section">
        <p className="section-label">01 — ABOUT</p>
        <h2>WHY I LIKE BUILDING THINGS</h2>
        <p className="about-text">
          I'm a BCA student learning web development and figuring things out by actually building things rather than memorizing definitions.
          </p>
          <p className="about-text"> Outside of web development, I'm interested in Android, Linux and reverse engineering, if something can be tinkered with, I'll probably spend my day tinkering it.

          </p>
        <div className="about-tags">
          <span>WEB DEVELOPMENT</span>
           <span>LINUX</span>
            <span>ANDROID</span>
             <span>EXPERIMENTING</span>
        </div>
      </section>

    )
}
export default About