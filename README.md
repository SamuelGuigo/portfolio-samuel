# Samuel Guigo — Portfólio profissional

Site pessoal em React/Vite com minha experiência prática em infraestrutura, redes, virtualização, monitoramento e segurança. A Auron Tech aparece na trajetória; a apresentação comercial da empresa é mantida separadamente.

## Conteúdo

- `src/data/profile.js`: apresentação e contatos públicos.
- `src/data/projects.js`: cases com problema, escopo, atividades, tecnologias, resultado e estado da entrega.
- `src/data/experience.js`: trajetória e formação.
- [Documentação completa dos cases](https://github.com/SamuelGuigo/Portfolio-Tecnico-Samuel-Guigo).
- [Template Dell/Zabbix](https://github.com/SamuelGuigo/zabbix-dell-n1124p-on).

Recortes do mesmo projeto mantêm essa relação; laboratórios são identificados. Experiência em equipes de empregadores não é apresentada como contratação da Auron Tech. As métricas descrevem checkpoints documentados de validação.

## Desenvolvimento e verificação

```bash
npm ci
npm run dev
npm run build
```

O build executa a auditoria de publicação existente e gera `dist/`. O workflow existente em `.github/workflows/deploy-pages.yml` mantém a publicação no GitHub Pages após alterações aprovadas.

## Contatos

E-mail e LinkedIn permanecem opcionais e vazios até serem informados. O site oculta botões sem destino. O perfil GitHub é o contato público já disponível.

## Publicação

Não inclua informações de clientes, endereços, hostnames, credenciais, communities SNMP, números de série, topologias reais ou screenshots privados. Diagramas são ilustrativos. Variáveis de frontend são públicas.

Consulte `SECURITY.md` e `PUBLICATION-CHECKLIST.md`.
