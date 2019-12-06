/**
 * 
 * Валидация полей форм
 * 
 * 
*/


// Проверка на пустое обязательное поле
export const requiredField = (msg='Заполните поле') => value => value ? undefined : msg;

// Проверка на максимальное коичество символов
export const maxSymbols = (maxNum=1000, msg=`Максимальное количество символов: ${maxNum}`) => 
    value => (value && value.length <= maxNum) ? undefined : msg;

// Проверка на совпадение паролей
export const compareValue = (valFirst, msg='Пароли не совпадают') => value => 
    value === valFirst ? undefined : msg;
