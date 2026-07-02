export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="availability"><span /> Building H84 Lab in public</div>
        <h1 id="hero-title">H84 Lab</h1>
        <p className="hero-subtitle">Developer · YouTuber · Courses · Personal Brand</p>
        <p className="hero-text">
          I create modern web projects with React and share simple programming lessons
          to help students learn web development, JavaScript, SQL, C++, and computer
          science basics.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">Explore Projects</a>
          <a className="btn" href="#courses">View Courses</a>
          <a className="btn muted-button" href="#youtube">YouTube Coming Soon</a>
        </div>
      </div>

      <aside className="brand-showcase" aria-label="H84 Lab brand profile">
        <span className="lab-label">H84 / 2026</span>
        <div className="brand-orbit"><span>84</span></div>
        <h2>A learning lab for student developers.</h2>
        <p>Web projects, clear lessons, honest progress, and practical computer science.</p>
        <div className="showcase-stack"><span>React</span><span>JavaScript</span><span>SQL</span><span>C++</span></div>
      </aside>
    </section>
  );
}
