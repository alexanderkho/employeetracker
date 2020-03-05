import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux'
import moment from 'moment';

const defaultFormVals = {
    FirstName: '',
    MiddleInitial: '',
    LastName: '',
    DateOfBirth: '',
    DateOfEmployment: '',
}

const validators = {
    FirstName: (v) => (/[a-z]+/i).test(v),
    MiddleInitial: (v) => (/^[a-z]{1}$/i).test(v),
    LastName: (v) => (/[a-z]+/i).test(v),
    DateOfBirth: (d) => moment(d).isBefore(moment().subtract(18, 'year')),
    DateOfEmployment: (d)=> moment(d).isBefore(moment())
}

class ModifyEmployee extends Component {
    constructor(props) {
        super(props);
        let formVals
        
        //format dates if an employee is provided, else init to default form vals
        if (props.employee) {
            props.employee.DateOfBirth = moment(props.employee.DateOfBirth).format('YYYY-MM-DD');
            props.employee.DateOfEmployment = moment(props.employee.DateOfEmployment).format('YYYY-MM-DD');
            formVals = props.employee;
        } else {
            formVals = defaultFormVals;
        }

        this.state = {
            formVals: formVals,
            warningStatus: Object.keys(formVals).reduce((acc, key) => ({...acc, [key]: props.employee ? false : true}), {}),
            displayErrorMessage: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.formIsValid()) {
            this.props.dispatch(this.props.action(this.state.formVals, this.props.id));
            this.props.toggleModal();
        } else {
            this.toggleErrorMessage(true);
        }
    }

    handleChange = (e) => {
        let newWarningStatus = false;
        if (validators[e.target.id](e.target.value) === false) {
            newWarningStatus = true;
        }
        this.setState({
            ...this.state,
            formVals: {
                ...this.state.formVals,
                [e.target.id]: e.target.value
            },
            warningStatus: {
                ...this.state.warningStatus,
                [e.target.id]: newWarningStatus
            }
        });
    }

    formIsValid = () => {
        const { warningStatus } = this.state;
        for (let key in warningStatus) {
            if (warningStatus[key] === true) return false;
        }
        return true;
    }

    toggleErrorMessage = (val) => {
        this.setState({ displayErrorMessage: val });
    }

    render () {
        const { toggleModal, showModal } = this.props;
        const { formVals } = this.state;
        return (
            <Modal isOpen={showModal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Please Enter the Employee Info:</ModalHeader>
                <ModalBody>
                    <Alert
                        color="danger" 
                        isOpen={this.state.displayErrorMessage} 
                        toggle={() => this.toggleErrorMessage(false)}>
                            All Fields Are Required
                    </Alert>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input type="text" id="FirstName" placeholder="e.g. Duck" value={formVals.FirstName} onChange={this.handleChange}></Input>
                            <p className={`text-danger ${this.state.warningStatus.FirstName ? '' : 'hidden'}`}>Required</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Middle Initial</Label>
                            <Input type="text" id="MiddleInitial" placeholder="e.g. F" value={formVals.MiddleInitial} onChange={this.handleChange}></Input>
                            <p className={`text-danger ${this.state.warningStatus.MiddleInitial ? '' : 'hidden'}`}>Invalid Initial</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input type="text" id="LastName" placeholder="e.g. Johnson" value={formVals.LastName} onChange={this.handleChange}></Input>
                            <p className={`text-danger ${this.state.warningStatus.LastName ? '' : 'hidden'}`}>Required</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Date of Birth</Label>
                            <Input type="date" id="DateOfBirth" value={formVals.DateOfBirth} onChange={this.handleChange}></Input>
                            <p className={`text-danger ${this.state.warningStatus.DateOfBirth ? '' : 'hidden'}`}>Invalid Date (Employee Must Be 18 Years Or Older)</p>
                        </FormGroup>
                        <FormGroup>
                            <Label>Start of Employment</Label>
                            <Input type="date" id="DateOfEmployment" value={formVals.DateOfEmployment} onChange={this.handleChange}></Input>
                            <p className={`text-danger ${this.state.warningStatus.DateOfEmployment ? '' : 'hidden'}`}>Invalid Date</p>
                        </FormGroup>
                        <Button color="success">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

export default connect(null)(ModifyEmployee);