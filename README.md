# Samuel Guigo — Portfólio Técnico

Portfólio profissional em React + Vite focado em:

- Infraestrutura
- Redes
- Observabilidade / Monitoramento
- Virtualização
- Segurança
- Troubleshooting

## 1. Rodar localmente

```powershell
npm install
npm run dev
```

## 2. Dados pessoais / links

Edite somente:

```text
src/data/profile.js
```

Preencha:

- `email`
- `linkedin`
- `github`

## 3. Projetos

Os cases estão em:

```text
src/data/projects.js
```

Nunca publique:

- IP interno
- senha / token / chave
- hostname sensível
- nome de cliente sem autorização
- topologia interna identificável
- screenshot sem anonimização

## 4. Build de produção

```powershell
npm run build
```

Saída:

```text
dist/
```

## 5. Publicar no GitHub Pages

O workflow já está pronto:

```text
.github/workflows/deploy-pages.yml
```

### Passos

1. Crie um repositório no GitHub.
2. Envie este projeto para a branch `main`.
3. No GitHub, abra:
   `Settings > Pages`
4. Em **Build and deployment**, selecione:
   `GitHub Actions`
5. Faça um novo push para `main`.

O workflow fará:

```text
npm install
npm run build
deploy GitHub Pages
```

## 6. Comandos Git iniciais

```powershell
git init
git add .
git commit -m "feat: novo portfolio tecnico"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

## Estrutura principal

```text
src/
├── components/
├── data/
│   ├── experience.js
│   ├── profile.js
│   └── projects.js
├── App.jsx
├── index.css
└── main.jsx

.github/
└── workflows/
    └── deploy-pages.yml
```

## Integração com projetos reais do GitHub

O case **Monitoramento SNMP — Dell N-Series** já aponta para:

`https://github.com/SamuelGuigo/zabbix-dell-n1124p-on`

Novos projetos podem receber um campo `github` em `src/data/projects.js`.
Quando o campo existir, o modal mostra automaticamente o botão **Ver projeto no GitHub**.


## V4 — trajetória e formação

- Auron Tech adicionada entre a trajetória profissional.
- Formação acadêmica separada de formação técnica.
- Quatro formações superiores exibidas individualmente.
- CCNAv7 identificado corretamente como formação Cisco Networking Academy, sem alegar certificação CCNA.
- Case Dell/Zabbix enriquecido e conectado ao repositório público real.


## Release V6 — candidato à publicação

### Corrigido
- Auron Tech incluída na trajetória
- 4 formações acadêmicas exibidas
- GitHub real conectado
- Projeto Dell/Zabbix conectado ao repositório público
- Links vazios de LinkedIn e e-mail não geram mais botões quebrados

### Dados opcionais ainda não preenchidos
Edite `src/data/profile.js` se quiser exibir:
- e-mail
- LinkedIn

Também podem ser incluídas, quando informadas, as instituições das pós-graduações em:
- Engenharia de Redes
- Cybersecurity


## Segurança e publicação pública

Este portfólio foi preparado para ser público.

Antes de qualquer build de produção é executada uma auditoria local:

```powershell
npm run security:audit
```

O scanner procura indicadores de:

- credenciais e tokens;
- chaves privadas;
- communities SNMP;
- IPs privados;
- MAC addresses;
- arquivos de acesso, VPN, banco ou backup.

O GitHub Actions repete essa verificação em `push` e `pull_request`.

Consulte:

- `SECURITY.md`
- `PUBLICATION-CHECKLIST.md`

### Importante sobre React/Vite

Não coloque segredo em `.env` esperando que o frontend o proteja.

Qualquer variável exposta ao código cliente — especialmente `VITE_*` — deve ser considerada pública.


## MVP V9

A V9 adiciona formação acadêmica com instituições completas, evidências visuais sanitizadas nos principais cases e `MVP-STATUS.md`. Os diagramas não reproduzem topologias reais de clientes.
