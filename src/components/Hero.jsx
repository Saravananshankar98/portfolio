import { heroRoles, profile, stats } from "../data/portfolioData";
import { useTypewriter } from "../hooks/useTypewriter";

export function Hero() {
  const typedRole = useTypewriter(heroRoles);

  return (
    <section className="hero section" id="hero">
      <div className="hero-copy">
        <p className="availability">
          <span aria-hidden="true" />
          {profile.availability}
        </p>
        <h1>{profile.name}</h1>
        <p className="typewriter">
          <span>&gt;</span> {typedRole}
          <i aria-hidden="true" />
        </p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-detail">
          Four years of frontend experience across production products at Lapis
          Data Analytics and Bloomlync. I build reusable React interfaces,
          integrate APIs, and deliver reliable features with engineering teams.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#experience">
            See work
          </a>
          <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <aside className="profile-card" aria-label="Profile summary">
        <div className="portrait-frame">
          <img src={profile.photo} alt={`${profile.name} portrait`} />
        </div>
        <div>
          <p className="profile-name">{profile.name}</p>
          <p className="profile-role">{profile.role}</p>
        </div>
        <div className="profile-meta">
          <span>{profile.location}</span>
          <span>{profile.email}</span>
        </div>
      </aside>

      <div className="stats-row" aria-label="Career highlights">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
