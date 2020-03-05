import React, { useState } from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEmployee, updateEmployee, changeEmployeeStatus } from '../Redux/actions.js';
import { Redirect } from 'react-router-dom';
import ModifyEmployee from './ModifyEmployee.js';
import ChangeLogin from './ChangeLogin.js';

const EmployeeDetail = ({ match, employees, dispatch, history }) => {
    const [ showModal, setModal ] = useState(false);

    const { id } = match.params;
    const employee = employees[id];
    
    //handle edge case where a user tries to access an employee page that was created in another browser tab/session
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
            <p className="subHeader">Employee Details</p>
            <Table striped>
                <tbody>
                    <tr>
                        <td>Employee ID</td> 
                        <td>{id}</td>
                    </tr>
                    <tr>
                        <td>Name</td> 
                        <td>{`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName}`}</td>
                    </tr>
                    <tr>
                        <td>DOB</td> 
                        <td>{moment(employee.DateOfBirth).format('MMMM Do YYYY')}</td>
                    </tr>
                    <tr>
                        <td>Start of Employment</td> 
                        <td>{moment(employee.DateOfEmployment).format('MMMM Do YYYY')}</td>
                    </tr>
                    <tr>
                        <td>Status</td> 
                        <td>{employee.Status ? 'Active' : 'Inactive'}</td>
                    </tr>
                </tbody>
            </Table>
                <div className="employeeActions">
                    <p>Actions:</p>
                    <ButtonGroup >
                        <Button color="success" onClick={handleDelete}>Delete Employee</Button>
                        <Button color="success" onClick={handleUpdate}>Update Employee</Button>
                        <Button color="success" onClick={handleChangeStatus}>{employee.Status ? 'Deactivate Employee' : 'Reactivate Employee'}</Button>
                    </ButtonGroup>
                </div>
                <Button color="warning"  onClick={() => history.push('/employees')} className="buttonNav">Back</Button>
                <ChangeLogin color="warning" action="Log Out" className="logout buttonNav" />
            <ModifyEmployee 
                employee={{ ...employee}} 
                showModal={showModal} 
                toggleModal={toggleModal} 
                action={updateEmployee}
                id={id}
            />
        </div>
    )
}

export default connect((state) => ({employees: state.employees}))(EmployeeDetail);