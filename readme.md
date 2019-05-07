# Validador de cartão de crédito



Esta biblioteca se destina a validar números de cartões de crédito;

## Como instalar:

```zsh
$  npm install lab-credit-card-validator
```

## Como utilizar:
* Formato de entrada da função: string.
* Não insira pontos, traços ou vírgulas.


Exemplo:

```node
const card = require('lab-credit-card-validator');

console.log(card('5374661040114189'));
// return true
```

## Roadmap oficial do projeto

### versão 2.0.0
* entrada para texto ou números

### versão 1.0.0 (released)
* validação de número de cartão de crédito
* entrada para texto (string and number for date)