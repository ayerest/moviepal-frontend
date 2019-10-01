import React, { Component } from 'react'

class Movie extends Component {
    constructor(props) {
        super(props)
        console.log("made it down to movie")
    }
    render() {
        let { genres, title, summary, rating, movie_poster, runtime, stars, trailer } = this.props.movie

        return (
            <div>
                Movie
                <h2>Title: {title}</h2>
                <img alt="poster for movie" src={movie_poster}></img>
                <p>{genres.join(", ")}</p>
                <p>Summary: {summary}</p>
                <ul>
                    <li>Rating: {rating}</li>
                    <li>Runtime: {runtime}</li>
                    <li>Starring: {stars}</li>
                    <li><a rel="noopener noreferrer" target="_blank" href={trailer}>Trailer</a></li>
                </ul>
            </div>
        )
    }
}

export default Movie