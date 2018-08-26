import React, { Component } from 'react';
import './PersonalInfo.css'

class PersonalInfo extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
    <div className="WrapperPersonalInfo">
        <p>Personal Contact Info</p>
      <div className="ContacInfo">
        <table>
          <tr>
            <td>Full Name</td>
            <td>Avner Hodorov</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>123456789</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>a@a.com</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>Arav mimon, Holon, Israel</td>
          </tr>
          <td></td>
          
          <tr>
          </tr>
        </table>
      </div>
    </div>
    );
  }
}

export default PersonalInfo;
