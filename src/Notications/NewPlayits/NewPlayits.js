import React, { Component } from 'react';
import './NewPlayits.css';


class NewPlayits extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    data: [
      ["Date","New Playits","Time","Location","Play"],
      ["25.08.2007","Avner Hodorov","23:30","Armando Village, William Street 32, London", "Avner Hodorov","3 hours left to confirm","Confirm","Decline"],
    ]
  }
  }

  

  render() {
    return(
      <div className="WrapperNewPlayits">
          <p>New Playits</p>
      <table>
        <div className="table">
        <tr>
          <th>Date</th>
          <th>New Playits</th> 
          <th>Time</th>
          <th>Location</th>
          <th>Play</th>
        </tr>
        <tr>
          <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a className="confirm">Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        <tr>
        <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        <tr>
        <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
          <tr>
          <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        <tr>
        <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        <tr>
        <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        <tr>
        <td>25.08.2007</td>
          <td>Avner Hodorov</td> 
          <td>23:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Avner Hodorov</td>
          <td>3 hours left to confirm</td>
          <td><a>Confirm</a></td>
          <td><a>Decline</a></td>
        </tr>
        </div>
      </table>
      </div>
        );
  }
}

export default NewPlayits;
