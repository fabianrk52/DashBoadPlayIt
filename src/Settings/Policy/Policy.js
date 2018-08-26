import React, { Component } from 'react';
import './Policy.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.Range;

class Policy extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
    <div className="WrapperPolicy">
      <div>
          <p>Playit Policy</p>
          <span className="price">Ticket Price</span>
          <input type="range" className="range"></input>
      </div>
      <div>
          <span className="prox">Proximity</span>
          <input type="range" className="range"></input>
      </div>
      <div>
            <input type="checkbox" className="checkboxEO"></input>
            <span className="eventonly">Open Event Only</span> 
            <input type="checkbox" className="checkboxEO"></input>
            <span className="eventonly">Close Event Only</span>      
      </div>
    </div>
    );
  }
}

export default Policy;
