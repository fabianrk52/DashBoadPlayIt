import React, { Component } from 'react';
import './Main.css'
import List from '../Nav/List/List'
import SelectDate from '../Main/Boxes/SelectDate/SelectDate'
import Boxes from './Boxes/Boxes'
import TablePlay from './TablePlay/TablePlay'
class Main extends Component {
  constructor(props){
    super(props);

  this.state = {
    name: "Avner"
  }
  }
  render() {
    return (
      <div>
      <div className="WrapperMain">
      <List/>
      <p className="Name">Hi <b>{this.state.name}</b></p>
      <SelectDate/>
      <Boxes/>
      <TablePlay/>
      </div>
      </div>
    );
  }
}

export default Main;
