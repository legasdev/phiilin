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

export const getListGroups = createSelector(_getListGroups, listGroups => (
    listGroups && listGroups.map(item => ({
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
export const getInfoGroup = createSelector(_getInfoGroup, infoGroup => infoGroup);
export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);