import React from "react";
import MovieListItem from "../movieList_components/MovieListItem";
// import Movie from "../movieList_components/MovieListItem";

class MovieCollection extends React.Component {

  render(){
    let allMovies = this.props.allMovies
	// console.log(this.props.allMovies)
	
  	return (
  	  <div className="ui one column grid">
    		<div className="row">
				List clickable movies below
    		  {allMovies.map(movie => 
			  <MovieListItem handleClick = {this.props.handleClick} key={movie.id} movie={movie}/> )}
    		</div>
  	  </div>
  	);
  }

};

export default MovieCollection;