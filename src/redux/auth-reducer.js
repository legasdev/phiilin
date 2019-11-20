/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

// Названия действий

const
    SET_USER_DATA = 'set_info';


// Инициализация

const initialState = {
    id: 0,
    login: '',
    name: '',
    lastName: '',
    position: '',
    isAuth: false,
    isFetching: false,
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

        default: return state;
    }

}

export default authReducer;


// Actions

export const setUserData = data => ({type: SET_USER_DATA, data});


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
            if (!res[0].data.errorCode)
                dispatch(getMe());
            else 
                dispatch(stopSubmit('login', {_error: 'Ошибка'}));
                
        })
        .catch(res => {
            console.error(`Неизвестный ответ: <authAPI.login>\n${res}`);
        });
}