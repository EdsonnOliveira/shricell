import { combineReducers } from 'redux';

import loginReducer from './login'
import suppliersReducer from './suppliers';

const appReducer = combineReducers({
    loginReducer,
    suppliersReducer
});

export default appReducer;