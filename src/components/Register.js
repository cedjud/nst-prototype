import React, { Component } from 'react';
import {
  Segment,
  Button,
  Header,
  Form
} from 'semantic-ui-react';

import { Link } from 'react-router-dom'
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, password, repeatPassword } = this.state;

    if ( password === '' ){
      console.log('password is empty');
    } else if (password !== repeatPassword ){
      console.log('passwords dont match');
    } else {
      console.log('registered!!');
    }
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="registration__wrapper">
        <Segment>
          <Header textAlign="center">Register</Header>

          <Form onSubmit={this.handleSubmit}>

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
                onChange={this.handleInputChange}
                value={this.state.username}
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
                onChange={this.handleInputChange}
                value={this.state.password}
                placeholder='your password' />
            </Form.Field>

            <Form.Field>
              <label
               htmlFor="repeatPassword"
              >
                repeat password
              </label>
              <input
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                onChange={this.handleInputChange}
                value={this.state.repeatPassword}
                placeholder='repeat password' />
            </Form.Field>

            <Button
              primary
              fluid={true}
              type="submit"
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
