import { combineReducers } from 'redux';

import loginReducer from './login'
import salesReducer from './sales'
import suppliersReducer from './suppliers';
import stockReducer from './stock'

const appReducer = combineReducers({
    loginReducer,
    salesReducer,
    suppliersReducer,
    stockReducer
});

export default appReducer;