export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label="Changer le theme">
      <span className="theme-dot" />
      <span>{theme === "light" ? "Light" : "Dark"}</span>
    </button>
  );
}
