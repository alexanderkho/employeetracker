import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Alert } from 'reactstrap';
import { login } from '../Redux/actions.js'

const Login = ({ history, dispatch }) => {

    const [ user, setUser ] = useState('');
    const [ showAlert, setAlert ] = useState(false);
    const handleChange = e => setUser(e.target.value);

    const handleClick = (e) => {
        e.preventDefault();
        if (user !== '') {
            dispatch(login(user));
            history.push('/employees');
        } else {
            setAlert(true);
        }
    }

    return (
        <Form onSubmit={handleClick}>
            <p>Please Log In:</p>
            <Input type="text" value={user} onChange={handleChange} placeholder="username"></Input>
            <div className="warningMessage">
                <Alert isOpen={showAlert} color="danger" toggle={() => setAlert(false)}>
                    Please Enter A Valid Username
                </Alert>
            </div>
            <Button color="success" className="buttonMarginTop">Log In</Button>
        </Form>
    )

}

export default connect(null)(Login);