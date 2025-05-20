Documentação do Projeto Gerenciador de Jogadores
1. Visão Geral
O Gerenciador de Jogadores é um aplicativo desenvolvido em React Native utilizando o Expo, projetado para gerenciar informações de jogadores, incluindo listagem, favoritos, adição e edição.
Principais Funcionalidades
✔ Lista de Jogadores – Visualização de todos os jogadores cadastrados.
✔ Favoritos – Armazenamento de jogadores favoritos.
✔ Adição de Jogadores – Cadastro de novos jogadores.
✔ Edição de Jogadores – Modificação de informações existentes.
✔ Integração com API – Comunicação com um backend para persistência de dados.

2. Configuração do Projeto
Pré-requisitos
Node.js (versão LTS recomendada)
Expo CLI instalado globalmente (npm install -g expo-cli)
Yarn ou NPM para gerenciamento de pacotes
Dispositivo físico (com Expo Go) ou emulador (Android Studio / Xcode)



3. Estrutura do Projeto
Arquivos Principais
Arquivo	Descrição
App.js	Componente principal, configura navegação e estados globais.
app.json	Configurações do Expo (nome, ícone, splash screen, etc.).
index.js	Ponto de entrada do aplicativo.
.gitignore	Define arquivos ignorados pelo Git (node_modules, builds, etc.).
Pastas Principais
/src/screens – Telas do aplicativo (Home, Favoritos, Edição, Adição).
/src/services – Configuração da API (axios ou fetch).
/assets – Ícones, imagens de splash screen e favicon.

4. Dependências Principais
Pacote	Uso
@react-navigation/native	Navegação entre telas.
react-native-safe-area-context	Ajuste para dispositivos com notch.
@expo-google-fonts/montserrat	Fontes personalizadas.
expo-font	Carregamento de fontes.
axios	Chamadas HTTP para a API.

