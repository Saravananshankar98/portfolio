import { personalProjects } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

export function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="section alt-section" id="projects" ref={ref}>
      <SectionHeader eyebrow="03 / Personal Projects" title="Learning Projects">
        Personal projects that show how I practice new skills outside daily work.
      </SectionHeader>

      <div className={`project-grid ${inView ? "is-visible" : ""}`}>
        {personalProjects.map((project) => (
          <article className="personal-project" key={project.name}>
            <div className="panel-heading">
              <div>
                <h3>{project.name}</h3>
                <p>{project.status}</p>
              </div>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
            <p>{project.overview}</p>
            <p>{project.contribution}</p>
            <p className="muted-text">{project.reason}</p>
            <div className="tag-list">
              {project.tech.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
