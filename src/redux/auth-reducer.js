/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";

// Названия действий

const
    SET_USER_DATA = 'auth-reducer/SET_USER_DATA',        // Авторизация пользователя
    SET_AUTH = 'auth-reducer/SET_AUTH',
    SET_LOGIN_ERROR = 'auth-reducer/SET_LOGIN_ERROR',    // При авторизации возникла ошибка
    SET_LOGOUT = 'auth-reducer/SET_LOGOUT';              // Выход (разлогин)


// Инициализация

const initialState = {
    id: 0,
    token: null,
    login: '',
    phone: 'Нет телефона',
    email: 'Нет почты',
    name: 'Noname',
    position: 'student',
    groupName: '2',
    isAuth: false,
    isFetching: false,
    loginError: false,
};


// Reducer

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.status
            };

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

export const setAuth = status => ({type: SET_AUTH, status});
export const setUserData = data => ({type: SET_USER_DATA, data});
export const setLogout = () => ({type: SET_LOGOUT});


// Thunks

// Проверка авторизации
export const setMe = (fio, phone, email, position, groupName) => async dispatch => {
    try {
        const
            token = localStorage.getItem('token'),
            login = localStorage.getItem('login');

        if (token) {
            dispatch(setUserData({
                token,
                login,
                name: fio,
                groupName,
                phone,
                email,
                position,
            }));
        }
    } catch(e) {
        console.error(e);
    }
};

// Проверка авторизации
export const getAuth = () => async dispatch => {
    try {
        const
            {data: {ok, user}} = await authAPI.getAuth();

        if (ok) {
            dispatch(setMe(user.fio, user.phone, user.email, user.roles[user.roles.length - 1].name, user.groupName));
            dispatch(setAuth(true));
        } else {
            throw new Error('Error auth');
        }
    } catch(error) {
        console.error(error);
    }
};

// Залогиниться
export const login = ({login, password}) => async dispatch => {
    try {
        const
            {data} = await authAPI.login(login, password);

        if (data.token) {
            console.log(data)
            localStorage.setItem('token', data.token);
            localStorage.setItem('login', login);
            dispatch(setMe(data.user.fio, data.user.phone, data.user.email, data.user.roles[data.user.roles.length - 1].name, data.user.groupName));
        } else {
            throw new Error('Error login');
        }
    } catch(error) {
        console.error(error);
    }
};

// Зарегистрироваться
export const register = (login, fio, email, tel, group, password) => async dispatch => {
    try {
        const
            {data} = await authAPI.register(login, fio, email, tel, group, password);

        if (data.ok) {
            // TODO: Обработка регистрации
        } else {
            throw new Error('Error register');
        }
    } catch(error) {
        console.error(error);
    }
};

export const logout = () => async dispatch => {
    localStorage.clear();
    dispatch(setLogout());
};