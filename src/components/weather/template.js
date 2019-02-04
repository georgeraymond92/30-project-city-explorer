import React from 'react';

class Template extends React.Component {
  render(){
    return (
      <li>
        The forecast for { this.props.data.time } is: { this.props.data.forecast }
      </li>
    );
  }
}



export default Template;