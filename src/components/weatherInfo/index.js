import React, { Component } from 'react';
import './index.css';


class WeatherInfo extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>City: Boston</h3>
          <h3>Country: US</h3>
          <h3>Temperature: 38&deg;</h3>
          <h3>Humidity 42%</h3>
          <h3>Description: Cloudy with a chance of meatballs</h3>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
