const userPlace = prompt('Введите страну доставки');
const normalizedUserPlace = userPlace.toLowerCase();
let price;

switch (normalizedUserPlace) {
  case 'китай':
    price = 100;
    break;

  case 'чили':
    price = 250;
    break;

  case 'австралия':
    price = 170;
    break;

  case 'индия':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (price > 0) {
  console.log(
    `Доставка в ${normalizedUserPlace} будет стоить ${price} кредитов`,
  );
}
