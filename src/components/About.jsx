import "./About.css";
function About() {
  return (
    <section id="about" className="content-section">
      <p className="section-label">01 / ABOUT</p>
      <h2>WHY I LIKE BUILDING THINGS</h2>
      <p className="about-text">
        I'm a student learning web development by building things, breaking
        them, and figuring out why they broke instead of just memorizing how
        they work.
      </p>
      <p className="about-text">
        {" "}
        Outside of web development, I'm interested in Android, Linux, and
        reverse engineering. If something can be tinkered with, I'll probably
        spend my day tinkering with it.
      </p>
      <div className="about-tags">
        <span>WEB DEVELOPMENT</span>
        <span>LINUX</span>
        <span>ANDROID</span>
        <span>REVERSE ENGINEERING</span>
      </div>
    </section>
  );
}
export default About;
