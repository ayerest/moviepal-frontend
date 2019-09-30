import React from "react";
import Movie from "../movieList_components/MovieListItem";

class MovieCollection extends React.Component {

  render(){
    let allMovies = this.props.allMovies
    console.log(this.props.allMovies)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
				{/* {(allMovies.length>0)?
				"MOVIES EXIST"
				:
					"NO MOVIES"
				} */}
    		  {allMovies.map(movie => <Movie handleClick = {this.props.handleClick} key={movie.id} movie={movie}/> )}
    		  Collection of all movies
    		</div>
  	  </div>
  	);
  }

};

export default MovieCollection;