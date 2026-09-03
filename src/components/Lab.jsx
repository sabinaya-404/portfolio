import './Lab.css'
function Lab() {
    return (
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
    )
}
export default Lab