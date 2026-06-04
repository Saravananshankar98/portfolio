import { skills } from "../data/portfolioData";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./SectionHeader";
import { Tag } from "./Tag";

export function Skills() {
  const [ref, inView] = useInView();

  return (
    <section className="section alt-section" id="skills" ref={ref}>
      <SectionHeader eyebrow="01 / Skills" title="Technical Skills">
        A focused React frontend stack with the tools needed for production UI work.
      </SectionHeader>
      <div className={`card-grid ${inView ? "is-visible" : ""}`}>
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="tag-list">
              {skill.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
