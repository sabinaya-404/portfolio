import './Hero.css'
function Hero() {
    return (
        <section className="hero">
        <div className="hero-content">
          <p className="hero-label">YOO, I'M</p>
          <h1>SABINAYA</h1>
          <p className="hero-description">
            I like figuring out how things works and reverse engineer it.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="button button-dark">
              VIEW MY WORK </a>
            <a href="#contact" className="button button-pink">
              CONTACT ME 
            </a>
          </div>
        </div>
        <div className="hero-visual">
  <div className="visual-circle"></div>
  <div className="visual-square"></div>
  <div className="visual-window">
    <div className="window-bar">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="window-screen">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</div>
        <div className="hero-tag">
          RETARD · DEVELOPER · TINKERER
        </div>
      </section>
    )
}
export default Hero