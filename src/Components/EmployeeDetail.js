import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEmployee, updateEmployee, changeEmployeeStatus } from '../Redux/actions.js';
import { Redirect } from 'react-router-dom';
import ModifyEmployee from './ModifyEmployee.js';

const EmployeeDetail = ({ match, employees, dispatch, history }) => {
    const [ showModal, setModal ] = useState(false);

    const { id } = match.params;
    const employee = employees[id];
    
    if (!employee) {
        return <Redirect to='/' />
    }
    
    const toggleModal = () => setModal(!showModal);
    
    const handleDelete = () => {
        dispatch(deleteEmployee(id));
        history.push('/employees');
    }

    const handleUpdate = () => {
        toggleModal();
    }

    const handleChangeStatus = () => {
        dispatch(changeEmployeeStatus(id));
    }

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
            <p>Actions:</p>
            <ButtonGroup>
                <Button onClick={handleDelete}>Delete Employee</Button>
                <Button onClick={handleUpdate}>Update Employee</Button>
                <Button onClick={handleChangeStatus}>{employee.Status ? 'Deactivate Employee' : 'Reactivate Employee'}</Button>
            </ButtonGroup>
            <br></br>
            <Link to='/employees'>Back</Link>
            <ModifyEmployee 
                employee={employee} 
                showModal={showModal} 
                toggleModal={toggleModal} 
                action={updateEmployee}
                id={id}
            />
        </div>
    )
}

export default connect((state) => ({employees: state.employees}))(EmployeeDetail);