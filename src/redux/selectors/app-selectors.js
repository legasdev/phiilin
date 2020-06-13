/**
 * 
 * Селекторы основных данных приложения
 * 
 * 
*/

import { createSelector } from "reselect";


// Simple

const rollUpStatus = state => state.app.rollUp;


// Selectors

export const getRollUpStatus = createSelector(rollUpStatus, rollUpStatus => rollUpStatus);