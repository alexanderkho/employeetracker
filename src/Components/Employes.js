import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Employees = (props) => {
    return (
        <div>
            <h2>Here Are The Employees</h2>
            <Link to='/employees/2'>Employee 2</Link>
        </div>
    )
}

export default withRouter(Employees);
