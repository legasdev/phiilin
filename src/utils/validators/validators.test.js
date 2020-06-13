import { 
    requiredField,
    maxSymbols,
    compareValue
} from "./validators";

/**
 * 
 * Тесты Валидации полей форм
 * 
 * 
*/

// Проверка обязательных полей
it('В форме поля ввода ничего нет (не выбрано)',() => {
    const str = 'Пустое поле'
    const result = requiredField(str)();

    expect(result).toBe(str);
});

it('Поле ввода в форме не пустое',() => {
    const result = requiredField()(3);

    expect(result).toBe(undefined);
});

// Проверка на максимальное число символов
it('Количество символов больше заданного',() => {
    const result = maxSymbols(3, 'OK')('1234');

    expect(result).toBe('OK');
});

it('Количество символов меньше или равно заданному',() => {
    const result = maxSymbols(5)('12345');

    expect(result).toBe(undefined);
});

// Совпадение значений
it('Строки совпадают', () => {
    const result = compareValue('123456')('123456');

    expect(result).toBe(undefined);
});

it('Строки не совпадают', () => {
    const result = compareValue('1234', 'OK')('123456');

    expect(result).toBe('OK');
});