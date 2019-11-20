/**
 * 
 * Создание redux-store
 * 
 * 
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

// Редьюсеры
const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

// Объект стора с добавлением middleware-thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;