import { profile } from "../data/portfolioData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>SS</strong>
        <span>{profile.role}</span>
      </div>
      <p>{profile.email}</p>
      <div>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
