import {createStore,combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducers';

const store = createStore(combineReducers({
        searchReducer
    }),applyMiddleware(logger, thunk));
export default store;
