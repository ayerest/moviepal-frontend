import React, { Component } from 'react'

// put this in a list form
const Movie = (props) => {
    const {movie, onClick} = props

    return(
        <div>
            <h2>{movie.title}</h2>
        </div>
    )

}

export default Movie