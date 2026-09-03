import './Lab.css'
const labExperiments = [
  {
    id: 'LAB-01',
    title: 'ANDROID TINKERING',
    description: 'Exploring custom ROMs, system modification and how Android works internally, yeeeeah baby I wanna know it all',
    colorClass: 'lab-mint',
  },
   {
    id: 'LAB-02',
    title: 'LINUX EXPERIMENTS',
    description: 'Learning linux by customization, distro-hopping and most deliberately figuring out what I broke, Most of the time its a typo.',
    colorClass: 'lab-blue',
  },
   {
    id: 'LAB-03',
    title: 'REVERSE ENGINEERING',
    description: 'Learning how softwares work by taking things apart especially Android apk decompilation and investigating what happens underneath',
    colorClass: 'lab-pink',
  },
]
function Lab() {
    return (
         <section id="lab" className="content-section lab-section">
      <p className="section-label">04 — LAB</p>
      <p className="section-intro">
        Things I break, investigate, modify and nearly lose my mind on. Mostly a destructor.
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