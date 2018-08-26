import React, { Component } from 'react';
import './List.css'

class List extends Component {
    constructor(props){
        super(props);

    this.state = {
        data : [
            "PlayIt",
            "Notifications",
            "Settings"
        ]
    }
    }
  render() {
    return (
    <div>
        <div className="HorizontalListMain">
            <a href="/">{this.state.data[0]}</a>
            <a href="/Notifications">{this.state.data[1]}</a>
            <a href="/Settings">{this.state.data[2]}</a>
        </div>
    </div>
    );
  }
}

export default List;
