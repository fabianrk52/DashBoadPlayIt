import React, { Component } from 'react';
import './Favorites.css'

class Favorites extends Component {
    constructor(props){
        super(props);
    this.state = {
        number: 189,
    }
    }
  render() {
    return (
    <div className="WrapperFavorites">
        <div className="TextFavorites">
            <span>{this.state.number}</span> Favorites
        </div>
    </div>
    );
  }
}

export default Favorites;
