import { createSelector } from "reselect";

/**
 * 
 * Селекторы групп
 * 
 * 
*/


// Simple

export const _getListGroups = state => state.groups.listGroups;


// Selector

export const getListGroups = createSelector(_getListGroups, getListGroups => getListGroups);