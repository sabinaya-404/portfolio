  import './Learning.css'
  function Learning() {
    return (
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
    )
}
export default Learning