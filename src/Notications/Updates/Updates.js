import React, { Component } from 'react';
import './Updates.css';


class Updates extends Component {
  constructor(props){
    super(props);

    this.state = {
        data:[
            "Yaniv Ariz just list a PA for TheBoneCrusher on August 25.07.2007",
            "Yaniv Ariz just list a PA for TheBoneCrusher on August 25.07.2007",
            "Yaniv Ariz just list a PA for TheBoneCrusher on August 25.07.2007"
        ]
    }
}


  render(){
    return(
      <div className="WrapperUpdates">
          <p>Updates</p>
          <ul>{this.state.data.map((text)=>
              <li>{text}</li>)}
            </ul>
      </div>
        );
  }
}

export default Updates;
