import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Superagent from 'superagent';

import Movie from './components/movie';
import Meetup from './components/meetup';
import Weather from './components/weather';
import Trails from './components/trails';
import Yelp from './components/yelp';
import util from 'util';

// react scripts, how to do Aliases
import {hostname} from './utilities'

const ResultString = (props) => {
  console.log('rendering the result string, props.formatted_query', props.formatted_query);
  console.log('rendering the result string, props', props);
  return (<h2 className="query-placeholder">Here are the results for {props.location} {props.test}</h2>);
}

const __API_URL__ = 'https://city-explorer-backend.herokuapp.com';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      movies: [],
      trails: [],
      yelp: [],
      meetups: []

    }
  }

  fetchCityData = (e) => {
    e.preventDefault();
    let url = `${__API_URL__}/location`;
    console.log({url});
    Superagent.get(url)
      .query({data: this.state.searchQuery})
      .send()
      .then( location => {
        console.log('results 🍇',location.body);
        
        this.setState({formatted_query: location.body.formatted_query});

        // displayMap(location);
        this.getResource('weather', location.body);
        this.getResource('movies', location.body);
        this.getResource('yelp', location.body);
        this.getResource('meetups', location.body);
        this.getResource('trails', location.body);
      })
      .catch(err => {
        console.error(err);
      })
      // .catch(error => {
      //   compileTemplate([error], 'error-container', 'error-template');
      //   $('#map').addclassName('hide');
      //   $('section, div').addclassName('hide');
      // });

  }

  getResource(resource, location) {
    let url = `${__API_URL__}/${resource}`;
    Superagent.get(url)
      .query({data: location})
      .then(result => {
        console.log(` 🧨  ${util.inspect(result.body,{depth:10})}`);
        console.log(resource);
        this.setState({
          [resource]: result.body,
        });



        // compileTemplate(result, `${resource}-results`, `${resource}-results-template`);
        // <Template typeOfData="trails-results" typeOfData="trails-results"/>
      })
  }

  // displayMap(location) {
  //   $('.query-placeholder').text(`Here are the results for ${location.formatted_query}`);

  //   $('#map').removeClass('hide');
  //   $('section, div').removeClass('hide');

  //   $('#map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  //   &key=AIzaSyDp0Caae9rkHUHwERAFzs6WN4_MuphTimk`)
  // }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
    console.log('something was typed');
  }

  render() {
    // if(!this.state.weatherdata)
    //   return null;



    return (
      <>
        <header>
          <h1>City Explorer</h1>
          <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
        </header>
        <main>


        <form id="search-form">
          <label htmlFor="search">Search for a location</label>
          <input type="text" name="search" id="input-search" placeholder="Enter a location here" onChange={this.handleChange} />
          <button type="submit" onClick={this.fetchCityData}>Explore!</button>
        </form>

        <img id="map" className="hide" src="" alt="Map of search query" />
        <ResultString location={this.state.formatted_query} test={this.state.searchQuery} />

        
        <section className="error-container"></section>
        
        <div className="column-container">
        <Weather data={this.state.weather}/>
        <Yelp data={this.state.yelp} />
        <Meetup data={this.state.meetups} />
        <Movie data={this.state.movies} />
        <Trails data={this.state.trails} />

        </div>
      </main>
      <footer>
      </footer>
      </>

    );
  }
}






// function compileTemplate(input, sectionClass, templateId) {
//   $(`.${sectionClass}`).empty();

//   let template = Handlebars.compile($(`#${templateId}`).text());

//   input.forEach(element => {
//     $(`.${sectionClass}`).append(template(element));
//   })
// }

export default App;
