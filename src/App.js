import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/movie';
// import MovieItem from './components/movie/movie';
import Superagent from 'superagent';

// react scripts, how to do Aliases
import {hostname} from './utilities'

class App extends React.Component {

 static __API_URL__ = '';

 state={}

  fetchCityData = (e) => {
    e.preventDefault();
    // let searchQuery = $('#input-search').val();

  
    let url = `${this.state.__API_URL__}/location`;
    Superagent.get(url)
      .query({data: this.state.searchQuery})
      .send()
      .then( res => {
        // code here
      })
      .catch(console.error);
  }
  //   $.ajax({
  //     // url: `${this.state.__API_URL__}/location`,
  //     // method: 'GET',
  //     // data: {data: searchQuery}
  //   })
  //     .then(location => {
  //       displayMap(location);
  //       getResource('weather', location);
  //       getResource('movies', location);
  //       getResource('yelp', location);
  //       getResource('meetups', location);
  //       getResource('trails', location);
  //     })
  //     .catch(error => {
  //       compileTemplate([error], 'error-container', 'error-template');
  //       $('#map').addclassName('hide');
  //       $('section, div').addclassName('hide');
  //     });
  // }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
    console.log('something was typed');
  }

  render() {
    return (
      <>
        <header>
          <h1>City Explorer</h1>
          <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
        </header>
        <main>


        <form id="search-form">
          <label for="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" onChange={this.handleChange} />
          <button type="submit" onClick={this.fetchCityData}>Explore!</button>
        </form>

        <img id="map" className="hide" src="" alt="Map of search query" />
        <h2 className="query-placeholder"></h2>
        
        <section className="error-container"></section>
        
        <div className="column-container hide">
          <section>
            <h3>Results from the Dark Sky API</h3>
            <ul className="weather-results"></ul>
          </section>
          
          <section className="yelp-container">
            <h3>Results from the Yelp API</h3>
            <ul className="yelp-results"></ul>
          </section>
          
          <section>
            <h3>Results from the Meetup API</h3>
            <ul className="meetups-results"></ul>
          </section>
          
          <section className="movie-container">
            <h3>Results from The Movie DB API</h3>
            <ul className="movies-results"></ul>
          </section>
          
          <section>
            <h3>Results from the Hiking Project API</h3>
            <ul className="trails-results"></ul>
          </section>
        </div>
      </main>
      <footer>
        <Movie />
      </footer>
      <Movie />
      </>

    );
  }
}

export default App;
