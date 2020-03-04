import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Employees from './Components/Employees';
import EmployeeDetail from './Components/EmployeeDetail.js';
import Login from './Components/Login.js';
import { connect } from 'react-redux';

function App({ employees, session }) {
  return (
    <div>
      <Router>
        <Link to='/employees'>
          <h1>Employee Tracker</h1>
        </Link>
        <Switch>
          <Route exact path='/' component={() => <Redirect to='/employees' />} />
          <Route exact path='/employees' component={() => session.loggedIn ? <Employees employees={employees} /> : <Redirect to='/login' />}/>
          <Route exact path='/employees/:id' component={EmployeeDetail}/>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={() => <b>404 Page Not Found</b>} />
        </Switch>
      </Router>
    </div>
  );
}

export default connect((state) => {
  return {employees: state.employees, session: state.session}
})(App);