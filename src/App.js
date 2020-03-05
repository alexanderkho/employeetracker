import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Employees from './Components/Employees';
import EmployeeDetail from './Components/EmployeeDetail.js';
import ChangeLogin from './Components/ChangeLogin.js';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

function App({ employees, session }) {
  return (
    <div className="body">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Router>
              <Link to='/employees'>
                <h1>Employee Tracker</h1>
                <hr></hr>
              </Link>
              <Switch>
                <Route exact path='/' component={() => <Redirect to='/employees' />} />
                <Route exact path='/employees' component={() => session.loggedIn ? <Employees employees={employees} /> : <Redirect to='/login' />}/>
                <Route exact path='/employees/:id' component={EmployeeDetail}/>
                <Route exact path='/login' component={() => <ChangeLogin color="success" action="Log in" />} />
                <Route path='/' component={() => <b>404 Page Not Found</b>} />
              </Switch>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect((state) => {
  return {employees: state.employees, session: state.session}
})(App);