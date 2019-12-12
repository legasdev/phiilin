import { groupsAPI } from "../api/api";

/**
 * 
 *  Редьюсер групп
 * 
 * 
*/

const
    SET_LIST_GROUPS = 'groups/set_list_groups',
    SET_ERROR_NEW = 'groups/set_error_new';


// Initial

const initialState = {
    listGroups: null,
    isErrorAddNew: null,
};


// Reducer

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_GROUPS:
            return {
                ...state,
                listGroups: action.listGroups
            };

        case SET_ERROR_NEW:
            return {
                ...state,
                isErrorAddNew: action.flag
            };

        default: return { ...state }
    }

};

export default groupsReducer;


// Actons

export const _setListGroups = listGroups => ({type: SET_LIST_GROUPS, listGroups});
export const _setErrorAddNew = flag => ({type: SET_ERROR_NEW, flag});


// Thunks

// Запрашиваем и добавляем в редакс список групп
export const setListGroups = () => async dispatch => {
    const res = await groupsAPI.getGroups();

    !res.data.errorCode
        ? dispatch(_setListGroups(res.data.listGroups))
        : console.error(`Код ошибки: ${res.data.errorCode}`);
};

// Добавляем новую группу в бд и делаем новый запрос на обновление групп
export const addNewGroup = data => async dispatch => {
    const res = await groupsAPI.addNewGroup(data);

    if (!res.data.errorCode) {
        dispatch(_setListGroups(res.data.listGroups));
        dispatch(_setErrorAddNew(false));
    }
    else {
        console.error(`Код ошибки: ${res.data.errorCode}`);
        dispatch(_setErrorAddNew(true));
    }
};

// Изменить статус ошибки
export const setErrorAddNew = flag => dispatch => {
    console.log(flag)
    dispatch(_setErrorAddNew(flag));
}