import './Projects.css'
function Projects() {
    return (
        <section id="projects" className="content-section">
        <p className="section-label">02 / PROJECTS</p>

        <h2>THINGS I'M TRYING TO MAKE WORK</h2>
        <div className="project-card">
  <div className="project-top">
    <p className="project-number">NO. 01 / IN PROGRESS</p>
  </div>
  <h3>PORTFOLIO MANAGEMENT SYSTEM</h3>
<p className="project-description">
  A web application for managing demat accounts, holdings, companies,
  and IPO news, built with PHP and MySQL.
</p>
<ul className="project-features">
  <li>Manage multiple demat accounts</li>
  <li>Track holdings and companies</li>
  <li>Manage IPO news through an admin panel</li>
</ul>
  <div className="project-tags">
    <span>HTML</span>
    <span>CSS</span>
    <span>JAVASCRIPT</span>
    <span>PHP</span>
    <span>MYSQL</span>
  </div>
  <div className="project-bottom">
    <a href="https://github.com/sabinaya-404/portfolio-management-system" 
    className="project-link" target = "_blank" rel = "noopener noreferrer">VIEW ON GITHUB</a>
  </div>
</div>
      </section>
    )
}
export default Projects