import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h2>Howdy</h2>
            <Link to='/friendos'>Click Me</Link>
        </div>
    )
}

export default withRouter(Home);
