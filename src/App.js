import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home.js';
import Users from './Components/Users.js';


function App() {
  return (
    <div>
      <h1>Employee Tracker</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/friendos' component={Users}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
