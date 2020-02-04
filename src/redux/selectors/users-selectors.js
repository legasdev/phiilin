import { createSelector } from 'reselect';
import { objectToObjInArray } from './../../utils/utils';

const _listUsers = state => state.users.listUsers;
const _getIsErrorAddNew = state => state.users.isErrorAddNew;

export const getListUsers = createSelector(_listUsers, listUsers => (
    listUsers && 
    listUsers.map(item => ({
        ...item,
        desk: objectToObjInArray(item.desk)
    }))
));

export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);