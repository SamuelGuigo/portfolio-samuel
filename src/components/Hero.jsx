import {
  ArrowRight,
  Github,
  Linkedin,
  Network,
  Radar,
  ServerCog,
  ShieldCheck
} from "lucide-react";
import { hasLink, profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="status-dot" />
            Infraestrutura • Redes • Observabilidade
          </div>

          <p className="hero-kicker">{profile.name.toUpperCase()}</p>

          <h1>
            Infrastructure.
            <br />
            <span>Networks.</span>
            <br />
            Observability.
          </h1>

          <p className="hero-role">{profile.role}</p>
          <p className="hero-text">{profile.summary}</p>

          <div className="hero-actions">
            <a className="btn" href="#projetos">
              Ver projetos <ArrowRight size={18} />
            </a>

            {hasLink(profile.linkedin) && (
              <a
                className="btn btn-ghost"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            )}

            {hasLink(profile.github) && (
              <a
                className="btn btn-ghost"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>
            )}
          </div>

          <div className="tech-row">
            {profile.techHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="network-card">
            <div className="network-card-head">
              <div>
                <span>OPERATIONS VIEW</span>
                <strong>Infraestrutura em perspectiva</strong>
              </div>
              <div className="live-indicator">LIVE</div>
            </div>

            <div className="network-map">
              <div className="network-line line-a" />
              <div className="network-line line-b" />
              <div className="network-line line-c" />

              <div className="node node-core">
                <Network size={22} />
                <span>CORE</span>
              </div>

              <div className="node node-monitor">
                <Radar size={20} />
                <span>NOC</span>
              </div>

              <div className="node node-server">
                <ServerCog size={20} />
                <span>SRV</span>
              </div>

              <div className="node node-security">
                <ShieldCheck size={20} />
                <span>SEC</span>
              </div>
            </div>

            <div className="network-stats">
              <div>
                <span>FOCO</span>
                <strong>Disponibilidade</strong>
              </div>
              <div>
                <span>CAMADA</span>
                <strong>Infra + Rede</strong>
              </div>
              <div>
                <span>MÉTODO</span>
                <strong>Observabilidade</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
