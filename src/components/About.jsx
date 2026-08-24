import { ArrowRight, TerminalSquare } from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div>
          <p className="section-label">SOBRE</p>
          <h2>Infraestrutura vista como sistema, não como peças soltas.</h2>
        </div>

        <div className="about-copy">
          <p>
            Minha trajetória passa por suporte de TI, operação de telecom,
            consultoria própria e infraestrutura corporativa. Essa combinação
            trouxe uma visão prática de ponta a ponta: do usuário e do rack até
            switching, servidores, monitoramento e troubleshooting.
          </p>

          <p>
            O objetivo deste portfólio é registrar projetos com contexto,
            decisões técnicas, evidências anonimizadas e resultado operacional —
            mostrando como cada tecnologia foi aplicada, e não apenas listada.
          </p>

          <a className="text-link" href="#contato">
            Falar sobre infraestrutura <ArrowRight size={17} />
          </a>
        </div>

        <div className="terminal-card" aria-hidden="true">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
            <TerminalSquare size={16} />
          </div>
          <pre>
{`$ portfolio --profile samuel
> focus: infrastructure
> domains: network, monitoring
> background: telecom + consulting
> mindset: troubleshoot_first
> security: sanitize_evidence
> status: building_reliable_systems`}
          </pre>
        </div>
      </div>
    </section>
  );
}
