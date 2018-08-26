import React, { Component } from 'react';
import './FeedBack.css'

class FeedBack extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="WrapperFeedBack">
          <span className="TitleFeedback">Host Feedback</span>
          <div className="categories">
            <span>on time </span>
            <span>length </span>
            <span>crowd</span>
            <span>quality</span>
          </div>
          <div className="LineFeedback"></div>
          <div className="numberfeedback">
            <span>2.9</span>
            <span>4.7 </span>
            <span>3.6</span>
            <span className="yellow">2.7</span>
          </div>
          <div className="LineFeedback"></div>
          <div className="references">
            <p>Positive</p>
            <span className="yellow">Negative</span>
            </div>
          
        </div>
    );
  }
}

export default FeedBack;
