import authReducer, { 
    setUserData,
    setLoginError,
    setLogout
} from "./auth-reducer";

/**
 * 
 * Тесты модуля бизнеса
 * по авторизации пользователя
 * 
 * 
*/

const initialState = {
    id: 0,
    login: '',
    name: '',
    lastName: '',
    position: '',
    isAuth: false,
    isFetching: false,
    loginError: false,
};

it('Установка данных пользователя при авторизации', () => {

    // Инициализация
    const newUserData = {
        id: 1,
        login: 'test',
        name: 'testName',
        lastName: 'testLastName',
        position: 'testPosition',
    };
    const action = setUserData(newUserData);

    // Создание action
    const newState = authReducer(initialState, action);

    // Ожидание
    expect(newState).toMatchObject(newUserData);

});

it('Обработка ошибки при неправильном вводе логина/пароля', () => {

    // Инициализация
    const action = setLoginError(true);

    // Создание action
    const newState = authReducer(initialState, action);
    
    // Ожидание
    expect(newState.loginError).toBe(true);

});

it('Разлогирование пользователя', () => {

    // Инициализация
    const action = setLogout();

    // Создание action
    const newState = authReducer(initialState, action);

    // Ожидание
    expect(newState.isAuth).toBe(false);

});