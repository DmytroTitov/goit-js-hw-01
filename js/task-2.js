const goodsTotal = 100;
const goodsOrdered = 50;

goodsOrdered > goodsTotal
  ? console.log(`На складе недостаточно товаров!`)
  : console.log(`Заказ оформлен, с вами свяжется менеджер`);
