import React from 'react';
import EmployeeOverview from './EmployeeOverview.js';
import ModifyEmployee from './ModifyEmployee.js';
import { useState, useEffect }from 'react';
import { Button, ButtonGroup, Table } from 'reactstrap';
import { createEmployee } from '../Redux/actions.js';
import Logout from './Logout.js'

const Employees = ({ employees, session }) => {

    const [ showModal, setModal ] = useState(false);
    const [ activeEmployees, setActiveEmployees ] = useState(employees);
    const [ selected, setSelected ] = useState(0);
    const toggleModal = () => setModal(!showModal);

    useEffect(() => {
        if (selected === 0) {
            setActiveEmployees(employees);
        } else {
            const activeEmployees = Object.keys(employees).reduce((acc, key) => (
                employees[key].Status ? {
                    ...acc,
                    [key]: employees[key]
                } : acc
            ), {});
            setActiveEmployees(activeEmployees);
        }
    }, [selected, employees])
    
    return (
        <div>
            <p className="subHeader">Welcome, {session.user}!</p>
            <ButtonGroup>
                <Button color="success" active={ selected === 0 } onClick={() => setSelected(0)}>Show All Employees</Button>
                <Button color="success" active={ selected === 1} onClick={() => setSelected(1)}>Show Active Empyloyees Only</Button>
            </ButtonGroup>
            {
                Object.keys(activeEmployees).length ? 
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(activeEmployees).map(key => <EmployeeOverview employee={activeEmployees[key]} id={key} key={key} />)}
                    </tbody>
                </Table>
                : <p>No Employees Here...</p>
            }
            <Button color="success" onClick={toggleModal}>Add A New Employee</Button>
            <Logout />
            <ModifyEmployee showModal={showModal} toggleModal={toggleModal} action={createEmployee} />
        </div>
    )
}

export default Employees;