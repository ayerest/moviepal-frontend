import React, { Component } from 'react'


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        // debugger
    }
    render() {
        let { title, summary, rating, poster_img, runtime, stars, trailer } = this.props.movie
        // debugger
        return (
            <div class="ui-card">
                <h2>Title: {title}</h2>
                <img alt="poster for movie" src={poster_img}></img>
                {/* <p>{genres.join(", ")}</p> */}
                <button>❤️</button>
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

export default MovieDetails