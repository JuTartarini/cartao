// # region Validação data do cartão - Pronto para implementar
// function dateValidate(month, year) {
//   let now = new Date;
//   return (month + '/' + year >= (now.getMonth() + 1 + '/' + now.getFullYear()) ? true : false);
// }

// function cardValidatorFull(cardNumber, cardMonth, cardYear) {
//   return (luhnCheck(cardNumber) && dateValidate(cardMonth, cardYear) ? true : false);
// }
// # endregion

function luhnCheck(value) {
  return (value.replace(/[^0-9]/, '').length === value.length && value !== '') ? value.split('')
    .reverse()
    .map((x) => parseInt(x))
    .map((x, idx) => idx % 2 ? x * 2 : x)
    .map((x) => x > 9 ? (x % 10) + 1 : x)
    .reduce((accum, x) => accum += x) % 10 === 0 : false ;
}

function cardValidator(cardNumber) {
  return (luhnCheck(cardNumber));
}

module.exports = cardValidator;

