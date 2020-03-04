import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeOverview = ({ employee, id }) => {
    return (
        <div>
            <ul>
                <li><b>
                    {`${employee.FirstName} ${employee.MiddleInitial}. ${employee.LastName} ${!employee.Status ? '(inactive)' : ''}`}
                </b></li>
                <li>
                    {<Link to={{
                        pathname: `/employees/${id}`,
                        state: { employee }  
                    }}>
                    More Info</Link>}
                </li>
            </ul>
        </div>
    )
}

export default EmployeeOverview;