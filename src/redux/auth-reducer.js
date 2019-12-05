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
            }

        case SET_LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            }
        
        case SET_LOGOUT:
            return {
                ...state,
                isAuth: false
            }

        default: return state;
    }

}

export default authReducer;


// Actions

const setUserData = data => ({type: SET_USER_DATA, data});
const setLoginError = loginError => ({type: SET_LOGIN_ERROR, loginError});
const setLogout = () => ({type: SET_LOGOUT});


// Thunks

// Проверка авторизации
export const getMe = () => async dispatch => {
    const res = await authAPI.getMe();
    dispatch(setUserData(res.data));
}

// Попытка авторизации
// export const login = (login, password) => async dispatch => {
//     const res = await authAPI.login(login, password);
//     console.log(res);
//     if (!res.data.resultCode) {
//         dispatch(getMe());
//     } else {
//         dispatch(stopSubmit('login', 'Error'));
//     }
// }

export const login = (login, password) => async dispatch => {
    const res = await authAPI.login(login, password);

    if (!res.data.errorCode) {
        dispatch(setLoginError(false));
        dispatch(getMe());
    }
    else 
        dispatch(setLoginError(true));
        
}

export const logout = () => async dispatch => {
    const res = await authAPI.logout();

    if (!res.data.errorCode) {
        dispatch(setLogout());
    }
}

// Отключение ошибки логина
export const setError = sel => dispatch => {
    dispatch(setLoginError(sel));
};