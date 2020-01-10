import { createSelector } from 'reselect';
import { EnRu } from '../../lang/en-Ru';

/**
 * 
 * Селекторы групп
 * 
 * 
*/


// Simple

export const _getListGroups = state => state.groups.listGroups;
export const _getInfoGroup = state => state.groups.infoGroup;
export const _getIsErrorAddNew = state => state.groups.isErrorAddNew;


// Selector

export const getListGroups = createSelector(_getListGroups, listGroups => {
    const newList = listGroups && listGroups.map(item => {
        let array = [];
        Object.keys(item.desk).forEach(key => {
            array.push({
                name: EnRu[key],
                value: item.desk[key]
            });
        });
        item.desk = array.map(e => ({...e}));

        return item;
    });

    return newList;
});
export const getInfoGroup = createSelector(_getInfoGroup, infoGroup => infoGroup);
export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);