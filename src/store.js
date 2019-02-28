import {createStore,combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import searchReducer from './reducers/searchReducers';
import searchRepositoriesReducer from './reducers/searchRepositoriesReducers';
import searchRepositoryReducer from './reducers/searchRepositoryReducers';
import searchCommitsReducer from './reducers/searchCommitsReducers';

const store = createStore(combineReducers({
        searchReducer,
        searchRepositoriesReducer,
        searchRepositoryReducer,
        searchCommitsReducer
    }),applyMiddleware(logger, thunk));
export default store;
