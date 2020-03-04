import React, { useReducer } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { createEmployee } from '../Redux/actions.js';
import { connect } from 'react-redux'

const formVals = {
    FirstName: '',
    MiddleInitial: '',
    LastName: '',
    DateOfBirth: '',
    DateOfEmployment: ''
}

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}

//TODO: Implement Form Validation
const AddEmployee = ({ toggleModal, showModal, dispatch }) => {

    const [ state, dispatchToForm ] = useReducer(reducer, formVals);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEmployee(state))
    }

    const handleChange = (e) => {
        dispatchToForm({ field: e.target.id, value: e.target.value });
    }

    return (
        <Modal isOpen={showModal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>Please Enter the Employee Info:</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="text" id="FirstName" placeholder="e.g. Duck" value={state.FirstName} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Middle Initial</Label>
                        <Input type="text" id="MiddleInitial" placeholder="e.g. F" value={state.MiddleInitial} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input type="text" id="LastName" placeholder="e.g. Johnson" value={state.LastName} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Date of Birth</Label>
                        <Input type="date" id="DateOfBirth" value={state.DateOfBirth} onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Start of Employment</Label>
                        <Input type="date" id="DateOfEmployment" value={state.DateOfEmployment} onChange={handleChange}></Input>
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default connect(null)(AddEmployee);