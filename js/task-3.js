const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const inputPassword = prompt('Ввведите пароль!');

if (inputPassword === null) {
  message = 'Отменено пользователем!';
} else if (inputPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
