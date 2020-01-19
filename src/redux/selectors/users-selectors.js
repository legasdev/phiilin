import { createSelector } from 'reselect';
import { EnRu } from '../../lang/en-Ru';

const _listUsers = state => state.users.listUsers;

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