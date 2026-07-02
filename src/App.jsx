import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import CourseCard from "./components/CourseCard";
import SectionHeading from "./components/SectionHeading";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";

const links = {
  github: "https://github.com/OuchahbounHoussame",
  linkedin: "https://www.linkedin.com/in/houssame-ouchahboun-862295400/",
  email: "mailto:ouchahbounhoussame@email.com",
};

const projects = [
  {
    title: "Portfolio React",
    description: "A responsive personal brand portfolio built with reusable React components, modern CSS, and Vite.",
    technologies: ["React", "Vite", "CSS"],
    githubUrl: links.github,
    demoUrl: "#top",
  },
  {
    title: "Infinity Space Club",
    description: "A student community project designed to present space activities, events, and educational content.",
    technologies: ["React", "JavaScript", "Responsive UI"],
    githubUrl: links.github,
  },
  {
    title: "Gestion des Étudiants",
    description: "A student management project focused on organizing records, academic data, and common administrative tasks.",
    technologies: ["JavaScript", "SQL", "Data"],
    githubUrl: links.github,
  },
  {
    title: "Assistant Social",
    description: "A useful digital assistant concept that helps users find information and navigate social support services.",
    technologies: ["Web App", "UX", "JavaScript"],
    githubUrl: links.github,
  },
];

const courses = [
  { title: "React Basics", level: "Beginner", description: "Components, props, state, events, and your first structured React interface." },
  { title: "JavaScript DOM", level: "Beginner", description: "Learn how JavaScript reads, updates, and adds interaction to a web page." },
  { title: "SQL & Relational Algebra", level: "Intermediate", description: "Understand tables, queries, joins, and the logic behind relational databases." },
  { title: "C++ OOP", level: "Intermediate", description: "Classes, objects, inheritance, encapsulation, and clean object-oriented thinking." },
  { title: "GitHub & Vercel for Students", level: "Beginner", description: "Manage code with GitHub and publish student web projects with Vercel." },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="top">
        <Hero />

        <section className="brand-stats" aria-label="H84 Lab overview">
          <div><strong>04</strong><span>Student projects</span></div>
          <div><strong>05</strong><span>Courses planned</span></div>
          <div><strong>YT</strong><span>Videos coming soon</span></div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow="Build & learn"
            title="Projects"
            description="Practical projects created while learning, experimenting, and solving real student problems."
          />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section section-band" id="courses">
          <SectionHeading
            eyebrow="Learn step by step"
            title="Courses"
            description="Short, practical learning paths made for students who want simple explanations and useful examples."
          />
          <div className="courses-grid">
            {courses.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </section>

        <section className="section youtube-section" id="youtube">
          <div className="youtube-copy">
            <p className="eyebrow">H84 Lab on video</p>
            <h2>Coming soon on YouTube</h2>
            <p>
              I will publish simple videos about React, JavaScript, web projects,
              SQL, C++, and student exam preparation.
            </p>
            <a className="btn primary" href={links.linkedin} target="_blank" rel="noreferrer">Follow the journey</a>
          </div>
          <div className="youtube-visual" aria-hidden="true">
            <span className="play-button">▶</span>
            <strong>H84 LAB</strong>
            <small>CODE · BUILD · SHARE</small>
          </div>
        </section>

        <section className="section" id="about">
          <div className="about-panel brand-about">
            <div>
              <p className="eyebrow">About the creator</p>
              <h2>Learning in public, one useful project at a time.</h2>
            </div>
            <p className="about-text">
              My name is Houssame Ouchahboun. I am a computer science student and web
              developer passionate about React, JavaScript, and building useful projects.
              Through H84 Lab, I share projects, courses, and learning resources to help
              students improve step by step.
            </p>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div>
            <p className="eyebrow">Let&apos;s connect</p>
            <h2>Want to collaborate, ask a question, or follow my work?</h2>
          </div>
          <div className="contact-actions">
            <a className="btn primary" href={links.email}>Email</a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href="#top">Portfolio</a>
          </div>
        </section>
      </main>

      <Footer githubUrl={links.github} />
    </>
  );
}
