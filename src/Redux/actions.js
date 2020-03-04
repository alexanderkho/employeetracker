export function logIn () {
    return {
        type: 'LOG_IN'
    }
}

export function createEmployee (newEmployee) {
    newEmployee.ID = newEmployee.FirstName + newEmployee.MiddleInitial + newEmployee.LastName + (new Date()).getTime();
    newEmployee.Status = true;
    return {
        type: 'CREATE_EMPLOYEE',
        payload: newEmployee
    }
}

export function updateEmployee (id, newInfo) {
    return { id, newInfo };
}