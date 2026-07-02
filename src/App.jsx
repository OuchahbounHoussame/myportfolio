import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";

const githubUrl = "https://github.com/OuchahbounHoussame";

const navItems = [
  ["about", "Profil"],
  ["projects", "Projets"],
  ["skills", "Compétences"],
  ["contact", "Contact"],
];

const projects = [
  {
    category: "Portfolio",
    stack: "React / Vite",
    title: "H84 Lab",
    description:
      "Portfolio moderne développé avec React, interface responsive, thème clair/sombre et architecture de composants réutilisables.",
    href: "#top",
    action: "Voir le projet",
  },
  {
    category: "Projet académique",
    stack: "Langage C",
    title: "Projet de programmation en C",
    description:
      "Travail pratique autour de l'algorithmique, de la gestion mémoire et de la structuration d'un programme en langage C.",
    href: "/documents/rapport-langage-c.pdf",
    action: "Consulter le rapport",
    external: true,
  },
  {
    category: "Code source",
    stack: "Git / GitHub",
    title: "Dépôts GitHub",
    description:
      "Retrouvez mon code, mes expérimentations techniques et l'évolution de mes projets sur mon profil GitHub.",
    href: githubUrl,
    action: "Voir @OuchahbounHoussame",
    external: true,
  },
];

const skillGroups = [
  {
    label: "Frontend",
    title: "Interfaces web",
    description: "React, JavaScript, HTML, CSS, responsive design et intégration d'interfaces accessibles.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "Programmation",
    title: "Développement logiciel",
    description: "Bases solides en algorithmique, programmation structurée, scripts et résolution de problèmes.",
    skills: ["Python", "C", "C++", "Algorithmique"],
  },
  {
    label: "Méthodes",
    title: "Conception & outils",
    description: "Modélisation, documentation technique et gestion de versions pour des projets clairs et maintenables.",
    skills: ["UML", "Git", "GitHub", "Documentation"],
  },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Accueil">
          <span className="brand-mark">
            <img src="/images/profile-cv.jpeg" alt="Houssame Ouchahboun" />
          </span>
          <span className="brand-text">
            <strong>H84 Lab</strong>
            <small>Développeur logiciel</small>
          </span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>

        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="availability"><span /> Disponible pour un stage</div>
            <p className="eyebrow">Houssame Ouchahboun · Développeur logiciel</p>
            <h1>Des interfaces claires. Du code solide.</h1>
            <p className="hero-text">
              Je développe des expériences web modernes et des solutions logicielles
              structurées, avec une attention particulière portée à la qualité du code.
            </p>
            <div className="brand-signature" aria-label="Points forts">
              <span>React & JavaScript</span>
              <span>Python · C · C++</span>
              <span>UML & Git</span>
            </div>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Découvrir mes projets</a>
              <a className="btn github-btn" href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a className="btn" href="https://www.linkedin.com/in/houssame-ouchahboun-862295400/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <aside className="brand-showcase" aria-label="Profil technique">
            <div className="showcase-top">
              <span className="showcase-mark">
                <img src="/images/profile-cv.jpeg" alt="Houssame Ouchahboun" />
              </span>
              <span className="showcase-name">H84 / DEV</span>
            </div>
            <div className="showcase-line" />
            <p>Développement web, programmation et conception de solutions logicielles.</p>
            <div className="showcase-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
              <span>C / C++</span>
              <span>Git</span>
            </div>
            <a className="profile-link" href={githubUrl} target="_blank" rel="noreferrer">
              github.com/OuchahbounHoussame <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </section>

        <section className="stats-strip" aria-label="Technologies principales">
          <div><span className="metric">RE</span><span className="metric-label">React & frontend</span></div>
          <div><span className="metric">C++</span><span className="metric-label">Programmation système</span></div>
          <div><span className="metric">PY</span><span className="metric-label">Python & scripts</span></div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-panel">
            <div>
              <p className="eyebrow">À propos</p>
              <h2>Un profil curieux, rigoureux et orienté pratique.</h2>
              <p className="section-copy">
                Je développe mes compétences à travers des projets concrets et une
                pratique régulière. Mon objectif est de rejoindre une équipe où je
                peux contribuer, apprendre rapidement et produire un travail fiable.
              </p>
            </div>
            <div className="skill-list" aria-label="Qualités professionnelles">
              <span>Autonome</span>
              <span>Esprit d'équipe</span>
              <span>Organisé</span>
              <span>Curieux</span>
              <span>Orienté solution</span>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-head compact">
            <div><p className="eyebrow">Sélection</p><h2>Projets récents</h2></div>
            <p className="section-intro">Une sélection de travaux qui reflètent ma progression et ma manière de construire.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div>
                  <div className="project-card-top">
                    <span className="project-index">0{index + 1}</span>
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.stack}</span>
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <a className="card-link" href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noreferrer" : undefined}>{project.action}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section band" id="skills">
          <div className="section-head compact">
            <div><p className="eyebrow">Expertise</p><h2>Compétences techniques</h2></div>
            <p className="section-intro">Des bases polyvalentes pour passer de l'idée à une solution fonctionnelle.</p>
          </div>
          <div className="project-grid">
            {skillGroups.map((group) => (
              <article className="project-card skill-card" key={group.title}>
                <div>
                  <div className="project-meta"><span>{group.label}</span></div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="skill-list compact-skills">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Disponible pour un stage et de nouvelles collaborations.</h2>
          </div>
          <div className="contact-actions">
            <a className="btn primary" href="mailto:ouchahbounhoussame@email.com">Envoyer un email</a>
            <a className="btn" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/houssame-ouchahboun-862295400/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Houssame Ouchahboun</span>
        <span>Portfolio professionnel · 2026</span>
      </footer>
    </>
  );
}
