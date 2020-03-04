import React from 'react';
import EmployeeOverview from './EmployeeOverview.js';

const Employees = ({ employees }) => {
    return (
        <div>
            <h2>Here Are The Employees</h2>
            {employees.map(employee => <EmployeeOverview employee={employee} key={employee.ID} />)}
        </div>
    )
}

export default Employees;
