import { createSelector } from 'reselect';

const listUsers = state => state.users.listUsers;

export const getListUsers = createSelector(listUsers, listUsers => {
    const newList = listUsers && listUsers.map(item => {
        let array = [];
        Object.keys(item.desk).forEach(key => {
            array.push({
                name: key,
                value: item.desk[key]
            });
        });
        item.desk = array.map(e => ({...e}));

        return item;
    });

    return newList;
});