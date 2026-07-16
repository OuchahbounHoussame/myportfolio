import ThemeToggle from "./ThemeToggle";

const navItems = [["curriculum", "Curriculum"], ["projects", "Projects"], ["contact", "Contact"]];

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="H84 Lab home"><span>H84</span> LAB</a>
      <nav className="nav" aria-label="Main navigation">
        {navItems.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
