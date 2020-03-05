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

export function updateEmployee (newInfo, id) {
    return {
        type: 'UPDATE_EMPLOYEE',
        payload: { id, newInfo }
    }
}

export function deleteEmployee (id) {
    return {
        type: 'DELETE_EMPLOYEE',
        payload: id
    }
}

export function changeEmployeeStatus (id) {
    return {
        type: 'CHANGE_STATUS',
        payload: id
    }
}