import React from 'react';
import { logIn } from '../Redux/actions.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Login = ({ history, dispatch }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn());
        console.log('yup')
        console.log(history);
        history.push('/employees');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Log In</button>
        </form>
    )
}

export default withRouter(connect(null)(Login));
