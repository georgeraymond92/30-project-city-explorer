import React from 'react';

class Template extends React.Component {
  render(){
    console.log(this.props)
    return (
      <li>
        <p><span>{ this.props.data.title }</span> was relased on {this.props.data.released_on }. Out of { this.props.data.total_votes } total votes, {this.props.data.title} has an average vote of { this.props.data.average_votes } and a popularity score of { this.props.data.popularity }.</p>
        <img src={ this.props.data.image_url }></img>
        <p>{ this.props.data.overview }</p>
      </li>
    )
  }
}

export default Template;

