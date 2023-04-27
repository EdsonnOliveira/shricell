import { combineReducers } from 'redux';

import loginReducer from './login'
import customersReducer from './customers'
import salesReducer from './sales'
import suppliersReducer from './suppliers';
import stockReducer from './stock'

const appReducer = combineReducers({
    loginReducer,
    customersReducer,
    salesReducer,
    suppliersReducer,
    stockReducer
});

export default appReducer;