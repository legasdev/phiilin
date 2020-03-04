/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";

// Названия действий

const
    SET_USER_DATA = Symbol('set_info'),             // Авторизация пользователя
    SET_LOGIN_ERROR = Symbol('set_login_error'),    // При авторизации возникла ошибка
    SET_LOGOUT = Symbol('set_logout');              // Выход (разлогин)


// Инициализация

const initialState = {
    id: 0,
    token: null,
    login: '',
    name: '',
    lastName: '',
    position: '',
    isAuth: false,
    isFetching: false,
    loginError: false,
};


// Reducer

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };
        
        case SET_LOGOUT:
            return {
                ...state,
                isAuth: false
            };

        default: return state;
    }
};

export default authReducer;


// Actions

export const setUserData = data => ({type: SET_USER_DATA, data});
export const setLoginError = loginError => ({type: SET_LOGIN_ERROR, loginError});
export const setLogout = () => ({type: SET_LOGOUT});


// Thunks

// Проверка авторизации
export const getMe = () => async dispatch => {
    try {
        const
            token = localStorage.getItem('token'),
            login = localStorage.getItem('login');

        if (token) {
            dispatch(setUserData({
                token,
                login,
                name: 'Артем',
                lastName: 'Степанов',
                position: 'Преподаватель',
            }));
        }
    } catch(e) {
        console.error(e);
    }
};

export const login = (login, password) => async dispatch => {
    try {
        const
            result = await authAPI.login(login, password);

        if (result.data) {
            dispatch(setLoginError(false));
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('login', login);
            dispatch(getMe());
        } else {
            throw new Error('Error login');
        }
    } catch(error) {
        dispatch(setLoginError(true));
    }
};

export const logout = () => async dispatch => {
    localStorage.clear();
    dispatch(setLogout());
};

// Отключение ошибки логина
export const setError = sel => dispatch => {
    dispatch(setLoginError(sel));
};