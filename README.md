# Boas-vindas ao repositório do Projeto Store Manager!

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

1. Clone o repositório

- `git clone git@github.com:FranciscoVieir/store-manager.git`;

- Entre na pasta do repositório que você acabou de clonar:
  - `cd store-manager`

2. Instale as dependências [**Caso existam**]

- `npm install`

</details>

#### Dicas de scripts prontos

- Criar o banco de dados e gerar as tabelas:

```sh
  npm run migration
```

- Limpar e popular o banco de dados:

```sh
  npm run seed
```

- Iniciar o servidor Node:

```sh
  npm start
```

- Iniciar o servidor Node com nodemon:

```sh
  npm run debug
```

- Executar os testes avaliativos da Trybe:

```sh
  npm test
```

- Executar os testes de unidade escritos por você:

```sh
  npm run test:mocha
```

- Executar o linter:

```sh
  npm run lint
```

# Desafios

## 01 - Crie endpoints para listar produtos

- O endpoint para listar produtos deve ser acessível através do caminho (`/products`) e (`/products/:id`);
- Através do caminho `/products`, todos os produtos devem ser retornados;
- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;
- O resultado da listagem deve ser **ordenado** de forma crescente pelo campo `id`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível listar todos os produtos]**

  - Ao listar usuários com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "id": 1,
      "name": "Martelo de Thor"
    },
    {
      "id": 2,
      "name": "Traje de encolhimento"
    }
    /* ... */
  ]
  ```

- **[Será validado que não é possível listar um produto que não existe]**

  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que é possível listar um produto específico com sucesso]**

  - Ao listar um produto com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "id": 1,
    "name": "Martelo de Thor"
  }
  ```

    <br>
  </details>

---

## 02 - Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 5%. Ou seja, cada uma das camadas tem de ter, ao menos, 5% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 2 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>

</details>

---

## 03 - Crie endpoint para cadastrar produtos

- O endpoint deve ser acessível através do caminho (`/products`);
- Os produtos enviados devem ser salvos na tabela `products` do banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "ProdutoX"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível cadastrar um produto com sucesso]**

  - Se o produto for criado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 4,
    "name": "ProdutoX"
  }
  ```

    <br>
  </details>

---

## 04 - Crie validações para produtos

- O endpoint de produtos deve ser acessível através do caminho (`/products`);
- Lembre-se, o banco de dados não deve ser acessado nas validações iniciais do corpo da requisição;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível realizar operações em um produto sem o campo `name`]**

  - Se a requisição não tiver o campo `name`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"name\" is required" }
  ```

- **[Será validado que não é possível realizar operações em um produto com o campo `name` menor que 5 caracteres]**

  - Se a requisição não tiver `name` com pelo menos 5 caracteres, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"name\" length must be at least 5 characters long" }
  ```

    <br>
  </details>

---

## 05 - Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 10%. Ou seja, cada uma das camadas tem de ter, ao menos, 10% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 3 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 06 - Crie endpoint para validar e cadastrar vendas

- O endpoint de vendas deve ser acessível através do caminho (`/sales`);
- As vendas enviadas devem ser salvas nas tabelas `sales` e `sales_products` do banco de dados;
- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;
- O corpo da requisição deverá seguir o formato abaixo:

```json
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível realizar operações em uma venda sem o campo `productId`]**

  - Se algum dos itens da requisição não tiver o campo `productId`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400`:

  ```json
  { "message": "\"productId\" is required" }
  ```

- **[Será validado que não é possível realizar operações em uma venda sem o campo `quantity`]**

  - Se algum dos itens da requisição não tiver o campo `quantity`, o resultado retornado deverá ser conforme exibido abaixo, com um status http `400` :

  ```json
  { "message": "\"quantity\" is required" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `quantity` menor ou igual a 0 (Zero)]**

  - Se a requisição tiver algum item em que o campo `quantity` seja menor ou igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`

  ```json
  { "message": "\"quantity\" must be greater than or equal to 1" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `productId` inexistente, em uma requisição com um único item]**

  - Se o campo `productId` do item da requisição não existir no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que não é possível realizar operações em uma venda com o campo `productId` inexistente, em uma requisição com vários items]**

  - Se a requisição tiver algum item cujo campo `productId` não existe no banco de dados, o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`

  ```json
  { "message": "Product not found" }
  ```

- **[Será validado que é possível cadastrar uma venda com sucesso]**

  - Se a venda for criada com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `201`:

  ```json
  {
    "id": 3,
    "itemsSold": [
      {
        "productId": 1,
        "quantity": 1
      },
      {
        "productId": 2,
        "quantity": 5
      }
    ]
  }
  ```

    <br>
  </details>

---

## 07 - Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 15%. Ou seja, cada uma das camadas tem de ter, ao menos, 15% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 4 funções em CADA camada `models`, `services` e `controllers`.]**

  <br>

</details>

---

## 08 - Crie endpoints para listar vendas

- O endpoint para listar vendas deve ser acessível através do caminho (`/sales`) e (`/sales/:id`);
- Através do caminho `/sales`, todas as vendas devem ser retornadas;
- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;
- o resultado deve ser **ordenado** de forma crescente pelo campo `saleId`, em caso de empate, **ordenar** também de forma crescente pelo campo `productId`;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que é possível listar todas as vendas]**

  - Ao listar vendas com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "saleId": 1,
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

- **[Será validado que não é possível listar uma venda que não existe]**

  - Se a venda for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

  ```json
  { "message": "Sale not found" }
  ```

- **[Será validado que é possível listar uma venda específica com sucesso]**

  - Ao listar uma venda com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  [
    {
      "date": "2021-09-09T04:54:29.000Z",
      "productId": 1,
      "quantity": 2
    },
    {
      "date": "2021-09-09T04:54:54.000Z",
      "productId": 2,
      "quantity": 2
    }

    /* ... */
  ]
  ```

    <br>
  </details>

---

## 09 - Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 20%. Ou seja, cada uma das camadas tem de ter, ao menos, 20% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 6 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 10 - Crie endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser atualizado;
- O corpo da requisição deve ser validado igual no cadastro;
- O corpo da requisição deverá seguir o formato abaixo:

```json
{
  "name": "Martelo do Batman"
}
```

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível alterar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

- **[Será validado que é possível alterar um produto com sucesso]**

  - Se o produto for alterado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com um status http `200`:

  ```json
  {
    "id": 1,
    "name": "Martelo do Batman"
  }
  ```

    <br>
  </details>

---

## 11 - Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação

- Seus arquivos de teste devem ficar no diretório `tests/unit`, como é descrito em [Para escrever seus próprios arquivos de teste](#para-escrever-seus-próprios-arquivos-de-teste);
- Seus testes da `model` devem fazer mock do banco de dados obrigatoriamente;
- Opcionalmente você pode parar o serviço do `MYSQL` em sua máquina. Para rodar seus teste utilize `npm run test:mocha`;
- Antes de executar os testes da Trybe, seus testes não devem conter erros.

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que a cobertura total das linhas e funções dos arquivos de CADA camada `models`, `services` e `controllers` é maior ou igual a 25%. Ou seja, cada uma das camadas tem de ter, ao menos, 25% de cobertura de testes.]**
- **[Será validado que existe um mínimo de 7 funções em CADA camada `models`, `services` e `controllers`.]**
  <br>

</details>

---

## 12 - Crie endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);
- Apenas o produto com o `id` presente na URL deve ser deletado;

<details close>
  <summary>Os seguintes pontos serão avaliados</summary>

- **[Será validado que não é possível deletar um produto que não existe]**
  - Se o produto for inexistente o resultado retornado deverá ser conforme exibido abaixo, com um status http `404`:

    ```json
      { "message": "Product not found" }
    ```

- **[Será validado que é possível deletar um produto com sucesso]**

  - Se o produto for deletado com sucesso não deve ser retornada nenhuma resposta, apenas um status http `204`;

    <br>
  </details>

