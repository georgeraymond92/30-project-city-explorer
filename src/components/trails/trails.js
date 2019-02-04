import React from 'react';
import Template from './template';


class Trails extends React.Component {
  render() {
    let lineItems = [];
    let dataArrayLength = this.props.data.length;
    for(let i = 0; i < dataArrayLength; i++){
      lineItems.push(<Template key={i} data={this.props.data[i]} />);
    }

    return(
    <section>
      <h3>Results from the Hiking Project API</h3>
      <ul className="trails-results">
        {lineItems}
      </ul>
    </section>
    );
  }
}

export default Trails;
