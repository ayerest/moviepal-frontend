import React, { Component } from 'react'
import MovieDetails from './MovieDetails'

class Movie extends Component {
    constructor(props) {
        super(props)
        console.log("made it down to movie")
        // debugger
    }
    render() {
        let { genres, title, summary, rating, movie_poster, runtime, stars, trailer } = this.props.movie

        return (
            <div>
                Movie
                <h2>Title: {title}</h2>
                <img src={movie_poster}></img>
                <p>{genres.join(", ")}</p>
                <p>Summary: {summary}</p>
                <ul>
                    <li>Rating: {rating}</li>
                    <li>Runtime: {runtime}</li>
                    <li>Starring: {stars}</li>
                    <li><a target="_blank" href={trailer}>Trailer</a></li>
                </ul>
            </div>
        )
    }
}

export default Movie