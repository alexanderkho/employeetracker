import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import moment from 'moment';

//TODO: Refactor this to connect to store so it doesn't have to use location.state
const EmployeeDetail = ({ match, location }) => {
    if (!location.state) {
        return <Redirect to='/login'  />
    }
    const { employee } = location.state;
    const { id } = match.params;
    return (
        <div>
            <h2>Employee Details</h2>
            <ul>
                <li>Employee ID: {id}</li>
                <li>Name: {`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName}`}</li>
                <li>DOB: {moment(employee.DateOfBirth).format('MMMM Do YYYY')}</li>
                <li>Start of Employment: {moment(employee.DateOfEmployment).format('MMMM Do YYYY')}</li>
                <li>Status: {employee.Status ? 'Active' : 'Inactive'}</li>
            </ul>
            <Link to='/employees'>Back</Link>
        </div>
    )
}

export default withRouter(EmployeeDetail);