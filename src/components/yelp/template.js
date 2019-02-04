import React from 'react';

class Template extends React.Component {

  render() {
    return(
      <li>
        <a href={ this.props.data.url }>{ this.props.data.name }</a>
        <p>The average rating is { this.props.data.rating } out of 5 and the average cost is { this.props.data.price } out of 4</p>
        <img src={ this.props.data.image_url } alt="yelp review"></img>
      </li>
    );
  }
}

export default Template