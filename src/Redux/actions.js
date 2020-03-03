export function createEmployee (newEmployee) {
    return {
        type: 'CREATE_EMPLOYEE',
        payload: newEmployee
    }
}

export function logIn () {
    return {
        type: 'LOG_IN'
    }
}