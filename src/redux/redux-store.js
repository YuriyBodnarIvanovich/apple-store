import {combineReducers, createStore} from 'redux';
import mainPageReducer from './mainPage-reducer';
import goodsReducer from './goods-reducer';
import AdminReducer from "./Admin-reducer";

const reducer = combineReducers({
    MainPage: mainPageReducer,
    GoodsPage: goodsReducer,
    AdminPage: AdminReducer

});

const store = createStore(reducer);

window.store = store;

export default store;

