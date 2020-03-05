import React from 'react';
import { changeLoginStatus } from '../Redux/actions.js';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom'

const ChangeLogin = ({ history, dispatch, color, action, className }) => {

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(changeLoginStatus());
        history.push('/employees');
    }

    return <Button color={color} onClick={handleClick} className={className}>{action}</Button>


}

export default withRouter(connect(null)(ChangeLogin));
