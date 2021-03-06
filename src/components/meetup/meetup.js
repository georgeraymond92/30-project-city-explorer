import React from 'react';
import Template from './template';

class Meetup extends React.Component {
 render(){
    let lineItems = []
    for(let i = 0; i < this.props.data.length; i++){
      lineItems.push(<Template key={i} data={this.props.data[i]} />);
    }
   return(
    <section>
      <h3>Results from the Meetup API</h3>
      <ul className="meetups-results">
        {lineItems}
      </ul>
    </section>

   );
  }
}

export default Meetup;