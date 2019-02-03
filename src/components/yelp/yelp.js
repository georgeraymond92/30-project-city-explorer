import React from 'react';
import Template from './template';


class Yelp extends React.Component {
  render(){
    return(
      <section className="yelp-container">
        <h3>Results from the Yelp API</h3>
        <ul className="yelp-results"></ul>
      </section>
    );
  }
}

export default Yelp;