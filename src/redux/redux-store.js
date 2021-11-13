import {combineReducers, createStore} from 'redux';
import mainPageReducer from './mainPage-reducer';

const reducer = combineReducers({
    MainPage: mainPageReducer,
});

const store = createStore(reducer);

window.store = store;

export default store;