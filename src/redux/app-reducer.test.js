import appReducer, { setInitializedSuccess } from "./app-reducer";

/**
 * 
 * Тесты app-reducer
 * 
 * 
*/

const initialState = {
    initialized: false
};

it('Инициализация приложения', () => {

    // Инициализация
    const action = setInitializedSuccess();

    // Создание action
    const newState = appReducer(initialState, action);

    // Ожидание
    expect(newState.initialized).toBe(true);

});