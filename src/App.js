import React, { Component } from 'react';
import fire from './fire.js'
import Calendar from './components/Calendar';
import './App.css';
import { Button } from 'office-ui-fabric-react/lib/Button';

console.log(fire);

const users = ['Alice', 'Bob', 'Charlie'];

class UserSelector extends Component {
  constructor(props){
    super(props);
    this.state = {
      value : props.users[0]
    }
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }
  handleUserSelect(e){
    console.log(e.target.value);
    this.setState({
      value : e.target.value
    });
    this.props.onUserSelect(e.target.value);
  }
  render(){
    let users = this.props.users.map((user, index) => {
      return <option key={index}>{user}</option>
     });
    return (
      <select
        value={this.state.value}
        onChange={this.handleUserSelect}
      >
        {users}
      </select>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: false,
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user){
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div>
        {/* <UserSelector users={users} onUserSelect={this.setUser}/> */}
        <br />
        <Calendar/>
      </div>
    );
  }
}

export default App;
