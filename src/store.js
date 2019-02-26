import {createStore,combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import testReducer from './reducers/testReducers';

const store = createStore(combineReducers({
        testReducer
    }),applyMiddleware(logger, thunk));
export default store;
