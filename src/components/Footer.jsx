export default function Footer({ githubUrl, linkedinUrl, emailUrl, phoneUrl }) {
  return (
    <footer className="footer">
      <span>© 2026 H84 Lab · Houssame Ouchahboun · Casablanca, Morocco</span>
      <div className="footer-links">
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={emailUrl}>Email ↗</a>
        {phoneUrl && <a href={phoneUrl}>+212 704-900305</a>}
      </div>
    </footer>
  );
}
