import { employeeList } from '../initialState.js';

const employeesReducer = (state=employeeList, action) => {
    let newState;
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            console.log(action.payload);
            newState = [...state, action.payload]
            break;
        default: 
            newState = state;
    }
    return newState
}   

export default employeesReducer;