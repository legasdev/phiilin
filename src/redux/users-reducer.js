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

        case SET_ERROR_NEW:
            return {
                ...state,
                isErrorAddNew: action.flag
            }

        default: return {...state};
    }

};

export default usersReducer;


// Actions

export const _setListUsers = listUsers => ({type: SET_LIST_USERS, listUsers});
export const _setErrorAddNew = flag => ({type: SET_ERROR_NEW, flag});


// Thunks

export const setListUsers = id => async dispatch => {
    const {data} = await usersAPI.getUsers(id);

    console.log(data);

    !data.errorCode
        ? dispatch(_setListUsers(data.list))
        : console.error(`Код ошибки: ${data.errorCode}`);
};

export const setListUsersByGroupId = groupId => async dispatch => {
    const {data} = await usersAPI.getUsersById(groupId);

    !data.errorCode
        ? dispatch(_setListUsers(data.listUsers))
        : console.error(`Код ошибки: ${data.errorCode}`);
};

export const addNewUser = user => async dispatch => {
    try {
        const res = await usersAPI.addNewUser(user);

        if (!res.data.errorCode) {
            dispatch(_setErrorAddNew(false));
        } else {
            dispatch(_setErrorAddNew(true));
            console.error(`Код ошибки: ${res.data.errorCode}`);
        }
    } catch(e) {
        dispatch(_setErrorAddNew(true));
    }
};

export const clearListUsers = () => async dispatch => dispatch(_setListUsers(null));

export const setErrorAddNew = flag => async dispatch => dispatch(_setErrorAddNew(flag));