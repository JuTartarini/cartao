function luhn_check(value) {
  return value.split('')
      .reverse()
      .map( (x) => parseInt(x) )
      .map( (x,idx) => idx % 2 ? x * 2 : x )
      .map( (x) => x > 9 ? (x % 10) + 1 : x )
      .reduce( (accum, x) => accum += x ) % 10 === 0;
}

function date_validate(month,year)
{
let now = new Date;
return (month+"/"+year >= (now.getMonth()+ 1+"/"+now.getFullYear()) ? true:false)
}

function cardValidator(cardNumber,cardMonth, cardYear)
{
  return (luhn_check(cardNumber) && date_validate(cardMonth, cardYear) ? true: false)
}

console.log(cardValidator("5201323100722299",05, 2022))