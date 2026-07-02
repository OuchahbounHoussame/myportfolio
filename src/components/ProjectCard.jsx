export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <span className="project-index">0{index + 1}</span>
      <div><h3>{project.title}</h3><p>{project.description}</p></div>
      <div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      <a className="text-button" href={project.url} target="_blank" rel="noreferrer">View project <span aria-hidden="true">↗</span></a>
    </article>
  );
}
