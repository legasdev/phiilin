import { groupsAPI } from "../api/api";

/**
 * 
 *  Редьюсер групп
 * 
 * 
*/

const
    SET_LIST_GROUPS = 'groups/set_list_groups';


// Initial

const initialState = {
    listGroups: null,
};


// Reducer

const groupsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LIST_GROUPS:
            return {
                ...state,
                listGroups: action.listGroups
            };

        default: return { ...state }
    }

};

export default groupsReducer;


// Actons

export const _setListGroups = listGroups => ({type: SET_LIST_GROUPS, listGroups});


// Thunks

export const setListGroups = () => async dispatch => {
    const res = await groupsAPI.getGroups();

    if (!res.data.errorCode) 
        dispatch(_setListGroups(res.data.listGroups));
    else
        console.error(`Код ошибки: ${res.data.errorCode}`);
};