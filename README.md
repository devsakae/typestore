
# Typestore

Um projeto criado por @devsakae e baseado em instruções e regras da @Trybe.

O conteúdo deste repositório se refere apenas ao backend de um e-commerce simples em Typescript.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://portfolio.sakae.social)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/rodrigosakae)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Sakae)


## Instruções de utilização

Recomendo utilizar o [Docker](https://www.docker.com/) para rodar o seu projeto, assim como o [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) para testar as rotas diretamente no [VSCode](http://vscode.dev).

### Clone o projeto

- Usando [Github-Cli](https://cli.github.com/):
```bash
  gh repo clone devsakae/typestore
```
- Usando SSH:
```bash
  git clone git@github.com:devsakae/typestore.git
```
Após isso, acesse a pasta do projeto:
```bash
  cd typestore
```

### Rodando com Docker

- Faça o docker-compose
```bash
  docker-compose up -d
```

- Acesse o terminal do container em modo iterativo

```bash
  docker exec -it typestore bash
```

- Instale as dependências dentro do container

```bash
  npm install
```

- Conecte no MySQL e rode o script *typestore.sql* que está na pasta raiz.

- Inicie o sistema!
```bash
npm run dev
```

Verifique se o projeto está rodando acessando http://localhost:3000
## Documentação

Este sistema é apenas o backend de um e-commerce simples. As rotas criadas são as relatadas abaixo.

🔑 - Quando este símbolo preceder as instruções, entenda que para acessar a rota, você precisará informar o token no campo "Authorization" do headers da requisição.

### - Rota /login
Faça login mediante envio de um objeto no body da requisição com as chaves iguais abaixo:

Dados de login do Gerente:
```bash
{
    "username": "gerente",
    "password": "122333"
}
```

Dados de login do Supervisor:
```bash
{
    "username": "supervisor",
    "password": "123456"
}
```

Ao logar com sucesso, você receberá um token de validação, necessário para cadastrar algum pedido (método Post na rota /pedidos)

### - Rota /staff
Utilize esta rota com o método Post para criar novos funcionários para sua loja usando as chaves a seguir:

```bash
{
    "username": (obrigatório; string >= 3 caracteres),
    "displayName": (facultativo; string >= 3 caracteres)
    "email": (obrigatório; string),
    "password": (obrigatório; string >= 6 caracteres)
}
```

### - Rota /produtos
O método Get da rota /produtos mostra todos os produtos cadastrados.

O método Post da rota /produtos cadastra um novo produto com as seguintes especificações:

```bash
{
    "name": (obrigatório, string >= 3 caracteres)
    "price": (obrigatório, double >= 0)
}
```

### - Rota /pedidos
O método Get da rota /pedidos mostra todos os pedidos realizados até o momento.


🔑 Nota: É necessário informar o token (fornecido no login) para cadastrar um pedido novo. Utilize-o dentro do Headers da requisição.

O método Post da rota /pedidos cadastra um novo pedido, devendo ser enviado um array com os ids dos produtos que foram adquiridos, como no exemplo:
```bash
{
    "productIds": [1, 3, 4]
}
```
## Stack utilizada

**Back-end:** Node, Express, Typescript, Joi, Interfaces

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
