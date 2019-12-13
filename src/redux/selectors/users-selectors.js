import { createSelector } from 'reselect';

const listUsers = state => state.users.listUsers;

export const getListUsers = createSelector(listUsers, listUsers => listUsers);