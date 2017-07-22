import React, { Component } from 'react';
import fire from '../fire.js';
import {
  Segment,
  Button,
  Header,
  Form,
  Icon
} from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';

import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      repeatPassword: '',
      isError: false,
      errorMessage: '',
      isRegistered: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, password, repeatPassword } = this.state;
    console.log(username, password);
    if ( password === '' ){
      console.log('password is empty');
      this.setState({
        isError: true,
        errorMessage: 'password is empty',
      });
    } else if (password !== repeatPassword ){
      console.log('passwords dont match');
      this.setState({
        isError: true,
        errorMessage: 'passwords dont match',
      });
    } else {
      fire.auth().createUserWithEmailAndPassword(username, password)
        .catch((error) => {
          console.log(error);
          this.setState({
            isError: true,
            errorMessage: error.message,
          })
        })
        .then((res) => {
          if (res) {
            this.setState({
              isRegistered: true,
            });
          }
        });
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
          { this.state.isRegistered ?
            <div>
              <Header as="h3" color="green">
                <Icon name="checkmark"></Icon>
                <Header.Content>
                  Registered Successfully
                </Header.Content>
              </Header>
              <Button
                as={Link}
                to="/"
                icon="left arrow"
                content="Back to login"
                labelPosition="left"
                fluid={true}
                primary
              />
            </div>
            :
            <Form onSubmit={this.handleSubmit}>
              {this.state.isError ?
                <Header as="h3" color="red">
                  <Icon name="close"></Icon>
                  <Header.Content>
                    {this.state.errorMessage}
                  </Header.Content>
                </Header>
              : null }
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
          }
        </Segment>
      </div>
    )
  }
}

export default Register;
