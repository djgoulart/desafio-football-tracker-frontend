
# Desafio Football Tracker - Frontend

O desafio consiste em desenvolver uma aplicação para gerenciar um programa de recompensas gamificado para um determinado público alvo. Nesse caso, os jogadores de futebol listados em uma API: [API-FOOTBALL](https://dashboard.api-football.com/).

### Cada Jogador recebe pontos com base em alguns critérios.
- 1 ponto por cada ``GOL`` realizado na temporada (2020)
- 1 ponto por cada ``ASSISTÊNCIA`` realizada na temporada (2020)
- 5 pontos por cada participação em ``EVENTOS PRESENCIAIS``.

Os eventos presenciais serão registrados na aplicação que será construída.

### Os jogadores ganharão "níveis" com base em usa pontuação.
- Jogadores com menos de ``15`` pontos são ``bronze``.
- Jogadores com pontuação ``entre 15 e 29`` são ``prata``.
- Jogadores com ``30 pontos ou mais`` são ``ouro``

## Entregáveis do Desafio
- [Frontend ](https://github.com/djgoulart/desafio-football-tracker-frontend): Aplicação para gerenciar as informações
- [Backend](https://github.com/djgoulart/desafio-football-tracker-backend): Uma api construída para cuidar da sincronização e exportação dos dados
- [AppSheet](https://www.appsheet.com/template/mobilepreview?appId=31b60ea4-be47-47da-bcff-f0baa15af8ff) Um aplicativo low code para demonstração das informações
- [Google Sheet](https://docs.google.com/spreadsheets/d/1RgNmoyI4uJPZILHdnt6buvAPiqtVAOciJe1W7oMcSCM/edit?usp=sharing) Uma planilha do google para onde os dados são exportados.

## Solução do desafio
<img src="https://github.com/djgoulart/desafio-football-tracker-frontend/blob/9b7f4483359b9a5c2e9f9dc3c18ef6a4403f8d91/docs/dashboard.png" width="830" alt="processo de sincronização" />
Para a solução deste desafio foi construída uma aplicação fullstack com Next.JS para visualização das informações dos jogadores, registro de participação em eventos, controles de sincronização de dados com a API FOOTBALL e exportação de dados para a planilha do Google.

### Tutorial de utilização:
Criamos um tutorial de utilização interativo, com detalhes sobre cada funcionalidade da aplicação:
[https://app.storylane.io/share/d6dn3kutsw0u](https://app.storylane.io/share/d6dn3kutsw0u)

## Stack Utilizada
- Next.Js
- Prisma ORM
- ShadCN UI
- Tailwind CSS
- Chart.Js

## Arquitetura
A aplicação utiliza os conceitos mais recentes do Next.JS e do React.JS como:

- Dynamic HTML Streaming
- React Server Components
- Server Actions
- Caching

## Requisitos de sistema

* NodeJS 18+

## Ambiente de produção

A aplicação do backend está disponível de forma pública em: [https://desafio-football-tracker-frontend.onrender.com](https://desafio-football-tracker-frontend.onrender.com)

## Ambiente de desenvolvimento local
### Requisitos
- O backend do projeto precisará estar rodando na sua máquina ou em um ambiente remoto.

### Passo a passo: 
- instale as dependências do projeto: ```npm install```
- crie um arquivo ```.env``` na raiz do projeto utilizando como modelo o arquivo ```.env.example``` como modelo. Todas as variáveis são obrigatórias.
- gere os arquivos do Prisma: ``` npx prisma generate ```
- utilize o comando: ``npm run dev`` para inicializar a aplicação em modo desenvolvimento ou
- utilize o comando ``npm run build`` e em seguida ``npm run start``para inicializar em modo de produção