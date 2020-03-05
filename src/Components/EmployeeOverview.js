import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeOverview = ({ employee, id }) => {
    return (
        <tr>
            <td><b>
                {`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName} ${!employee.Status ? '(inactive)' : ''}`}
            </b></td>
            <td>
                {<Link to={{
                    pathname: `/employees/${id}`,
                    state: { employee }  
                }}>
                More Info</Link>}
            </td>
        </tr>
    )
}

export default EmployeeOverview;