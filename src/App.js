import React from 'react';
import './App.css';
import Superagent from 'superagent';
import Movie from './components/movie';
import Meetup from './components/meetup';
import Weather from './components/weather';
import Trails from './components/trails';
import Yelp from './components/yelp';
import Map from './components/map';
import Header from './components/header';
import Footer from './components/footer';
import SearchForm from './components/searchform';
import ResultString from './components/resultstring';


const __API_URL__ = 'https://city-explorer-backend.herokuapp.com';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      movies: [],
      trails: [],
      yelp: [],
      meetups: [],
      display: 'hide',
      location: {},
    }
  }
  
  fetchCityData = (e) => {
    e.preventDefault();
    let url = `${__API_URL__}/location`;
    Superagent.get(url)
      .query({data: this.state.searchQuery})
      .send()
      .then( location => {
        this.setState({location: location.body});
        this.setState({formatted_query: location.body.formatted_query});
        this.getResource('weather', location.body);
        this.getResource('movies', location.body);
        this.getResource('yelp', location.body);
        this.getResource('meetups', location.body);
        this.getResource('trails', location.body);
        this.setState({display: ''});
      })
      .catch(err => {
        console.error(err);
      });
  }

  getResource(resource, location) {
    let url = `${__API_URL__}/${resource}`;
    Superagent.get(url)
      .query({data: location})
      .then(result => {
        this.setState({
          [resource]: result.body,
        });

      })
  }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  render() {

    return (
      <>
        <Header />
        <main>

          <SearchForm fetchCityData={this.fetchCityData} handleChange={this.handleChange} />

          <Map location={this.state.location} display={this.state.display} />

          <ResultString location={this.state.formatted_query} display={this.state.display}/>
          
          <section className="error-container"></section>
          
          <div className={`column-container ${this.state.display}`}>
            <Weather data={this.state.weather}/>
            <Yelp data={this.state.yelp} />
            <Meetup data={this.state.meetups} />
            <Movie data={this.state.movies} />
            <Trails data={this.state.trails} />
          </div>

        </main>
        <Footer />
      </>

    );
  }
}


export default App;