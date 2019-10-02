import React, { Component } from 'react'
// import MovieDetails from './MovieDetails'

// put this in a list form
class MovieListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {movie, handleClick} = this.props
    
        return(
            <div className = "ui card"
            key = {movie.id}
            onClick = {()=> handleClick(movie)}>
                <a>{movie.title}</a>
            </div>
        )

    }

}

export default MovieListItem