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
<div className="project-card">
  <div className="project-top">
    <p className="project-number">NO. 02 / IN PROGRESS</p>
  </div>
  <h3>LINUX SYSTEM DASHBOARD</h3>
<p className="project-description">
  A C/Linux system monitoring dashboard providing real-time system statistics
  through terminal UI and HTTP API interfaces.
</p>
<ul className="project-features">
  <li>Real-time system statistics monitoring</li>
  <li>Terminal User Interface (TUI) for system interaction</li>
  <li>HTTP API for programmatic access</li>
  <li>Filesystem information from /proc and /sys</li>
  <li>Network socket statistics</li>
</ul>
  <div className="project-tags">
    <span>C</span>
    <span>Linux</span>
    <span>/proc</span>
    <span>/sys</span>
    <span>POSIX Sockets</span>
    <span>HTTP</span>
  </div>
  <div className="project-bottom">
    <a href="https://github.com/sabinaya-404/Linux_System_Dashboard"
    className="project-link" target = "_blank" rel = "noopener noreferrer">VIEW ON GITHUB</a>
  </div>
</div>
      </section>
    )
}
export default Projects