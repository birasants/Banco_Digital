#  Simulador de Banco Digital com Banco de Dados integrado

<img src="https://i.pinimg.com/originals/a6/0b/57/a60b57a41f975f1e509348e5a4b218bc.png" width="200px" align="right" >
  <p align="left">
Este projeto é um Simulador de Banco Digital, uma aplicação que permite aos usuários interagir com um sistema bancário simulado, envolvendo operações comuns como consultas de saldo, transferências, pagamentos e gerenciamento de contas. Projetado para oferecer uma experiência realista, este simulador é ideal para fins educativos, treinamentos, e demonstrações de conceitos bancários digitais.
  </p>


## :man_mechanic: Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express,postgres)

## :ladder: Fucionalidades do Projeto

- [x] Autenticação do Usuário utilizando jsonwebtoken (JWT)
- [x] Criptografia de Senha utilizando bcrypt
- [x] Geração automática de token
- [x] Cadastro De Contas
- [x] Cadastro de Transações
- [x] Listagem de Transações
- [x] Calculo de Saídas e Entradas de saldo da conta do Usuário
- [x] Gerenciamento de Conta
- [x] Gerenciamento de Transações
- [x] Fácil Acesso

## :facepunch: Como Usar

- Clone o repositório para sua máquina local.
- No terminal, navegue até o diretório do projeto e execute npm install para instalar as dependências.
- As depedências utilizadas nesse projeto foram PG, JsonWebToken, Bcrypt, Nodemon e Express.
- Na parte de configurações do PostgreSQL insira os seus respectivos dados.
- Inicie o servidor usando npm run dev. O Nodemon garantirá que o servidor seja reiniciado automaticamente após cada alteração no código.
- Utilize o Insomnia ou qualquer outra ferramenta de teste de API para enviar requisições para os endpoints fornecidos pela API.

## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone <urlProjeto>

# 2. Instale as dependências

npm install

# 3. Execute a API

npm run dev
```

## :sassy_man: Endpoints

- POST /transacao - Cadastra transação do Usuário Logado
- GET /transacao/extrato - Simulação de um extrato de um banco, trazendo todas as transações do usuário logado
- POST /login - Realiza o Login de um Usuário
- GET /transacao/:id - Listar uma transação específica do usuario logado através do Id da transação
- GET /categorias - Lista todas as categorias que o banco possui
- GET /usuario - Retorna todos os dados do usuário logado
- GET /transacao - Retorna todas as transações do usuári logado
- PUT /transacao/:id - Atualiza a transação do usuário logado
- PUT /usuario - Atualiza os dados do usuário logado

## :globe_with_meridians: Diagrama de Entidade-Relacionamento (DER)

