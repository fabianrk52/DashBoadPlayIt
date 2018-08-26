import React, { Component } from 'react';
import './CountDown.css'

class CountDown extends Component {
  constructor(props){
    super(props);
  
    this.state={
      days:"02",
      hours:"07",
      minutes:"26",
      seconds:"05"
    }
  }
  render() {
    return (
        <div className="WrapperCountDown">
          <div className="Counter">
           <span className="NumberCount"><b>{this.state.days}</b></span>
          <span className="lineCountDown"></span>
          <span className="NumberCount"><b>{this.state.hours}</b></span>
          <span className="lineCountDown"></span>
          <span className="NumberCount"><b>{this.state.minutes}</b></span>
          <span className="lineCountDown"></span>
          <span className="NumberCount"><b>{this.state.seconds}</b></span>
          <div className="divSubtitle">
          <span className="Subtitle">Days</span>
          <span className="Subtitle">Hours</span>
          <span className="Subtitle">Minutes</span>
          <span className="Subtitle">Seconds</span>
          </div>
          </div>
          <div className="divDetails">
            <span className="location"><b>The Bonecrusher</b></span>
            <span className="date">August 17, 2007</span>
          </div>
        </div>
    );
  }
}

export default CountDown;
