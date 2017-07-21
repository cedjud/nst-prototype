import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Login from './components/Login';

import './App.css';

const fakeAuth = {
  isAuthenticated: false,
}

const Dashboard = () => <h1>Welcome to the App!</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
