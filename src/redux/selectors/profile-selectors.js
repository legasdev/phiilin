import { createSelector } from "reselect";


// Simple

const authId = state => state.auth.id;
const profileInfo = state => state.profile.user;


// Selectors

export const getAuthId = createSelector(authId, authId => authId);
export const getProfileInfo = createSelector(profileInfo, data => data);