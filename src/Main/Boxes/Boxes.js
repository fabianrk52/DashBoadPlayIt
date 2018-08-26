import React, { Component } from 'react';
import './Boxes.css'
import CountDown from './CountDown/CountDown'
import Favorites from './Favorites/Favorites'
import Income from './Income/Income'
import NumberPlaylist from './NumberPlaylist/NumberPlaylist'
import ProfileViews from './ProfileViews/ProfileViews'
import TicketSold from './TicketSold/TicketSold'
import Trending from './Trending/Trending'
import Calendar from './Calendar/Calendar'
import FeedBack from './FeedBack/FeedBack'

class Main extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="WrapperBoxes">
        <Favorites/>
        <CountDown/>
        <NumberPlaylist/>
        <TicketSold/>
        <Income/>
        <ProfileViews/>
        <Trending/>
        <Calendar/>
        <FeedBack/>
      </div>
    );
  }
}

export default Main;
