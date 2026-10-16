# 🚀 Fastify Boilerplate

<div align="center">

**Template moderno e opinado para APIs em Node.js com Fastify e TypeScript**

</div>

<p align="center">
  <a href="https://github.com/Washington-coder/fastify-boilerplate" title="Acessar repositório">
    <img alt="GitHub repo" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="https://fastify.dev" title="Framework Fastify">
    <img alt="Fastify" src="https://img.shields.io/badge/Fastify-5.12-000000?style=for-the-badge&logo=fastify&logoColor=white" />
  </a>
  <a href="https://nodejs.org" title="Node.js">
    <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%3E%3D20-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  </a>
  <img alt="License ISC" src="https://img.shields.io/badge/license-ISC-blue.svg?style=for-the-badge" />
</p>

---

## ✨ Visão geral

Este projeto é um **ponto de partida moderno** para construir APIs em Node.js. Ele reúne as melhores práticas da comunidade com ferramentas de última geração, para que você **comece a escrever código de negócio imediatamente** — sem perder tempo montando a infraestrutura.

| Camada                | Tecnologia                 |
| --------------------- | -------------------------- |
| 🔌 Framework HTTP     | [Fastify](https://fastify.dev) |
| 🟦 Linguagem          | [TypeScript](https://www.typescriptlang.org) (strict mode) |
| 🧹 Linting            | [ESLint](https://eslint.org) (flat config + type-checked) |
| 🎨 Formatação         | [Prettier](https://prettier.io) |
| ⚡ Hot-reload (dev)   | [tsx](https://tsx.is) watch |
| 📦 Build              | [tsup](https://tsup.egoist.dev/) |
| 🧾 Logging            | [pino-pretty](https://github.com/pinojs/pino-pretty) |
| 🔐 Variáveis de ambiente | [dotenv](https://github.com/motdotla/dotenv) |

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** versão **20 ou superior** → [nodejs.org](https://nodejs.org)
- NPM (já vem junto com o Node.js)

> 💡 Para verificar sua versão, execute: `node -v`

---

## 🛠️ Instalação

```bash
# 1. Clone o repositório
git clone git@github.com:Washington-coder/fastify-boilerplate.git

# 2. Entre na pasta do projeto
cd fastify-boilerplate

# 3. Instale as dependências
npm install

# 4. (Opcional) Crie seu arquivo de variáveis de ambiente
cp .env.example .env
```

---

## 🎬 Como executar

| Comando             | Descrição                                        |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Roda o servidor com **hot-reload** e logs em JSON amigáveis |
| `npm run build`     | Compila o TypeScript para a pasta `build/`       |
| `npm start`         | Executa a versão de **produção** a partir de `build/server.js` |
| `npm run lint`      | Verifica erros de lint no código                 |
| `npm run lint:fix`  | Verifica **e corrige** automaticamente erros de lint |
| `npm run format`    | Formata todo o código com Prettier               |
| `npm run format:check` | Verifica se o código está formatado segundo o Prettier |

Após rodar `npm run dev`, a API estará disponível em:

> 🌐 **http://localhost:3333**

Teste o endpoint raiz na sua navegação ou com `curl`:

```bash
curl http://localhost:3333/
# => { "message": "Template Fastify running..." }
```

---

## 📁 Estrutura do projeto

```
fastify-boilerplate/
├── 📂 src/                  # Código-fonte da aplicação
│   ├── server.ts            # Inicialização e boot do Fastify
│   └── (seus módulos)       # Rotas, controllers, services, etc.
├── 📂 .vscode/              # Configurações recomendadas do VS Code
│   └── settings.json        # Formatação automática, EOL LF, ESLint no save
├── .env.example             # Modelo das variáveis de ambiente
├── .gitattributes           # Normalização de fim de linha (LF)
├── .gitignore               # Arquivos ignorados pelo Git
├── .prettierrc              # Configuração do Prettier
├── .prettierignore          # Arquivos ignorados pelo Prettier
├── endpoints.http           # Testes HTTP prontos (REST Client)
├── eslint.config.js         # Configuração do ESLint (flat config)
├── package.json
└── tsconfig.json            # Configuração do TypeScript
```

---

## 🧪 Testando os endpoints

O repositório inclui um arquivo [`endpoints.http`](./endpoints.http) com chamadas prontas para testar a API diretamente do VS Code — sem precisar sair do editor.

Para utilizá-lo, instale a extensão **REST Client** (veja [extensões do VS Code](#vscode)) e clique no botão **"Send Request"** que aparece acima de cada requisição.

---

## ♻️ Linha de comando (Git)

Ao trabalhar com o Pino logger (padrão do Fastify), os logs saem em **JSON** — ótimo para produção, mas pouco legível no terminal. Por isso, o script `dev` já usa o `pino-pretty`, que formata os logs de forma amigável.

> ℹ️ O script `start` (produção) mantém o JSON puro, como é o esperado em ambientes de produção.

---

## 🧩 Extensões do VS Code

Para que **todo o fluxo de desenvolvimento funcione perfeitamente** dentro do VS Code — formatação no salvar, lint e correção automática — é necessário instalar as extensões abaixo.

### 🔒 Obrigatórias

As configurações do projeto (.vscode/settings.json, ESLint flat config e arquivos `.http`) **dependem diretamente** destas extensões:

| Extensão                        | ID                                | Por que é necessária |
| ------------------------------- | --------------------------------- | -------------------- |
| **Prettier — Code formatter**   | `esbenp.prettier-vscode`          | É o formatador padrão do projeto. Sem ela, a *formatação automática ao salvar* (definida em `settings.json`) não funciona. |
| **ESLint**                      | `dbaeumer.vscode-eslint`          | Executa as regras de lint e a **correção automática ao salvar** (`source.fixAll.eslint`). O código usa regras type-checked que dependem dela. |
| **REST Client**                 | `humao.rest-client`               | Permite executar as requisições do arquivo [`endpoints.http`](./endpoints.http) direto do editor. |

### ⭐ Recomendadas

| Extensão                              | ID                        | Benefício |
| ------------------------------------- | ------------------------- | --------- |
| **EditorConfig for VS Code**          | `editorconfig.editorconfig` | Ajuda a manter consistência de estilos (indentação, fim de linha) entre todos os colaboradores. |
| **Error Lens**                        | `usernamehw.errorlens`    | Exibe os erros de lint e TypeScript **inline**, na linha do código, facilitando a correção. |
| **npm**                               | `eg2.vscode-npm-scripts`  | Rodar os scripts do `package.json` com um clique. |

### 🤖 Instalação automática (recomendada)

Melhor do que instalar manualmente: ao abrir este projeto, o **VS Code sugere automaticamente** a instalação das extensões listadas no arquivo [`.vscode/extensions.json`](./.vscode/extensions.json). Basta clicar em **"Install"** na notificação que aparece no canto inferior direito.

Caso a notificação não apareça, você pode forçar a instalação pelo **Command Palette** (`Ctrl+Shift+P`) → `Extensions: Show Recommended Extensions`.

---

## 🔢 Variáveis de ambiente

Crie um arquivo `.env` copiando o modelo:

```bash
cp .env.example .env
```

As variáveis disponíveis atualmente:

| Variável | Descrição          | Default    |
| -------- | ------------------ | ---------- |
| `PORT`   | Porta do servidor  | `3333`     |

---

## 🔀 Convenções do projeto

- **Fim de linha (EOL):** O projeto usa **LF** em todos os sistemas, incluindo Windows. A normalização é garantida pelo [`.gitattributes`](./.gitattributes) e configurada no `settings.json` do VS Code.
- **Prettier:** sem ponto e vírgula, aspas simples, largura de 100 caracteres, vírgula final (`trailingComma: all`).
- **ESLint:** flat config (`eslint.config.js`) com **type-checking** habilitado — regras como `no-floating-promises` evitam promessas "esquecidas" em handlers assíncronos do Fastify.

---

## 🤝 Como contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Faça push da branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

Certifique-se de rodar `npm run lint` e `npm run format:check` antes de abrir seu PR.

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

<p align="center">
  Feito com 💜 por <a href="https://github.com/Washington-coder">Washington-coder</a>
</p>
