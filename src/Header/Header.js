import React, { Component } from 'react';
import './Header.css'
import logo from '../Images/logo.png'

class Header extends Component {
  constructor(props){
    super(props);

  this.state = {
    data : [
      "Dashboard", "Inbox" 
    ]
  }
  }
  render() {
    return (
      <div>
          <div className="HorizontalList">
            <a href="#"><img src={logo} height="40" alt="Logo"></img></a>
            <div className="List">
              {this.state.data.map((text)=>
              <a>{text}</a>)}
            <span className="liHelp"><a href="#">Help</a></span>
            </div>
        </div> 
        
      </div> 
    );
  }
}

export default Header;
