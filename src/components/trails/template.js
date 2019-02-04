import React from 'react';

class Template extends React.Component {

  render(){
    return (
      <li>
        <p>Hike Name: <a href={this.props.data.trail_url}>{this.props.data.name}</a>, Location: {this.props.data.location}, Distance: {this.props.data.length} miles</p>
        <p>On {this.props.data.condition_date} at {this.props.data.condition_time}, trail conditions were reported as: {this.props.data.conditions}</p>
        <p>This trail has a rating of {this.props.data.stars} stars (out of {this.props.data.star_votes} votes)</p>
        <p>{this.props.datasummary}</p>
      </li>
    )
  }
}

export default Template;