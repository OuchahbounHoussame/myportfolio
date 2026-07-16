import Footer from "./components/Footer";

const links = {
  github: "https://github.com/OuchahbounHoussame",
  linkedin: "https://www.linkedin.com/in/houssame-ouchahboun-862295400/",
  email: "mailto:ouchahbounhoussame@email.com",
};

const modules = [
  { number: "01", color: "var(--p1)", title: "Web Foundations", meta: "6 lessons · HTML · CSS · responsive design", cards: [["1.1", "How the web works", ["Browser and server", "Your developer tools", "Create your first page"]], ["1.2", "HTML & CSS", ["Page structure", "Flexbox and Grid", "Responsive layouts"]]] },
  { number: "02", color: "var(--p2)", title: "JavaScript", meta: "8 lessons · DOM · events · practical projects", cards: [["2.1", "JavaScript basics", ["Variables and functions", "Conditions and loops", "Clean code habits"]], ["2.2", "Interactive pages", ["DOM manipulation", "Events and forms", "Mini project"]]] },
  { number: "03", color: "var(--p3)", title: "React", meta: "10 lessons · components · state · deployment", cards: [["3.1", "React from zero", ["Components and props", "State and events", "Reusable interfaces"]], ["3.2", "Build & deploy", ["Project structure", "Modern portfolio", "Publish with Vercel"]]] },
  { number: "04", color: "var(--p4)", title: "SQL & Data", meta: "6 lessons · queries · joins · data models", cards: [["4.1", "SQL essentials", ["Tables and relations", "SELECT and WHERE", "Useful queries"]], ["4.2", "Real data project", ["Joins explained", "Student management", "Organize your data"]]] },
  { number: "05", color: "var(--p5)", title: "Portfolio & Career", meta: "5 lessons · GitHub · CV · portfolio", cards: [["5.1", "Show your work", ["Choose strong projects", "Write case studies", "Portfolio design"]], ["5.2", "Get ready", ["GitHub workflow", "Developer CV", "LinkedIn profile"]]] },
];

export default function App() {
  return (
    <>cd
      <div className="grid-spotlight" aria-hidden="true" />
      <main className="academy-wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-logo" aria-label="H84 Lab"><span>H84</span><small>LAB</small></div>
          <div className="hero-stack" aria-hidden="true">
            <div className="hero-card is-back"><div className="hero-project-card"><span>H84 LAB</span><strong>BUILD<br />YOUR<br />FUTURE.</strong><i>HTML · CSS · JS · REACT</i></div></div>
            <div className="hero-card is-front profile-card"><img src="/images/profile-cv.jpeg" alt="Houssame Ouchahboun" /><div className="profile-caption"><span>WEB DEVELOPER · STUDENT</span><strong>Houssame<br />Ouchahboun</strong></div></div>
          </div>
          <div className="hero-title">
            <span className="top">Hello, I’m Houssame</span>
            <h1 id="hero-title">the mind behind H84 Lab</h1>
            <span className="sub">Web developer building projects and sharing what I learn.</span>
          </div>
          <div className="hero-meta"><strong>WEB DEVELOPER</strong><span>·</span><span>REACT</span><span>·</span><span>STUDENT PROJECTS</span></div>
          <a className="hero-cta" href="#curriculum">Explore my work <span>↓</span></a>
        </section>

        <nav className="toc-bar" aria-label="Course sections"><div className="toc-inner"><span className="toc-label">Jump to</span>{modules.map((module, index) => <a className="toc-chip" style={{ "--accent": module.color }} href={`#part-${module.number}`} key={module.number}><b>{module.number}</b>{module.title}</a>)}<a className="toc-chip" href="#projects"><b>★</b>Projects</a></div></nav>

        <div className="marquee-wrap" aria-label="Technologies you will learn"><div className="marquee"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>SQL</span><span>GitHub</span><span>Vercel</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>SQL</span><span>GitHub</span><span>Vercel</span></div></div>

        <section id="curriculum" className="curriculum"><p className="course-kicker">THE CURRICULUM · H84 LAB</p>{modules.map((module) => <section className="part" id={`part-${module.number}`} style={{ "--c": module.color }} key={module.number}><div className="part-head"><div className="part-num">{module.number}</div><div className="part-info"><h2>{module.title}</h2><p><strong>{module.meta.split(" · ")[0]}</strong> · {module.meta.split(" · ").slice(1).join(" · ")}</p></div><div className="part-orb" /></div><div className="out-grid">{module.cards.map(([number, title, lessons]) => <article className="out-card" key={number}><div className="out-head"><span>{number}</span><h3>{title}</h3></div><ul>{lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}</ul></article>)}</div></section>)}</section>

        <section className="bonus" id="projects"><div className="bonus-head"><h2>Selected projects</h2><span>01 FEATURED</span></div><div className="project-feature"><p>INFINITY SPACE CLUB</p><h3>A digital home for a student space club.</h3><span>React · JavaScript · Responsive UI</span><a href="https://github.com/OuchahbounHoussame/projet-final-web-2" target="_blank" rel="noreferrer">View project ↗</a></div></section>

        <a className="cta-exclusive" href={links.email}><span>LET’S BUILD TOGETHER</span><h2>Have a project<br />in mind?</h2><p>Contact H84 Lab for collaboration, questions, or to follow the journey.</p><b>Email me →</b></a>
      </main>
      <Footer githubUrl={links.github} />
    </>
  );
}
