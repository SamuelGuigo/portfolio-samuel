import { Activity, Cable, CheckCircle2, Network, Router, ServerCog, ShieldCheck, Waves } from "lucide-react";

function Metric({ label, value }) {
  return <div className="visual-metric"><span>{label}</span><strong>{value}</strong></div>;
}

function ZabbixVisual() {
  return <div className="case-visual" aria-label="Resumo visual sanitizado do case Zabbix">
    <div className="visual-heading"><Activity size={18}/><span>EVOLUÇÃO DO MONITORAMENTO</span></div>
    <div className="visual-metrics-grid">
      <Metric label="Estado inicial" value="13 unsupported" />
      <Metric label="Plataforma" value="Zabbix 7" />
      <Metric label="Coleta" value="SNMP + ICMP" />
      <Metric label="Estado final" value="0 unsupported" />
    </div>
    <div className="visual-flow"><span>Template legado</span><i/><span>LLD / OIDs</span><i/><span>Validação</span><i/><span className="visual-success">Estável</span></div>
  </div>;
}

function SwitchingVisual() {
  return <div className="case-visual" aria-label="Topologia genérica sanitizada de switching">
    <div className="visual-heading"><Network size={18}/><span>FLUXO DE TROUBLESHOOTING L2</span></div>
    <div className="topology-row">
      <div className="topology-node"><ServerCog size={20}/><span>Virtualização</span></div>
      <div className="topology-link warning-link">MAC?</div>
      <div className="topology-node"><Router size={20}/><span>Switch A</span></div>
      <div className="topology-link dual-link">STP / LACP</div>
      <div className="topology-node"><Router size={20}/><span>Switch B</span></div>
    </div>
    <div className="visual-caption">Diagrama reconstruído com nomes genéricos. Nenhuma topologia de cliente é reproduzida.</div>
  </div>;
}

function RackVisual() {
  const units=["Patch panel","Organizador","Switching","Organizador","Serviços","DIO / Fibra"];
  return <div className="case-visual" aria-label="Rack genérico sanitizado">
    <div className="visual-heading"><Cable size={18}/><span>MODELO DE ORGANIZAÇÃO FÍSICA</span></div>
    <div className="rack-shell">{units.map((u,i)=><div className="rack-unit" key={u}><span>U{42-i*2}</span><strong>{u}</strong></div>)}</div>
    <div className="visual-caption">Representação conceitual: identificação, organização e separação de rotas sem reproduzir o ambiente real.</div>
  </div>;
}

function FiberVisual() {
  return <div className="case-visual" aria-label="Diagrama genérico sanitizado de fibra">
    <div className="visual-heading"><Waves size={18}/><span>DIAGNÓSTICO ÓPTICO</span></div>
    <div className="fiber-flow">
      <div className="fiber-node"><ShieldCheck size={18}/><span>Ponto A</span></div>
      <div className="fiber-cable"><span>nível óptico • conector • WDM • distância</span></div>
      <div className="fiber-node"><CheckCircle2 size={18}/><span>Ponto B</span></div>
    </div>
    <div className="visual-caption">O case publica método e raciocínio; valores e identificadores do ambiente são omitidos.</div>
  </div>;
}

export default function ProjectVisual({ type }) {
  if (type === "zabbix") return <ZabbixVisual/>;
  if (type === "switching") return <SwitchingVisual/>;
  if (type === "rack") return <RackVisual/>;
  if (type === "fiber") return <FiberVisual/>;
  return null;
}
