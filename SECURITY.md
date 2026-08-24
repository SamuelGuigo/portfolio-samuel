# Security Policy

Este repositório é público e deve conter exclusivamente informações adequadas para divulgação.

## Regra principal

Considere que **todo arquivo commitado pode ser visto, clonado, indexado, arquivado e reutilizado por terceiros**.

Nunca publique:

- senhas, tokens, API keys ou cookies de sessão;
- communities SNMP;
- chaves privadas, certificados pessoais ou arquivos de VPN;
- IPs, MAC addresses ou hostnames reais de ambientes de clientes;
- domínios internos, usuários, e-mails internos ou nomes de ativos;
- service tags, números de série ou identificadores de equipamentos;
- diagramas que revelem topologia real identificável;
- contratos, dados financeiros ou documentos de clientes;
- screenshots de produção sem anonimização completa;
- arquivos `.env`, dumps de banco, backups ou logs reais.

## Frontend não guarda segredo

Este projeto usa React/Vite e é publicado como site estático.

Qualquer valor presente em:

- JavaScript / JSX;
- JSON;
- HTML;
- CSS;
- arquivos em `public/`;
- variáveis `VITE_*`;

pode ser entregue ao navegador do visitante.

**Variáveis `VITE_*` não são secretas.**

## Antes de cada publicação

Execute:

```bash
npm run security:audit
npm run build
```

O build também executa a auditoria automaticamente via `prebuild`.

## Evidências técnicas

Prefira:

1. recriar diagramas com nomes genéricos;
2. usar dados fictícios;
3. recortar screenshots;
4. substituir informações sensíveis antes de exportar a imagem;
5. revisar os metadados do arquivo final.

Não dependa apenas de blur visual para esconder informação.

## Se um segredo for commitado

1. revogue ou rotacione o segredo imediatamente;
2. trate-o como comprometido;
3. remova o material do repositório;
4. avalie a remoção do histórico Git;
5. só depois gere uma nova credencial.

Apagar o arquivo no commit seguinte não torna o segredo antigo seguro.
