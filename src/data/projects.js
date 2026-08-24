export const projectCategories = [
  "Todos",
  "Networking",
  "Monitoring",
  "Infrastructure",
  "Security",
  "Virtualization",
  "Labs"
];

export const projects = [
  {
    id: "zabbix-dell",
    category: "Monitoring",
    kind: "Projeto publicado",
    title: "Zabbix 7 Template — Dell N1124P-ON",
    summary:
      "Adaptação e estabilização de template SNMP para Dell EMC N1124P-ON, com compatibilidade Zabbix 7, LLD e tratamento de telemetria não suportada.",
    stack: ["Zabbix 7", "SNMP", "LLD", "IF-MIB", "Dell N-Series"],
    outcome: "13 unsupported → 0",
    github: "https://github.com/SamuelGuigo/zabbix-dell-n1124p-on",
    challenge:
      "O template legado apresentava incompatibilidades com Zabbix 7, itens No Such Instance, índices de processos voláteis, prototypes legados e colisões de keys em discovery.",
    approach: [
      "Adequação do schema e das dependências de ICMP para Zabbix 7.",
      "Criação de fallback de tráfego VLAN com contadores IF-MIB de 32 bits quando HC counters não eram expostos.",
      "Desativação operacional do Process Discovery para eliminar ruído causado por SNMPINDEX volátil.",
      "Remoção de prototypes legados de Fan/PSU incompatíveis com o modelo validado.",
      "Correção das keys do TempUnit LLD usando SNMPINDEX para eliminar colisões."
    ],
    result:
      "Template estabilizado e publicado com documentação técnica, changelog, política de segurança e YAML reutilizável, preservando métricas operacionais relevantes sem expor dados do ambiente."
  },
  {
    id: "mac-flapping",
    category: "Networking",
    kind: "Troubleshooting",
    visual: "switching",
    title: "Investigação de MAC Flapping",
    summary:
      "Análise de indisponibilidade em ambiente virtualizado a partir de logs de switching, camada 2 e comportamento de STP.",
    stack: ["Cisco", "STP", "LACP", "Switching", "Logs"],
    outcome: "Causa técnica isolada",
    challenge:
      "Múltiplas VMs ficaram indisponíveis de forma simultânea e o problema apontava para a camada de rede.",
    approach: [
      "Correlação entre indisponibilidade e eventos coletados nos switches.",
      "Investigação de MAC address flapping.",
      "Análise da topologia redundante e do comportamento do STP.",
      "Recomendação de agregação de enlaces com LACP para reduzir ambiguidade de caminho."
    ],
    result:
      "A investigação convergiu para comportamento de camada 2 e permitiu direcionar a correção da topologia."
  },
  {
    id: "observability",
    category: "Monitoring",
    kind: "Arquitetura",
    title: "Plataforma de Observabilidade",
    summary:
      "Arquitetura centralizada para disponibilidade, desempenho, alertas e visualização de ativos de infraestrutura.",
    stack: ["Zabbix", "Grafana", "SNMP", "Agents", "MySQL"],
    outcome: "Visibilidade centralizada",
    challenge:
      "Consolidar em uma única camada operacional a saúde de servidores, switches, firewalls e serviços.",
    approach: [
      "Coleta via SNMP e agentes.",
      "Templates orientados por tipo de ativo.",
      "Triggers e alertas para eventos críticos.",
      "Dashboards para disponibilidade, capacidade e tendência."
    ],
    result:
      "Modelo de observabilidade capaz de centralizar indicadores técnicos e reduzir tempo de diagnóstico."
  },
  {
    id: "rack-standardization",
    category: "Infrastructure",
    kind: "Infraestrutura física",
    visual: "rack",
    title: "Padronização de Rack & Cabeamento",
    summary:
      "Planejamento de rack orientado a manutenção, identificação, expansão e separação adequada de dados, energia e fibra.",
    stack: ["Rack", "Patch Panel", "DIO", "Etiquetagem", "Cabeamento"],
    outcome: "Manutenção previsível",
    challenge:
      "Ambiente com alta densidade de ativos e necessidade de reorganização sem prejudicar manutenção e crescimento futuro.",
    approach: [
      "Mapeamento físico de ativos e portas.",
      "Planejamento de patch panels e organizadores.",
      "Padronização de identificação e sequência de portas.",
      "Separação de rotas para dados, energia e fibra.",
      "Reserva de capacidade para expansão."
    ],
    result:
      "Arquitetura física documentada e preparada para execução com foco em manutenibilidade."
  },
  {
    id: "fiber-troubleshooting",
    category: "Networking",
    kind: "Troubleshooting",
    visual: "fiber",
    title: "Diagnóstico de Enlace Óptico",
    summary:
      "Troubleshooting de fibra a partir de níveis ópticos, compatibilidade de conectores, WDM e testes de enlace.",
    stack: ["Fibra", "OTDR", "WDM", "SFP", "Diagnóstico"],
    outcome: "Hipóteses técnicas reduzidas",
    challenge:
      "Enlace apresentando potência óptica incompatível com operação estável.",
    approach: [
      "Avaliação dos níveis ópticos recebidos.",
      "Verificação de conectores e possíveis incompatibilidades.",
      "Validação de sentido e pareamento de WDM.",
      "Uso de distância e comportamento do enlace como evidência de diagnóstico."
    ],
    result:
      "O troubleshooting reduziu o espaço de hipóteses e direcionou a inspeção física do enlace."
  },
  {
    id: "mikrotik-gateway",
    category: "Security",
    kind: "Lab",
    title: "Gateway Corporativo MikroTik",
    summary:
      "Laboratório de gateway corporativo com segmentação, VPN, políticas de firewall e redundância WAN.",
    stack: ["RouterOS", "WireGuard", "VLAN", "Firewall", "Dual WAN"],
    outcome: "Segmentação + redundância",
    challenge:
      "Construir uma topologia de borda capaz de segmentar usuários, serviços e acesso remoto com tolerância a falhas.",
    approach: [
      "Segmentação lógica por VLAN.",
      "Regras de firewall entre zonas.",
      "VPN WireGuard para acesso seguro.",
      "Failover de WAN e testes de continuidade."
    ],
    result:
      "Laboratório reproduzível para validar políticas de borda, VPN e disponibilidade."
  },
  {
    id: "virtualization-backup",
    category: "Virtualization",
    kind: "Lab de infraestrutura",
    title: "Virtualização & Backup",
    summary:
      "Ambiente voltado a hosts, VMs, redes virtuais, proteção de workloads e recuperação.",
    stack: ["VMware", "Hyper-V", "Proxmox", "Veeam"],
    outcome: "Ambiente reproduzível",
    challenge:
      "Praticar criação, proteção e recuperação de workloads em diferentes plataformas de virtualização.",
    approach: [
      "Criação e gestão de VMs.",
      "Redes virtuais e segmentação.",
      "Rotinas de backup e recuperação.",
      "Testes de restauração e continuidade."
    ],
    result:
      "Base de laboratório para comparar plataformas e validar cenários de recuperação."
  },
  {
    id: "windows-linux-services",
    category: "Labs",
    kind: "Lab de serviços",
    title: "Serviços Windows & Linux",
    summary:
      "Laboratórios de serviços de infraestrutura, troubleshooting de sistema e automação operacional.",
    stack: ["Windows Server", "Linux", "AD", "DNS", "DHCP", "PowerShell"],
    outcome: "Fundação de serviços",
    challenge:
      "Consolidar domínio prático sobre os serviços que sustentam ambientes corporativos.",
    approach: [
      "Serviços de diretório e autenticação.",
      "DNS e DHCP.",
      "Administração de Linux.",
      "Automação e troubleshooting com PowerShell."
    ],
    result:
      "Ambiente de laboratório orientado a sustentação e resolução de incidentes."
  }
];