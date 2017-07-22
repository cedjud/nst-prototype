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
    this.state = {
      username: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, password } = this.state;
    console.log(e.target.username.value, e.target.password.value);
    if ( password === '' || username === ''){
      console.log('password or username is empty');
    } else {
      console.log('logged in!!');
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
              type="submit"
            >
              Sign in
            </Button>
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
