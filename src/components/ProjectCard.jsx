export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div>
        <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-type">Project</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
      <div className="card-actions">
        <a className="text-button" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        {project.demoUrl ? <a className="text-button accent-button" href={project.demoUrl}>Live Demo</a> : <span className="text-button is-disabled">Live Demo</span>}
      </div>
    </article>
  );
}
