import { combineReducers } from 'redux';

import loginReducer from './login'
import supplierReducer from './supplier';

const appReducer = combineReducers({
    loginReducer,
    supplierReducer
});

export default appReducer;