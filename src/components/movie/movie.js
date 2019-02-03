import React from 'react';


export default class Movie extends React.Component {
  render(){
    return (
      <section className="movie-container">
        <h3>Results from The Movie DB API</h3>
        <ul className="movies-results"></ul>
      </section>
    );
  }
}






