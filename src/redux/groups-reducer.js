import { groupsAPI } from "../api/api";

/**
 * 
 *  Редьюсер групп
 * 
 * 
*/

const
    SET_GROUPS = 'groups/set_groups',
    SET_LIST_GROUPS = 'groups/set_list_groups',
    SET_INFO_GROUP = 'groups/set_info_group',
    SET_ERROR_NEW = 'groups/set_error_new';



// Initial

const initialState = {
    listGroups: null,
    groups: null,
    infoGroup: null,
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

        case SET_GROUPS:
            return {
                ...state,
                groups: action.groups
            };

        case SET_ERROR_NEW:
            return {
                ...state,
                isErrorAddNew: action.flag
            };

        case SET_INFO_GROUP:
            return {
                ...state,
                infoGroup: action.infoGroup
            };

        default: return { ...state }
    }

};

export default groupsReducer;


// Actons

export const _setListGroups = listGroups => ({type: SET_LIST_GROUPS, listGroups});
export const _setGroups = groups => ({type: SET_GROUPS, groups});
export const _setInfoGroup = infoGroup => ({type: SET_INFO_GROUP, infoGroup});
export const _setErrorAddNew = flag => ({type: SET_ERROR_NEW, flag}); 


// Thunks

export const getListGroups = () => async dispatch => {
    try {
        const {data: {ok, groups}} = await groupsAPI.getListGroups();
        if (ok) {
            dispatch(_setListGroups(groups));
        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};

// Запрашиваем и добавляем в редакс список групп
export const getGroups = () => async dispatch => {
    try {
        const {data: {ok, groups}} = await groupsAPI.getGroups();
        if (ok) {
            dispatch(_setGroups(groups));
        } else {
            throw new Error('Данные не были получены');
        }
    } catch(error) {
        console.error(error);
    }
};

// Добавляем новую группу в бд и делаем новый запрос на обновление групп
export const addNewGroup = (name, direction) => async dispatch => {
    try {
        const {data: {ok}} = await groupsAPI.addNewGroup(name, direction);
        if (ok) {
            const {data: {ok, groups}} = await groupsAPI.getGroups();
            if (ok) {
                dispatch(_setGroups(groups));

                const {data: {ok, groups: listGroups}} = await groupsAPI.getListGroups();
                if (ok) {
                    dispatch(_setListGroups(listGroups));
                }
            } else {
                throw new Error('Данные не были получены');
            }
        } else {
            throw new Error('Ошибка добавления');
        }
    } catch(error) {
        console.error(error);
    }
};