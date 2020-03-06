import React, { useState } from 'react';
import { Button, Table, Alert } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteEmployee, updateEmployee, changeEmployeeStatus } from '../Redux/actions.js';
import { Redirect, withRouter } from 'react-router-dom';
import ModifyEmployee from './ModifyEmployee.js';
import Logout from './Logout.js';

const EmployeeDetail = ({ match, employees, dispatch, history }) => {
    const [ showModal, setModal ] = useState(false);
    const [ showWarning, setWarning ] = useState(false);

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
                        <Button color="success" onClick={() => setWarning(true)}>Delete Employee</Button>
                        <Button color="success" className="buttonMarginLeft" onClick={handleUpdate}>Update Employee</Button>
                        <Button color="success" className="buttonMarginLeft" onClick={handleChangeStatus}>
                            {employee.Status ? 'Deactivate Employee' : 'Reactivate Employee'}
                        </Button>
                    <div className="warningMessage">
                        <Alert isOpen={showWarning} color="danger">
                            <p>Are you sure you want to delete this employee? This can not be undone</p>
                            <hr></hr>
                            <Button color="success" onClick={handleDelete}>Confirm</Button>
                            <Button color="danger" className="buttonMarginLeft" onClick={() => setWarning(false)}>Cancel</Button>
                        </Alert>
                    </div>
                </div>
                <Button color="warning"  onClick={() => history.push('/employees')} >Back</Button>
                <Logout/>
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

export default withRouter(connect((state) => ({employees: state.employees}))(EmployeeDetail));