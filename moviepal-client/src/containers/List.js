import React from "react";
import MovieCollection from '../components/movieList_components/MovieCollection'
import MovieDetails from '../components/movieList_components/MovieDetails'

class List extends React.Component {
    

    state = {
        displayAllMovies: true,
        movie: "",
        allMovies: this.props.allMovies
        
    }

    displayOneMovie = (movie) => {
        this.setState({
            displayAllMovies: false,
            movie: movie
        })
        console.log(this.props.allMovies)
    }

    render(){
        return(
            <div>
                
                <input onChange = {this.props.handleChange} placeholder = "Search Your Movies" />
                <MovieCollection allMovies = {this.allMovies} handleClick = {this.props.handleClick} />

                <MovieDetails displayOneMovie = {this.displayOneMovie} onClick = {this.props.onClick} movie= {this.state.movie} 
                />
            </div>
        )}


}

export default List;