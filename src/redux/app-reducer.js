/**
 *  Редьюсер профиля
 * 
 * 
*/

import { getMe } from "./auth-reducer";

// Названия действий

const
    SET_INITIALIZED = 'app/setInitial',
    SET_ROLLUP = 'app/setRollup';


// Инициализация

const initialState = {
    initialized: false,
    rollUp: true,
};


// Reducer

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
            
        case SET_ROLLUP:
            return {
                ...state,
                rollUp: action.newStatus
            }

        default: return state;
    }

}

export default appReducer;


// Actions

export const setInitializedSuccess = () => ({type: SET_INITIALIZED});
export const setRollUpSuccess = newStatus => ({type: SET_ROLLUP, newStatus});


// Thunks

// Инициализирование приложения
export const initializeApp = () => async dispatch => {
    let res = await dispatch(getMe());
    console.log(res);
    dispatch(setInitializedSuccess());
};

// Развернуть/свернуть боковое меню
export const setRollUp = newStatus => dispatch => dispatch(setRollUpSuccess(newStatus));