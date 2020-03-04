import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

const EmployeeDetail = ({ match, location }) => {
    const { employee } = location.state;
    const { id } = match.params;
    return (
        <div>
            <h2>Employee Details</h2>
            <ul>
                <li>Employee ID: {id}</li>
                <li>Name: {`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName}`}</li>
                <li>DOB: {moment(employee.DateOfBirth).format('dddd, MMMM Do YYYY')}</li>
                <li>Start of Employment: {moment(employee.DateOfEmployment).format('dddd, MMMM Do YYYY')}</li>
                <li>Status: {employee.Status ? 'Active' : 'Inactive'}</li>
            </ul>
            <Link to='/employees'>Back</Link>
        </div>
    )
}

export default withRouter(EmployeeDetail);
