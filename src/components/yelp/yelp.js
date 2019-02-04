import React from 'react';
import Template from './template';


class Yelp extends React.Component {
  render(){
    let lineItems = []
    for(let i = 0; i < this.props.data.length; i++){
      lineItems.push(<Template data={this.props.data[i]} />);
    }
    return(
      <section className="yelp-container">
        <h3>Results from the Yelp API</h3>
        <ul className="yelp-results">
          {lineItems}
        </ul>
      </section>
    );
  }
}

export default Yelp;