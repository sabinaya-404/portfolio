import './Projects.css'
function Projects() {
    return (
        <section id="projects" className="content-section">
        <p className="section-label">02 — PROJECTS</p>

        <h2>THINGS I'M TRYING TO MAKE WORK</h2>
        <div className="project-card">
  <div className="project-top">
    <p className="project-number">NO. 01 — IN PROGRESS</p>
  </div>
  <h3>PORTFOLIO MANAGEMENT SYSTEM</h3>
  <p className="project-description">
    A web application I'm building to manage demat accounts, holdings,
    companies, and IPO news while learning full-stack web development.
  </p>
  <div className="project-tags">
    <span>HTML</span>
    <span>CSS</span>
    <span>JAVASCRIPT</span>
    <span>PHP</span>
    <span>MYSQL</span>
  </div>
  <div className="project-bottom">
   {/* <span>FULL-STACK WEB APP</span><br></br> */}
    <a href="https://github.com/sabinaya-404/portfolio-management-system" 
    className="project-status" target = "_blank" rel = "noopener noreferrer">VIEW ON GITHUB</a>
  </div>
</div>
      </section>
    )
}
export default Projects