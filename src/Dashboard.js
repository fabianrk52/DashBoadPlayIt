import React, { Component } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'
import './Dashboard.css'

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className="Wrapper">
        <Header/>
        <Main/>
      </div> 
    );
  }
}

export default Dashboard;
