import React, { Component } from 'react';
import './NumberPlaylist.css'

class NumberPlaylist extends Component {
  constructor(props){
    super(props);
  
  this.state = {
    number:139,
  }

  }
  render() {
    return (
        <div className="WrapperNumberPlaylist">
          <div className="NumberPlaylist">
          <span className="NumberPlaylist"><b>{this.state.number}</b></span>
          Number of Playlist
          </div>
        </div>
    );
  }
}

export default NumberPlaylist;
