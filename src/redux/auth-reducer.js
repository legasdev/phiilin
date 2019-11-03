/**
 *  Редьюсер профиля
 * 
 * 
*/

// Названия действий

const
    SET_INFO = 'set_info';


// Инициализация

const initialState = {
    login: '',
    name: '',
    lastName: '',
    isAuth: false,
};


// Reducer

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        default: return state;
    }

}

export default authReducer;


// Actions
