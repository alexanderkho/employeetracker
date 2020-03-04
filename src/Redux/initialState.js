import { v4 as uuid } from 'uuid';

const session = {
    loggedIn: false
}

const employeeList = [
    {
        FirstName: 'Alexander',
        MiddleInitial: 'K',
        LastName: 'Ho',
        DateOfBirth: new Date('June 9 1992'),
        DateOfEmployment: new Date('March 3 2020'),
        Status: true
    },
    {
        FirstName: 'Rick',
        MiddleInitial: 'S',
        LastName: 'McGuire',
        DateOfBirth: new Date('April 25 1970'),
        DateOfEmployment: new Date('July 21 2018'),
        Status: true
    },
    {
        FirstName: 'Michael',
        MiddleInitial: 'G',
        LastName: 'Scott',
        DateOfBirth: new Date('February 12 1978'),
        DateOfEmployment: new Date('November 1 2002'),
        Status: false
    },
    {
        FirstName: 'Isabelle',
        MiddleInitial: 'V',
        LastName: 'Jenkins',
        DateOfBirth: new Date('July 19 1992'),
        DateOfEmployment: new Date('November 17 2017'),
        Status: true
    }
]

//generate random uuid's and populate employees object with id/employee pairs
const ids = [0, 1, 2, 3].map(() => uuid());
const employees = {};
ids.forEach((id, i) => employees[id] = employeeList[i]);

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