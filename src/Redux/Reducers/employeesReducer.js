import { employees } from '../initialState.js';

const employeesReducer = (state=employees, action) => {
    let newState;
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            newState = {
                ...state,
                [action.payload.id]: action.payload.newEmployee
            }
            break;
        default: 
            newState = state;
    }
    return newState
}   

export default employeesReducer;