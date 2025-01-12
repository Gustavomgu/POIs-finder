# Points of interest - Frontend
* Aplicação desenvolvida para permitir cadastrar pontos de interesse em uma localidade e em seguida calcular a sua distancia de um determinado ponto.
* Possui três rotas :
  * Post - "/" - cadastrar um novo ponto
  * Get - "/GetAll" - permite listar todos os pontos cadastrados
  * Get - "GetAllClose" - dado as coordenadas e o raio, localiza os pontos de interesse próximos e devolve uma lista.
* A distancia é medida usando o calculo de distancia entre dois pontos, onde a distancia é igual a raiz quadrada do delta X ao quadrado somado ao delta Y ao quadrado. 
```
(d = √(x2 - x1)²+(y2 - y1)²)
```
## Executar a aplicação
* Utilize o seguinte comando no terminal estando na pasta do projeto:
  ```
  docker-compose up --build
  ```
  Esse comando deverá criar a imagem da aplicação e subir
* Em seguida acesse a aplicação na porta 3000 (pode ser testada utilizando clientes como Insomnia e Postman)

  Obs.: O frontend para essa aplicação pode ser visto no caminho [desse link](https://github.com/Gustavomgu/POIs-finder-frontend).


