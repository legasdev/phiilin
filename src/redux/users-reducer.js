import { usersAPI } from "../api/api";

const 
    SET_LIST_USERS = 'users/set_list_users';

const
    initialState = {
        listUsers: null,
    };

const usersReducer = (state=initialState, action) => {

    switch (action.type) {

        case SET_LIST_USERS:
            return {
                ...state,
                listUsers: action.listUsers
            };

        default: return {...state};
    }

};

export default usersReducer


// Actions

export const _setListUsers = listUsers => ({type: SET_LIST_USERS, listUsers});


// Thunks

export const setListUsers = id => async dispatch => {
    const {data} = await usersAPI.getUsers(id);

    !data.errorCode
        ? dispatch(_setListUsers(data.listUsers))
        : console.error(`Код ошибки: ${data.errorCode}`);
};

export const clearListUsers = () => async dispatch => dispatch(_setListUsers(null))