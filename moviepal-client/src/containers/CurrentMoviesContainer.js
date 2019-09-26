import React, { Component } from 'react'
import Movie from '../components/Movie'

class CurrentMoviesContainer extends Component {
    
    // props: movieSearch, user

    render() {
        return (
            <div>
                Movies to watch
                <Movie />
            </div>
        )
    }
}

export default CurrentMoviesContainer 