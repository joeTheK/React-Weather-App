import React, { Component } from 'react';
import Day from './Day';

export class Week extends Component {
  render() {
    return this.props.weather.map((weather) => (
      <Day day={weather.day} dailyWeather={weather} />
  ));
  }
}



export default Week
