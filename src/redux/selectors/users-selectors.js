import { createSelector } from 'reselect';
import { usersEnRu } from '../../lang/en-Ru';

const listUsers = state => state.users.listUsers;

export const getListUsers = createSelector(listUsers, listUsers => {
    const newList = listUsers && listUsers.map(item => {
        let array = [];
        Object.keys(item.desk).forEach(key => {
            array.push({
                name: usersEnRu[key],
                value: item.desk[key]
            });
        });
        item.desk = array.map(e => ({...e}));

        return item;
    });

    return newList;
});