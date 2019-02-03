import React from 'react';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      released_on: '',
      total_votes: '',
      image_url: '',
      popularity: '',
      average_votes: '',
      overview: ''
    }

  }
  render(){
    return (
      <li>
        <p><span>{ this.state.title }</span> was relased on {this.state.released_on }. Out of { this.state.total_votes } total votes, {this.state.title} has an average vote of { this.state.average_votes } and a popularity score of { this.state.popularity }.</p>
        <img src={ this.state.image_url }></img>
        <p>{ this.stateoverview }</p>
      </li>
    )
  }
}

export default Template;

