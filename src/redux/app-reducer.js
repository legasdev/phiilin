/**
 *  Редьюсер профиля
 *
 *
*/
import {setMe} from "./auth-reducer";

// Названия действий

const
    SET_INITIALIZED = 'app/setInitial';


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
            };

        default: return state;
    }
};

export default appReducer;


// Actions

export const setInitializedSuccess = () => ({type: SET_INITIALIZED});


// Thunks

// Инициализирование приложения
export const initializeApp = () => async dispatch => {
    await dispatch(setMe());
    dispatch(setInitializedSuccess());
};