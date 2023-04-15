import { combineReducers } from 'redux';

import loginReducer from './login'
import suppliersReducer from './suppliers';
import stockReducer from './stock'

const appReducer = combineReducers({
    loginReducer,
    suppliersReducer,
    stockReducer
});

export default appReducer;