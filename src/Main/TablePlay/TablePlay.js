import React, { Component } from 'react';
import './TablePlay.css';


class TablePlay extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="TablePlays">
      <table>
        <tr>
          <th>Play</th>
          <th>Date</th> 
          <th className="TableTime">Time</th>
          <th className="TablePlace">Place</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Limouzina Express</td>
          <td>16.08.2007</td> 
          <td>20:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td>Open</td>
          <td>Ticket sold 0</td>
          <td><button><b>Contact Host</b></button></td>
        </tr>
        <tr>
          <td>Limouzina Express</td>
          <td>16.08.2007</td> 
          <td>20:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td className="tdCanceled">Canceled</td>
          <td>Ticket sold 0</td>
        </tr>
        <tr>
          <td>Limouzina Express</td>
          <td>16.08.2007</td> 
          <td>20:30</td>
          <td>Armando Village, William Street 32, London</td>
          <td className="tdConfirm">Confirm</td>
          <td>Ticket sold 0</td>
          <td><button><b>Contact Host</b></button></td>
        </tr>
      </table>
      </div>
        );
  }
}

export default TablePlay;
