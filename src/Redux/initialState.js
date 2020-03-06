const session = {
    loggedIn: false,
    user: null
}

const employees = {
    'cb3020e8-f436-4734-8e78-96d8a33baf7d': {
        FirstName: 'Alexander',
        MiddleInitial: 'K',
        LastName: 'Ho',
        DateOfBirth: new Date('June 9 1992'),
        DateOfEmployment: new Date('March 3 2020'),
        Status: true
    },
    'bc3d935b-b3bb-40f8-8d8a-c01d8372fc7a': {
        FirstName: 'Rick',
        MiddleInitial: 'S',
        LastName: 'McGuire',
        DateOfBirth: new Date('April 25 1970'),
        DateOfEmployment: new Date('July 21 2018'),
        Status: true
    },
    '25d78f8c-62b9-4ec9-bd73-6aff9d05a5ec': {
        FirstName: 'Michael',
        MiddleInitial: 'G',
        LastName: 'Scott',
        DateOfBirth: new Date('February 12 1978'),
        DateOfEmployment: new Date('November 1 2002'),
        Status: false
    },
    '1cf24b5e-bbad-4f72-a104-3210da53d1b4': {
        FirstName: 'Isabelle',
        MiddleInitial: 'V',
        LastName: 'Jenkins',
        DateOfBirth: new Date('July 19 1992'),
        DateOfEmployment: new Date('November 17 2017'),
        Status: true
    }
}

export { employees, session }

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