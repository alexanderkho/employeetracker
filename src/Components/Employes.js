import React from 'react';
import EmployeeOverview from './EmployeeOverview.js';
import AddEmployee from './AddEmployee.js';
import { useState }from 'react';
import { Button } from 'reactstrap';

const Employees = ({ employees }) => {

    const [ showModal, setModal ] = useState(false);

    const toggleModal = () => setModal(!showModal);
    
    return (
        <div>
            <h2>Here Are The Employees</h2>
            {/* TODO: implement radio buttons toggle active-only/all employees */}
            {employees.map(employee => <EmployeeOverview employee={employee} key={employee.ID} />)}
            <Button onClick={toggleModal}>Add A New Employee</Button>
            <AddEmployee showModal={showModal} toggleModal={toggleModal} />
        </div>
    )
}

export default Employees;