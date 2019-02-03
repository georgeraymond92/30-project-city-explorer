import React from 'react';

class Meetup extends React.Component {
 return(){
   return(
    <section>
    <h3>Results from the Meetup API</h3>
    <ul class="meetups-results"></ul>
  </section>
   );
 }
}



//original handlebar template 
<li>
<a href="{{ link }}">{{ name }}</a>
<p>Hosted by: {{ host }}</p>
<p>Created on: {{ creation_date }}</p>
</li>

//original html 
