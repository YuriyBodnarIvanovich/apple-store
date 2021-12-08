import {combineReducers, createStore} from 'redux';
import mainPageReducer from './mainPage-reducer';
import goodsReducer from './goods-reducer';

const reducer = combineReducers({
    MainPage: mainPageReducer,
    GoodsPage: goodsReducer
});

const store = createStore(reducer);

window.store = store;

export default store;

