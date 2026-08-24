# Checklist de Publicação Segura

Use este checklist antes de adicionar um case, screenshot, relatório ou repositório ao portfólio.

## Conteúdo

- [ ] O nome do cliente foi removido ou há autorização explícita para divulgação.
- [ ] IPs públicos e privados reais foram removidos.
- [ ] Hostnames, domínios internos e nomes de ativos foram removidos.
- [ ] MAC addresses, seriais e service tags foram removidos.
- [ ] Usuários, e-mails internos e identificadores pessoais foram removidos.
- [ ] Communities SNMP, tokens, chaves, cookies e credenciais foram removidos.
- [ ] O diagrama usa nomes genéricos e não revela a topologia real identificável.
- [ ] Screenshots foram recortados/anonimizados antes da publicação.
- [ ] Logs exibidos são sanitizados e não contêm dados do ambiente.

## Arquivos

- [ ] Não há `.env`.
- [ ] Não há arquivo de chave, certificado pessoal ou VPN.
- [ ] Não há dump SQL, banco local, backup ou log de produção.
- [ ] Metadados de PDF/DOCX/imagens foram revisados quando aplicável.
- [ ] `git status` mostra apenas os arquivos esperados.

## Automação

- [ ] `npm run security:audit` passa.
- [ ] `npm run build` passa.
- [ ] O workflow de segurança do GitHub passa.
- [ ] Dependências High/Critical foram revisadas.

## Git

Antes do push:

```bash
git status
git diff --cached
npm run security:audit
```

Lembrete: `.gitignore` não protege arquivos que já foram commitados anteriormente.
