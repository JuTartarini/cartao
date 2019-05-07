# Validador de cartão de crédito

Está biblioteca se destina a validar números de cartões de crédito;

## Como instalar:

```zsh
$  npm install cartao
```

## Como utilizar:
* Formato de entrada da função: string.
* Insira apenas os números do cartão, não insira pontos, traços,letras ou vírgulas.


Exemplo:

```node
const card = require('cartao');

console.log(card('6062825624254001'));
// return true
```
