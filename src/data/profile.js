// PUBLIC ONLY:
// Tudo neste arquivo será entregue ao navegador e poderá ser lido por qualquer visitante.
// Nunca coloque senha, token, API key, IP/hostname de cliente ou qualquer outro segredo aqui.
export const profile = {
  name: "Samuel Guigo",
  role: "Analista de Infraestrutura Pleno",
  headline: "Projetos de infraestrutura, redes e segurança.",
  summary:
    "Conduzo projetos e frentes técnicas de infraestrutura, com definição de soluções, dimensionamento, execução e validação. Minha trajetória reúne TI hospitalar, telecom, consultoria, redes, servidores Windows/Linux, virtualização, storage, monitoramento e segurança em ambientes corporativos e industriais.",

  // Contatos profissionais conferidos no currículo de referência.
  email: "samuel.guigo@hotmail.com",
  linkedin: "https://www.linkedin.com/in/samuelguigo",

  github: "https://github.com/SamuelGuigo",
  location: "São Paulo, Brasil",

  techHighlights: [
    "Proxmox",
    "VMware",
    "TrueNAS / ZFS",
    "Windows Server",
    "Linux",
    "Cisco",
    "MikroTik",
    "Siemens",
    "Zabbix",
    "Wazuh",
    "SEP / SEPM"
  ]
};

export function hasLink(value) {
  return Boolean(value && value.trim() && value !== "#");
}
