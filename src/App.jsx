import Footer from "./components/Footer";

const links = {
  github: "https://github.com/OuchahbounHoussame",
  linkedin: "https://www.linkedin.com/in/houssameouchahboun",
  email: "mailto:ouchahbounhoussame@gmail.com",
  phone: "tel:+212704900305",
  cv: "/documents/cv-houssame-ouchahboun.pdf",
};

const competencies = [
  {
    number: "01",
    color: "var(--p1)",
    title: "Web Foundations & UI",
    meta: "HTML5 · CSS3 · Tailwind CSS · Responsive Architecture",
    cards: [
      ["1.1", "Web Architecture", ["Client-server interaction", "Modern developer tooling", "Semantic & accessible HTML5"]],
      ["1.2", "Responsive UI Design", ["Flexbox & Grid layouts", "Tailwind CSS utility styling", "Mobile-first development"]],
    ],
  },
  {
    number: "02",
    color: "var(--p2)",
    title: "JavaScript & TypeScript",
    meta: "ES6+ · TypeScript · DOM Manipulation · Async Logic",
    cards: [
      ["2.1", "Core JavaScript", ["Modern ES6+ syntax & modules", "Functions & closures", "Clean code habits"]],
      ["2.2", "Async & APIs", ["DOM events & form handling", "Fetch API & REST endpoints", "TypeScript typing"]],
    ],
  },
  {
    number: "03",
    color: "var(--p3)",
    title: "React Ecosystem",
    meta: "Component Architecture · State Management · Production Deployments",
    cards: [
      ["3.1", "Component Systems", ["Reusable component patterns", "React Hooks (useState, useEffect)", "State & prop composition"]],
      ["3.2", "Production Delivery", ["Vite build tooling", "Vercel / Netlify deployment", "Performance & UI polish"]],
    ],
  },
  {
    number: "04",
    color: "var(--p4)",
    title: "Backend & Systems",
    meta: "Python · Node.js · RESTful APIs · C/C++ Data Structures",
    cards: [
      ["4.1", "APIs & Services", ["Python backend scripts & logic", "RESTful API architecture", "Node.js essentials"]],
      ["4.2", "Systems & Algorithms", ["Custom structures in C / C++", "Memory & dynamic tracking", "Algorithmic logic"]],
    ],
  },
  {
    number: "05",
    color: "var(--p5)",
    title: "Data & Artificial Intelligence",
    meta: "SQL · Relational Databases · Machine Learning Concepts",
    cards: [
      ["5.1", "Relational Databases", ["Database schema design", "Complex SQL queries & JOINs", "Data integrity & modeling"]],
      ["5.2", "AI Foundations", ["Machine Learning concepts", "Mathematical modeling", "Data-driven problem solving"]],
    ],
  },
];

const education = [
  {
    period: "OCT 2026 – PRESENT",
    degree: "Licence d'Excellence, Artificial Intelligence",
    institution: "Faculté des Sciences Ben M'Sik (FSBM), Casablanca",
    details: "Focus on advanced artificial intelligence, machine learning, algorithmic systems, and data-driven solutions.",
  },
  {
    period: "SEP 2024 – JUL 2026",
    degree: "DEUG, Software Development & Computer Science",
    institution: "Faculté des Sciences Ben M'Sik (FSBM), Casablanca",
    details: "Comprehensive training in software development, C/C++, Python programming, databases, and mathematics.",
  },
  {
    period: "2024",
    degree: "Baccalauréat, Sciences Mathématiques",
    institution: "Lycée Qualifiant Biranzarane",
    details: "Strong rigorous background in applied mathematics, logical analysis, and structured problem solving.",
  },
];

const technologies = [
  "React", "JavaScript (ES6+)", "Python", "TypeScript", "REST APIs", "SQL",
  "Node.js", "C / C++", "Docker", "Tailwind CSS", "Linux", "Git & GitHub", "Figma",
  "React", "JavaScript (ES6+)", "Python", "TypeScript", "REST APIs", "SQL",
  "Node.js", "C / C++", "Docker", "Tailwind CSS", "Linux", "Git & GitHub", "Figma",
];

export default function App() {
  return (
    <>
      <div className="grid-spotlight" aria-hidden="true" />
      <main className="academy-wrap" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <a className="brand-badge" href="#top" aria-label="H84 Lab home">
            <img src="/images/site-icon.svg" alt="" />
            <span>H84 <small>LAB</small></span>
          </a>

          <div className="availability-badge" aria-label="Status: Available for internship">
            <span className="pulse-dot" />
            <span>Available for Internship (Stage) · Casablanca, Morocco</span>
          </div>

          <div className="hero-stack" aria-hidden="true">
            <div className="hero-card is-back">
              <div className="hero-project-card">
                <span>H84 LAB · FSBM</span>
                <strong>BUILD<br />YOUR<br />FUTURE.</strong>
                <i>REACT · PYTHON · SQL · AI</i>
              </div>
            </div>
            <div className="hero-card is-front profile-card">
              <img src="/images/profile-hero.png" alt="Houssame Ouchahboun" />
              <div className="profile-caption">
                <span>FULL-STACK DEV · AI STUDENT</span>
                <strong>Houssame<br />Ouchahboun</strong>
              </div>
            </div>
          </div>

          <div className="hero-title">
            <span className="top">Hello, I’m Houssame</span>
            <h1 id="hero-title">the mind behind H84 Lab</h1>
            <span className="sub">
              Computer Science & AI student at Université Hassan II (FSBM) · Full-Stack Developer actively seeking an internship.
            </span>
          </div>

          <div className="hero-meta">
            <strong>FULL-STACK DEVELOPER</strong>
            <span>·</span>
            <span>REACT & PYTHON</span>
            <span>·</span>
            <span>SEEKING INTERNSHIP</span>
            <span>·</span>
            <span>CASABLANCA</span>
          </div>

          <div className="hero-cta-group">
            <a
              className="hero-cta"
              href={links.cv}
              target="_blank"
              rel="noreferrer"
              download="Houssame_Ouchahboun_CV.pdf"
            >
              Download CV (PDF) <span>↓</span>
            </a>
            <a className="hero-cta" href="#projects">
              Explore Projects <span>↓</span>
            </a>
            <a
              className="hero-cta secondary"
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <span>↗</span>
            </a>
          </div>
        </section>

        <nav className="toc-bar" aria-label="Portfolio navigation">
          <div className="toc-inner">
            <span className="toc-label">Jump to</span>
            {competencies.map((comp) => (
              <a
                className="toc-chip"
                style={{ "--accent": comp.color }}
                href={`#domain-${comp.number}`}
                key={comp.number}
              >
                <b>{comp.number}</b>{comp.title}
              </a>
            ))}
            <a className="toc-chip" href="#education"><b>🎓</b>Education</a>
            <a className="toc-chip" href="#projects"><b>★</b>Projects</a>
          </div>
        </nav>

        <div className="marquee-wrap" aria-label="Core technologies">
          <div className="marquee">
            {technologies.map((tech, idx) => (
              <span key={`${tech}-${idx}`}>{tech}</span>
            ))}
          </div>
        </div>

        <section id="skills" className="curriculum">
          <p className="course-kicker">CORE TECHNICAL COMPETENCIES · H84 LAB</p>
          {competencies.map((comp) => (
            <section
              className="part"
              id={`domain-${comp.number}`}
              style={{ "--c": comp.color }}
              key={comp.number}
            >
              <div className="part-head">
                <div className="part-num">{comp.number}</div>
                <div className="part-info">
                  <h2>{comp.title}</h2>
                  <p>
                    <strong>{comp.meta.split(" · ")[0]}</strong> · {comp.meta.split(" · ").slice(1).join(" · ")}
                  </p>
                </div>
                <div className="part-orb" />
              </div>
              <div className="out-grid">
                {comp.cards.map(([number, title, items]) => (
                  <article className="out-card" key={number}>
                    <div className="out-head">
                      <span>{number}</span>
                      <h3>{title}</h3>
                    </div>
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className="edu-section" id="education">
          <p className="course-kicker">ACADEMIC BACKGROUND · UNIVERSITÉ HASSAN II</p>
          <div className="edu-grid">
            {education.map((item) => (
              <div className="edu-card" key={item.degree}>
                <span>{item.period}</span>
                <h3>{item.degree}</h3>
                <p><strong>{item.institution}</strong></p>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bonus" id="projects">
          <div className="bonus-head">
            <h2>Featured projects</h2>
            <span>03 ACADEMIC & STUDIO</span>
          </div>
          <div className="projects-grid">
            <div className="project-feature">
              <p>TEAM ACADEMIC PROJECT · FSBM</p>
              <h3>Infinity Space Club Web App</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.86rem", margin: "0", lineHeight: "1.5" }}>
                Complete functional React.js web platform built for the student space club at FSBM. Designed modular, reusable components and collaborated with teammates using Git/GitHub under the supervision of Prof. Mohamed Ghazouani.
              </p>
              <span>React.js · JavaScript (ES6+) · Responsive UI · Git/GitHub</span>
              <div className="project-links">
                <a href="https://github.com/OuchahbounHoussame/projet-final-web-2" target="_blank" rel="noreferrer">
                  View on GitHub ↗
                </a>
              </div>
            </div>

            <div className="project-feature">
              <p>ACADEMIC PROJECT · UNIVERSITÉ HASSAN II</p>
              <h3>Banking Management System in C</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.86rem", margin: "0", lineHeight: "1.5" }}>
                Structured banking management system in C managing client data, bank accounts, and financial operations. Implemented custom data structures, sequential tracking, and real-world business rules (1000 DH min balance, 700 DH withdrawal limit).
              </p>
              <span>C Language · Data Structures · Algorithms · Systems Logic</span>
              <div className="project-links">
                <a href="/documents/rapport-langage-c.pdf" target="_blank" rel="noreferrer">
                  View Project Report (PDF) ↗
                </a>
              </div>
            </div>

            <div className="project-feature">
              <p>FOUNDER & INDEPENDENT STUDIO</p>
              <h3>H84 LAB & Creative Platforms</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.86rem", margin: "0", lineHeight: "1.5" }}>
                Personal development brand and studio publishing web projects, student resources, and interactive platforms including Concour Med, Marous Jewelry, and open-source learning tools.
              </p>
              <span>React · Full-Stack Development · UI/UX Design · Open Source</span>
              <div className="project-links">
                <a href={links.github} target="_blank" rel="noreferrer">
                  Explore GitHub Portfolio ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <a className="cta-exclusive" href={links.email}>
          <span>SEEKING AN INTERNSHIP (STAGE) · CASABLANCA</span>
          <h2>Looking for a Full-Stack<br />or AI Intern?</h2>
          <p>
            Computer Science & Artificial Intelligence student at Faculté des Sciences Ben M'Sik (FSBM). Eager to contribute to engineering teams with React, Python, REST APIs, SQL, and clean code.
          </p>
          <b>Contact me via Email →</b>
        </a>
      </main>

      <Footer
        githubUrl={links.github}
        linkedinUrl={links.linkedin}
        emailUrl={links.email}
        phoneUrl={links.phone}
      />
    </>
  );
}
