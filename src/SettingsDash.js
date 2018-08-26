import React, { Component } from 'react';
import Header from './Header/Header'
import Settings from './Settings/Settings'
import './Dashboard.css'


class SettingsDash extends Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div className="Wrapper">
        <Header/>
        <Settings/>
      </div> 
    );
  }
}

export default SettingsDash;
