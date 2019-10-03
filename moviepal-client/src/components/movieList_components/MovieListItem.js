import React, { Component } from 'react'
// import MovieDetails from './MovieDetails'

// put this in a list form
class MovieListItem extends Component {
    constructor(props) {
        super(props)
        // debugger
    }
    render() {
        const {movie, handleClick} = this.props
    
        return(
            <div className = "ui card"
            key = {movie.id}
            onClick = {()=> handleClick(movie)}>
                <div className="flex"><a>{movie.title}</a>
                {!!movie.likes[0].like ? <p>❤️</p> : null}
                {!!movie.likes[0].unlike ? <p>💩</p> : null}
                {!!movie.likes[0].to_watch ? <p>🎬</p> : null}
                </div>
            </div>
        )

    }

}

export default MovieListItem