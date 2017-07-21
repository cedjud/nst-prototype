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

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordsMatch: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    
  }

  render() {
    return (
      <div className="register__wrapper">
        <Segment>
          <Header textAlign="center">Register</Header>

          <Form>

            <Form.Field>
              <label
                htmlFor="username"
              >
                e-mail
              </label>
              <input
                id="username"
                type="email"
                name="username"
                placeholder='your email' />
            </Form.Field>

            <Form.Field>
              <label
                htmlFor="password"
              >
                password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder='your password' />
            </Form.Field>

            <Form.Field>
              <label
               htmlFor="repeatPassword"
              >
                repeat password
              </label>
              <input
                id="repeatePassword"
                type="password"
                name="repeatPassword"
                placeholder='repeat password' />
            </Form.Field>

            <Button
              primary
              fluid={true}
              type={this.handleSubmit}
              // as={Link}
              // to='/dashboard'
            >
              Register
            </Button>

          </Form>
        </Segment>
      </div>
    )
  }
}

export default Register;
