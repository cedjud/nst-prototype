import React, { Component } from 'react';
import {
  Menu,
  Button,
  Header,
  Divider,
  Form,
  Icon,
  Sidebar
} from 'semantic-ui-react';
import fire from '../fire.js';
import {
  Route,
  Redirect,
  Link } from 'react-router-dom';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      sidebarIsVisible: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="dashboard__wrapper">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={this.state.sidebarIsVisible}
            icon='labeled' vertical>
            <Menu.Item name="">
              Roster
            </Menu.Item>
            <Menu.Item name="">
              Roles & Units
            </Menu.Item>
            <Menu.Item name="">
              Scheduling
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Menu pointing secondary>
              <Menu.Item icon="bars" onClick={() => this.setState({sidebarIsVisible: !this.state.sidebarIsVisible})} />
                {/* <Button content="=" Menu.Item> */}
              <Menu.Item name="Sign out" onClick={() => fire.auth().signOut()} />
            </Menu>

            <h1>Welcome to the App!</h1>
            <p>your username is {this.props.user.email}</p>
            <p>your uid is {this.props.user.uid}</p>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default Dashboard;
