import React from 'react';


class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      host: '',
      creation_date: ''
    }
  }
  render() {
    return (
      <div>
        <li>
          <a href={ this.state.link }>{ this.state.name }</a>
          <p>Hosted by: { this.state.host }</p>
          <p>Created on: { this.state.creation_date }</p>
          </li>
      </div>
    )
  }
}

export default Template;