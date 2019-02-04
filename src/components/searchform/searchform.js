import React from 'react';

const SearchForm = (props) => (
  <form id="search-form">
    <label htmlFor="search">Search for a location</label>
    <input type="text" name="search" id="input-search" placeholder="Enter a location here" onChange={props.handleChange} />
    <button type="submit" onClick={props.fetchCityData}>Explore!</button>
  </form>
)

export default SearchForm;