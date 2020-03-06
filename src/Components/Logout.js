import React from 'react';
import { logout } from '../Redux/actions.js';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'

const Logout = ({ history, dispatch }) => {
    const handleClick = () => {
        dispatch(logout());
        history.push('/');
    }
    return <Button color="warning" onClick={handleClick} className="buttonMarginLeft">Log Out</Button>;
}

export default withRouter(connect(null)(Logout));