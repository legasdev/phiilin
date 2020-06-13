import { usersAPI } from "../api/api";

const
    SET_INFO = 'profile/set_info';

// Редьюсер
const initialState = {
    user: null
};

const profileReducer = (state = initialState, action) => {
    
    switch (action.type) {

        case SET_INFO:
            return {
                ...state,
                user: action.data
            };

        default:
            return {...state};
    }

};

export default profileReducer;


// Actions

const _setInfo = data => ({type: SET_INFO, data});


// Thunks

export const getInfo = id => async dispatch => {
    const {data} = await usersAPI.getUsers(id);

    if (!data.errorCode) {
        dispatch(_setInfo(data.list[0]));
    } else {
        console.error(`Код ошибки: ${data.errorCode}`);
    }
};