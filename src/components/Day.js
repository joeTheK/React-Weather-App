import React, { Component } from 'react'

export class Day extends Component {
  getStyle = () => {
    let dayOfWeek = (new Date()).getDay();
    return {
      background: '#f4f4f4',
      padding : '10px',
      border: this.props.dailyWeather.id === dayOfWeek ?
      '2px #f00 solid' : 'none',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    const {temp_max, temp_min} = this.props.dailyWeather;
    return (
        <React.Fragment>
            <div style={ this.getStyle() }>
              <p> {this.props.day} </p>
              <p> High: {temp_max} | Low: {temp_min} </p>
            </div>
        </React.Fragment>
    )
  }
}

export default Day
