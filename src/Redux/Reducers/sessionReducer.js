import { session } from '../initialState.js';

const sessionReducer = (state=session, action) => {
    let newState;
    switch (action.type) {
        case 'CHANGE_LOGIN_STATUS':
            newState = {
                ...state,
                loggedIn: !state.loggedIn
            }
            break;
        default: 
            newState = state;
    }
    return newState
}

export default sessionReducer;