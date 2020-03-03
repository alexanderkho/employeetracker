import {combineReducers} from 'redux';
import employeesReducer from './Reducers/employeesReducer.js';
import sessionReducer from './Reducers/sessionReducer.js';

const rootReducer = combineReducers({
    employees: employeesReducer,
    session: sessionReducer
})

export default rootReducer;