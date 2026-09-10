# 💠 Aula 03 — Nutricionista

## 📚 Sobre o projeto

O **Aula03_nutricionista** é um projeto desenvolvido durante os estudos de **Desenvolvimento Back-End**, com foco na construção de uma aplicação organizada em duas partes principais: **cliente** e **servidor**.

O projeto utiliza **Node.js** e trabalha com dados armazenados em um arquivo JSON, colocando em prática conceitos de desenvolvimento de aplicações, comunicação entre partes do sistema e organização de projetos.

A estrutura do repositório está dividida entre:

* 🖥️ **Cliente** — parte responsável pela interação com a aplicação;
* ⚙️ **Servidor** — responsável pelo processamento e gerenciamento das informações;
* 📄 **Dados** — informações armazenadas em formato JSON.

---

# 🎯 Objetivos do projeto

O projeto tem como objetivo praticar conceitos fundamentais do desenvolvimento de aplicações Back-End, incluindo:

* 🟢 Node.js;
* ⚙️ Estrutura cliente-servidor;
* 📦 Organização de projetos;
* 📄 Manipulação de arquivos JSON;
* 📊 Armazenamento e gerenciamento de dados;
* 🔗 Comunicação entre cliente e servidor;
* 📚 Utilização de dependências através do npm.

---

# 🛠️ Tecnologias utilizadas

| Tecnologia    | Utilização                                  |
| ------------- | ------------------------------------------- |
| 🟢 Node.js    | Execução do projeto no ambiente JavaScript  |
| 🟨 JavaScript | Desenvolvimento da aplicação                |
| 📄 JSON       | Armazenamento dos dados                     |
| 📦 npm        | Gerenciamento de dependências               |
| 🐙 Git        | Versionamento                               |
| 🐱 GitHub     | Armazenamento e compartilhamento do projeto |

---

# 📁 Estrutura do projeto

```text
📂 Aula03_nutricionista
│
├── 📁 cliente
│   └── Arquivos da aplicação cliente
│
├── 📁 servidor
│   └── Arquivos da aplicação servidor
│
├── 📁 node_modules
│   └── Dependências instaladas pelo npm
│
├── 📄 dados.json
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 README.md
└── 📄 desktop.ini
```

---

# 🧩 Arquitetura do projeto

A aplicação está organizada seguindo uma divisão entre **cliente** e **servidor**.

```text
              ┌──────────────────┐
              │     CLIENTE      │
              │                  │
              │ Interface /      │
              │ interação        │
              └────────┬─────────┘
                       │
                       │ Comunicação
                       ▼
              ┌──────────────────┐
              │     SERVIDOR     │
              │                  │
              │ Processamento    │
              │ e regras         │
              └────────┬─────────┘
                       │
                       ▼
              ┌──────────────────┐
              │    dados.json    │
              │                  │
              │ Dados da         │
              │ aplicação        │
              └──────────────────┘
```

Essa separação permite organizar melhor as responsabilidades de cada parte da aplicação.

---

# 📄 Arquivo `dados.json`

O projeto possui um arquivo:

```text
dados.json
```

Esse arquivo utiliza o formato **JSON (JavaScript Object Notation)** para representar os dados utilizados pela aplicação.

O JSON é bastante utilizado em aplicações web por ser um formato simples para armazenar e transmitir informações estruturadas.

---

# 📦 Gerenciamento de dependências

O projeto possui os arquivos:

```text
package.json
package-lock.json
```

O `package.json` contém informações sobre o projeto e suas dependências.

Já o `package-lock.json` registra versões específicas das dependências instaladas, contribuindo para manter a instalação consistente.

---

# ▶️ Como executar o projeto

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/giovanaremorini-dotcom/Aula03_nutricionista.git
```

## 2️⃣ Entre na pasta do projeto

```bash
cd Aula03_nutricionista
```

## 3️⃣ Instale as dependências

Com o Node.js e o npm instalados, execute:

```bash
npm install
```

Esse comando utiliza o `package.json` e o `package-lock.json` para instalar as dependências necessárias.

## 4️⃣ Execute o projeto

O comando específico depende dos scripts definidos no `package.json`.

Para visualizar os scripts disponíveis:

```bash
npm run
```

Depois, execute o script correspondente, por exemplo:

```bash
npm start
```

ou outro comando definido pelo projeto.

---

# 🧠 Principais conceitos praticados

Este projeto contribui para o desenvolvimento de conhecimentos relacionados a:

* 🟢 Node.js;
* 🟨 JavaScript;
* 🖥️ Arquitetura cliente-servidor;
* 📄 JSON;
* 📦 npm;
* 🔗 Comunicação entre componentes;
* 🗂️ Organização de aplicações;
* 💻 Desenvolvimento Back-End.

---

# 🚀 Possíveis melhorias

Como evolução futura do projeto, podem ser implementadas funcionalidades como:

* 🔐 Sistema de autenticação;
* 🗄️ Integração com banco de dados;
* 🔎 Busca e filtragem de informações;
* ✏️ Edição de registros;
* ➕ Cadastro de novos registros;
* 🗑️ Exclusão de registros;
* 🌐 Desenvolvimento de uma API;
* 📱 Melhorias na interface do cliente;
* 🧪 Criação de testes automatizados.

---

# 📖 Aprendizados

O desenvolvimento deste projeto permite consolidar conhecimentos importantes para a construção de aplicações web, especialmente a separação entre **cliente e servidor**, o uso do **Node.js**, a organização de dependências com **npm** e o armazenamento de informações utilizando **JSON**.

---

⭐ **Projeto desenvolvido para fins educacionais durante os estudos de Desenvolvimento Back-End.**

