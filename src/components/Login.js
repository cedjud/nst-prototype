import React, { Component } from 'react';
import {
  Segment,
  Button
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="login__wrapper">
        <Segment>
          <h1>login.js</h1>
          <Button
            primary
            fluid={true}
            as={Link}
            to='/dashboard'
          >
            Sign in
          </Button>
        </Segment>
      </div>
    )
  }
}

export default Login;
