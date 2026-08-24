import {
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  GraduationCap,
  Network
} from "lucide-react";
import {
  academicEducation,
  experience,
  technicalEducation
} from "../data/experience";

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">TRAJETÓRIA</p>
            <h2>Experiência construída em campo.</h2>
          </div>
          <p>
            Suporte, telecom, consultoria própria e infraestrutura corporativa —
            com evolução contínua de responsabilidade técnica.
          </p>
        </div>

        <div className="career-grid">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-marker">
                  <BriefcaseBusiness size={17} />
                </div>

                <div className="timeline-content">
                  <div className="timeline-topline">
                    <span className="timeline-period">{item.period}</span>
                    <span className="timeline-type">{item.type}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <aside className="career-aside">
            <div className="education-card academic-card">
              <div className="education-head">
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <span>FORMAÇÃO ACADÊMICA</span>
                  <strong>4 formações de nível superior</strong>
                </div>
              </div>

              <div className="education-list">
                {academicEducation.map((item) => (
                  <div className="education-entry" key={`${item.title}-${item.period}`}>
                    <div className="education-entry-top">
                      <span>{item.period}</span>
                      <BadgeCheck size={16} />
                    </div>
                    <h3>{item.title}</h3>
                    {item.institution && (
                      <p className="education-institution">{item.institution}</p>
                    )}
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="education-card technical-card">
              <div className="education-head">
                <div className="education-icon technical-icon">
                  <BookOpenCheck size={22} />
                </div>
                <div>
                  <span>FORMAÇÃO TÉCNICA</span>
                  <strong>Cursos & trilhas complementares</strong>
                </div>
              </div>

              <div className="technical-list">
                {technicalEducation.map((item) => (
                  <div className="technical-entry" key={item.title}>
                    <div className="technical-title-row">
                      <Network size={16} />
                      <h3>{item.title}</h3>
                    </div>
                    <span
                      className={
                        item.status === "EM ANDAMENTO"
                          ? "technical-status in-progress"
                          : "technical-status"
                      }
                    >
                      {item.status}
                    </span>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
