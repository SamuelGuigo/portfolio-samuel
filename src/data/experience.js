export const experience = [
  {
    period: "Jul/2026 — Atual",
    role: "Analista de Infraestrutura Pleno",
    company: "EGE Soluções",
    type: "Infraestrutura corporativa, datacenter, redes, segurança e OT",
    bullets: [
      "Conduzo projetos e frentes técnicas de infraestrutura corporativa e industrial/OT, com definição de soluções, planejamento de execução, dimensionamento de materiais, implantação, sustentação e validação.",
      "Preparei VMware ESXi e VMs Windows/Linux e depois migrei o ambiente para Proxmox VE, com cluster de transição, VirtIO/QEMU Guest Agent e validação de boot, rede e serviços.",
      "Implantei TrueNAS/ZFS com 6 discos SAS de 8 TB em JBOD e RAIDZ2 (~28,9 TiB úteis), incluindo SMART, integridade ZFS e integração ao ambiente de virtualização.",
      "Configurei Windows Server, AD/DNS, Ubuntu/Aptly e bases NTP/Syslog; trabalhei com WSUS, licenciamento e acesso remoto. A integração final Iperius/QNAP e o teste de restauração permaneciam pendentes no fechamento.",
      "Configurei switches Siemens e validei localmente o anel industrial; investiguei CRC/FCS, MAC flapping, VLANs e uplinks e avaliei redundância STP/LACP conforme cada cenário.",
      "Implantei Wazuh e validei agentes, Sysmon, FIM Windows e alertas por evento controlado; distribuí SEP remotamente aos Windows e analisei aplicabilidade de achados de segurança em infraestrutura.",
      "Conduzo tecnicamente um projeto de reorganização de racks: sou autor do layout executivo, defino solução, materiais e etapas de execução, com inventário, rastreabilidade e mudanças por grupos. O fechamento físico, as-built e aceite seguem como etapas próprias.",
      "Automatizei a transferência de backups SQL em Linux com Bash e systemd, validação byte a byte e controles de capacidade; a raiz passou de 89% para 29% de ocupação no atendimento documentado. Limpeza histórica manual e teste de restauração são etapas distintas.",
      "Documentei atividades e resultados com inventário, evidências, planos de mudança, rollback, runbooks, critérios de aceite e as-built."
    ]
  },
  {
    period: "Jan/2025 — Atual",
    role: "Fundador & Consultor de Infraestrutura",
    company: "Auron Tech",
    type: "Consultoria própria",
    bullets: [
      "Desenvolvo projetos de infraestrutura e propostas para PMEs e ambientes residenciais, com levantamento, desenho, escopo, implantação e validação conforme a etapa contratada.",
      "Configuro e investigo falhas em MikroTik RouterOS com DHCP, NAT, VLANs, firewall, rotas, failover, WireGuard/VPN, LAN/WAN e links dedicados.",
      "Dimensiono switching/PoE, Wi-Fi interno/externo, rack, nobreak e segmentação em propostas técnicas, considerando dispositivos IP e integrações conforme o escopo.",
      "Atuo em configuração e troubleshooting de redes, Windows/Linux, virtualização e monitoramento; registro escopo e validações de cada atendimento.",
      "Elaboro propostas, dimensiono equipamentos, defino escopo e presto atendimento recorrente a clientes."
    ]
  },
  {
    period: "2022 — Jul/2025",
    role: "Analista de Redes Jr. | Evolução do Suporte N2 ao NOC",
    company: "Alares Internet",
    type: "Trajetória iniciada na Azza e unificada após a incorporação pela Alares",
    bullets: [
      "Iniciei a trajetória no suporte técnico em 2022, na operação então denominada Azza. Na Alares, atuei como Auxiliar de Suporte Técnico N2 de jan/2023 a mar/2024 e fui promovido a Analista de Redes Jr. em mar/2024, permanecendo até jul/2025.",
      "Monitorei POPs, backbone, OLTs, switches, roteadores, links e serviços em operação de telecom distribuída por cerca de 48 cidades e 140 mil clientes, incluindo responsabilidade pelo monitoramento no turno noturno.",
      "Analisei incidentes massivos, indisponibilidade, atenuação, rompimentos, latência e perda de pacotes via AMS, Zabbix e Grafana, acompanhando tratativas até a normalização.",
      "Investiguei falhas via CLI em ambiente multivendor com MikroTik, Huawei, ZTE, Nokia e equipamentos de rede/FTTH; trabalhei também com Parks, FiberHome e Intelbras.",
      "Prestei suporte a links dedicados, com análise de rotas, conectividade, provisionamento e articulação com campo e backbone.",
      "Executei diagnóstico N2 de lentidão, instabilidade e quedas para clientes residenciais e corporativos, com testes, histórico, tickets e escalonamento.",
      "Trabalhei com FTTH, GPON/EPON, ONTs/ONUs, provisionamento, níveis ópticos, OLTs, fibra, CTO, DIO e rede externa.",
      "Prestei suporte e investiguei falhas em dispositivos e integrações IP, incluindo CFTV e controle de acesso, apoiando técnicos de campo.",
      "Documentei incidentes, priorizei demandas conforme impacto e apoiei suporte avançado e equipes de campo em cenários críticos."
    ]
  },
  {
    period: "Set/2021 — Ago/2022",
    role: "Analista de TI — Responsável local pela operação",
    company: "Hospital Municipal",
    type: "TI generalista em ambiente hospitalar crítico",
    bullets: [
      "Fui responsável local pela sustentação de TI do hospital, com atendimento a aproximadamente 30 estações e mais de 25 impressoras, usuários, sistemas e conectividade.",
      "Administrei Windows Server 2008, Active Directory, usuários, permissões, compartilhamentos e rotinas de backup.",
      "Prestei suporte N1 ao sistema hospitalar, fiz manutenção de PCs/impressoras e corrigi falhas de hardware/software.",
      "Trabalhei em racks, cabeamento, pontos de rede, switches/roteadores, câmeras e melhorias de infraestrutura."
    ]
  }
];

export const academicEducation = [
  {
    period: "2019 — 2021",
    title: "Graduação em Gestão da Tecnologia da Informação",
    institution: "Universidade Cruzeiro do Sul",
    detail: "Formação superior em gestão, serviços e fundamentos de Tecnologia da Informação."
  },
  {
    period: "2023 — 2024",
    title: "Pós-graduação em Engenharia de Redes de Computadores",
    institution: "Universidade Cruzeiro do Sul",
    detail: "Especialização voltada a redes, infraestrutura e ambientes corporativos."
  },
  {
    period: "2024 — 2025",
    title: "Pós-graduação em Cybersecurity",
    institution: "Universidade Cruzeiro do Sul",
    detail: "Especialização em segurança aplicada a redes, infraestrutura e sistemas."
  },
  {
    period: "2025",
    title: "Pós-graduação em Estrutura e Gestão de Redes",
    institution: "UNINTER",
    detail: "Especialização complementar voltada a infraestrutura, arquitetura e gestão de redes."
  }
];

export const technicalEducation = [
  {
    title: "Cisco Networking Academy — Splunk Cybersecurity Defense Analyst",
    status: "EM ANDAMENTO",
    detail: "Trilha de defesa cibernética em andamento, iniciada conforme atualização de outubro de 2026."
  },
  {
    title: "Cisco Networking Academy — CCNAv7",
    status: "EM ANDAMENTO",
    detail:
      "Estudos de networking, switching, routing, wireless e segurança; formação ainda não concluída."
  },
  {
    title: "MikroTik & RouterOS",
    status: "FORMAÇÃO TÉCNICA",
    detail: "Firewall, VPN, roteamento, VLAN, failover e administração RouterOS."
  },
  {
    title: "Firewalls & Segurança",
    status: "FORMAÇÃO TÉCNICA",
    detail: "FortiGate, pfSense, políticas de firewall, VPN, segmentação e Wazuh."
  },
  {
    title: "Observabilidade & Monitoramento",
    status: "FORMAÇÃO TÉCNICA",
    detail: "Zabbix, Grafana, SNMP/LLD, templates, discovery, alertas e NetBox."
  },
  {
    title: "Sistemas, Virtualização & Backup",
    status: "FORMAÇÃO TÉCNICA",
    detail: "Linux, Windows Server, Proxmox, VMware, Hyper-V, TrueNAS/ZFS, Iperius e Veeam."
  }
];
