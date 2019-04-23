import React, { Component } from 'react'

export class Day extends Component {

  render() {
    const {temp_max, temp_min} = this.props.dailyWeather;
    return (
          <div className="card">
            <h1 id="dayOfWeek"> {this.props.day} </h1>
            <p> High: {temp_max} | Low: {temp_min} </p>
          </div>
    )
  }
}

export default Day
