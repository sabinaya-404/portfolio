import './Learning.css'
import learningTopics from './learningData'

function Learning() {
  return (
    <section id="learning" className="content-section learning-section">
      <p className="section-label">03 / CURRENTLY LEARNING</p>
      <h2>STUFF I'M FIGURING OUT</h2>

      <div className="learning-grid">
        {learningTopics.map((topic) => (
          <div key={topic.id} className={`learning-card ${topic.colorClass}`}>
            <span>{topic.id}</span>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Learning