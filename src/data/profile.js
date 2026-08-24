// PUBLIC ONLY:
// Tudo neste arquivo será entregue ao navegador e poderá ser lido por qualquer visitante.
// Nunca coloque senha, token, API key, IP/hostname de cliente ou qualquer outro segredo aqui.
export const profile = {
  name: "Samuel Guigo",
  role: "Analista de Infraestrutura & Redes",
  headline: "Infrastructure. Networks. Observability.",
  summary:
    "Infraestrutura corporativa, redes, monitoramento e troubleshooting com foco em disponibilidade, segurança e operação previsível.",

  // Preencha quando quiser exibir estes contatos no portfólio.
  // Enquanto permanecerem vazios, os botões correspondentes não aparecem.
  email: "",
  linkedin: "",

  github: "https://github.com/SamuelGuigo",
  location: "São Paulo, Brasil",

  techHighlights: [
    "Cisco",
    "MikroTik",
    "Zabbix",
    "Grafana",
    "Linux",
    "Windows Server",
    "VMware",
    "Proxmox",
    "FortiGate"
  ]
};

export function hasLink(value) {
  return Boolean(value && value.trim() && value !== "#");
}
