const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let orderedDroids = prompt('Cколько желаете купить дроидов?');

orderedDroids = Number(orderedDroids);

orderedDroids === 0
  ? console.log('Отменено пользователем')
  : (totalPrice = orderedDroids * pricePerDroid);

totalPrice > credits
  ? console.log('Недостаточно средств на счету!')
  : console.log(
      `Вы купили ${orderedDroids} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
