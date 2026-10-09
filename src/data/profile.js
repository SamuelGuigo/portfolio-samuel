// PUBLIC ONLY:
// Tudo neste arquivo será entregue ao navegador e poderá ser lido por qualquer visitante.
// Nunca coloque senha, token, API key, IP/hostname de cliente ou qualquer outro segredo aqui.
export const profile = {
  name: "Samuel Guigo",
  role: "Analista de Infraestrutura Pleno",
  headline: "Infraestrutura, redes e segurança com atuação prática.",
  summary:
    "Implanto servidores e serviços Windows/Linux, configuro redes, executo migrações e investigo falhas. Minha experiência reúne virtualização, storage, monitoramento, segurança e infraestrutura industrial, com validação e documentação das entregas.",

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
    "SEP / SEPM"
  ]
};

export function hasLink(value) {
  return Boolean(value && value.trim() && value !== "#");
}
