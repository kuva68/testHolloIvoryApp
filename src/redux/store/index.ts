import {applyMiddleware, createStore} from 'redux';

import * as thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

let middleware = [thunkMiddleware.default];
if (__DEV__) {
    const logger = require('redux-logger');
    const loggerMiddleware = logger.createLogger({
        duration: true
    });
    middleware = [...middleware, loggerMiddleware];
}
const store: any = createStore(reducers, applyMiddleware(...middleware));



export type AppDispatch = typeof store.dispatch;

export default store;
