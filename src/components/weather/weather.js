import React from 'react';
import Template from './template';
import util from 'util'

class Weather extends React.Component {

  render() {
    let lineItems = []
    for(let i = 0; i < this.props.data.length; i++){
      lineItems.push(<Template data={this.props.data[i]} />);
    }
    return(
      <section>
        <h3>Results from the Dark Sky API</h3>
        <ul className="weather-results">
        {lineItems}
        </ul>
      </section>
    );
  }
}

export default Weather;