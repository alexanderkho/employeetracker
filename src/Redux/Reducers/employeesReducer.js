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
        case 'UPDATE_EMPLOYEE':
            newState = {
                ...state,
                [action.payload.id]: action.payload.newInfo
            }
            break;
        case 'DELETE_EMPLOYEE':
            newState = { ...state };
            delete newState[action.payload];
            break;
        case 'CHANGE_STATUS':
            newState = { ...state };
            newState[action.payload].Status = !newState[action.payload].Status;
            break;
        default: 
            newState = state;
    }
    return newState
}   

export default employeesReducer;