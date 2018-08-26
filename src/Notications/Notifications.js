import React, { Component } from 'react';
import './Notifications.css'
import List from '../Nav/List/List'
import NewPlayits from './NewPlayits/NewPlayits'
import Update from './Updates/Updates'
import Noti from './Noti/Noti'


class Notifications extends Component {
  constructor(props){
    super(props);

  this.state = {
    name: "Avner"
  }
  }
  render() {
    return (
      <div>
      <div className="WrapperNotifications">
      <List/>
      <p className="Name">Hi <b>{this.state.name}</b></p>
      <div>
      <NewPlayits/>
      <Update/>
      <Noti/>

      </div>
      </div>
      </div>
    );
  }
}

export default Notifications;
