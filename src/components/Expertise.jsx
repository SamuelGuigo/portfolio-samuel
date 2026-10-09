import {
  Activity,
  Boxes,
  Network,
  Server,
  ShieldCheck
} from "lucide-react";

const items = [
  {
    icon: Network,
    number: "01",
    title: "Redes",
    text: "VLAN, STP, LACP, routing, VPN, switching e troubleshooting de camada 2/3."
  },
  {
    icon: Server,
    number: "02",
    title: "Infraestrutura",
    text: "Windows Server, Linux, serviços de rede, storage e infraestrutura corporativa."
  },
  {
    icon: Activity,
    number: "03",
    title: "Monitoramento",
    text: "Zabbix, Grafana, SNMP, agents, templates, discovery, alertas e dashboards."
  },
  {
    icon: Boxes,
    number: "04",
    title: "Virtualização",
    text: "VMware, Hyper-V, Proxmox, redes virtuais, backup e continuidade."
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Segurança",
    text: "Wazuh, SEP/SEPM, firewall, VPN e segmentação."
  }
];

export default function Expertise() {
  return (
    <section className="section" id="especialidades">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">ESPECIALIDADES</p>
            <h2>Infraestrutura que precisa funcionar.</h2>
          </div>
          <p>
            Configuração, diagnóstico, validação e documentação nas camadas
            que sustentam servidores, serviços e conectividade.
          </p>
        </div>

        <div className="expertise-grid">
          {items.map(({ icon: Icon, number, title, text }) => (
            <article className="expertise-card" key={title}>
              <div className="expertise-top">
                <div className="expertise-icon">
                  <Icon size={22} />
                </div>
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
