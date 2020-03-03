import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Employees from './Components/Employes';
import EmployeeDetail from './Components/EmployeeDetail.js';
import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  return (
    <div>
      <h1>Employee Tracker</h1>
      <Router>
        <Switch>
          <Route exact path='/employees' component={Employees}/>
          <Route exact path='/employees/:id' component={EmployeeDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default connect((state) => {
  return {employees: state.employees}
})(App);

