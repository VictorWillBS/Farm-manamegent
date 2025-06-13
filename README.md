
# 📦 Nome do Projeto

Uma API RESTful desenvolvida com **AdonisJS v6** focada em gestão de fazendas. Este projeto segue boas práticas de arquitetura, validação e organização para facilitar manutenção e escalabilidade.

## 📑 Índice

- [📖 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙️ Pré-requisitos](#-pré-requisitos)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [🧪 Executando os Testes](#-executando-os-testes)
- [🔧 Variáveis de Ambiente](#-variáveis-de-ambiente)
- [📄 Documentação da API](#-documentação-da-api)
- [🤝 Como Contribuir](#-como-contribuir)
- [📝 Licença](#-licença)

## 📖 Sobre o Projeto

Este projeto é uma **API RESTful** criada com [AdonisJS v6](https://adonisjs.com) que oferece um conjunto de funcionalidades para gestão de fazendas. A aplicação possui estrutura modular, utiliza ORM, autenticação JWT e testes automatizados.

## ✨ Funcionalidades

- ✅ CRUD completo para o recurso **[ex: Fazendas / Produtos]**
- ✅ Validação de dados com **VineJS**
- ✅ Sistema de migrações e seeds com **Lucid ORM**
- ✅ Arquitetura organizada e pronta para produção

## 🛠️ Tecnologias Utilizadas

- **AdonisJS v6** — Framework Node.js robusto
- **TypeScript** — Tipagem estática para maior confiabilidade
- **Lucid ORM** — ORM oficial do Adonis
- **VineJS** — Validação de dados
- **PostgreSQL** (ou MySQL/SQLite) — Banco de dados relacional
- **Vitest** — Framework de testes moderno e rápido

## ⚙️ Pré-requisitos

Antes de iniciar, certifique-se de ter:

- [Node.js](https://nodejs.org) v18 ou superior
- NPM ou Yarn
- Um banco de dados instalado (PostgreSQL, MySQL ou SQLite)

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/VictorWillBS/Farm-manamegent
cd Farm-manamegent
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o arquivo `.env` com as configurações do seu banco de dados.

### 4. Gere a APP_KEY

```bash
node ace generate:key
```

### 5. Execute as migrações

```bash
node ace migration:run
```

### 6. Inicie o servidor

```bash
node ace serve --watch
```

A API estará disponível em: [http://localhost:3333](http://localhost:3333)

## 🧪 Executando os Testes

Execute todos os testes automatizados com:

```bash
node ace test
```

## 📄 Documentação da API

A documentação OpenAPI/Swagger está disponível em:

👉 [Link para a documentação](#)  
Ou pode ser gerada automaticamente com ferramentas como:

- [Swagger Editor](https://editor.swagger.io/)
- [Redoc](https://redocly.github.io/redoc/)

## 🤝 Como Contribuir

1. Faça um **fork** do projeto
2. Crie uma **branch** com sua feature ou correção: `git checkout -b feature/minha-feature`
3. Faça o **commit**: `git commit -m 'feat: minha feature'`
4. **Push** na branch: `git push origin feature/minha-feature`
5. Abra um **Pull Request**

## 📝 Licença

Este projeto está licenciado sob a **[MIT License](LICENSE)**.
