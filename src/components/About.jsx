import { aboutStories, learning, profile, timeline } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./SectionHeader";

export function About() {
  const [ref, inView] = useInView();

  return (
    <section className="section" id="about" ref={ref}>
      <SectionHeader eyebrow="04 / About" title="Who I Am">
        The person behind the frontend work, and where I am growing next.
      </SectionHeader>

      <div className={`about-layout ${inView ? "is-visible" : ""}`}>
        <div className="story-list">
          {aboutStories.map((story) => (
            <article key={story.title}>
              <h3>{story.title}</h3>
              <p>{story.body}</p>
            </article>
          ))}

          <div className="contact-card">
            <h3>Get in touch</h3>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span>{profile.phone}</span>
          </div>
        </div>

        <aside className="timeline-card">
          <h3>Career Timeline</h3>
          <ol>
            {timeline.map((item) => (
              <li key={`${item.year}-${item.title}`}>
                <time>{item.year}</time>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ol>

          <h3>Currently Learning</h3>
          <div className="learning-list">
            {learning.map((item) => (
              <div key={item.name}>
                <div>
                  <span>{item.name}</span>
                  <small>{item.progress}%</small>
                </div>
                <progress value={item.progress} max="100" aria-label={`${item.name} progress`} />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
