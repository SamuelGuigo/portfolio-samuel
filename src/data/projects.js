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
    id: "proxmox-zfs-migration",
    category: "Virtualization",
    kind: "Projeto profissional sanitizado",
    title: "Migração VMware → Proxmox & Storage ZFS",
    summary:
      "Migração controlada de workloads para Proxmox VE, criação de cluster, adaptação de VMs Windows/Linux e integração com storage TrueNAS/ZFS.",
    stack: ["Proxmox VE", "VMware ESXi", "KVM/QEMU", "VirtIO", "TrueNAS", "ZFS"],
    outcome: "~28,9 TiB úteis em RAIDZ2",
    github: "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/proxmox-virtualization-migration",
    challenge:
      "Evoluir a plataforma de virtualização preservando continuidade operacional, compatibilidade dos guests e uma rota segura de rollback durante a transição.",
    approach: [
      "Criação e validação do cluster Proxmox.",
      "Adaptação de VMs com VirtIO e QEMU Guest Agent.",
      "Implantação de TrueNAS com 6 discos SAS de 8 TB em JBOD e RAIDZ2.",
      "Validação SMART, integridade ZFS e conectividade de storage.",
      "Migração por etapas com validação de boot, rede, serviços e ativação do Windows."
    ],
    result:
      "Host definitivo em Proxmox operacional, storage ZFS disponibilizado para uso inicial e workloads migrados/validados por etapas, mantendo pendências de produção separadas do que já foi concluído."
  },
  {
    id: "industrial-ring",
    category: "Networking",
    kind: "Projeto profissional sanitizado",
    visual: "switching",
    title: "Comissionamento de Anel Ethernet Industrial",
    summary:
      "Configuração de switches industriais e validação local de um anel de rede para comunicação OT.",
    stack: ["Siemens", "Industrial Ethernet", "VLAN", "Redundância", "Switching"],
    outcome: "Anel funcional e validado localmente",
    github: "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/industrial-ring-commissioning",
    challenge:
      "Colocar a camada de switching industrial em condição funcional sem confundir validação local com aceite final de produção.",
    approach: [
      "Configuração dos switches previstos para o anel.",
      "Validação de conectividade entre os trechos.",
      "Testes locais de funcionamento após a configuração.",
      "Separação entre resultado técnico obtido e documentação/SAT ainda pendentes."
    ],
    result:
      "Switches configurados e anel funcionando em validação local; documentação final e SAT mantidos como marcos posteriores."
  },
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
    id: "wazuh-monitoring",
    category: "Security",
    kind: "Implementação inicial / laboratório",
    title: "Wazuh — Monitoramento de Segurança",
    summary:
      "Implantação inicial do Wazuh em ambiente corporativo de laboratório para agentes, inventário e acompanhamento de vulnerabilidades.",
    stack: ["Wazuh", "Windows", "Linux", "Syscollector", "Vulnerability Detection"],
    outcome: "Base de monitoramento implantada",
    github: "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/soc-mvp-architecture",
    challenge:
      "Validar a tecnologia de segurança sem apresentar como concluídos processos de SOC, resposta, cobertura 24×7 ou integrações ainda não homologadas.",
    approach: [
      "Instalação e organização inicial de agentes.",
      "Exploração de inventário de hardware/software com Syscollector.",
      "Uso do módulo de vulnerabilidades para acompanhamento técnico.",
      "Separação explícita entre laboratório, produção e arquitetura futura de SOC."
    ],
    result:
      "Wazuh implantado como base técnica de segurança; expansão de cobertura, tuning, runbooks e demais integrações permanecem em evolução."
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
    kind: "Prática profissional",
    title: "Observabilidade de Infraestrutura",
    summary:
      "Monitoramento de disponibilidade, desempenho e capacidade com Zabbix, Grafana, agentes e SNMP em ambientes de servidores e rede.",
    stack: ["Zabbix", "Grafana", "SNMP", "Agents", "iLO"],
    outcome: "Visibilidade operacional",
    challenge:
      "Restabelecer e manter coleta confiável em ativos heterogêneos, distinguindo comunicação do agente da saúde integral do serviço.",
    approach: [
      "Troubleshooting de agentes e registros residuais de serviço.",
      "Coleta via SNMP e agentes.",
      "Dashboards e análise de disponibilidade/capacidade.",
      "Classificação de alertas e validação após correções."
    ],
    result:
      "Monitoramento restabelecido em cenários de falha e maior visibilidade de servidores, interfaces e hardware."
  },
  {
    id: "rack-standardization",
    category: "Infrastructure",
    kind: "Infraestrutura física",
    visual: "rack",
    title: "Padronização de Rack & Cabeamento",
    summary:
      "Levantamento, inventário, rastreamento de conexões e planejamento de reorganização física de datacenter.",
    stack: ["Rack", "Patch Panel", "DIO", "Etiquetagem", "Cabeamento", "Fibra"],
    outcome: "46 ativos + 23 novos IDs",
    github: "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/data-center-rack-infrastructure-planning",
    challenge:
      "Reorganizar um ambiente de alta densidade sem perder rastreabilidade de portas, interligações e dependências durante o cutover.",
    approach: [
      "Mapeamento físico de ativos e portas.",
      "Criação de 23 novos IDs e rastreamento de três interligações.",
      "Identificação de aproximadamente 90% das portas de três switches no estágio documentado.",
      "Planejamento de patch panels, organizadores, fibra, materiais e janelas de mudança."
    ],
    result:
      "Inventário e plano de execução significativamente refinados, com os marcos de execução final, as-built e aceite mantidos como pendências separadas."
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
    stack: ["VMware", "Hyper-V", "Proxmox", "Veeam", "Iperius"],
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
    stack: ["Windows Server", "Linux", "AD", "DNS", "WSUS", "Aptly", "PowerShell"],
    outcome: "Fundação de serviços",
    challenge:
      "Consolidar domínio prático sobre os serviços que sustentam ambientes corporativos.",
    approach: [
      "Serviços de diretório e autenticação.",
      "DNS, WSUS e distribuição de atualizações.",
      "Administração de Linux e repositórios APT.",
      "Automação e troubleshooting com PowerShell."
    ],
    result:
      "Ambiente de laboratório orientado a sustentação e resolução de incidentes."
  }
];
