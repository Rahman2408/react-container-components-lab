import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'oRgjy3lP5GZO0h4BWbq5FAABUSUAYihg';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
          + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  
  handleInput = e => {
    this.setState({ searchTerm: e.target.value})
  }
  
  handleSubmit = e => {
    e.preventDefault();
  fetch(`${URL}&query=${this.state.searchTerm}`)
  .then((response) => response.json())
  .then((movies) => this.setState({reviews: movies.results}))
 }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleInput}></input>
        </form>
        <MovieReviews movies={this.state.reviews} />
      </div>
    )
  }
}