import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
