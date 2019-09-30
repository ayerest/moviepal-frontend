import React from "react";
import MovieCollection from '../components/movieList_components/MovieCollection'
import MovieDetails from '../components/movieList_components/MovieDetails'

class List extends React.Component {
    

    state = {
        displayAllMovies: true,
        movie: "",
        // allMovies: this.props.allMovies  
    }

    displayOneMovie = (movie) => {
        this.setState({
            displayAllMovies: false,
            movie: movie
        })
    }

    render(){
        let allMovies = this.props.allMovies.filter((movie) => {
            return movie.title.indexOf(this.props.search) != -1;
        })
        return(
            <div>
                
                <input onChange = {this.props.handleChange} placeholder = "Search Your Movies" />
                <MovieCollection allMovies = {allMovies} handleClick = {this.displayOneMovie} />

                <MovieDetails displayOneMovie = {this.displayOneMovie} handleClick = {this.props.handleClick} movie= {this.state.movie} 
                />
            </div>
        )}


}

export default List;