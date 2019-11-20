/**
 *  Редьюсер профиля
 * 
 * 
*/

import { getMe } from "./auth-reducer";

// Названия действий

const
    SET_INITIALIZED = 'set_initial';


// Инициализация

const initialState = {
    initialized: false
};


// Reducer

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }

        default: return state;
    }

}

export default appReducer;


// Actions

export const setInitializedSuccess = () => ({type: SET_INITIALIZED});


// Thunks

export const initializeApp = () => dispatch => {
    const p = dispatch(getMe());
    
    Promise.all([p]).finally(()=> {
        dispatch(setInitializedSuccess());
    });
    
}