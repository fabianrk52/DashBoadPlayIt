import React, { Component } from 'react';
import './ProfileViews.css'

class ProfileViews extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    number:256,
  }
  }
  render() {
    return (
        <div className="WrapperProfileViews">
          <div className="TextProfileViews">
              <span><b>{this.state.number}</b></span>
              Profile Views
          </div>
        </div>
    );
  }
}

export default ProfileViews;
