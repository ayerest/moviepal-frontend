import React from "react";
import MovieCollection from '../components/movieList_components/MovieCollection'
import MovieDetails from '../components/movieList_components/MovieDetails'
import Search from '../components/movieList_components/Search'

class List extends React.Component {
    
    constructor(props) {
        super(props)
        console.log("list props", props)
        this.state = {
            displayAllMovies: true,
            movie: "",
        }
    }

    displayOneMovie = (movie) => {
        this.setState({
            displayAllMovies: false,
            movie: movie
        })
    }

    handleSearch = (e) => {
        let searchTerm = e.target.value
    }

    render(){
        if (this.props.allMovies.length > 0) {
            let allMovies = this.props.allMovies.filter((movie) => {
                return movie.title.indexOf(this.props.search) !== -1;
            })
        }
        return(
            <div>
                <Search handleSearch={this.props.handleChange}/>
                <MovieCollection allMovies = {this.props.allMovies} handleClick = {this.displayOneMovie} />

                <MovieDetails displayOneMovie = {this.displayOneMovie} handleClick = {this.props.handleClick} movie= {this.state.movie} 
                />
            </div>
        )}


}

export default List;