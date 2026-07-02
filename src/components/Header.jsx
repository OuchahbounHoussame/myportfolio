import ThemeToggle from "./ThemeToggle";

const navItems = [
  ["top", "Home"],
  ["projects", "Projects"],
  ["courses", "Courses"],
  ["youtube", "YouTube"],
  ["about", "About"],
  ["contact", "Contact"],
];

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="H84 Lab home">
        <span className="brand-symbol">H84</span>
        <span className="brand-text"><strong>H84 Lab</strong><small>Build · Learn · Share</small></span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        {navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
