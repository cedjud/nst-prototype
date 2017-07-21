import React, { Component } from 'react';
import fire from './fire.js'
import Calendar from './components/Calendar';
import './App.css';
import { Button } from 'office-ui-fabric-react/lib/Button';

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
    this.firebaseTest = this.firebaseTest.bind(this);
    const fetchedValue = fire.database().ref('massages').once('value').then((val) => {
      let result = val.val();
      console.log(result.message);
    });
  }

  setUser(user){
    this.setState({
      user: user
    });
  }

  firebaseTest() {
    // fire.database().ref('massages').set({ message: `let's try a better message` });
    fire.database().ref('massages').push({ message: `let's try a better message` });
  }

  render() {
    return (
      <div>
        <button onClick={this.firebaseTest}>click me!</button>
        {/* <UserSelector users={users} onUserSelect={this.setUser}/> */}
        <br />
        <Calendar/>
      </div>
    );
  }
}

export default App;
