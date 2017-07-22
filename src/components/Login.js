import React, { Component } from 'react';
import {
  Segment,
  Button,
  Header,
  Divider,
  Form,
  Icon
} from 'semantic-ui-react';
import fire from '../fire.js';
import { Redirect, Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      isError: false,
      errorMessage: '',
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, password } = this.state;
    if ( password === '' || username === ''){
      this.setState({
        isError: true,
        errorMessage: 'Password or username is empty',
      })
    } else {
      fire.auth().signInWithEmailAndPassword(username, password)
      .catch((error) => {
        this.setState({
          isError: true,
          errorMessage: error.message
        })
      })
    }
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="login__wrapper">
        <Segment>
          <Header textAlign="center">Sign in</Header>
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
                placeholder='your email'
              />
            </Form.Field>

            <Form.Field>
              <label
                htmlFor="password"
              >password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={this.handleInputChange}
                value={this.state.password}
                placeholder='your password'
              />
            </Form.Field>

            <Button
              primary
              fluid={true}
              content="Sign in"
              type="submit"
            />
          </Form>
          <Divider horizontal>Or</Divider>
          <Button
            secondary
            fluid={true}
            as={Link}
            to="/register"
          >
            Register
          </Button>
        </Segment>
      </div>
    )
  }
}

export default Login;
