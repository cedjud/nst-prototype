import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import fire from './fire.js';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import './App.css';

const LocalAuth = {
  isAuthenticated: false,
  user: {}
}

/* const Dashboard = (props) => {
  return (
    <div>
      <h1>Welcome to the App!</h1>
      <p>your username is {props.user.email}</p>
      <p>your uid is {props.user.uid}</p>
      <Button content="Sign out" onClick={() => fire.auth().signOut()} />
    </div>
  )
}; */

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userIsLoggedIn: false,
      user: {}
    }

    this.userStatus = fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userIsLoggedIn: true,
          user: user,
        })
      } else {
        this.setState({
          userIsLoggedIn: false,
          user: {},
        })
        console.log('logged out');
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={
            this.state.userIsLoggedIn ?
            () => <Dashboard user={this.state.user}/>
            : Login
          } />
          <Route path="/register" component={Register} />


        </div>
      </Router>
    );
  }
}

export default App;
