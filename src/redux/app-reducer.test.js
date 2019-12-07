import appReducer, { 
    setInitializedSuccess,
    setRollUpSuccess
} from "./app-reducer";

/**
 * 
 * Тесты app-reducer
 * 
 * 
*/

const initialState = {
    initialized: false,
    rollUp: null,
};

it('Инициализация приложения', () => {

    // Инициализация
    const action = setInitializedSuccess();

    // Создание action
    const newState = appReducer(initialState, action);

    // Ожидание
    expect(newState.initialized).toBe(true);

});

it('Свертывание бокового меню', () => {

    // Инициализация
    const action = setRollUpSuccess(false);

    // Создание action
    const newState = appReducer(initialState, action);

    // Ожидание
    expect(newState.rollUp).toBe(false);

});

it('Открытие бокового меню', () => {

    // Инициализация
    const action = setRollUpSuccess(true);

    // Создание action
    const newState = appReducer(initialState, action);

    // Ожидание
    expect(newState.rollUp).toBe(true);

});