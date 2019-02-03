import React from 'react';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      trail_url: '',
      name: '',
      location: '',
      length: '',
      condition_date: '',
      condition_time: '',
      conditions: '',
      stars: '',
      star_votes: '',
      summary: ''
    }

  }
  render(){
    return (
      <li>
        <p>Hike Name: <a href={this.state.trail_url}>{this.state.name}</a>, Location: {this.state.location}, Distance: {this.state.length} miles</p>
        <p>On {this.state.condition_date} at {this.state.condition_time}, trail conditions were reported as: {this.state.conditions}</p>
        <p>This trail has a rating of {this.state.stars} stars (out of {this.state.star_votes} votes)</p>
        <p>{this.statesummary}</p>
      </li>
    )
  }
}

export default Template;