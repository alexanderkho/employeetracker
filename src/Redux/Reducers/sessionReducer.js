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
        case 'LOGIN':
            newState = {
                loggedIn: true,
                user: action.payload
            }
            break;
        case 'LOGOUT':
            newState = {
                loggedIn: false,
                user: null
            }
            break;
        default: 
            newState = state;
    }
    return newState
}

export default sessionReducer;