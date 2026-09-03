  import './Learning.css'
  const learningTopics = [
    {
      id: '01',
      title:'REACT',
      description: 'Learning components, props, state and how React applications are structured.',
      colorClass: 'learning-yellow',
    },
    {
      id: '02',
      title:'JAVASCRIPT',
      description: 'Just got my hands on few months ago, learning, still naive.',
      colorClass: 'learning-pink',
    },
    {
      id: '03',
      title:'CSS',
      description: 'Learning how to actually build interfaces instead of fighting CSS for three hours.',
      colorClass: 'learning-mint',
    },
    {
      id: '04',
      title:'GIT',
      description: 'Learning version control and trying not to start unnecessary Git wars.',
      colorClass: 'learning-blue',
    },
  ]
  function Learning() {
    return (
 <section id="learning" className="content-section learning-section">
      <p className="section-label">03 — CURRENTLY LEARNING</p>
      <h2>STUFFS I'M FIGURING OUT</h2>
      
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