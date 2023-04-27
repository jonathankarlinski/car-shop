# Projeto CarShop

Nesse projeto foi desenvolvida uma API para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB através do framework Mongoose. Foram aplicados os princípios de Programação Orientada a Objetos (POO).

## Conhecimentos Utilizados

- Typescript
- MongoDB
- Mongoose
- NodeJS
- Docker
- Mocha
- Chai
- Sinon
- POO
- CRUD

## Demonstração
  
 <details>
  <summary>Rodando o Projeto</summary></br>

  1- Clone o repositório
  
```text
git clone git@github.com:tryber/sd-025-b-project-car-shop.git
```

  2- Instale as dependências na raíz do projeto

```text
  npm install
```

3- Execute o comando docker-compose up para construir e iniciar os contêineres.

```text
docker-compose up -d
```

4- A partir daqui você pode rodar o container car_shop via CLI ou abri-lo no VS Code.

```text
docker exec -it car_shop bash.
```

5- Para rodar o servidor com o docker, basta acessar o terminal do container car_shop e rodar o comando abaixo e utilizar o insomnia, postman ou algum software de sua preferencia

```text
npm run dev
```

6- Para testar o projeto use o seguinte script no terminal do container car_shop

```text
npm run test:coverage
```

  </details>

 <details>
  <summary>Respostas da Rotas</summary></br>
  
  <details>
    <summary> POST /cars</summary>
  Para realizar o cadastro de um novo carro, utilize o método `POST` em `/cars`, o body da requisição deve conter o seguinte formato:

    ```json
    {
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```

 O retorno será um status `200` e um `json` contendo o veículo cadastrado:

    ```json
    {
      "id": "6348513f34c397abcad040b2",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```
  
  </details>
  <details>
    <summary>POST /motorcycle</summary>
 Para realizar o cadastro de uma nova moto, utilize o método `POST` em `/motorcycles`, o body da requisição deve conter o seguinte formato:

    ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  
 O retorno será um status `200` e um `json` contendo o veículo cadastrado:

    ```json
    {
      "id": "6348513f34c397abcad040b2",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```
  
  </details>
  <details>
  <summary> GET /cars</summary>
   Utilizando o método GET em `/cars`, o retorno será um status `200` e um `json` contendo os carros cadastrados:

    ```json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Marea",
        "year": 2002,
        "color": "Black",
        "status": true,
        "buyValue": 15.99,
        "doorsQty": 4,
        "seatsQty": 5
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Tempra",
        "year": 1995,
        "color": "Black",
        "buyValue": 39,
        "doorsQty": 2,
        "seatsQty": 5
      }
    ]
    ```

  </details>
  
  <details>
  <summary> GET /motorcycles</summary>
  
 Utilizando o método GET em `/motorcycles`, o retorno será um status `200` e um `json` contendo uma lista de todas as motos cadastradas:

    ```json
    [
      {
        "id": "634852326b35b59438fbea2f",
        "model": "Honda Cb 600f Hornet",
        "year": 2005,
        "color": "Yellow",
        "status": true,
        "buyValue": 30.000,
        "category": "Street",
        "engineCapacity": 600
      },
      {
        "id": "634852326b35b59438fbea31",
        "model": "Honda Cbr 1000rr",
        "year": 2011,
        "color": "Orange",
        "status": true,
        "buyValue": 59.900,
        "category": "Street",
        "engineCapacity": 1000
      }
    ]
    ```
  
  </details>
  <details>
  <summary> GET /cars/:id</summary>
  
 Utilizando o método GET em `/cars/:id` é possível buscar um carro específico, basta enviar por parâmetro o ` id ` do veículo.
 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/cars/6348513f34c397abcad040b2
    ```

 O retorno será um status `200` e um `json` contendo o veículo com o id informado:

    ```json
    {
      "id": "6348513f34c397abcad040b2",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.990,
      "doorsQty": 4,
      "seatsQty": 5
    }
    ```

 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Car not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Invalid mongo id" }
    ```

  </details>
  <details>
  <summary> GET /motorcycles/:id</summary>
  
 Utilizando o método GET em `/motorcycles/:id` é possível buscar uma moto específica, basta enviar por parâmetro o ` id ` do veículo.
 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/motorcycles/634852326b35b59438fbea2f
    ```

 O retorno será um status `200` e um `json` contendo o veículo com o id informado:

    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2005,
      "color": "Yellow",
      "status": true,
      "buyValue": 30.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```

 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
      { "message": "Motorcycle not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:
  
    ```json
      { "message": "Invalid mongo id" }
    ```

  </details>
  <details>
  <summary> PUT /cars/:id</summary>
  
 Utilizando o método PUT em `/cars/:id` é possível atualizar um carro específico, basta enviar por parâmetro o ` id ` do veículo e o ` body ` da requisição deve conter o seguinte formato:

    ```json
    {
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```

 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/cars/634852326b35b59438fbea2f
    ```

 O retorno será um status `200` e um `json` contendo o veículo com o id informado:

    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 1992,
      "color": "Red",
      "status": true,
      "buyValue": 12.000,
      "doorsQty": 2,
      "seatsQty": 5
    }
    ```

 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Car not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Invalid mongo id" }
    ```

  </details>
  <details>
  <summary> PUT /motorcycles/:id</summary>
 Utilizando o método PUT em `/motorcycles/:id` é possível atualizar uma moto específica, basta enviar por parâmetro o ` id ` do veículo e o ` body ` da requisição deve conter o seguinte formato:

    ```json
    {
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```

 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/motorcycles/634852326b35b59438fbea2f
    ```

 O retorno será um status `200` e um `json` contendo o veículo com o id informado:

    ```json
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Honda Cb 600f Hornet",
      "year": 2014,
      "color": "Red",
      "status": true,
      "buyValue": 45.000,
      "category": "Street",
      "engineCapacity": 600
    }
    ```

 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Motorcycle not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Invalid mongo id" }
    ```

  </details>
  <details>
  <summary> DELETE /cars/:id</summary>
  
 Utilizando o método DELETE em `/cars/:id` é possível deletar um carro do banco de dados, basta enviar por parâmetro o ` id ` do veículo:
 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/cars/634852326b35b59438fbea2f
    ```

 O retorno será um status ` 204 ` sem ` body `:
 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Car not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Invalid mongo id" }
    ```

  </details>
  <details>
  <summary>DELETE /motorcycles/:i</summary>
  
 Utilizando o método DELETE em `/motorcycles/:id` é possível deletar uma moto do banco de dados, basta enviar por parâmetro o ` id ` do veículo:
 O ` id ` deve ser um valor válido de um veículo existente no banco de dados e seguir os padrões de id do MongoDB, como no exemplo abaixo:

    ```json
      http://localhost:3001/motorcycles/634852326b35b59438fbea2f
    ```

 O retorno será um status ` 204 ` sem ` body `:
 Caso o veículo não seja encontrado, será retornado o status ` 404 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Motorcycle not found" }
    ```

 Caso um ` id ` inválido seja informado, será retornado o status ` 422 ` e um `json` contendo uma mensagem:

    ```json
    { "message": "Invalid mongo id" }
    ```

  </details>
  
</details>

## Feedback

Se você tiver algum feedback, posso ser encontrado em

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jonathankarlinski/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jonathankarlinski57@gmail.com)
