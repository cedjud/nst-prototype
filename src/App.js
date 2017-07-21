import React, { Component } from 'react';
import fire from './fire';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

import Login from './components/Login';

import './App.css';

// const App = () => <h1></Login</h1>;

// const Login = () => <h1>Login</h1>;

class MyRouter extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>App</Link>
          </nav>
          <hr />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default MyRouter;
