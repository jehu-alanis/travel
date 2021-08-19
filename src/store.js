import { createStore, combineReducers } from 'redux';
import basket from '../src/redux/reducers/basket';
import personas from '../src/redux/reducers/personas';
import message from '../src/redux/reducers/message';
import fechas from '../src/redux/reducers/fechas';
const reducer = combineReducers({
    basket,
    personas,
    message,
    fechas
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;