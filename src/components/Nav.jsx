import { navLinks, profile } from "../data/portfolioData";

export function Nav({ activeSection }) {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Go to home">
        SS
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => {
          const sectionId = link.href.slice(1);
          return (
            <a
              key={link.href}
              className={activeSection === sectionId ? "active" : ""}
              href={link.href}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>
        Contact
      </a>
    </header>
  );
}
