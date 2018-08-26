import React, { Component } from 'react';
import style from './Calendar.css'

class Calendar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="WrapperCalendar">
          <div className="Calendar">
            <ul class="weekdays">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>
            <ul class="days"> 
              <li></li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li><span class="active">16</span></li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li><span class="active">24</span></li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li><span class="active">29</span></li>
              <li>30</li>
              <li>31</li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
            </div> 
        </div>
    );
  }
}

export default Calendar;
