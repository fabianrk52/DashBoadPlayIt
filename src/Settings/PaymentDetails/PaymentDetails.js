import React, { Component } from 'react';
import './PaymentDetails.css'

class PaymentDetails extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
    <div className="WrapperPaymentDetails">
        
      <div className="details">
          <p>Payment Details</p>
        <table>
          <tr>
            <td>Bank Account</td>
            <td>12345678</td>
          </tr>
          <tr>
            <td>Bank Name</td>
            <td>Discount</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>003 Eilat</td>
          </tr>
          <tr>
            <td>Paypal Account</td>
            <td>Yaniv12345678</td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>
              <select>
                  <option>
                    U$S
                  </option>
              </select>
            </td>
          </tr>
        </table>
      </div>
    </div>
    );
  }
}

export default PaymentDetails;
