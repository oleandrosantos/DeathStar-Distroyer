# DeathStar-Distroyer 🚀
Jogo de Texto cujo o objetivo é eliminar a estrela da morte.

[Link para jogar](http://distroyer.oleandrosantos.me/)

### Objetivo do jogo
Desenvolver um jogo para testar os meus conhecimentos em PHP, HTML5 e Javascript.


## Tecnologias utilizadas
* PHP 7.*
  * Composer
* HTML 5
* CSS 3
* Javascript
  * Axios

## Layout
![alt text](https://i.ibb.co/Rvs10m8/distroyer.png)


## Api
Para o desenvolvimento deste jogo foi desenvolvida uma api que gera automaticamente um cenário para o jogo.
[Link para jogar](http://distroyer.oleandrosantos.me/Api/)

### Utilizando a Api
Efetuando a requisição do tipo get a url [http://distroyer.oleandrosantos.me/Api/](http://distroyer.oleandrosantos.me/Api/) sera retornada 3 cenários aleatórios por default, executando essa requisição não sera retornado o cenário ponto fraco a frente.
```json
[
  {
    "codigoCenarioXwing": 2,
    "valorCenario": "Corredor livre"
  },
  {
    "codigoCenarioXwing": 0,
    "valorCenario": "Tie-Fighter atacando"
  },
  {
    "codigoCenarioXwing": 0,
    "valorCenario": "Tie-Fighter atacando"
  }
]
```

Efetuando a requisição do tipo get a url por exemplo com o numero inteiro 5, sera retornado um objeto do tipo json com 5 itens. 
Exemplo [http://distroyer.oleandrosantos.me/Api/5](http://distroyer.oleandrosantos.me/Api/int)
```json
[
  {
    "codigoCenarioXwing": 2,
    "valorCenario": "Corredor livre"
  },
  {
    "codigoCenarioXwing": 3,
    "valorCenario": "Ponto fraco a frente"
  },
  {
    "codigoCenarioXwing": 1,
    "valorCenario": "Canhao de Plasma atacando"
  },
  {
    "codigoCenarioXwing": 3,
    "valorCenario": "Ponto fraco a frente"
  },
  {
    "codigoCenarioXwing": 2,
    "valorCenario": "Corredor livre"
  }
]
```

## Requisitos para rodar o projeto
* PHP 7.*
  * Composer
* Servidor XAMPP

## Copiando o Projeto
clone o projeto no seu servidor XAMPP e depois de um composer update.
```bash
git clone https://github.com/oleandrosantos/DeathStar-Distroyer
composer update
```

## Contributing
Pull requests são bem vindos, ou pode enviar qualquer contribuição por e-mail para contato@oleandrosantos.me

## License
[MIT](https://choosealicense.com/licenses/mit/)
