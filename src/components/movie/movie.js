import React from 'react';
import Template from './template';

class Movie extends React.Component {
  render(){
    let lineItems = [];
    for(let i = 0; i < this.props.data.length; i++){
      lineItems.push(<Template key={i} data={this.props.data[i]} />);
    }
    return (
      <section className="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul className="movies-results">
          {lineItems}
        </ul>
      </section>
    );
  }
}

export default Movie;
