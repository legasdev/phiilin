import { createSelector } from 'reselect';

/**
 * 
 * Селекторы групп
 * 
 * 
*/


// Simple

export const _getListGroups = state => state.groups.listGroups;
export const _getIsErrorAddNew = state => state.groups.isErrorAddNew;


// Selector

export const getListGroups = createSelector(_getListGroups, listGroups => listGroups);
export const getIsErrorAddNew = createSelector(_getIsErrorAddNew, isErrorAddNew => isErrorAddNew);