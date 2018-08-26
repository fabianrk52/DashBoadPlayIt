import React, { Component } from 'react';
import './Trending.css'
import { LineChart, Line, CartesianGrid, Legend } from 'recharts';

class Trending extends Component {
  constructor(props){
    super(props);
  }
  
  
  render() {
    const data = [
      {name: 'Page A', Danny: 4000, Rock: 2400, amt: 2400},
      {name: 'Page B', Danny: 3000, Rock: 1398, amt: 2210},
      {name: 'Page C', Danny: 2000, Rock: 9800, amt: 2290},
      {name: 'Page D', Danny: 2780, Rock: 3908, amt: 2000},
      {name: 'Page E', Danny: 1890, Rock: 4800, amt: 2181},
      {name: 'Page F', Danny: 2390, Rock: 3800, amt: 2500},
      {name: 'Page G', Danny: 3490, Rock: 4300, amt: 2100},
    ];

    return (
        <div className="WrapperTrending">
          <p>Trending</p>
        <div className="Graph">
        <LineChart width={230} height={100} data={data}>
         
          <Line type="monotone" dataKey="Danny" stroke="#d7a11f" />
          <Line type="monotone" dataKey="Rock" stroke="white" />
          <CartesianGrid />
          <Legend align="left"  iconSize="0" layout="vertical"/>
      </LineChart>
        </div>
        
        </div>
    );
  }
}

export default Trending;
