import React, { Component } from 'react';
import './SelectDate.css'

class SelectDate extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="WrapperSelectDate">
          From: <span className="DateYellow">August 13 <b>2016</b></span>
          <span className="Date">From: <span className="DateYellow">August 16 <b>2016</b></span></span>
        </div>
    );
  }
}

export default SelectDate;
