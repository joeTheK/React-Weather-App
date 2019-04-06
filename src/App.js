import React, { Component } from 'react';
import Week from './components/Week';
import './App.css';

class App extends Component {
  state = {
    current_temp: 54,
    week: [
      {
        id: 1,
        day: "Mon",
        temp_min: 40,
        temp_max: 60, 
      },      
      {
        id: 2,
        day: "Tue",
        temp_min: 49,
        temp_max: 63, 
      },
      {
        id: 3,
        day: "Wed",
        temp_min: 41,
        temp_max: 59, 
      },
      {
        id: 4,
        day: "Thur",
        temp_min: 45,
        temp_max: 67, 
      },
      {
        id: 5,
        day: "Fri",
        temp_min: 45,
        temp_max: 71, 
      },
      {
        id: 6,
        day: "Sat",
        temp_min: 36,
        temp_max: 70, 
      },      
      {
        id: 7,
        day: "sun",
        temp_min: 54,
        temp_max: 61, 
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> Weekly Weather </h1>
        <Week weather={this.state.week} />
      </div>
    );
  }
}

export default App;
