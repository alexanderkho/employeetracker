import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EmployeeDetail = ({ match }) => {
    return (
        <div>
            <h2>User Number {match.params.id}</h2>
            <Link to='/employees'>Back</Link>
        </div>
    )
}
export default withRouter(EmployeeDetail);
