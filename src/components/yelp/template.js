import React from 'react';

class Template extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
      name:'',
      rating: '',
      image_url: '',
      price: 0
    }
  }
  render() {
    return(
      <li>
        <a href={ this.state.url }>{ this.state.name }</a>
        <p>The average rating is { this.state.rating } out of 5 and the average cost is { this.state.price } out of 4</p>
        <img src={ this.state.image_url }></img>
      </li>
    );
  }
}

export default Template