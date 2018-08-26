import React, { Component } from 'react';
import './TicketSold.css'

class TicketSold extends Component {
  constructor(props){
    super(props);

    this.state = {
      number: 4500,
    }
  }
  render() {
    return (
        <div className="WrapperTicketSold">
          <div className="Ticket">
          <span className="TicketSold"><b>{this.state.number}</b></span>
          Tickets Sold
          </div>
        </div>
    );
  }
}

export default TicketSold;
