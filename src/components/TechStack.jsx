const groups = [
  {
    title: "Networking",
    items: ["Cisco", "MikroTik", "Huawei", "VLAN", "STP", "LACP", "IPv6", "VPN"]
  },
  {
    title: "Observability",
    items: ["Zabbix", "Grafana", "SNMP", "Agents", "Templates", "Discovery"]
  },
  {
    title: "Systems",
    items: ["Windows Server", "Linux", "AD", "DNS", "DHCP", "PowerShell"]
  },
  {
    title: "Virtualization",
    items: ["VMware", "Hyper-V", "Proxmox", "Veeam", "Containers"]
  },
  {
    title: "Security",
    items: ["FortiGate", "pfSense", "RouterOS", "Firewall", "WireGuard"]
  },
  {
    title: "Infrastructure",
    items: ["Rack", "Patch Panel", "Fibra", "DIO", "Cabeamento", "Etiquetagem"]
  }
];

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-label">STACK</p>
            <h2>Ferramentas da operação.</h2>
          </div>
          <p>
            Organizadas por domínio para deixar claro onde cada tecnologia entra
            no ambiente.
          </p>
        </div>

        <div className="stack-grid">
          {groups.map((group) => (
            <article className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="stack-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}