
import {combineReducers, createStore, applyMiddleware} from 'redux'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {login,cartReducer} from './reducers';
import logger from 'redux-logger';

const reducers = {login, cartReducer}

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers({
    cart: cartReducer,
    login: login
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger]

export const configureStore = () => createStore(persistedReducer, applyMiddleware(...middleWares))


// combine reducers, create store, apply middlewares