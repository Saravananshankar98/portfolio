import { useMemo, useState } from "react";
import { companies } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

export function Experience() {
  const [ref, inView] = useInView(0.08);
  const [activeCompanyId, setActiveCompanyId] = useState(companies[0].id);
  const company = useMemo(
    () => companies.find((item) => item.id === activeCompanyId) ?? companies[0],
    [activeCompanyId]
  );

  return (
    <section className="section" id="experience" ref={ref}>
      <SectionHeader eyebrow="02 / Experience" title="Work Experience">
        Two full-time roles across production products, responsive fixes, testing,
        deployment support, and full ownership of key frontend work.
      </SectionHeader>

      <div className={`experience-layout ${inView ? "is-visible" : ""}`}>
        <div className="company-list" role="tablist" aria-label="Companies">
          {companies.map((item) => (
            <button
              key={item.id}
              className={item.id === activeCompanyId ? "active" : ""}
              onClick={() => setActiveCompanyId(item.id)}
              type="button"
              role="tab"
              aria-selected={item.id === activeCompanyId}
            >
              <strong>{item.company}</strong>
              <span>{item.role}</span>
              <small>{item.period}</small>
            </button>
          ))}
        </div>

        <div className="experience-panel">
          <div className="panel-heading">
            <div>
              <h3>{company.company}</h3>
              <p>
                {company.role} / {company.period}
              </p>
            </div>
            {company.current && <span className="status-pill">Current</span>}
          </div>
          <p className="panel-summary">{company.summary}</p>

          <div className="project-stack">
            {company.projects.map((project) => (
              <details className="project-card" key={project.name}>
                <summary>
                  <span>
                    <strong>{project.name}</strong>
                    <small>{project.status}</small>
                  </span>
                  <span className="summary-action">+</span>
                </summary>
                <div className="project-body">
                  <div>
                    <h4>What it is</h4>
                    <p>{project.overview}</p>
                  </div>
                  <div>
                    <h4>My contribution</h4>
                    <p>{project.contribution}</p>
                  </div>
                  <div className="tag-list">
                    {project.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View live product
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
