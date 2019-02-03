import React from 'react';
import Template from './template';

class Meetup extends React.Component {
 return(){
   return(
    <section>
      <h3>Results from the Meetup API</h3>
      <ul className="meetups-results"></ul>
    </section>
   );
  }
}

export default Meetup;