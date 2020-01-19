let total = 0;

while (true) {
  let userInput = prompt('Введите число');

  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);

  const notANamber = Number.isNaN(userInput);

  if (notANamber) {
    alert(`Это не число, введите число`);
    continue;
  }

  total += userInput;
}

alert(`Общая сумма чисел равна ${total}`);
