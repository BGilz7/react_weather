import React, { Component } from 'react';
import './index.css';


class WeatherInfo extends Component {
  convertDeg = num => {
    return ((num - 273.15) * (9/5) + 32).toFixed(2);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          {/* below is an if statement, saying the data exists, then show information, must return one element from statement, which is why we wrapped all 5 h3's in a single div */}
          { this.props.data.name &&
            <div>
              <h3>City: {this.props.data.name}</h3>
              <h3>Country: {this.props.data.sys.country}US</h3>
              <h3>Temperature: {this.convertDeg(this.props.data.main.temp)}&deg;</h3>
              <h3>Humidity {this.props.data.main.humidity}</h3>
              <h3>Description: {this.props.data.weather[0].description}</h3>
            </div>
          }

          {/* Error message will appear if they put in a city that doesn't exist */}
          { this.props.data.cod === '404' &&
            <h3>Error: {this.props.data.message}</h3>
          }
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
