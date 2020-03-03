import { session } from '../initialState.js';

const sessionReducer = (state=session, action) => {
    let newState;
    switch (action.type) {
        case 'LOG_IN':
            newState = {
                ...state,
                loggedIn: true
            }
            break;
        default: 
            newState = state;
    }
    return newState
}

export default sessionReducer;