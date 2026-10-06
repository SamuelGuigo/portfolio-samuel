// PUBLIC ONLY:
// Tudo neste arquivo será entregue ao navegador e poderá ser lido por qualquer visitante.
// Nunca coloque senha, token, API key, IP/hostname de cliente ou qualquer outro segredo aqui.
export const profile = {
  name: "Samuel Guigo",
  role: "Analista de Infraestrutura Pleno",
  headline: "Infrastructure. Datacenter. Networks. Security. OT.",
  summary:
    "Infraestrutura corporativa e industrial com atuação em datacenter, virtualização, redes, Windows/Linux, storage, observabilidade, segurança e troubleshooting.",

  // Preencha quando quiser exibir estes contatos no portfólio.
  // Enquanto permanecerem vazios, os botões correspondentes não aparecem.
  email: "",
  linkedin: "",

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
    "NetBox"
  ]
};

export function hasLink(value) {
  return Boolean(value && value.trim() && value !== "#");
}
