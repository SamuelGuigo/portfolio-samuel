export const projectCategories = [
  "Todos",
  "Redes",
  "Monitoramento",
  "Infraestrutura",
  "Segurança",
  "Virtualização",
  "Laboratórios"
];

export const projects = [
  {
    "id": "enterprise-infrastructure-handover-2026",
    "category": "Virtualização",
    "kind": "Projeto profissional",
    "title": "Implantação de infraestrutura: VMware, serviços e migração para Proxmox",
    "summary": "Implantei a plataforma VMware, provisionei VMs Windows/Linux e depois migrei o ambiente para Proxmox, com serviços, rede, storage, monitoramento e segurança.",
    "stack": [
      "VMware ESXi",
      "vCenter",
      "Proxmox VE",
      "VirtIO",
      "Windows Server 2022",
      "Ubuntu",
      "AD/DNS",
      "WSUS",
      "Aptly",
      "TrueNAS/ZFS",
      "Siemens",
      "Wazuh",
      "Zabbix",
      "SEP/SEPM"
    ],
    "outcome": "Frente técnica concluída; aceite integrado pendente",
    "challenge": "Construir uma infraestrutura de servidores para um ambiente corporativo e industrial e adaptar as cargas a uma mudança de hypervisor durante o projeto.",
    "scope": "Preparação e homologação de infraestrutura, de setembro a outubro de 2026. O case reúne as etapas do mesmo projeto; os recortes abaixo detalham cada frente.",
    "approach": [
      "Preparei o VMware ESXi e trabalhei na integração ao vCenter, no dimensionamento, na criação das VMs e na configuração de redes virtuais.",
      "Configurei sistemas Windows Server e Ubuntu e serviços de AD/DNS, atualizações, monitoramento e proteção de endpoints dentro da minha frente.",
      "Preparei o Proxmox, criei o cluster usado na transição e migrei as VMs, ajustando VirtIO, QEMU Guest Agent, boot, rede e ativação Windows.",
      "Implantei TrueNAS/ZFS e validei o pool e a saúde básica dos discos para uso inicial.",
      "Atuei no switching Siemens, VLANs, conectividade e correção de rotas; restabeleci comunicação após alteração de tags nas interfaces virtuais.",
      "Implantei e validei recursos do Wazuh, atuei no Zabbix e distribuí o SEP remotamente aos servidores Windows.",
      "Documentei as validações, dependências entre equipes e pendências para o fechamento técnico."
    ],
    "result": "Migração estabilizada no host definitivo; AD/DNS com replicação validada; repositório Linux consumido por piloto com nove atualizações aplicadas; 14/14 agentes Wazuh ativos e sincronizados; 10/10 endpoints Windows Online e Up-to-date no SEPM, no checkpoint de 09/10/2026.",
    "limits": [
      "Minha frente técnica foi reportada concluída em 09/10/2026, em ambiente de preparação/homologação. SAT, as-built e aceite de produção permaneciam como marcos do projeto.",
      "A configuração do QNAP foi realizada por outro integrante da equipe. Integração Iperius, retenção e restauração funcional permaneciam pendentes.",
      "Entreguei a camada de infraestrutura das VMs de aplicação. Instalação e homologação de SQL/MES pertenciam à equipe responsável pela aplicação.",
      "SEP Linux, certificado definitivo do SEPM, acesso remoto definitivo e testes completos de recuperação permaneciam pendentes."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/enterprise-infrastructure-handover-2026"
  },
  {
    "id": "proxmox-virtualization-migration",
    "category": "Virtualização",
    "kind": "Projeto profissional",
    "title": "Migração VMware → Proxmox VE",
    "summary": "Migrei VMs Windows/Linux do VMware para Proxmox e validei boot, rede, serviços e integração dos convidados.",
    "stack": [
      "VMware ESXi",
      "Proxmox VE",
      "KVM/QEMU",
      "VirtIO",
      "QEMU Guest Agent",
      "Windows Server",
      "Linux"
    ],
    "outcome": "Migração concluída e validada na frente técnica",
    "challenge": "Mudar o hypervisor de uma infraestrutura já implantada, preservando a operação dos serviços e uma sequência controlada de validação.",
    "scope": "Instalação de hosts, cluster de transição, movimentação das VMs e adaptação dos sistemas convidados. O cluster facilitou a migração; não é apresentado como HA de produção homologado.",
    "approach": [
      "Preparei o Proxmox definitivo e o cluster utilizado na transição.",
      "Migrei as cargas por etapas, revisando BIOS/UEFI, recursos, discos, bridges e VLANs.",
      "Instalei e validei VirtIO e QEMU Guest Agent nos Windows aplicáveis.",
      "Regularizei a ativação Windows após a mudança do hardware virtual.",
      "Verifiquei inicialização, conectividade, storage e serviços após cada movimentação."
    ],
    "result": "VMs migradas e estabilizadas no host definitivo em outubro de 2026; o equipamento temporário foi liberado para sua função de observabilidade.",
    "limits": [
      "Aceite das aplicações, backup/restauração e retirada do acesso transitório são etapas próprias.",
      "A migração e a implantação VMware original fazem parte do mesmo projeto descrito no case consolidado."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/proxmox-virtualization-migration"
  },
  {
    "id": "truenas-zfs-storage",
    "category": "Infraestrutura",
    "kind": "Projeto profissional",
    "title": "Storage TrueNAS com ZFS RAIDZ2",
    "summary": "Implantei TrueNAS com discos em JBOD, criei o pool RAIDZ2 e validei integridade ZFS e saúde básica dos discos.",
    "stack": [
      "TrueNAS",
      "ZFS",
      "RAIDZ2",
      "SAS",
      "JBOD",
      "SMART"
    ],
    "outcome": "Implantado e validado para uso inicial",
    "challenge": "Disponibilizar storage para virtualização com redundância ZFS e visibilidade individual dos discos.",
    "scope": "Seis HDDs SAS de 8 TB apresentados em JBOD, pool RAIDZ2 e integração inicial ao ambiente de virtualização.",
    "approach": [
      "Preparei o TrueNAS e a apresentação individual dos discos.",
      "Criei o pool ZFS RAIDZ2.",
      "Verifiquei estado do pool, contadores READ/WRITE/CKSUM e SMART básico.",
      "Validei conectividade e disponibilidade do storage para a migração."
    ],
    "result": "Pool ONLINE, aproximadamente 28,94 TiB úteis, sem erros de leitura/escrita/checksum registrados e saúde básica OK nos seis discos no checkpoint documentado.",
    "limits": [
      "SMART Long e scrub completos permaneciam pendentes para uma janela apropriada.",
      "O resultado de saúde inicial não comprova backup/restauração ou disponibilidade sustentada em produção."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/truenas-zfs-storage"
  },
  {
    "id": "vmware-virtual-infrastructure",
    "category": "Virtualização",
    "kind": "Etapa de projeto profissional",
    "title": "Implantação inicial de infraestrutura VMware",
    "summary": "Preparei o VMware ESXi, criei VMs Windows/Linux e configurei recursos e conectividade para serviços corporativos.",
    "stack": [
      "HPE ProLiant",
      "VMware ESXi",
      "vCenter",
      "vSwitch",
      "VLAN",
      "Windows Server",
      "Ubuntu"
    ],
    "outcome": "Etapa inicial executada; plataforma posteriormente migrada",
    "challenge": "Construir uma infraestrutura virtual desde a preparação dos servidores até a disponibilização das VMs e seus serviços.",
    "scope": "Camadas de compute, virtualização, rede virtual e sistemas convidados; participação na integração com storage e serviços em equipe.",
    "approach": [
      "Preparei ESXi e trabalhei na integração ao vCenter.",
      "Provisionei VMs com CPU, memória e discos dimensionados por função.",
      "Configurei Windows Server e Ubuntu, integração do guest e atualizações.",
      "Configurei endereçamento e trabalhei nas VLANs, vSwitches e dependências de rede.",
      "Registrei a evolução da configuração e os requisitos de validação."
    ],
    "result": "Infraestrutura virtual inicial e VMs preparadas para serviços de identidade, atualizações, logs, monitoramento e aplicações. Essas cargas foram posteriormente migradas para Proxmox.",
    "limits": [
      "Este case é uma etapa do projeto consolidado, não um contrato adicional.",
      "Implantação física no destino e aceite integrado não são atribuídos à minha entrega na base.",
      "Recursos exatos por VM e localização do cliente foram omitidos."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/vmware-virtual-infrastructure"
  },
  {
    "id": "windows-server-ad-dns",
    "category": "Infraestrutura",
    "kind": "Projeto profissional",
    "title": "Active Directory e DNS redundante",
    "summary": "Preparei VMs Windows Server, configurei AD/DNS e validei replicação e resolução de nomes.",
    "stack": [
      "Windows Server 2022",
      "AD DS",
      "DNS",
      "GPO",
      "repadmin",
      "dcdiag"
    ],
    "outcome": "Serviços e replicação validados em homologação",
    "challenge": "Disponibilizar identidade e resolução de nomes para os servidores do ambiente.",
    "scope": "Dois controladores de domínio/DNS, configuração dos clientes e validações de saúde do diretório.",
    "approach": [
      "Preparei Windows Server e a integração com o hypervisor.",
      "Configurei a base AD DS/DNS e o DNS dos servidores.",
      "Validei replicação nos dois sentidos com repadmin.",
      "Executei verificações DNS com dcdiag e trabalhei nos registros reversos/PTR.",
      "Organizei dependências de rede, tempo, políticas e documentação."
    ],
    "result": "AD/DNS operacional, replicação bidirecional sem erros na execução registrada de repadmin e teste DNS do domínio aprovado no checkpoint de homologação.",
    "limits": [
      "Revisão de registros residuais e documentação final de FSMO, Sites/Subnets e GPOs permaneciam como acabamentos.",
      "Recuperação de domínio e aceite de produção não são inferidos dos testes de replicação."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/windows-server-ad-dns"
  },
  {
    "id": "windows-wsus-patch-management",
    "category": "Infraestrutura",
    "kind": "Projeto profissional em equipe",
    "title": "WSUS: distribuição de atualizações Windows",
    "summary": "Preparei o servidor WSUS e corrigi dependências de conectividade; a frente de políticas e clientes foi executada em equipe.",
    "stack": [
      "Windows Server",
      "WSUS",
      "GPO",
      "Windows Update",
      "Roteamento"
    ],
    "outcome": "Comunicação e inventário piloto validados",
    "challenge": "Centralizar atualizações Windows e tornar os servidores capazes de sincronizar e reportar aplicabilidade.",
    "scope": "Preparação do servidor, conversão de edição Windows, sincronização e troubleshooting de acesso; GPOs e grupos compartilhados com a equipe.",
    "approach": [
      "Preparei a VM Windows e executei a conversão de edição para Datacenter.",
      "Trabalhei na sincronização e na validação de comunicação com o WSUS.",
      "Corrigi a rota do servidor que usava a interface provisória para alcançar o WSUS.",
      "Acompanhei o piloto e a evolução do inventário após novo ciclo controlado de busca."
    ],
    "result": "O relatório consolidado registra 11 VMs Windows sincronizando e piloto com inventário de aplicabilidade concluído. A correção de rota normalizou comunicação e registro do cliente afetado.",
    "limits": [
      "Atribuo as políticas e a organização de clientes à frente compartilhada com a equipe.",
      "Inventário e sincronização não comprovam instalação ponta a ponta de todas as atualizações.",
      "Integração da VM de backup e homologação final permaneciam pendentes."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/windows-wsus-patch-management"
  },
  {
    "id": "linux-aptly-update-repository",
    "category": "Infraestrutura",
    "kind": "Projeto profissional",
    "title": "Repositório Linux com Aptly e Nginx",
    "summary": "Implantei um repositório Ubuntu com mirrors, snapshots e canais TEST/PROD e validei seu consumo em um cliente piloto.",
    "stack": [
      "Ubuntu 24.04",
      "Aptly",
      "APT",
      "Nginx",
      "GPG",
      "Snapshots"
    ],
    "outcome": "Repositório e atualização piloto validados",
    "challenge": "Centralizar a distribuição de pacotes Ubuntu e controlar quais versões ficam disponíveis aos servidores.",
    "scope": "Ubuntu 24.04/Noble, arquitetura amd64, Aptly, Nginx, GPG e publicação interna de pacotes.",
    "approach": [
      "Preparei Ubuntu Server e o serviço Aptly.",
      "Configurei mirrors Noble/Noble Updates e snapshots.",
      "Publiquei canais TEST/PROD com Nginx e trabalhei na assinatura GPG.",
      "Validei índices APT e a aplicação de atualizações no piloto.",
      "Documentei sincronização, retenção e proteção de chaves/configuração."
    ],
    "result": "Repositório consumido pelo cliente piloto, com nove atualizações reais aplicadas no ciclo documentado.",
    "limits": [
      "O piloto não comprova atualização de todo o parque.",
      "Política definitiva de sincronização, retenção/runbook e backup de chaves/configuração permaneciam pendentes."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/linux-aptly-update-repository"
  },
  {
    "id": "soc-mvp-architecture",
    "category": "Segurança",
    "kind": "Projeto profissional",
    "title": "Wazuh: implantação e validação de recursos",
    "summary": "Implantei Wazuh, organizei agentes e validei coleta Sysmon, FIM Windows, inventário, hardening e alertas por evento controlado.",
    "stack": [
      "Wazuh",
      "Docker",
      "Sysmon",
      "FIM",
      "Syscollector",
      "SCA",
      "Vulnerability Detection",
      "Filebeat",
      "Teams"
    ],
    "outcome": "Plataforma e casos de uso validados em homologação",
    "challenge": "Centralizar telemetria e transformar a implantação de agentes em visibilidade verificável sobre os servidores.",
    "scope": "Stack single-node em Docker, agentes Windows/Linux e testes de recursos; não inclui operação de SOC 24×7.",
    "approach": [
      "Implantei a plataforma e organizei agentes por função.",
      "Instalei Sysmon nos Windows do lote e validei coleta e regra personalizada por evento controlado.",
      "Validei FIM Windows com eventos de criação e alteração em arquivos de teste.",
      "Verifiquei inventário, SCA e correlação pacote/CVE em Vulnerability Detection.",
      "Habilitei Archives JSON e validei Filebeat, indexação e consulta.",
      "Configurei retenção inicial e validei integração automática com Teams por evento controlado.",
      "Preparei backup local diário de configurações e validei execução/checksum."
    ],
    "result": "14/14 agentes ativos e sincronizados; coleta Sysmon em 11 Windows; FIM added/modified validado em dez servidores Windows; evento controlado indexado e alerta automático recebido no Teams.",
    "limits": [
      "Esses números descrevem checkpoints de homologação, não cobertura ou SLA permanentes.",
      "FIM Linux e cobertura fora do lote Windows exigiam consolidação adicional.",
      "Retenção contínua, cópia externa, snapshots de índices e restore funcional permaneciam pendentes.",
      "Notificação automática no Teams não é bloqueio automático ou Active Response homologado."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/soc-mvp-architecture"
  },
  {
    "id": "symantec-endpoint-protection-rollout",
    "category": "Segurança",
    "kind": "Projeto profissional",
    "title": "SEP/SEPM: implantação remota de proteção Windows",
    "summary": "Preparei o SEPM, recuperei acesso ao console e distribuí o cliente SEP remotamente, validando endpoints e Manager.",
    "stack": [
      "Symantec SEP",
      "SEPM",
      "SQL Express",
      "Remote Push",
      "PowerShell",
      "Windows Server"
    ],
    "outcome": "Rollout Windows validado; ajustes de fechamento pendentes",
    "challenge": "Distribuir proteção gerenciada sem instalar manualmente em cada VM e tratar uma divergência entre nome do servidor e certificado.",
    "scope": "SEPM com SQL Express local, backup do banco, pacote gerenciado Windows e Remote Push para dez servidores.",
    "approach": [
      "Verifiquei serviços do SEPM e SQL Express.",
      "Diagnostiquei a divergência de identidade/certificado e recuperei acesso com uma identidade compatível temporária.",
      "Executei backup do banco antes do rollout.",
      "Exportei o pacote gerenciado Windows e iniciei implantação remota em lote.",
      "Validei serviço, registro no Manager e atualização de definições após a instalação."
    ],
    "result": "10/10 endpoints registrados e Online, serviço SepMasterService Running/Automatic e dashboard com dez Up-to-date e zero Offline no checkpoint final de 09/10/2026.",
    "limits": [
      "O relatório de início da madrugada registrava instalação em andamento; o consolidado posterior registra o rollout Windows concluído.",
      "Um estado Disabled e duas solicitações de restart ainda exigiam revisão.",
      "Certificado/identidade definitiva e rollout Linux permaneciam pendentes. Não exponho a identidade temporária nem detalhes do ambiente."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/symantec-endpoint-protection-rollout"
  },
  {
    "id": "zabbix-dell-n1124p-on",
    "category": "Monitoramento",
    "kind": "Projeto publicado",
    "title": "Template Zabbix 7 para Dell N1124P-ON",
    "summary": "Adaptei um template comunitário Dell N-Series para Zabbix 7 e corrigi importação, LLD, contadores e telemetria incompatível.",
    "stack": [
      "Zabbix 7",
      "SNMP",
      "LLD",
      "IF-MIB",
      "Dell N-Series"
    ],
    "outcome": "Adaptado e validado no modelo documentado",
    "challenge": "Estabilizar um template legado que apresentava incompatibilidade de schema, No Such Instance e colisões de keys.",
    "scope": "Compatibilidade Zabbix 7, disponibilidade, CPU/memória, interfaces e sensores no Dell N1124P-ON documentado.",
    "approach": [
      "Ajustei schema e dependências ICMP para Zabbix 7.",
      "Criei fallback IF-MIB de 32 bits para VLANs sem contadores HC e mantive 64 bits nas interfaces físicas.",
      "Desativei Process Discovery dependente de índices voláteis.",
      "Removi prototypes legados Fan/PSU incompatíveis.",
      "Corrigi keys de TempUnit LLD com SNMPINDEX e atualizei referências.",
      "Publiquei YAML, changelog e documentação das limitações."
    ],
    "result": "Template importável e estabilizado para o equipamento validado. O registro do portfólio documenta redução de 13 para zero itens não suportados após as correções e retirada de coletas incompatíveis.",
    "limits": [
      "O resultado inclui desativação/remoção de telemetria incompatível; não significa implementação de todos os OIDs.",
      "PoE e validação em outros modelos/firmwares permanecem no roadmap.",
      "A autoria da base comunitária é preservada; minha contribuição é a adaptação, troubleshooting e validação."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/zabbix-dell-n1124p-on"
  },
  {
    "id": "hpe-proliant-post-memory-troubleshooting",
    "category": "Infraestrutura",
    "kind": "Troubleshooting",
    "title": "Recuperação de servidor HPE com falha no POST",
    "summary": "Diagnostiquei falha de inicialização de memória, testei DIMMs individualmente e recuperei o POST com módulos conhecidos como funcionais.",
    "stack": [
      "HPE ProLiant",
      "iLO 5",
      "IML",
      "POST",
      "ECC RDIMM"
    ],
    "outcome": "Inicialização recuperada com 64 GB reconhecidos",
    "challenge": "Servidor HPE parava durante Memory Initialization, com alertas de saúde e eventos de memória no IML.",
    "scope": "HPE ProLiant DL380 Gen10 Plus, iLO 5, IML e testes controlados de ECC RDIMM.",
    "approach": [
      "Consultei console remoto e logs IML.",
      "Reposicionei módulos e revisei população de memória.",
      "Testei individualmente os DIMMs originais na mesma posição de referência.",
      "Realizei teste cruzado com dois módulos de 32 GB conhecidos como funcionais.",
      "Verifiquei conclusão do POST e memória instalada/disponível."
    ],
    "result": "Os módulos originais reproduziram o erro 221 nos testes individuais; com a substituição, o servidor completou POST e reconheceu 64 GB instalados e disponíveis.",
    "limits": [
      "O resultado é específico à configuração testada; não representa teste exaustivo de todos os slots."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/hpe-proliant-post-memory-troubleshooting"
  },
  {
    "id": "industrial-ring-commissioning",
    "category": "Redes",
    "kind": "Projeto profissional",
    "title": "Comissionamento local de anel Ethernet industrial",
    "summary": "Configurei switches industriais e validei comunicação do anel no estágio local de preparação.",
    "stack": [
      "Siemens",
      "Industrial Ethernet",
      "VLAN",
      "Switching",
      "OT"
    ],
    "outcome": "Switches configurados e anel validado localmente",
    "challenge": "Preparar a camada de switching e conectividade para uma rede OT com redundância em anel.",
    "scope": "Configuração de switches Siemens, revisão de uplinks/interfaces e testes locais de conectividade.",
    "approach": [
      "Configurei switches previstos para o anel.",
      "Revisei uplinks, membros e estado de interfaces.",
      "Executei testes de conectividade entre os trechos.",
      "Registrei pendências de documentação e aceite."
    ],
    "result": "Switches configurados e anel reportado funcional nos testes locais.",
    "limits": [
      "SAT, as-built, backup de configuração e testes formais de redundância em campo permaneciam separados da validação local.",
      "Não atribuo um protocolo específico de redundância sem evidência no registro."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/industrial-ring-commissioning",
    "visual": "switching"
  },
  {
    "id": "industrial-ethernet-crc-troubleshooting",
    "category": "Redes",
    "kind": "Troubleshooting",
    "title": "Diagnóstico CRC/FCS e recuperação de enlace industrial",
    "summary": "Investiguei erros de interface, testei outra porta de uplink e atuei na recuperação da comunicação industrial.",
    "stack": [
      "Industrial Ethernet",
      "CRC/FCS",
      "Switching",
      "Contadores de interface",
      "Troubleshooting"
    ],
    "outcome": "Comunicação recuperada; reparo permanente a verificar",
    "challenge": "Interrupção de comunicação industrial acompanhada por erros CRC/FCS e eventos de sincronização próximos ao incidente.",
    "scope": "Análise de contadores, isolamento de porta e recuperação do enlace em coordenação com a operação.",
    "approach": [
      "Separei correlação temporal de eventos NTP da evidência de erros Ethernet.",
      "Analisei contadores CRC/FCS no enlace afetado.",
      "Mudei o uplink de porta como teste de isolamento e verifiquei persistência dos erros.",
      "Restabeleci comunicação após perda de acesso durante a mudança de retorno.",
      "Documentei a recuperação e as verificações físicas restantes."
    ],
    "result": "Comunicação recuperada; o processo retornou à operação após recuperação de rede e reset do painel. A troca de porta não eliminou os erros e manteve cabo/conectores/lado remoto como hipóteses.",
    "limits": [
      "Minha atuação foi na investigação e recuperação de rede.",
      "Retorno operacional não comprova eliminação permanente da falha física."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/industrial-ethernet-crc-troubleshooting"
  },
  {
    "id": "layer2-mac-flapping-troubleshooting",
    "category": "Redes",
    "kind": "Troubleshooting",
    "title": "Investigação de indisponibilidade e MAC flapping",
    "summary": "Correlacionei indisponibilidade de recursos virtualizados com logs de MAC flapping e revisei os caminhos redundantes.",
    "stack": [
      "Cisco",
      "Switching",
      "STP",
      "MAC learning",
      "LACP"
    ],
    "outcome": "Diagnóstico de camada 2 e recomendação entregues",
    "challenge": "VMs, interfaces de gerenciamento e monitoramento ficaram indisponíveis simultaneamente.",
    "scope": "Logs de switching, aprendizado MAC, análise de STP e avaliação de agregação compatível.",
    "approach": [
      "Acessei o switch próximo ao ambiente virtualizado e coletei logs.",
      "Correlacionei movimentação repetida de MACs com a interrupção.",
      "Revisei caminhos redundantes e premissas de STP/agregação.",
      "Recomendei revisão da topologia e avaliação de LACP/Port-Channel quando compatível."
    ],
    "result": "Delimitei a investigação na dependência compartilhada de camada 2 e entreguei uma direção técnica de correção da redundância.",
    "limits": [
      "MAC flapping isoladamente não prova loop.",
      "Não há implantação LACP concluída ou redução medida de indisponibilidade registrada neste case."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/layer2-mac-flapping-troubleshooting",
    "visual": "switching"
  },
  {
    "id": "zabbix-grafana-infrastructure-monitoring",
    "category": "Monitoramento",
    "kind": "Prática profissional",
    "title": "Monitoramento de infraestrutura com Zabbix e Grafana",
    "summary": "Configurei e investiguei coleta por agentes/SNMP, interpretei métricas e trabalhei com dashboards de infraestrutura.",
    "stack": [
      "Zabbix",
      "Grafana",
      "SNMP",
      "Agents",
      "LLD",
      "Dashboards"
    ],
    "outcome": "Coleta e diagnóstico documentados",
    "challenge": "Obter visibilidade de disponibilidade, capacidade e degradação sem depender apenas do estado up/down.",
    "scope": "Prática consolidada em servidores, equipamentos de rede, serviços, dashboards e relatórios; não representa um único incidente.",
    "approach": [
      "Trabalhei com Zabbix Server, agentes e SNMP.",
      "Investiguei itens não suportados, falhas de discovery e contadores ausentes.",
      "Analisei CPU, memória, storage e erros de interfaces.",
      "Trabalhei em dashboards Grafana e relatórios de uso de recursos.",
      "No projeto de infraestrutura, corrigi rota de retorno que impedia a comunicação dos agentes da VM de backup."
    ],
    "result": "Coleta e disponibilidade dos hosts do projeto registradas como funcionais após correções de conectividade; o case Dell detalha um resultado específico de engenharia de template.",
    "limits": [
      "Uma entrada local legada de self-monitoring e acabamento de grupos/mapas/triggers permaneciam pendentes.",
      "Não há percentual comprovado de redução de downtime ou tempo de atendimento."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/zabbix-grafana-infrastructure-monitoring"
  },
  {
    "id": "data-center-rack-infrastructure-planning",
    "category": "Infraestrutura",
    "kind": "Projeto profissional",
    "title": "Mapeamento e planejamento de reorganização de racks",
    "summary": "Mapeei ativos e conexões, especifiquei materiais e organizei as etapas de mudança dos racks.",
    "stack": [
      "Rack",
      "Cabeamento estruturado",
      "Patch Panel",
      "DIO",
      "Fibra",
      "Inventário"
    ],
    "outcome": "Levantamento e plano entregues; execução final pendente",
    "challenge": "Reorganizar racks e cabeamento com rastreabilidade das conexões e acesso adequado para manutenção.",
    "scope": "Inventário, rastreamento físico, layout, caminhos de cabos, especificação de materiais e plano de execução por janela.",
    "approach": [
      "Identifiquei equipamentos e rastreei conexões em campo.",
      "Registrei relações entre portas, patch panels e interligações.",
      "Planejei layout, organizadores, eletrocalhas, fibra e materiais.",
      "Separei tarefas físicas das mudanças com impacto em serviços.",
      "Atualizei inventário e documentação conforme o levantamento."
    ],
    "result": "Inventário e plano refinados. O registro existente do site documenta 46 ativos, 23 novos IDs, três interligações rastreadas e aproximadamente 90% das portas de três switches identificadas no estágio do levantamento.",
    "limits": [
      "Esses números são do levantamento documentado, não do aceite final.",
      "Reorganização física restante, as-built e validação pós-mudança permaneciam pendentes."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/data-center-rack-infrastructure-planning",
    "visual": "rack"
  },
  {
    "id": "industrial-network-contingency-monitoring",
    "category": "Redes",
    "kind": "Projeto profissional",
    "title": "Portas de contingência e monitoramento industrial",
    "summary": "Analisei interfaces, preparei portas equivalentes de contingência e documentei ativação, validação e rollback.",
    "stack": [
      "Industrial Ethernet",
      "Switching",
      "Zabbix",
      "Contadores",
      "Runbook",
      "Rollback"
    ],
    "outcome": "Portas reserva e runbook preparados",
    "challenge": "Evitar reconstruir a configuração de interface durante uma falha e acompanhar degradação dos enlaces.",
    "scope": "Análise de contadores, mapeamento de interfaces livres, configuração reserva e persistência.",
    "approach": [
      "Revisei estado, erros, utilização e evolução de contadores.",
      "Mapeei interfaces disponíveis e preparei configuração equivalente para as conexões previstas.",
      "Mantive as reservas administrativamente desabilitadas em operação normal.",
      "Verifiquei persistência e documentei precheck, ativação, validação e rollback."
    ],
    "result": "Portas de contingência preparadas e processo de uso documentado para os switches do escopo.",
    "limits": [
      "Não há teste em carga de todas as portas reserva registrado.",
      "Uma porta reserva não resolve defeito de cabo nem comprova redundância automática."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/industrial-network-contingency-monitoring"
  },
  {
    "id": "fiber-optical-link-troubleshooting",
    "category": "Redes",
    "kind": "Prática profissional",
    "title": "Diagnóstico de enlaces ópticos",
    "summary": "Investiguei enlaces relacionando potência óptica, transceptores, conectores, pareamento e caminho físico.",
    "stack": [
      "Fibra",
      "SFP/SFP+",
      "WDM",
      "Power meter",
      "OTDR"
    ],
    "outcome": "Método de diagnóstico documentado",
    "challenge": "Distinguir problemas de compatibilidade óptica, atenuação, patching e infraestrutura passiva.",
    "scope": "Prática consolidada de diagnóstico de fibra, SFP/SFP+, WDM e interpretação de medições; não é uma única ocorrência.",
    "approach": [
      "Relacionei sintomas de interface ao enlace físico.",
      "Verifiquei compatibilidade dos transceptores e pareamento de comprimentos de onda.",
      "Interpretei potência recebida conforme o módulo e ponto de medição.",
      "Relacionei evidências de power meter/OTDR a conectores, patching e rota física.",
      "Direcionei intervenções conforme o domínio provável de falha."
    ],
    "result": "Hipóteses técnicas delimitadas e inspeção/intervenção física direcionadas. Não há métrica única de reparo ou tempo de solução consolidada para esta prática.",
    "limits": [
      "Leituras ópticas e resultados de reparo pertencem aos registros de cada intervenção."
    ],
    "origin": "Experiência profissional em equipe; contratação distinta da Auron Tech.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/fiber-optical-link-troubleshooting",
    "visual": "fiber"
  },
  {
    "id": "mikrotik-corporate-network-lab",
    "category": "Laboratórios",
    "kind": "Laboratório",
    "title": "Laboratório RouterOS: VLANs, VPN e failover",
    "summary": "Configurei cenários RouterOS de segmentação, roteamento, firewall, VPN e falhas de WAN em laboratório.",
    "stack": [
      "MikroTik RouterOS",
      "VLAN",
      "NAT",
      "Firewall",
      "WireGuard",
      "Dual WAN"
    ],
    "outcome": "Cenários práticos documentados",
    "challenge": "Validar o comportamento esperado de um gateway antes de adaptá-lo a um ambiente específico.",
    "scope": "VLANs, NAT, políticas entre zonas, cenários WireGuard/L2TP/OpenVPN e dual-WAN.",
    "approach": [
      "Defini comunicação esperada entre zonas e configurei VLANs/roteamento.",
      "Configurei NAT e políticas de firewall.",
      "Explorei cenários de VPN e acesso aos recursos previstos.",
      "Realizei cenários de failover/recuperação e preservei configurações de referência."
    ],
    "result": "Ambiente prático de estudo e validação com cenários repetíveis e documentação da configuração.",
    "limits": [
      "Laboratório, sem cliente ou aceite de produção.",
      "Os diferentes tipos de VPN são cenários separados; não uma arquitetura única comprovada em produção."
    ],
    "origin": "Laboratório pessoal.",
    "github": "https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo/tree/main/cases/mikrotik-corporate-network-lab"
  }
];
