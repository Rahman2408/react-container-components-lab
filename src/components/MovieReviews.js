// Code MovieReviews Here
import React from "react";



const MovieReviews = ({ movies }) => ( 
  <div className="review-list">
    {movies.map((movie) => (
      <div className="review">
        <p>{movie.display_title}</p>
      </div>
     ) )}
  </div>
)
MovieReviews.defaultProps = { movies: [] }
export default MovieReviews;