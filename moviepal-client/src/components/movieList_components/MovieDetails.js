import React, { Component } from 'react'
import Trailer from './Trailer'


class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trailer: null
        }
    }

    showTrailer = (e) => {
        let button = e.target
        if (button.innerText === "Watch Trailer") {
            let trailer = e.target.value
        
            this.setState(prevState => {
                return {trailer: trailer}
            }, () => { button.innerText = "Hide Trailer"})
        } else {
            this.setState(prevState => {
                return { trailer: null }
            }, () => { button.innerText = "Watch Trailer" })
        }
    }
    
    render() {
        let { title, summary, rating, poster_img, runtime, stars, trailer, showtimes, genres } = this.props.movie
        // debugger
        return (
            <div className="ui-card">
                <h2>Title: {title}</h2>
                <img alt="poster for movie" src={poster_img}></img>
                {/* <p>{genres.join(", ")}</p> */}
                
                <button onClick={this.showTrailer} value={trailer}>Watch Trailer</button>
                {!!this.state.trailer ? <Trailer trailer={this.state.trailer}></Trailer> : null }
                <button name = "like-btn" onClick = {this.props.handleOnLike}> ❤️</button>
                <button name = "dislike-btn" onClick = {this.props.handleOnDisLike}> naw </button>
                <button name = "to-see-btn" onClick= {this.props.handleOnToSee}> ?! </button>

                <p>Summary: {summary}</p>
                <ul>
                    <li>Rating: {rating}</li>
                    <li>Runtime: {runtime}</li>
                    <li>Starring: {stars}</li>
                    {/* <li><a rel="noopener noreferrer" target="_blank" href={trailer}>Trailer</a></li> */}
                    
                </ul>
                <p><a rel="noopener noreferrer" target="_blank" href={showtimes}>Click for Showtimes</a></p>
                {/* <h3>Trailer</h3>
                <iframe src={trailer} allowFullScreen width="854" height="400"></iframe> */}

            </div>
        )
    }
}

export default MovieDetails