/**
 * Селекторы форм
 * 
 * 
*/

import { createSelector } from "reselect";

// Simple

const loginError = state => state.auth.loginError;


// Selectors

export const getLoginError = createSelector(loginError, loginError => loginError);