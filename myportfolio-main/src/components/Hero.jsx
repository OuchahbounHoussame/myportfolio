export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hello-text">Hello, I&apos;m</p>
        <h1 id="hero-title">H84 Lab</h1>
        <p className="hero-subtitle">Web Developer · YouTuber · Course Creator</p>
        <p className="hero-text">I build modern web projects with React and share simple programming lessons to help students learn web development step by step.</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">Explore My Projects</a>
          <a className="btn" href="#courses">Courses</a>
          <a className="btn muted-button" href="#youtube">YouTube Coming Soon</a>
        </div>
      </div>
      <div className="brand-card" aria-label="H84 Lab brand mark"><span>H84</span><strong>LAB</strong></div>
    </section>
  );
}
