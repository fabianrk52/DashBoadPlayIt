import React, { Component } from 'react';
import './Noti.css';


class Noti extends Component {
  constructor(props){
    super(props);

    this.state = {
        data:[
            "Please Update your payment information",
        ]
    }
}


  render(){
    return(
      <div className="WrapperNoti">
          <p>PlayIt Notifications</p>
          <ul>{this.state.data.map((text)=>
              <li>{text}</li>)}
            </ul>
      </div>
        );
  }
}

export default Noti;
