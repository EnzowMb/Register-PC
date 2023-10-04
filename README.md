# Projeto Register-PC

API Projeto Register-PC

## Objetivo

API construida para um projeto de gerenciamento de computadores, permitindo realizar o CRUD de computares e também das suas configurações, como processador, placa mãe, etc.<br>
Foi implementado Segurança utilizando Token JWT e Bcrypt para encriptando de senhas.<br><br>
<strong>O objetivo de desde projeto é ampliar os meus conhecimentos em NodeJS e suas dependências.</strong>

## 🔨 Tecnologias utilizadas:
<br>
<div align="center">
  <img src="https://media0.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif?cid=6c09b952dhwk9bqgz0bqz22reneg02ieh74gta1xqkvera4t&ep=v1_stickers_related&rid=giphy.gif&ct=s" width="80px"><br>NodeJS<br><br>
</div>

Banco de dados:
```bash 
MongoDB
```

Dependências:
```bash 
Express
Bcrypt
JsonWebToken
Dotenv
Mongoose
```
Dependências Dev:
```bash 
EsLint
Nodemon
```

## 🤓 Conhecimentos Adquiridos:

1. Criando uma API Rest com Express e MongoDB:<br>
    - Como criar rotas em uma API, se conectar, acessar rotas e de que forma as rotas são utilizadas dentro da lógica de uma *API REST*.<br><br>
    - Como implementar um *CRUD* inicial com os métodos HTTP GET, POST, PUT e DELETE, e como utilizar os métodos do *Express* para cada método.<br><br>
    - Como testar requisições com `Postman` e quais são as partes de uma requisição HTTP.<br><br>
    - Como utilizar uma instância gratuita de um banco `MongoDB` na nuvem através do serviço `Mongo Atlas` e conectar a instância com a API.<br><br>
    - Os conceitos de `model` e `schema` e qual a função de cada na construção de uma API.<br><br>
    - A evoluir as funcionalidades da API organizando as chamadas da lib `Mongoose` em métodos separados em um `controller`.<br><br>
    - A evoluir as funcionalidades de uma API, unindo diferentes entidades e como funciona o relacionamento em um banco de objetos como MongoDB utilizando o modelo de embedding.<br><br>
    - Como realizar buscas em API via parâmetros de query.<br><br>
2. Lidando com buscas, filtros, paginação e erros em uma API:
    - Proteger informações sensíveis com o `dotenv`.<br><br>
    - Configurar o `ESLint` para formatar o código e identificar bugs.<br><br>
    - Refatorar o código com `async/await`.
      - Remover o uso de funções callback nos métodos do Mongoose que interagem com o banco de dados e trocar pelo uso de `async/await`
    - Identificar e tratar erros específicos de uma rota.<br><br>

## 👥 Autor
  - **Enzo Martinelli**
