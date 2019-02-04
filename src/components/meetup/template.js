import React from 'react';


class Template extends React.Component {

  render() {
    return (
      <div>
        <li>
          <a href={ this.props.data.link }>{ this.props.data.name }</a>
          <p>Hosted by: { this.props.data.host }</p>
          <p>Created on: { this.props.data.creation_date }</p>
          </li>
      </div>
    )
  }
}

export default Template;