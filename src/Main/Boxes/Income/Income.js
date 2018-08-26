import React, { Component } from 'react';
import './Income.css'

class Income extends Component {
  constructor(props){
    super(props);

    this.state = {
      income: "47,000",
    }
  }
  render() {
    return (
        <div className="WrapperIncome">
          <div className="Inc">
          <span className="Income"><b>{this.state.income}</b></span>
          Income
          </div>
        </div>
    );
  }
}

export default Income;
