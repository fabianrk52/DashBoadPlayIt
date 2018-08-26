import React, { Component } from 'react';
import './Cancelation.css'

class Cancelation extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
    <div className="WrapperCancelation">
      <div>
          <p>Cancelation Policy</p>
        <select>
            <option>
                Flexible
            </option>
        </select>
      </div>
      <div>
          <p>Communication</p>
          <span className="sms">Send me txt messages</span>
          <input type="checkbox"></input>
      </div>
    </div>
    );
  }
}

export default Cancelation;
