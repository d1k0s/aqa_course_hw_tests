/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string): boolean {
    const upperCase = /[A-ZА-ЯЁ]/.test(password);
    const lowerCase = /[a-za-яё]/.test(password);
    const digit = /[0-9]/.test(password);
    if (upperCase && lowerCase && digit && password.length >=9 && password.trim().length !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validatePassword("f,dultsdf123313"))