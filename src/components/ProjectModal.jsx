import { CheckCircle2, ExternalLink, Github, X } from "lucide-react";
import { useEffect } from "react";
import ProjectVisual from "./ProjectVisual";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <article
        className="project-modal"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${project.id}`}
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X size={20} />
        </button>

        <div className="modal-meta">
          <span>{project.kind}</span>
          <span className="outcome">{project.outcome}</span>
        </div>

        <h2 id={`modal-${project.id}`}>{project.title}</h2>
        <p className="modal-summary">{project.summary}</p>

        {project.visual && <ProjectVisual type={project.visual} />}

        {project.github && (
          <a
            className="github-project-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            Ver projeto no GitHub
            <ExternalLink size={16} />
          </a>
        )}

        <div className="modal-section">
          <span>PROBLEMA</span>
          <p>{project.challenge}</p>
        </div>

        <div className="modal-section">
          <span>ESCOPO E ORIGEM</span>
          <p>{project.scope}</p>
          <p>{project.origin}</p>
        </div>

        <div className="modal-section">
          <span>ATIVIDADES QUE EXECUTEI</span>
          <ul>
            {project.approach.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-section">
          <span>RESULTADO</span>
          <p>{project.result}</p>
        </div>

        <div className="modal-section">
          <span>ESTADO DA ENTREGA</span>
          <ul>{project.limits.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>

        <div className="modal-section">
          <span>TECNOLOGIAS</span>
          <div className="tag-list large">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="detail-note">
          Diagramas são ilustrativos. Dados e imagens privados de clientes
          permanecem fora do portfólio público.
        </div>
      </article>
    </div>
  );
}
