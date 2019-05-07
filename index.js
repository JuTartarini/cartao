function luhnCheck(value) {
  return value.split('')
    .reverse()
    .map((x) => parseInt(x))
    .map((x, idx) => idx % 2 ? x * 2 : x)
    .map((x) => x > 9 ? (x % 10) + 1 : x)
    .reduce((accum, x) => accum += x) % 10 === 0;
}

function dateValidate(month, year) {
  let now = new Date;
  return (month + '/' + year >= (now.getMonth() + 1 + '/' + now.getFullYear()) ? true : false);
}

function cardValidator(cardNumber, cardMonth, cardYear) {
  return (luhnCheck(cardNumber) && dateValidate(cardMonth, cardYear) ? true : false);
}

module.exports = cardValidator;

