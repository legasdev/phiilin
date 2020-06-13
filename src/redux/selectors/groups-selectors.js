import { createSelector } from 'reselect';
import { objectToObjInArray } from './../../utils/utils';

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
        desk: objectToObjInArray(item.desk)
    }))
));
export const getInfoGroup = createSelector(_getInfoGroup, infoGroup => infoGroup);
export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);