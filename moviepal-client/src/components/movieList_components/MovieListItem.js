import React, { Component } from 'react'
import MovieDetails from './MovieDetails'

// put this in a list form
const Movie = (props) => {
    const {movie, handleClick} = props

    return(
        <div className = "ui card"
        key = {movie.id}
        onClick = {()=> handleClick(movie)}>
            {movie.title}
        </div>
    )

}

export default Movie