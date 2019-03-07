import React, { Component } from 'react';
import './index.css';


class RacerForm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={this.props.getStandings}>
            <input type="text" name="year" placeholder="Year..." />
            <input type="text" name="season" placeholder="Season..." />
            <input type="submit" value="Get Standings" />
          </form>
        </div>
      </div>
    );
  }
}

export default RacerForm;
