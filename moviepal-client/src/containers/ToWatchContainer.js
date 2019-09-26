import React, { Component } from 'react'
import Movie from '../components/Movie'

class ToWatchContainer extends Component {
    render() {
        return (
            <div>
                Movies to watch
                <Movie />
            </div>
        )
    }
}

export default ToWatchContainer