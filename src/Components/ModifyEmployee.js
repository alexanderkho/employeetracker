import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import moment from 'moment';

const defaultFormVals = {
    FirstName: '',
    MiddleInitial: '',
    LastName: '',
    DateOfBirth: '',
    DateOfEmployment: '',
}

class ModifyEmployee extends Component {
    constructor(props) {
        super(props);
        let formVals
        
        //format dates if an employee is provided, else init to default form vals
        if (props.employee) {
            console.log('uwu')
            props.employee.DateOfBirth = moment(props.employee.DateOfBirth).format('YYYY-MM-DD');
            props.employee.DateOfEmployment = moment(props.employee.DateOfEmployment).format('YYYY-MM-DD');
            formVals = props.employee;
        } else {
            formVals = defaultFormVals;
        }

        this.state = {
            formVals: formVals,
            warningStatus: Object.keys(formVals).reduce((acc, key) => ({...acc, [key]: false}), {})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(this.props.action(this.state.formVals, this.props.id));
        this.props.toggleModal();
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            formVals: {
                ...this.state.formVals,
                [e.target.id]: e.target.value
            }
        });
    }

    render () {
        const { toggleModal, showModal } = this.props;
        const { formVals } = this.state;
        return (
            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Please Enter the Employee Info:</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input type="text" id="FirstName" placeholder="e.g. Duck" value={formVals.FirstName} onChange={this.handleChange}></Input>
                            <p className="text-danger">Oops</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Middle Initial</Label>
                            <Input type="text" id="MiddleInitial" placeholder="e.g. F" value={formVals.MiddleInitial} onChange={this.handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type="text" id="LastName" placeholder="e.g. Johnson" value={formVals.LastName} onChange={this.handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Date of Birth</Label>
                            <Input type="date" id="DateOfBirth" value={formVals.DateOfBirth} onChange={this.handleChange}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Start of Employment</Label>
                            <Input type="date" id="DateOfEmployment" value={formVals.DateOfEmployment} onChange={this.handleChange}></Input>
                        </FormGroup>
                        <Button color="success">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

export default connect(null)(ModifyEmployee);