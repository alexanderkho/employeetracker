const session = {
    loggedIn: false
}

/*
    --Employee Schema Reference--
    ID - Unique identifier for an employee 
    FirstName - Employee first name 
    MiddleInitial - Employee middle initial 
    LastName - Employee last name 
    DateOfBirth - Employee birthday and year 
    DateOfEmployment - Employee start date 
    Status - boolean for active or inactive
*/

const employeeList = [
    {
        ID: null,
        FirstName: 'Alexander',
        MiddleInitial: 'K',
        LastName: 'Ho',
        DateOfBirth: new Date('June 9 1992'),
        DateOfEmployment: new Date('March 3 2020'),
        Status: true
    },
    {
        ID: null,
        FirstName: 'Rick',
        MiddleInitial: 'S',
        LastName: 'McGuire',
        DateOfBirth: new Date('April 25 1970'),
        DateOfEmployment: new Date('July 21 2018'),
        Status: true
    },
    {
        ID: null,
        FirstName: 'Michael',
        MiddleInitial: 'G',
        LastName: 'Scott',
        DateOfBirth: new Date('February 12 1978'),
        DateOfEmployment: new Date('November 1 2002'),
        Status: false
    },
    {
        ID: null,
        FirstName: 'Isabelle',
        MiddleInitial: 'V',
        LastName: 'Jenkins',
        DateOfBirth: new Date('July 19 1992'),
        DateOfEmployment: new Date('November 17 2017'),
        Status: true
    }
]



employeeList.forEach(employee => {
    //concat employee name with timestamp --> crude unique id
    employee.ID = employee.FirstName + employee.MiddleInitial + employee.LastName + (new Date()).getTime(); 
});

export { employeeList, session }