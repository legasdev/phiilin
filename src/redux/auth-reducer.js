/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";

// Названия действий

const
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',             // Авторизация пользователя
    SET_LOGIN_ERROR = 'auth-reducer/SET_LOGIN_ERROR',    // При авторизации возникла ошибка
    SET_LOGOUT = 'auth-reducer/SET_LOGOUT';              // Выход (разлогин)


// Инициализация

const initialState = {
    id: 0,
    token: null,
    login: '',
    name: 'Имя',
    lastName: 'Фамилия',
    position: 'Преподаватель',
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
export const setLogout = () => ({type: SET_LOGOUT});


// Thunks

// Проверка авторизации
export const setMe = () => async dispatch => {
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

export const login = ({login, password}) => async dispatch => {
    try {
        const
            {data} = await authAPI.login(login, password);

        if (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('login', login);
            dispatch(setMe());
        } else {
            throw new Error('Error login');
        }
    } catch(error) {
        console.error(error);
    }
};

export const logout = () => async dispatch => {
    localStorage.clear();
    dispatch(setLogout());
};