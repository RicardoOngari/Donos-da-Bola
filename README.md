# Documentação do Projeto Gerenciador de Jogadores

## 1. Visão Geral

O **Gerenciador de Jogadores** é um aplicativo desenvolvido em **React Native utilizando o Expo**, projetado para gerenciar informações de jogadores, incluindo listagem, favoritos, adição e edição.

**Principais Funcionalidades**

✔ Lista de Jogadores – Visualização de todos os jogadores cadastrados.  
✔ Favoritos – Armazenamento de jogadores favoritos.  
✔ Adição de Jogadores – Cadastro de novos jogadores.  
✔ Edição de Jogadores – Modificação de informações existentes.  
✔ Integração com API – Comunicação com um backend para persistência de dados.  

---

## 2. Configuração do Projeto

**Pré-requisitos**

- Node.js (versão LTS recomendada)  
- Expo CLI instalado globalmente (`npm install -g expo-cli`)  
- Yarn ou NPM para gerenciamento de pacotes  
- Dispositivo físico (com Expo Go) ou emulador (Android Studio / Xcode)  

---

## 3. Estrutura do Projeto

**Arquivos Principais**

| Arquivo      | Descrição                                                   |
|--------------|-------------------------------------------------------------|
| App.js       | Componente principal, configura navegação e estados globais.|
| app.json     | Configurações do Expo (nome, ícone, splash screen, etc.).   |
| index.js     | Ponto de entrada do aplicativo.                             |
| .gitignore   | Define arquivos ignorados pelo Git (node_modules, builds, etc.).|

**Pastas Principais**

- `/src/screens` – Telas do aplicativo (Home, Favoritos, Edição, Adição).  
- `/src/services` – Configuração da API (axios ou fetch).  
- `/assets` – Ícones, imagens de splash screen e favicon.  

---

## 4. Dependências Principais

| Pacote                            | Uso                                     |
|----------------------------------|-----------------------------------------|
| @react-navigation/native         | Navegação entre telas.                  |
| react-native-safe-area-context   | Ajuste para dispositivos com notch.     |
| @expo-google-fonts/montserrat    | Fontes personalizadas.                  |
| expo-font                        | Carregamento de fontes.                 |
| axios                            | Chamadas HTTP para a API.               |



# Back end

# Mobile API

Este é um projeto backend em Node.js para gerenciamento de jogadores, utilizando Express e integração com banco de dados. Pode ser utilizado em conjunto com uma aplicação mobile ou web como backend RESTful.

## 📁 Estrutura do Projeto

```
Mobile-main/
├── certs/
│   └── aiven-ca.pem          # Certificado SSL para conexão segura
├── config/
│   └── database.js           # Configuração do banco de dados
├── controllers/
│   └── jogadorController.js  # Lógica de controle para a entidade "jogador"
├── server.js                 # Ponto de entrada da aplicação
├── package.json              # Dependências e scripts do projeto
```

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- Mysql  
- SSL/TLS (certificados)

## ⚙️ Instalação

1. Clone o repositório:  
   `git clone https://github.com/seu-usuario/seu-repositorio.git`

2. Instale as dependências:  
   `npm install`

3. Configure as variáveis de ambiente e o banco de dados no arquivo `config/database.js`

4. Inicie o servidor:  
   `node server.js`

## 📡 Rotas

- `GET /jogadores`        - Lista todos os jogadores  
- `POST /jogadores`       - Cria um novo jogador  
- `PUT /jogadores/:id`    - Atualiza um jogador  
- `DELETE /jogadores/:id` - Remove um jogador

## 🔐 Segurança

A aplicação utiliza certificado SSL (`certs/aiven-ca.pem`) para garantir uma conexão segura com o banco de dados.
