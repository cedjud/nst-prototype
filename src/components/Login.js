import React, { Component } from 'react';
import fire from '../fire';

console.log(fire);

class Login extends Component {
  constructor(props){
    super(props);

    this.formSubmit = this.formSubmit.bind(this);
    this.loginFormSubmit = this.loginFormSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();

    const email = e.target.username.value;
    const password = e.target.password.value;
    console.log(email, password);
    // fire.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
      // console.log(error);
    // })
  }

  loginFormSubmit(e) {
    e.preventDefault();

    const email = e.target.loginUsername.value;
    const password = e.target.loginPassword.value;

    console.log(email, password);
    // fire.auth().signInWithEmailAndPassword(email, password).catch(function(error){
      // console.log(error);
    // });
  }

  render() {
    return (
      <div>

        <form onSubmit={this.formSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            className="username"
            name="username"
          />

          <br />

          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            className="password"
            name="password"
          />

          <br />
          <input type="submit" value="Submit" />

        </form>

        <hr />

        <form onSubmit={this.loginFormSubmit}>

          <label htmlFor="loginUsername">Username:</label>
          <input
            id="loginUsername"
            type="text"
            className="login-username"
            name="login-username"
          />

          <br />

          <label htmlFor="loginPassword">Password:</label>
          <input
            id="loginPassword"
            type="password"
            className="login-password"
            name="login-password"
          />

          <br />
          <input type="submit" value="Submit" />
        </form>

      </div>
    );
  }
}

export default Login;
