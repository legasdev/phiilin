/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";

// Названия действий

const
    SET_USER_DATA = 'set_info',             // Авторизация пользователя
    SET_LOGIN_ERROR = 'set_login_error';    // При авторизации возникла ошибка


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
        

        default: return state;
    }

}

export default authReducer;


// Actions

export const setUserData = data => ({type: SET_USER_DATA, data});
export const setLoginError = loginError => ({type: SET_LOGIN_ERROR, loginError});


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

export const login = (login, password) => dispatch => {
    const p = authAPI.login(login, password);

    Promise.all([p])
        .then(res => {
            console.log(res[0]);
            if (!res[0].data.errorCode) {
                dispatch(setLoginError(false));
                dispatch(getMe());
            }
            else 
                dispatch(setLoginError(true));
                
        })
        .catch(res => {
            console.error(`Неизвестный ответ: <authAPI.login>\n${res}`);
        });
}