import { ArrowUpRight, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { projectCategories, projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState("Todos");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <section className="section projects-section" id="projetos">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">PROJETOS & CASES</p>
            <h2>Projetos, atividades e resultados documentados.</h2>
          </div>
          <p>
            Cases com problema, escopo, atividades, tecnologias e resultado.
            Os recortes de infraestrutura detalham frentes do mesmo projeto;
            laboratórios e etapas pendentes estão identificados.
          </p>
        </div>

        <div className="filters">
          {projectCategories.map((category) => (
            <button
              className={active === category ? "filter active" : "filter"}
              key={category}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <button
              type="button"
              className="project-card"
              key={project.id}
              onClick={() => setSelected(project)}
            >
              <div className="project-card-meta">
                <span>{project.kind}</span>
                <div className="project-card-icons">
                  {project.github && <Github size={16} />}
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-outcome">{project.outcome}</div>

              <div className="tag-list">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
