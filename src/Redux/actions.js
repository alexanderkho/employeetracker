import { v4 as uuid } from 'uuid';

export function logIn () {
    return {
        type: 'LOG_IN'
    }
}

export function createEmployee (newEmployee) {
    const id = uuid();
    newEmployee.Status = true;
    return {
        type: 'CREATE_EMPLOYEE',
        payload: { id, newEmployee }
    }
}

export function updateEmployee (id, newInfo) {
    return { id, newInfo };
}