import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from './reducers/rootreducer';
import loggerMiddleware from './middleware/logger';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {counter: {value: 0} , random: { value:0} };
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(loggerMiddleware, logger, promiseMiddleware, thunk)));
window.__store__ = store;
export default store;