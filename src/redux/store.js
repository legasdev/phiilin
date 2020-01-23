/**
 * 
 * Создание redux-store
 * 
 * 
 */

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import groupsReducer from './groups-reducer';
import usersReducer from './users-reducer';
import profileReducer from './profile-reducer';

// Редьюсеры
const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    groups: groupsReducer,
    users: usersReducer,
    profile: profileReducer,
});

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Создание Store
const store = createStore(reducers, composeEnchancers(applyMiddleware(thunk)));

export default store;