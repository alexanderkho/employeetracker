import React from 'react';
import EmployeeOverview from './EmployeeOverview.js';
import AddEmployee from './AddEmployee.js';
import { useState, useEffect }from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Employees = ({ employees }) => {

    const [ showModal, setModal ] = useState(false);
    const [ activeEmployees, setActiveEmployees ] = useState(employees);
    const [ selected, setSelected ] = useState(0);
    const toggleModal = () => setModal(!showModal);

    useEffect(() => {
        if (selected === 0) {
            setActiveEmployees(employees);
        } else {
            const activeEmployees = employees.filter((employee) => employee.Status);
            setActiveEmployees(activeEmployees);
        }
    }, [selected, employees])
    
    return (
        <div>
            <h2>Welcome!</h2>
            <ButtonGroup>
                <Button color="primary" active={ selected === 0 } onClick={() => setSelected(0)}>Show All Employees</Button>
                <Button color="primary" active={ selected === 1} onClick={() => setSelected(1)}>Show Active Empyloyees Only</Button>
            </ButtonGroup>
            {Object.keys(activeEmployees).map(key => <EmployeeOverview employee={activeEmployees[key]} id={key} key={key} />)}
            <Button onClick={toggleModal}>Add A New Employee</Button>
            <AddEmployee showModal={showModal} toggleModal={toggleModal} />
        </div>
    )
}

export default Employees;