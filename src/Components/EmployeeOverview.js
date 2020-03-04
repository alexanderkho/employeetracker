import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeOverview = ({ employee }) => {
    return (
        <div>
            <ul>
                <li><b>
                    {`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName} ${!employee.Status ? '(inactive)' : null}`}
                </b></li>
                <li>
                    {<Link to={{
                        pathname: `/employees/${employee.ID}`,
                        state: { employee: employee }  
                    }}>
                    More Info</Link>}
                </li>
            </ul>
        </div>
    )
}

export default EmployeeOverview;