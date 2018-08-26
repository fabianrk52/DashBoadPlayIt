import React, { Component } from 'react';
import './Settings.css'
import List from '../Nav/List/List'
import PersonalInfo from './PersonalInfo/PersonalInfo'
import PaymentDetails from './PaymentDetails/PaymentDetails'
import Cancelation from './Cancelation/Cancelation'
import Policy from './Policy/Policy';


class Settings extends Component {
  constructor(props){
    super(props);

  this.state = {
    name: "Avner"
  }
  }
  render() {
    return (
      <div>
      <div className="WrapperSettings">
      <List/>
      <p className="Name">Hi <b>{this.state.name}</b></p>
      <PersonalInfo/>
      <PaymentDetails/>
      <Cancelation/>
      <Policy/>
      </div> 
      </div>
    );
  }
}

export default Settings;
