import React from 'react';
import { logIn } from '../Redux/actions.js';
import { connect } from 'react-redux';

const Login = ({ history, dispatch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn());
        history.push('/employees');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Log In</button>
        </form>
    )
}

export default connect(null)(Login);
