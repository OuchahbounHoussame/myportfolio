export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-meta"><span>{course.level}</span><span className="status-dot">Coming soon</span></div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-progress" aria-hidden="true"><span /></div>
    </article>
  );
}
