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
    id: '1',
    login: 'legasdev',
    name: 'Артем',
    lastName: 'Степанов',
    position: 'Преподаватель',
    isAuth: true,
    isFetching: false,
};


// Reducer

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isFetching: true
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
        });
}