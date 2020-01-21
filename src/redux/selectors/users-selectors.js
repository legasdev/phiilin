import { createSelector } from 'reselect';
import { EnRu } from '../../lang/en-Ru';

const _listUsers = state => state.users.listUsers;
const _getIsErrorAddNew = state => state.users.isErrorAddNew;

export const getListUsers = createSelector(_listUsers, listUsers => (
    listUsers && 
    listUsers.map(item => ({
        ...item,
        desk: Object.keys(item.desk).reduce( (arr, key) => [
            ...arr, 
            {
                name: EnRu[key],
                value: item.desk[key]
            }
        ], [])
    }))
));

export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);