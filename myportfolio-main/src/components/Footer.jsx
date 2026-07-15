export default function Footer({ githubUrl }) {
  return (
    <footer className="footer">
      <span>© 2026 H84 Lab · Houssame Ouchahboun</span>
      <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
    </footer>
  );
}
