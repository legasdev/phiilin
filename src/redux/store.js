/**
 * 
 * Создание redux-store
 * 
 * 
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from './auth-reducer';

// Редьюсеры
const reducers = combineReducers({
    auth: authReducer,
});

// Объект стора с добавлением middleware-thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;