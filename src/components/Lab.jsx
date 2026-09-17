import './Lab.css'
import labExperiments from './labData'
function Lab() {
    return (
         <section id="lab" className="content-section lab-section">
      <p className="section-label">04 / LAB</p>
      <p className="section-intro">
  Things I break, investigate, modify, and occasionally fix. Mostly by figuring out what went wrong.
</p>
      <div className="lab-grid">
        {labExperiments.map((lab) => (
          <article key={lab.id} className={`lab-card ${lab.colorClass}`}>
            <p className="lab-number">{lab.id}</p>
            <h3>{lab.title}</h3>
            <p>{lab.description}</p>
          </article>
        ))}
      </div>
    </section>
    )
}
export default Lab