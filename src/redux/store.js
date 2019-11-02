/**
 * 
 * Создание redux-store
 * 
 * 
 */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Редьюсеры
const reducers = combineReducers({

});

// Объект стора с добавлением middleware-thunk
const store = createStore(reducers, applyMiddleware(thunk));

export default store;