import React from 'react';
import Template from './index';


class Weather extends React.Component {
  // api call
  render() {
    return(
      <section>
        <h3>Results from the Dark Sky API</h3>
        <ul className="weather-results">
        <Template data={this.props.testWeatherSingle} />
        </ul>
      </section>
    );
  }
}

export default Weather;