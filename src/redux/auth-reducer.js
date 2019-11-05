/**
 *  Редьюсер профиля
 * 
 * 
*/

import { authAPI } from "../api/api";

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

export const getAuthData = () => dispatch => {
    authAPI
        .getAuthData()
        .then(res => {
            console.log(res);
            dispatch(setUserData(res.data));
        });
}