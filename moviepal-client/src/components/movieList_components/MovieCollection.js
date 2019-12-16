import React from "react";
// import Movie from "../movieList_components/MovieListItem";
import MovieDetails from "../movieList_components/MovieDetails"
import MovieListItem from "../movieList_components/MovieListItem";

class MovieCollection extends React.Component {
	constructor(props) {
		super(props)
	}

	// this function should be able to take the user's list of movies and render it as moviedetails cards
	// whether or not a search term is entered
	movieListRenderer = () => {
		if (this.props.allMovies.length > 0) {
			if (this.props.searchTerm === "") {
				return this.props.allMovies.map((movie, index) => {
					return (
						<div>
							<MovieListItem handleClick={this.props.handleClick} key={movie.id} movie={movie} />
							{/* <MovieDetails user={this.props.user} movie={movie} key={index} /> */}
						</div>
					)
				})
			} else {
				let filteredList = this.props.allMovies.filter(movie => {
					let term = this.props.searchTerm
					let regex = new RegExp(term, "ig")
					
					// let titleWords = movie.title.split(" ").filter(word => word.toLowerCase() === term.toLowerCase())
					let titleWords = movie.title.split(" ").filter(word => word.toLowerCase().match(regex))

					// let summaryWords = movie.summary.split(" ").filter(word => word.toLowerCase() === term.toLowerCase())
					let summaryWords = movie.summary.split(" ").filter(word => word.toLowerCase().match(regex))
					// debugger
					return titleWords.length > 0 || summaryWords.length > 0
				})
				if (filteredList.length > 0) {
					return filteredList.map((movie, index) => {
						return (
							<div>
								<MovieListItem handleClick={this.props.handleClick} key={movie.id} movie={movie} />
								{/* <MovieDetails user={this.props.user} movie={movie} key={movie.id} /> */}
							</div>
						)
					})
				}
			}
		} else {
			return null
		}
	}


	render(){
		let allMovies = this.props.allMovies
		
		return (
		<div className="ui one column grid">
				<div className="row">
					List clickable movies below
					{this.movieListRenderer()}
				{/* {allMovies.map(movie => 
				<MovieListItem handleClick = {this.props.handleClick} key={movie.id} movie={movie}/> )} */}
				</div>
		</div>
		);
	}

};

export default MovieCollection;