import React, { Component } from 'react'


const MovieDetails = (props) => {
    let {movie, onClick, displayOneMovie } = props


        return (
            <div>
                <h4>{movie.title}</h4>
                <div onClick = {() => displayOneMovie(movie)}>
                </div>
            </div>
        )
}

export default MovieDetails