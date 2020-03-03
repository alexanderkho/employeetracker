import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Users = (props) => {
    return (
        <div>
            <h2>Here are the users</h2>
            <Link to='/'>Click Me</Link>
        </div>
    )
}
export default withRouter(Users);
