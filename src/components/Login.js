import React, { Component } from 'react';
import {
  Segment,
  Button,
  Header,
  Divider,
  Form
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
          <Header textAlign="center">Sign in</Header>
          <Form>
            <Form.Field>
              <label>e-mail</label>
              <input placeholder='your email' />
            </Form.Field>
            <Form.Field>
              <label>password</label>
              <input placeholder='your password' />
            </Form.Field>
            <Button
              primary
              fluid={true}
              as={Link}
              to='/dashboard'
            >
              Sign in
            </Button>
          </Form>
          <Divider horizontal>Or</Divider>
          <Button
            secondary
            fluid={true}
            as={Link}
            to='/register'
          >
            Register
          </Button>
        </Segment>
      </div>
    )
  }
}

export default Login;
