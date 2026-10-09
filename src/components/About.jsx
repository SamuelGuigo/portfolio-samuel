import { ArrowRight, TerminalSquare } from "lucide-react";

export default function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div>
          <p className="section-label">SOBRE</p>
          <h2>Da configuração à validação do ambiente.</h2>
        </div>

        <div className="about-copy">
          <p>
            Minha trajetória passa por suporte de TI, operação de telecom,
            consultoria própria e infraestrutura corporativa. Essa combinação
            trouxe uma visão prática de ponta a ponta: do usuário e do rack até
            switching, servidores, monitoramento e troubleshooting.
          </p>

          <p>
            Sou fundador da Auron Tech e também atuo em equipes de infraestrutura
            corporativa e industrial. Este portfólio reúne minha experiência
            técnica, com a origem, as atividades e o estágio de cada entrega
            identificados.
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
