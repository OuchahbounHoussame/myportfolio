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
  { title: "Portfolio React", description: "A responsive personal brand portfolio built with React, modern CSS, and Vite.", technologies: ["React", "Vite", "CSS"] },
  { title: "Infinity Space Club", description: "A digital home for a student space club, its activities, events, and educational content.", technologies: ["React", "JavaScript", "Responsive UI"] },
  { title: "Gestion des Étudiants", description: "A student management tool for organizing profiles, academic records, and everyday administration.", technologies: ["JavaScript", "SQL", "Data"] },
  { title: "Assistant Social", description: "A digital assistant concept that helps users find information and navigate social support services.", technologies: ["Web App", "UX", "JavaScript"] },
];

const courses = [
  { title: "React Basics", level: "Beginner", description: "Components, props, state, events, and your first structured React interface." },
  { title: "JavaScript DOM", level: "Beginner", description: "Learn how JavaScript reads, updates, and adds interaction to a web page." },
  { title: "SQL & Relational Algebra", level: "Intermediate", description: "Understand tables, queries, joins, and relational database logic." },
  { title: "C++ OOP", level: "Intermediate", description: "Classes, objects, inheritance, encapsulation, and object-oriented thinking." },
  { title: "GitHub & Vercel", level: "Beginner", description: "Manage code with GitHub and publish student web projects with Vercel." },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />

        <section className="section" id="projects">
          <SectionHeading eyebrow="Selected work" title="Projects" description="A small selection of web and student projects built to learn, experiment, and solve useful problems." />
          <div className="projects-grid">
            {projects.map((project, index) => <ProjectCard key={project.title} project={{ ...project, url: links.github }} index={index} />)}
          </div>
        </section>

        <section className="section section-band" id="courses">
          <SectionHeading eyebrow="Learn step by step" title="Courses" description="Simple learning paths with clear explanations, practical examples, and no unnecessary complexity." />
          <div className="courses-grid">
            {courses.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </section>

        <section className="section youtube-section" id="youtube">
          <div className="youtube-copy">
            <p className="eyebrow">H84 Lab on video</p>
            <h2>Coming soon on YouTube</h2>
            <p>I will share simple videos about React, JavaScript, SQL, C++, GitHub, Vercel, and student projects.</p>
            <a className="btn primary" href={links.linkedin} target="_blank" rel="noreferrer">Follow the journey</a>
          </div>
          <div className="youtube-mark" aria-hidden="true"><span>PLAY</span><strong>H84</strong></div>
        </section>

        <section className="section contact" id="contact">
          <div><p className="eyebrow">Contact</p><h2>Want to collaborate or follow my work?</h2></div>
          <div className="contact-actions">
            <a className="btn primary" href={links.email}>Email</a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      <Footer githubUrl={links.github} />
    </>
  );
}
