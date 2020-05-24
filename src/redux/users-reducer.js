import { usersAPI } from "../api/api";

const 
    SET_LIST_USERS = 'users/set_list_users',
    SET_ERROR_NEW = 'users/ser_error_new';

const
    initialState = {
        listUsers: null,
        isErrorAddNew: null,
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

export default usersReducer;


// Actions

export const _setListUsers = listUsers => ({type: SET_LIST_USERS, listUsers});
export const _setErrorAddNew = flag => ({type: SET_ERROR_NEW, flag});


// Thunks

// Запрашиваем и добавляем в редакс список студентов
export const getListUsers = (group) => async dispatch => {
    try {
        const {data} = await usersAPI.getUsers(group);
        console.log(data);
        if (data.ok) {
            dispatch(_setListUsers(data.users));
        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};